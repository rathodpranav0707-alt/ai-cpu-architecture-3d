/**
 * AI-OPTIMIZED CPU ARCHITECTURE - ANIMATION & PARTICLE SYSTEM ENGINE
 * Manages data flow particles, exploded view lerping, thermal heatmaps, presentation pop-up components, and pipeline visualizer.
 */

import * as THREE from 'three';

export class AnimationEngine {
  constructor(scene, cpuBuilder) {
    this.scene = scene;
    this.cpuBuilder = cpuBuilder;

    this.isDataFlowActive = true;
    this.isExploded = false;
    this.isHeatmapActive = false;
    this.highlightedComponentId = null;
    this.presentationPopUpId = null;

    // Thermal Temperature Map (Celsius per component)
    this.temperatures = new Map();
    this.initTemperatures();

    // Particle pools
    this.particlesGroup = new THREE.Group();
    this.particlesGroup.name = 'PARTICLES_GROUP';
    this.scene.add(this.particlesGroup);

    this.particles = [];
    this.routes = [];

    // Pipeline Visualizer packet
    this.pipePacketGeo = new THREE.SphereGeometry(0.35, 16, 16);
    this.pipePacketMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    this.pipePacketMesh = new THREE.Mesh(this.pipePacketGeo, this.pipePacketMat);
    this.pipePacketMesh.visible = false;
    this.scene.add(this.pipePacketMesh);

    // Explode & Pop-up state targets
    this.initialPositions = new Map();
    this.recordInitialPositions();
    this.setupDataFlowRoutes();
    this.createParticlePool();
  }

  initTemperatures() {
    ['core1', 'core2', 'core3', 'core4', 'aiUnit', 'npu', 'cacheL1', 'cacheL2', 'cacheL3', 'alu', 'controlUnit', 'registers', 'fpu', 'powerUnit', 'memInterface', 'ioBus'].forEach(id => {
      this.temperatures.set(id, 35);
    });
  }

  updateThermalValues(workloadData) {
    if (!workloadData) return;

    if (workloadData.cores) {
      if (workloadData.cores.core1) this.temperatures.set('core1', 35 + parseInt(workloadData.cores.core1.load) * 0.5);
      if (workloadData.cores.core2) this.temperatures.set('core2', 35 + parseInt(workloadData.cores.core2.load) * 0.5);
      if (workloadData.cores.core3) this.temperatures.set('core3', 35 + parseInt(workloadData.cores.core3.load) * 0.5);
      if (workloadData.cores.core4) this.temperatures.set('core4', 35 + parseInt(workloadData.cores.core4.load) * 0.5);
    }

    if (workloadData.npuStatus === 'FULL ACCELERATION') {
      this.temperatures.set('npu', 82);
    } else {
      this.temperatures.set('npu', 40);
    }

    this.temperatures.set('aiUnit', workloadData.utilization > 50 ? 70 : 45);
    this.temperatures.set('alu', workloadData.utilization > 80 ? 80 : 50);
  }

  setPresentationPopUp(id) {
    this.presentationPopUpId = id;
    this.highlightedComponentId = id;
  }

  clearPresentationPopUp() {
    this.presentationPopUpId = null;
    this.highlightedComponentId = null;
    this.cpuBuilder.materialsMap.forEach((mat, key) => {
      const init = this.cpuBuilder.originalColorsMap.get(key);
      if (init) {
        mat.emissive.setHex(init.emissive);
        mat.emissiveIntensity = init.emissiveIntensity;
      }
    });
  }

  toggleThermalHeatmap(state) {
    this.isHeatmapActive = state !== undefined ? state : !this.isHeatmapActive;

    this.cpuBuilder.materialsMap.forEach((mat, id) => {
      const init = this.cpuBuilder.originalColorsMap.get(id);
      if (!init) return;

      if (this.isHeatmapActive) {
        const temp = this.temperatures.get(id) || 40;
        const factor = Math.min(Math.max((temp - 35) / 50, 0), 1);

        const coolColor = new THREE.Color(0x38bdf8);
        const hotColor = new THREE.Color(0xef4444);
        const heatColor = coolColor.lerp(hotColor, factor);

        mat.color.copy(heatColor);
        mat.emissive.copy(heatColor);
        mat.emissiveIntensity = 0.4 + factor * 0.4;
      } else {
        mat.color.setHex(init.color);
        mat.emissive.setHex(init.emissive);
        mat.emissiveIntensity = init.emissiveIntensity;
      }
    });

    return this.isHeatmapActive;
  }

