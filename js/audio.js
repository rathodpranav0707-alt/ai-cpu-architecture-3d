/**
 * AI-OPTIMIZED CPU ARCHITECTURE - WEB AUDIO API SFX ENGINE
 * Zero-dependency synthesized sci-fi sound effects for interactive UI feedback.
 */

export class AudioEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.humOsc = null;
    this.humGain = null;
  }

  /**
   * Lazy initialize AudioContext on first user interaction
   */
  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Toggle Sound Effects ON / OFF
   */
  toggleSound(state) {
    this.enabled = state !== undefined ? state : !this.enabled;
    if (!this.enabled && this.humGain) {
      this.humGain.gain.setValueAtTime(0, this.ctx ? this.ctx.currentTime : 0);
    }
    return this.enabled;
  }

  /**
   * Play UI Button Click Sound Tone
   */
  playClick() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // Audio context error fallback
    }
  }

  /**
   * Play Futuristic Mode Switch Frequency Sweep Tone
   */
  playModeSwitch() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {
      // Audio context fallback
    }
  }

  /**
   * Start or update AI Workload Ambient Energy Hum
   */
  updateHum(isAIWorkload) {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      if (isAIWorkload) {
        if (!this.humOsc) {
          this.humOsc = this.ctx.createOscillator();
          this.humGain = this.ctx.createGain();

          this.humOsc.type = 'sawtooth';
          this.humOsc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A hum

          // Lowpass filter for smooth sci-fi drone
          const filter = this.ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(120, this.ctx.currentTime);

          this.humGain.gain.setValueAtTime(0.02, this.ctx.currentTime);

          this.humOsc.connect(filter);
          filter.connect(this.humGain);
          this.humGain.connect(this.ctx.destination);

          this.humOsc.start();
        } else {
          this.humGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
        }
      } else if (this.humGain) {
        this.humGain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    } catch (e) {
      // Audio fallback
    }
  }
}
