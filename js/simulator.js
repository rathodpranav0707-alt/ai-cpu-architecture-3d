/**
 * AI-OPTIMIZED CPU ARCHITECTURE - WORKLOAD SIMULATOR
 * Manages workload preset states, syncs 3D mesh materials, and renders HTML5 live canvas telemetry graphs.
 */

export class WorkloadSimulator {
  constructor(cpuBuilder, animationEngine) {
    this.cpuBuilder = cpuBuilder;
    this.animationEngine = animationEngine;
    this.currentPreset = 'LOW';

    // Telemetry Canvas Chart data buffer
    this.chartCanvas = document.getElementById('telemetry-chart');
    this.chartCtx = this.chartCanvas ? this.chartCanvas.getContext('2d') : null;
    this.historyLength = 40;
    this.powerHistory = new Array(this.historyLength).fill(45);
    this.freqHistory = new Array(this.historyLength).fill(2.4);

    this.presets = {
      LOW: {
        label: 'LOW WORKLOAD',
        utilization: 25,
        activeCores: '1 / 4',
        npuStatus: 'IDLE',
        npuClass: 'stat-value',
        cacheStatus: 'OPTIMIZED',
        powerMode: 'ECO MODE',
        aiOptStatus: 'STANDBY',
        powerWatts: 45,
        freqGHz: 2.4,
        cores: {
          core1: { status: 'ACTIVE', load: '70%', emissive: 0x3b82f6, intensity: 0.6 },
          core2: { status: 'IDLE', load: '10%', emissive: 0x1e293b, intensity: 0.1 },
          core3: { status: 'SLEEP', load: '0%', emissive: 0x0f172a, intensity: 0.0 },
          core4: { status: 'SLEEP', load: '0%', emissive: 0x0f172a, intensity: 0.0 }
        },
        npuMat: { color: 0x991b1b, intensity: 0.1 },
        aiMat: { intensity: 0.2 }
      },
      MEDIUM: {
        label: 'MEDIUM WORKLOAD',
        utilization: 45,
        activeCores: '2 / 4',
        npuStatus: 'STANDBY',
        npuClass: 'stat-value',
        cacheStatus: 'BALANCED',
        powerMode: 'BALANCED',
        aiOptStatus: 'ACTIVE',
        powerWatts: 85,
        freqGHz: 3.6,
        cores: {
          core1: { status: 'ACTIVE', load: '85%', emissive: 0x3b82f6, intensity: 0.8 },
          core2: { status: 'ACTIVE', load: '65%', emissive: 0x3b82f6, intensity: 0.6 },
          core3: { status: 'IDLE', load: '15%', emissive: 0x1e293b, intensity: 0.1 },
          core4: { status: 'SLEEP', load: '0%', emissive: 0x0f172a, intensity: 0.0 }
        },
        npuMat: { color: 0x991b1b, intensity: 0.2 },
        aiMat: { intensity: 0.4 }
      },
      HIGH: {
        label: 'HIGH WORKLOAD',
        utilization: 92,
        activeCores: '4 / 4',
        npuStatus: 'STANDBY',
        npuClass: 'stat-value high',
        cacheStatus: 'HIGH LOAD',
        powerMode: 'PERFORMANCE',
        aiOptStatus: 'MAX DYNAMIC',
        powerWatts: 220,
        freqGHz: 4.8,
        cores: {
          core1: { status: 'ACTIVE', load: '96%', emissive: 0xef4444, intensity: 0.9 },
          core2: { status: 'ACTIVE', load: '94%', emissive: 0xef4444, intensity: 0.9 },
          core3: { status: 'ACTIVE', load: '90%', emissive: 0xf59e0b, intensity: 0.8 },
          core4: { status: 'ACTIVE', load: '88%', emissive: 0xf59e0b, intensity: 0.8 }
        },
        npuMat: { color: 0x991b1b, intensity: 0.3 },
        aiMat: { intensity: 0.8 }
      },
      AI: {
        label: 'AI WORKLOAD',
        utilization: 68,
        activeCores: '2 / 4 + NPU',
        npuStatus: 'FULL ACCELERATION',
        npuClass: 'stat-value active',
        cacheStatus: 'OPTIMIZED',
        powerMode: 'DYNAMIC AI',
        powerWatts: 120,
        freqGHz: 4.2,
        aiOptStatus: 'OPTIMIZED',
        cores: {
          core1: { status: 'ACTIVE', load: '45%', emissive: 0x38bdf8, intensity: 0.6 },
          core2: { status: 'ACTIVE', load: '40%', emissive: 0x38bdf8, intensity: 0.5 },
          core3: { status: 'IDLE', load: '10%', emissive: 0x1e293b, intensity: 0.1 },
          core4: { status: 'SLEEP', load: '0%', emissive: 0x0f172a, intensity: 0.0 }
        },
        npuMat: { color: 0xef4444, intensity: 0.95 },
        aiMat: { intensity: 1.0 }
      }
    };
  }