  setPipelineTarget(targetId) {
    const obj = this.cpuBuilder.componentMap.get(targetId);
    if (!obj) {
      this.pipePacketMesh.visible = false;
      return;
    }

    const worldPos = new THREE.Vector3();
    obj.getWorldPosition(worldPos);
    worldPos.y += 0.9;

    this.pipePacketMesh.position.copy(worldPos);
    this.pipePacketMesh.visible = true;
  }

  recordInitialPositions() {
    this.cpuBuilder.componentsGroup.traverse(child => {
      if (child.isMesh || child.isGroup) {
        this.initialPositions.set(child, {
          y: child.position.y,
          explodeGroup: child.userData.explodeGroup || 0
        });
      }
    });
  }

  /**
   * Data Flow Routes aligned with reference diagram positions
   */
  setupDataFlowRoutes() {
    // 1. Memory Interface -> L3 Cache -> Core 1
    this.routes.push({
      color: 0x38bdf8,
      size: 0.12,
      points: [
        new THREE.Vector3(3.6, 1.0, 3.6),
        new THREE.Vector3(1.0, 1.0, -2.6),
        new THREE.Vector3(-5.8, 1.1, -5.8)
      ]
    });

    // 2. Control Unit -> Registers -> Core 1
    this.routes.push({
      color: 0x10b981,
      size: 0.12,
      points: [
        new THREE.Vector3(-5.2, 1.0, 2.4),
        new THREE.Vector3(-5.2, 1.0, 5.0),
        new THREE.Vector3(-5.8, 1.0, -5.8)
      ]
    });

    // 3. AI Optimization Unit -> NPU (AI Workload Flow)
    this.routes.push({
      color: 0xf59e0b,
      size: 0.15,
      points: [
        new THREE.Vector3(-0.5, 1.4, 0.5),
        new THREE.Vector3(4.8, 1.3, 0.5),
        new THREE.Vector3(-5.8, 1.2, -5.8)
      ]
    });

    // 4. AI Optimization Unit -> Power Management Unit
    this.routes.push({
      color: 0x06b6d4,
      size: 0.12,
      points: [
        new THREE.Vector3(-0.5, 1.4, 0.5),
        new THREE.Vector3(-1.0, 1.1, 4.8)
      ]
    });
  }

  createParticlePool() {
    const particleGeo = new THREE.SphereGeometry(1, 8, 8);

    this.routes.forEach(route => {
      const mat = new THREE.MeshBasicMaterial({
        color: route.color,
        transparent: true,
        opacity: 0.95
      });

      const curve = new THREE.CatmullRomCurve3(route.points);

      for (let i = 0; i < 12; i++) {
        const mesh = new THREE.Mesh(particleGeo, mat);
        mesh.scale.setScalar(route.size);

        this.particlesGroup.add(mesh);
        this.particles.push({
          mesh: mesh,
          curve: curve,
          progress: i / 12,
          speed: 0.004 + Math.random() * 0.002
        });
      }
    });
  }

  toggleDataFlow(state) {
    this.isDataFlowActive = state !== undefined ? state : !this.isDataFlowActive;
    this.particlesGroup.visible = this.isDataFlowActive;
    return this.isDataFlowActive;
  }

  setExploded(state) {
    this.isExploded = state;
  }

  update(delta) {
    const time = performance.now() * 0.003;

    if (this.isDataFlowActive) {
      this.particles.forEach(p => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const pos = p.curve.getPoint(p.progress);
        p.mesh.position.copy(pos);
      });
    }

    if (this.highlightedComponentId && !this.isHeatmapActive) {
      const mat = this.cpuBuilder.materialsMap.get(this.highlightedComponentId);
      if (mat) {
        const pulse = 0.5 + Math.sin(time * 6) * 0.4;
        mat.emissive.setHex(0xfbbf24);
        mat.emissiveIntensity = pulse;
      }
    }

    if (this.pipePacketMesh.visible) {
      const scale = 1 + Math.sin(time * 4) * 0.25;
      this.pipePacketMesh.scale.setScalar(scale);
    }

    this.initialPositions.forEach((init, obj) => {
      let targetY = init.y;

      let isPopUpTarget = false;
      if (this.presentationPopUpId) {
        if (obj.userData && obj.userData.id === this.presentationPopUpId) {
          isPopUpTarget = true;
        } else if (obj.parent && obj.parent.userData && obj.parent.userData.id === this.presentationPopUpId) {
          isPopUpTarget = true;
        }
      }

      if (isPopUpTarget) {
        targetY = init.y + 2.2;
      } else if (this.isExploded) {
        switch (init.explodeGroup) {
          case 1: targetY = init.y + 0.8; break;
          case 2: targetY = init.y + 2.2; break;
          case 3: targetY = init.y + 3.8; break;
          default: targetY = init.y; break;
        }
      }

      obj.position.y += (targetY - obj.position.y) * 0.1;
    });
  }
}
