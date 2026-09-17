/**
 * AI-OPTIMIZED CPU ARCHITECTURE - CONTROLS & CAMERA ENGINE
 * OrbitControls, floating label 2D screen projections, mouse hover tooltips, and presentation step choreography.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PRESENTATION_STEPS, COMPONENTS_DATA, PIPELINE_SEQUENCES } from './components.js';

export class ControlsManager {
  constructor(camera, renderer, scene, cpuBuilder) {
    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;
    this.cpuBuilder = cpuBuilder;

    // OrbitControls
    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.02;
    this.controls.minDistance = 6;
    this.controls.maxDistance = 45;

    // Default isometric camera target
    this.defaultCameraPos = new THREE.Vector3(18, 14, 18);
    this.defaultTargetPos = new THREE.Vector3(0, 0.5, 0);

    // Presentation & Pipeline state
    this.currentStep = 0;
    this.isPresentationActive = false;
    this.isPipelineActive = false;
    this.currentPipeSeq = 'ADD';
    this.currentPipeStepIndex = 0;
    this.showLabels = true;
    this.highlightedComponentId = null;
    this.activeSelectedId = null;

    // Label & Tooltip DOM elements
    this.labelsContainer = document.getElementById('labels-container');
    this.hoverTooltip = document.getElementById('hover-tooltip');
    this.labelElements = new Map();
    this.createFloatingLabels();

    // Mouse Hover Raycasting setup
    this.hoverRaycaster = new THREE.Raycaster();
    this.hoverMouse = new THREE.Vector2();
    this.bindHoverEvents();
  }

  bindHoverEvents() {
    this.renderer.domElement.addEventListener('mousemove', (e) => {
      this.hoverMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.hoverMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      this.hoverRaycaster.setFromCamera(this.hoverMouse, this.camera);
      const intersects = this.hoverRaycaster.intersectObjects(this.cpuBuilder.interactiveObjects, true);

      if (intersects.length > 0 && this.hoverTooltip) {
        let hitObj = intersects[0].object;
        while (hitObj && !hitObj.userData.id && hitObj.parent) {
          hitObj = hitObj.parent;
        }

        if (hitObj && hitObj.userData.id) {
          const comp = COMPONENTS_DATA[hitObj.userData.id];
          if (comp) {
            const nameEl = document.getElementById('tooltip-name');
            const specsEl = document.getElementById('tooltip-specs');

            if (nameEl) nameEl.innerText = comp.name;
            if (specsEl) specsEl.innerText = comp.specs || comp.role;

            this.hoverTooltip.style.left = `${e.clientX}px`;
            this.hoverTooltip.style.top = `${e.clientY}px`;
            this.hoverTooltip.classList.add('visible');
            return;
          }
        }
      }

      if (this.hoverTooltip) {
        this.hoverTooltip.classList.remove('visible');
      }
    });
  }

  createFloatingLabels() {
    if (!this.labelsContainer) return;
    this.labelsContainer.innerHTML = '';

    const labelTargets = [
      { id: 'core1', text: 'CORE 1' },
      { id: 'core2', text: 'CORE 2' },
      { id: 'core3', text: 'CORE 3' },
      { id: 'core4', text: 'CORE 4' },
      { id: 'aiUnit', text: 'AI OPTIMIZATION UNIT' },
      { id: 'npu', text: 'NPU' },
      { id: 'cacheL1', text: 'L1 CACHE' },
      { id: 'cacheL2', text: 'L2 CACHE' },
      { id: 'cacheL3', text: 'SHARED L3 CACHE' },
      { id: 'fpu', text: 'FPU' },
      { id: 'controlUnit', text: 'CONTROL UNIT' },
      { id: 'registers', text: 'REGISTERS' },
      { id: 'powerUnit', text: 'POWER MGMT' },
      { id: 'memInterface', text: 'MEMORY INTERFACE' },
      { id: 'ioBus', text: 'I/O & BUS' }
    ];

    labelTargets.forEach(target => {
      const div = document.createElement('div');
      div.className = 'component-label';
      div.innerText = target.text;
      div.setAttribute('data-id', target.id);

      div.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onLabelClick(target.id);
      });

      this.labelsContainer.appendChild(div);
      this.labelElements.set(target.id, div);
    });
  }

  updateLabels() {
    if (!this.showLabels) return;

    const canvasWidth = this.renderer.domElement.clientWidth;
    const canvasHeight = this.renderer.domElement.clientHeight;

    this.labelElements.forEach((el, id) => {
      const obj = this.cpuBuilder.componentMap.get(id);
      if (!obj) return;

      const worldPos = new THREE.Vector3();
      obj.getWorldPosition(worldPos);
      worldPos.y += 0.8;

      const screenPos = worldPos.clone().project(this.camera);

      if (screenPos.z > 1) {
        el.style.display = 'none';
        return;
      }

      const x = (screenPos.x * 0.5 + 0.5) * canvasWidth;
      const y = (-(screenPos.y * 0.5) + 0.5) * canvasHeight;

      el.style.display = 'block';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      if (id === this.highlightedComponentId) {
        el.classList.add('highlighted');
      } else {
        el.classList.remove('highlighted');
      }
    });
  }

  onLabelClick(id) {
    if (window.appMain && window.appMain.selectComponentById) {
      window.appMain.selectComponentById(id);
    }
  }

  toggleLabels(state) {
    this.showLabels = state !== undefined ? state : !this.showLabels;
    this.labelElements.forEach(el => {
      if (this.showLabels) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
    return this.showLabels;
  }

  resetCamera() {
    this.animateCameraTo(this.defaultCameraPos, this.defaultTargetPos);
  }

  animateCameraTo(targetCamPos, targetLookAt, duration = 1000) {
    const startCamPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2;

      this.camera.position.lerpVectors(startCamPos, targetCamPos, ease);
      this.controls.target.lerpVectors(startTarget, targetLookAt, ease);
      this.controls.update();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }

  startPipelineVisualizer(seqKey = 'ADD') {
    this.isPipelineActive = true;
    this.currentPipeSeq = seqKey;
    this.currentPipeStepIndex = 0;
    this.showPipelineStep(0);
  }

  stopPipelineVisualizer() {
    this.isPipelineActive = false;
    const pipeBar = document.getElementById('pipeline-bar');
    if (pipeBar) pipeBar.classList.remove('active');
    if (window.appMain && window.appMain.animationEngine) {
      window.appMain.animationEngine.setPipelineTarget(null);
    }
  }

  nextPipelineStep() {
    const seq = PIPELINE_SEQUENCES[this.currentPipeSeq];
    if (seq && this.currentPipeStepIndex < seq.steps.length - 1) {
      this.currentPipeStepIndex++;
      this.showPipelineStep(this.currentPipeStepIndex);
    }
  }

  prevPipelineStep() {
    if (this.currentPipeStepIndex > 0) {
      this.currentPipeStepIndex--;
      this.showPipelineStep(this.currentPipeStepIndex);
    }
  }

  showPipelineStep(index) {
    const seq = PIPELINE_SEQUENCES[this.currentPipeSeq];
    if (!seq || !seq.steps[index]) return;

    const stepData = seq.steps[index];
    const pipeBar = document.getElementById('pipeline-bar');
    const badgeEl = document.getElementById('pipe-step-badge');
    const titleEl = document.getElementById('pipe-title');
    const descEl = document.getElementById('pipe-desc');

    if (pipeBar) pipeBar.classList.add('active');
    if (badgeEl) badgeEl.innerText = `${stepData.stage} (${index + 1}/${seq.steps.length})`;
    if (titleEl) titleEl.innerText = seq.title;
    if (descEl) descEl.innerText = stepData.desc;

    if (window.appMain && window.appMain.animationEngine) {
      window.appMain.animationEngine.setPipelineTarget(stepData.target);
    }
    if (window.appMain && window.appMain.selectComponentById) {
      window.appMain.selectComponentById(stepData.target);
    }
  }

  startPresentation() {
    this.isPresentationActive = true;
    this.currentStep = 0;

    const btnPres = document.getElementById('btn-pres-mode');
    if (btnPres) btnPres.classList.add('active');

    this.showPresentationStep(0);
  }

  stopPresentation() {
    this.isPresentationActive = false;
    this.highlightedComponentId = null;

    const btnPres = document.getElementById('btn-pres-mode');
    if (btnPres) btnPres.classList.remove('active');

    const presBar = document.getElementById('presentation-bar');
    if (presBar) presBar.classList.remove('active');

    if (window.appMain && window.appMain.animationEngine) {
      window.appMain.animationEngine.clearPresentationPopUp();
    }

    this.resetCamera();
  }

  nextPresentationStep() {
    if (this.currentStep < PRESENTATION_STEPS.length - 1) {
      this.currentStep++;
      this.showPresentationStep(this.currentStep);
    }
  }

  prevPresentationStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.showPresentationStep(this.currentStep);
    }
  }

  showPresentationStep(index) {
    const stepData = PRESENTATION_STEPS[index];
    if (!stepData) return;

    this.highlightedComponentId = stepData.target;

    const presBar = document.getElementById('presentation-bar');
    const badgeEl = document.getElementById('pres-step-badge');
    const titleEl = document.getElementById('pres-title');
    const textEl = document.getElementById('pres-text');
    const prevBtn = document.getElementById('btn-pres-prev');
    const nextBtn = document.getElementById('btn-pres-next');

    if (presBar) presBar.classList.add('active');
    if (badgeEl) badgeEl.innerText = `STEP ${stepData.step} / ${PRESENTATION_STEPS.length}`;
    if (titleEl) titleEl.innerText = stepData.title;
    if (textEl) textEl.innerText = stepData.text;

    if (prevBtn) prevBtn.disabled = (index === 0);
    if (nextBtn) nextBtn.disabled = (index === PRESENTATION_STEPS.length - 1);

    if (window.appMain && window.appMain.animationEngine) {
      window.appMain.animationEngine.setPresentationPopUp(stepData.target);
    }

    const targetObj = this.cpuBuilder.componentMap.get(stepData.target);
    if (targetObj) {
      const worldPos = new THREE.Vector3();
      targetObj.getWorldPosition(worldPos);

      const targetCamPos = worldPos.clone().add(new THREE.Vector3(8, 7, 8));
      this.animateCameraTo(targetCamPos, worldPos);

      if (window.appMain && window.appMain.selectComponentById) {
        window.appMain.selectComponentById(stepData.target);
      }
    }
  }

  updateInfoCardPosition() {
    const infoCard = document.getElementById('info-card');
    if (!infoCard || !infoCard.classList.contains('visible') || !this.activeSelectedId) return;

    const targetObj = this.cpuBuilder.componentMap.get(this.activeSelectedId);
    if (!targetObj) return;

    const worldPos = new THREE.Vector3();
    targetObj.getWorldPosition(worldPos);

    const screenPos = worldPos.clone().project(this.camera);

    if (screenPos.z > 1) return;

    const canvasWidth = this.renderer.domElement.clientWidth;
    const canvasHeight = this.renderer.domElement.clientHeight;

    const screenX = (screenPos.x * 0.5 + 0.5) * canvasWidth;
    const screenY = (-(screenPos.y * 0.5) + 0.5) * canvasHeight;

    const cardWidth = infoCard.offsetWidth || 340;
    const cardHeight = infoCard.offsetHeight || 260;

    let targetLeft = screenX + 25;
    if (targetLeft + cardWidth > window.innerWidth - 20) {
      targetLeft = Math.max(20, screenX - cardWidth - 25);
    } else {
      targetLeft = Math.max(20, targetLeft);
    }

    let targetTop = screenY - (cardHeight / 2);
    targetTop = Math.min(Math.max(targetTop, 75), window.innerHeight - cardHeight - 20);

    infoCard.style.left = `${targetLeft}px`;
    infoCard.style.top = `${targetTop}px`;
  }

  update() {
    this.controls.update();
    this.updateLabels();
    this.updateInfoCardPosition();
  }
}