  /**
   * Apply a workload preset
   */
  setPreset(presetKey) {
    if (!this.presets[presetKey]) return;
    this.currentPreset = presetKey;
    const p = this.presets[presetKey];

    // Update 3D Materials
    Object.keys(p.cores).forEach(coreId => {
      const mat = this.cpuBuilder.materialsMap.get(coreId);
      if (mat) {
        mat.emissive.setHex(p.cores[coreId].emissive);
        mat.emissiveIntensity = p.cores[coreId].intensity;
      }
    });

    const npuMat = this.cpuBuilder.materialsMap.get('npu');
    if (npuMat) {
      npuMat.emissiveIntensity = p.npuMat.intensity;
    }

    const aiMat = this.cpuBuilder.materialsMap.get('aiUnit');
    if (aiMat) {
      aiMat.emissiveIntensity = p.aiMat.intensity;
    }

    // Sync Thermal values if Heatmap is active
    if (this.animationEngine) {
      this.animationEngine.updateThermalValues(p);
      if (this.animationEngine.isHeatmapActive) {
        this.animationEngine.toggleThermalHeatmap(true);
      }
    }

    // Sync DOM Statistics Dashboard
    this.updateDashboardUI(p);
  }

  /**
   * Update Left Side Statistics Dashboard HTML & Telemetry Canvas Chart
   */
  updateDashboardUI(p) {
    const utilEl = document.getElementById('stat-utilization');
    const coresEl = document.getElementById('stat-cores');
    const npuEl = document.getElementById('stat-npu');
    const cacheEl = document.getElementById('stat-cache');
    const powerEl = document.getElementById('stat-power');
    const aiOptEl = document.getElementById('stat-ai-opt');
    const workEl = document.getElementById('stat-workload');
    const barEl = document.getElementById('util-bar');

    if (utilEl) utilEl.innerText = `${p.utilization}%`;
    if (coresEl) coresEl.innerText = p.activeCores;
    if (npuEl) {
      npuEl.innerText = p.npuStatus;
      npuEl.className = p.npuClass;
    }
    if (cacheEl) cacheEl.innerText = p.cacheStatus;
    if (powerEl) powerEl.innerText = p.powerMode;
    if (aiOptEl) aiOptEl.innerText = p.aiOptStatus;
    if (workEl) workEl.innerText = p.label;
    if (barEl) barEl.style.width = `${p.utilization}%`;
  }

  /**
   * Render real-time scrolling HTML5 canvas telemetry chart
   */
  renderTelemetryChart() {
    if (!this.chartCtx || !this.chartCanvas) return;

    const p = this.presets[this.currentPreset];
    const targetWatts = p ? p.powerWatts : 45;

    // Shift data buffer and add noise for live telemetry feel
    this.powerHistory.shift();
    const noise = (Math.random() - 0.5) * 6;
    this.powerHistory.push(Math.max(20, targetWatts + noise));

    const width = this.chartCanvas.clientWidth;
    const height = this.chartCanvas.clientHeight;
    this.chartCanvas.width = width;
    this.chartCanvas.height = height;

    const ctx = this.chartCtx;
    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    // Plot Power Watts Line (Cyan)
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    ctx.beginPath();

    const stepX = width / (this.historyLength - 1);
    this.powerHistory.forEach((val, i) => {
      let x = i * stepX;
      let y = height - (val / 250) * height * 0.85 - 4;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
}
