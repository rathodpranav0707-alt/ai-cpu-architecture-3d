/**
 * AI-OPTIMIZED CPU ARCHITECTURE - PHYSICAL METALLIC 3D MODEL GENERATOR
 * Replicates the exact physical brushed metal / anodized aluminum rendering with ultra-high contrast, 100% opaque surface labels.
 */

import * as THREE from 'three';

export class CPUModelBuilder {
  constructor(scene) {
    this.scene = scene;
    this.componentsGroup = new THREE.Group();
    this.componentsGroup.name = 'CPU_PACKAGE_GROUP';
    this.scene.add(this.componentsGroup);

    this.interactiveObjects = [];
    this.componentMap = new Map();
    this.materialsMap = new Map();
    this.originalColorsMap = new Map();

    // Pre-render procedural textures with 100% opaque high-contrast white text
    this.dieTexture = this.createSiliconDieTexture();
    this.coreTextures = [
      this.createCoreTexture('CORE 1'),
      this.createCoreTexture('CORE 2'),
      this.createCoreTexture('CORE 3'),
      this.createCoreTexture('CORE 4')
    ];
    this.cacheTextures = {
      L1: this.createLabeledBlockTexture('L1 CACHE', '(Per Core)', '#d97706'),
      L2: this.createLabeledBlockTexture('L2 CACHE', '(Per Core)', '#b45309'),
      L3: this.createLabeledBlockTexture('L3 CACHE', '(Shared)', '#78350f')
    };
    this.fpuTexture = this.createIconBlockTexture('FPU', '(Floating Point Unit)', 'waveform', '#059669');
    this.aiTexture = this.createIconBlockTexture('AI OPTIMIZATION', 'UNIT', 'brain', '#b45309');
    this.npuTexture = this.createIconBlockTexture('NPU', '(Neural Processing Unit)', 'network', '#dc2626');
    this.cuTexture = this.createIconBlockTexture('CONTROL', 'UNIT', 'chip', '#334155');
    this.regTexture = this.createIconBlockTexture('REGISTERS', '', 'database', '#1e293b');
    this.pmuTexture = this.createIconBlockTexture('POWER', 'MANAGEMENT UNIT', 'bolt', '#0d9488');
    this.memTexture = this.createIconBlockTexture('MEMORY', 'INTERFACE', 'arrows', '#0284c7');
    this.ioTexture = this.createIconBlockTexture('I/O & BUS', 'INTERFACE', 'bus', '#475569');
  }

  createSiliconDieTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0c1017';
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = 'rgba(100, 116, 139, 0.25)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 512; i += 16) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
    }
    return new THREE.CanvasTexture(canvas);
  }

  /**
   * Procedural Core Canvas Texture with ultra-vibrant 100% opaque white text & dark drop shadows
   */
  createCoreTexture(coreName) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Solid blue background
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 16;
    ctx.strokeRect(16, 16, 480, 480);

    // High Contrast Text Shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 4;

    // Core Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(coreName, 256, 110);

    // Reset shadow for sub-blocks
    ctx.shadowBlur = 4;

    // Sub-block 1: ALU (Green)
    ctx.fillStyle = '#059669';
    ctx.fillRect(40, 190, 200, 120);
    ctx.strokeStyle = '#6ee7b7'; ctx.lineWidth = 4; ctx.strokeRect(40, 190, 200, 120);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 40px sans-serif'; ctx.fillText('ALU', 140, 264);

    // Sub-block 2: REGS (Blue)
    ctx.fillStyle = '#1d4ed8';
    ctx.fillRect(272, 190, 200, 120);
    ctx.strokeStyle = '#93c5fd'; ctx.lineWidth = 4; ctx.strokeRect(272, 190, 200, 120);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 40px sans-serif'; ctx.fillText('REGS', 372, 264);

    // Sub-block 3: CTRL (Purple)
    ctx.fillStyle = '#7e22ce';
    ctx.fillRect(40, 340, 432, 120);
    ctx.strokeStyle = '#c084fc'; ctx.lineWidth = 4; ctx.strokeRect(40, 340, 432, 120);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 40px sans-serif'; ctx.fillText('CTRL', 256, 414);

    return new THREE.CanvasTexture(canvas);
  }

  /**
   * Procedural Labeled Cache Texture (100% Opaque High-Contrast Text)
   */
  createLabeledBlockTexture(title, subtitle, accentColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = accentColor;
    ctx.fillRect(0, 0, 512, 256);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 12;
    ctx.strokeRect(12, 12, 488, 232);

    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 4;

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, 256, 115);

    if (subtitle) {
      ctx.font = 'bold 36px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(subtitle, 256, 185);
    }
    return new THREE.CanvasTexture(canvas);
  }

  /**
   * Procedural Icon Block Texture (100% Opaque High-Contrast Text & Symbols)
   */
  createIconBlockTexture(title, subtitle, iconType, bgColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 16;
    ctx.strokeRect(16, 16, 480, 480);

    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 4;

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 50px sans-serif';
    ctx.textAlign = 'center';

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 6;
    if (iconType === 'brain') {
      ctx.beginPath(); ctx.arc(256, 150, 52, 0, Math.PI * 2); ctx.stroke();
      ctx.font = 'bold 44px sans-serif';
      ctx.fillText('AI', 256, 166);
    } else if (iconType === 'network') {
      ctx.beginPath(); ctx.arc(256, 150, 48, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(226, 150); ctx.lineTo(256, 120); ctx.lineTo(286, 150); ctx.lineTo(256, 180); ctx.closePath();
      ctx.stroke();
      ctx.beginPath(); ctx.arc(256, 150, 8, 0, Math.PI * 2); ctx.fill();
    } else if (iconType === 'bolt') {
      ctx.beginPath();
      ctx.moveTo(264, 110); ctx.lineTo(236, 154); ctx.lineTo(256, 154);
      ctx.lineTo(248, 194); ctx.lineTo(276, 146); ctx.lineTo(256, 146);
      ctx.closePath();
      ctx.fill();
    } else if (iconType === 'chip') {
      ctx.strokeRect(216, 116, 80, 80);
      ctx.fillRect(236, 136, 40, 40);
    } else if (iconType === 'database') {
      ctx.beginPath(); ctx.ellipse(256, 130, 48, 16, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(256, 155, 48, 16, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(256, 180, 48, 16, 0, 0, Math.PI * 2); ctx.stroke();
    } else if (iconType === 'arrows') {
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(216, 150); ctx.lineTo(296, 150);
      ctx.moveTo(236, 130); ctx.lineTo(216, 150); ctx.lineTo(236, 170);
      ctx.moveTo(276, 130); ctx.lineTo(296, 150); ctx.lineTo(276, 170);
      ctx.stroke();
    } else if (iconType === 'waveform') {
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(206, 160); ctx.lineTo(231, 125); ctx.lineTo(256, 175); ctx.lineTo(281, 135); ctx.lineTo(306, 160);
      ctx.stroke();
    } else {
      ctx.strokeRect(216, 120, 80, 56);
      ctx.fillRect(236, 180, 40, 8);
    }

    ctx.font = 'bold 50px sans-serif';
    ctx.fillText(title, 256, 310);
    if (subtitle) {
      ctx.font = 'bold 38px sans-serif';
      ctx.fillText(subtitle, 256, 390);
    }

    return new THREE.CanvasTexture(canvas);
  }

  registerMaterial(id, mat) {
    this.materialsMap.set(id, mat);
    this.originalColorsMap.set(id, {
      color: mat.color.getHex(),
      emissive: mat.emissive ? mat.emissive.getHex() : 0x000000,
      emissiveIntensity: mat.emissiveIntensity || 0
    });
  }

  build() {
    this.createPackageSubstrate();
    this.createSiliconDie();
    this.createCores();
    this.createCacheHierarchy();
    this.createFPU();
    this.createAIOptimizationUnit();
    this.createNPU();
    this.createControlUnitAndRegisters();
    this.createPowerManagementUnit();
    this.createMemoryAndIOInterface();
    this.createEtchedCopperTraces();

    return {
      group: this.componentsGroup,
      interactiveObjects: this.interactiveObjects,
      componentMap: this.componentMap
    };
  }

  createPackageSubstrate() {
    const pkgGeo = new THREE.BoxGeometry(17.0, 0.4, 17.0);
    const pkgMat = new THREE.MeshStandardMaterial({ color: 0x0f2b1d, roughness: 0.4, metalness: 0.4 });
    const packageMesh = new THREE.Mesh(pkgGeo, pkgMat);
    packageMesh.position.set(0, -0.2, 0);
    packageMesh.userData = { id: 'package', name: 'CPU Package & Substrate', explodeGroup: 0 };
    packageMesh.receiveShadow = true;
    packageMesh.castShadow = true;

    this.componentsGroup.add(packageMesh);
    this.interactiveObjects.push(packageMesh);
    this.componentMap.set('package', packageMesh);
    this.registerMaterial('package', pkgMat);

    const pinMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.95, roughness: 0.15 });
    const pinGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.35, 8);

    for (let i = -8.1; i <= 8.1; i += 0.7) {
      [-8.2, 8.2].forEach(z => {
        const pin1 = new THREE.Mesh(pinGeo, pinMat); pin1.position.set(i, -0.4, z); this.componentsGroup.add(pin1);
        const pin2 = new THREE.Mesh(pinGeo, pinMat); pin2.position.set(z, -0.4, i); this.componentsGroup.add(pin2);
      });
    }

    const frameGeo = new THREE.BoxGeometry(15.8, 0.25, 15.8);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.25 });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    frameMesh.position.set(0, 0.1, 0);
    this.componentsGroup.add(frameMesh);

    const screwHeadGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.12, 16);
    const screwSlotGeo = new THREE.BoxGeometry(0.32, 0.05, 0.05);
    const screwMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.2 });

    [[-6.8, -6.8], [6.8, -6.8], [-6.8, 6.8], [6.8, 6.8]].forEach(pos => {
      const screwGroup = new THREE.Group();
      screwGroup.position.set(pos[0], 0.24, pos[1]);

      const head = new THREE.Mesh(screwHeadGeo, screwMat);
      screwGroup.add(head);

      const slot1 = new THREE.Mesh(screwSlotGeo, new THREE.MeshBasicMaterial({ color: 0x0f172a }));
      slot1.position.y = 0.04;
      screwGroup.add(slot1);

      const slot2 = new THREE.Mesh(screwSlotGeo, new THREE.MeshBasicMaterial({ color: 0x0f172a }));
      slot2.position.y = 0.04;
      slot2.rotation.y = Math.PI / 2;
      screwGroup.add(slot2);

      this.componentsGroup.add(screwGroup);
    });
  }

  createSiliconDie() {
    const dieGeo = new THREE.BoxGeometry(14.8, 0.25, 14.8);
    const dieMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, map: this.dieTexture, roughness: 0.25, metalness: 0.8 });
    const dieMesh = new THREE.Mesh(dieGeo, dieMat);
    dieMesh.position.set(0, 0.3, 0);
    dieMesh.userData = { id: 'die', name: 'Silicon Chip Die', explodeGroup: 1 };
    this.componentsGroup.add(dieMesh);
    this.interactiveObjects.push(dieMesh);
    this.componentMap.set('die', dieMesh);
    this.registerMaterial('die', dieMat);
  }

  createCores() {
    const coreCoords = [
      { id: 'core1', name: 'CPU CORE 1', x: -5.8, z: -5.8, texIdx: 0 },
      { id: 'core2', name: 'CPU CORE 2', x: -2.6, z: -5.8, texIdx: 1 },
      { id: 'core3', name: 'CPU CORE 3', x: -5.8, z: -2.6, texIdx: 2 },
      { id: 'core4', name: 'CPU CORE 4', x: -2.6, z: -2.6, texIdx: 3 }
    ];

    coreCoords.forEach(c => {
      const coreGroup = new THREE.Group();
      coreGroup.position.set(c.x, 0.7, c.z);

      const coreGeo = new THREE.BoxGeometry(2.8, 0.6, 2.6);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        roughness: 0.15,
        metalness: 0.5,
        emissive: 0x0284c7,
        emissiveIntensity: 0.15
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreMesh.userData = { id: c.id, name: c.name, explodeGroup: 2 };
      coreGroup.add(coreMesh);
      this.registerMaterial(c.id, coreMat);

      const capGeo = new THREE.BoxGeometry(2.7, 0.05, 2.5);
      const capMat = new THREE.MeshStandardMaterial({ map: this.coreTextures[c.texIdx], metalness: 0.2, roughness: 0.15 });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.set(0, 0.32, 0);
      coreGroup.add(cap);

      this.componentsGroup.add(coreGroup);
      this.interactiveObjects.push(coreMesh);
      this.componentMap.set(c.id, coreGroup);
    });
  }

  createCacheHierarchy() {
    const caches = [
      { id: 'cacheL1', name: 'L1 CACHE (Per Core)', z: -6.2, tex: this.cacheTextures.L1, color: 0xd97706 },
      { id: 'cacheL2', name: 'L2 CACHE (Per Core)', z: -4.4, tex: this.cacheTextures.L2, color: 0xb45309 },
      { id: 'cacheL3', name: 'L3 CACHE (Shared)', z: -2.6, tex: this.cacheTextures.L3, color: 0x78350f }
    ];

    caches.forEach(c => {
      const cacheGroup = new THREE.Group();
      cacheGroup.position.set(1.0, 0.7, c.z);

      const cacheGeo = new THREE.BoxGeometry(4.2, 0.6, 1.5);
      const cacheMat = new THREE.MeshStandardMaterial({ color: c.color, roughness: 0.15, metalness: 0.5, emissive: c.color, emissiveIntensity: 0.15 });
      const cacheMesh = new THREE.Mesh(cacheGeo, cacheMat);
      cacheMesh.userData = { id: c.id, name: c.name, explodeGroup: 2 };
      cacheGroup.add(cacheMesh);
      this.registerMaterial(c.id, cacheMat);

      const capGeo = new THREE.BoxGeometry(4.1, 0.05, 1.4);
      const capMat = new THREE.MeshStandardMaterial({ map: c.tex, metalness: 0.2, roughness: 0.15 });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.set(0, 0.32, 0);
      cacheGroup.add(cap);

      this.componentsGroup.add(cacheGroup);
      this.interactiveObjects.push(cacheMesh);
      this.componentMap.set(c.id, cacheGroup);
    });
  }

  createFPU() {
    const fpuGroup = new THREE.Group();
    fpuGroup.position.set(5.8, 0.7, -4.4);

    const fpuGeo = new THREE.BoxGeometry(2.6, 0.6, 3.4);
    const fpuMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.2, metalness: 0.6 });
    const fpuMesh = new THREE.Mesh(fpuGeo, fpuMat);
    fpuMesh.userData = { id: 'fpu', name: 'FLOATING POINT UNIT (FPU)', explodeGroup: 2 };
    fpuGroup.add(fpuMesh);
    this.registerMaterial('fpu', fpuMat);

    const capGeo = new THREE.BoxGeometry(2.5, 0.05, 3.3);
    const capMat = new THREE.MeshStandardMaterial({ map: this.fpuTexture, metalness: 0.2, roughness: 0.15 });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(0, 0.32, 0);
    fpuGroup.add(cap);

    this.componentsGroup.add(fpuGroup);
    this.interactiveObjects.push(fpuMesh);
    this.componentMap.set('fpu', fpuGroup);
  }

  createAIOptimizationUnit() {
    const aiGroup = new THREE.Group();
    aiGroup.position.set(-0.5, 0.95, 0.5);

    const aiGeo = new THREE.BoxGeometry(3.8, 0.95, 3.8);
    const aiMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.2,
      metalness: 0.8
    });
    const aiMesh = new THREE.Mesh(aiGeo, aiMat);
    aiMesh.userData = { id: 'aiUnit', name: 'AI OPTIMIZATION UNIT', explodeGroup: 3 };
    aiGroup.add(aiMesh);
    this.registerMaterial('aiUnit', aiMat);

    const capGeo = new THREE.BoxGeometry(3.7, 0.05, 3.7);
    const capMat = new THREE.MeshStandardMaterial({ map: this.aiTexture, metalness: 0.2, roughness: 0.15 });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(0, 0.49, 0);
    aiGroup.add(cap);

    const frameGeo = new THREE.BoxGeometry(4.1, 0.2, 4.1);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.9, roughness: 0.2 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(0, -0.38, 0);
    aiGroup.add(frame);

    this.componentsGroup.add(aiGroup);
    this.interactiveObjects.push(aiMesh);
    this.componentMap.set('aiUnit', aiGroup);
  }

  createNPU() {
    const npuGroup = new THREE.Group();
    npuGroup.position.set(4.8, 0.8, 0.5);

    const npuGeo = new THREE.BoxGeometry(3.6, 0.8, 3.8);
    const npuMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.2, metalness: 0.6 });
    const npuMesh = new THREE.Mesh(npuGeo, npuMat);
    npuMesh.userData = { id: 'npu', name: 'NEURAL PROCESSING UNIT (NPU)', explodeGroup: 3 };
    npuGroup.add(npuMesh);
    this.registerMaterial('npu', npuMat);

    const capGeo = new THREE.BoxGeometry(3.5, 0.05, 3.7);
    const capMat = new THREE.MeshStandardMaterial({ map: this.npuTexture, metalness: 0.2, roughness: 0.15 });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(0, 0.41, 0);
    npuGroup.add(cap);

    this.componentsGroup.add(npuGroup);
    this.interactiveObjects.push(npuMesh);
    this.componentMap.set('npu', npuGroup);
  }

  createControlUnitAndRegisters() {
    const cuGroup = new THREE.Group();
    cuGroup.position.set(-5.2, 0.7, 2.4);

    const cuGeo = new THREE.BoxGeometry(3.4, 0.6, 2.2);
    const cuMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.2, metalness: 0.8 });
    const cuMesh = new THREE.Mesh(cuGeo, cuMat);
    cuMesh.userData = { id: 'controlUnit', name: 'CONTROL UNIT (CU)', explodeGroup: 2 };
    cuGroup.add(cuMesh);
    this.registerMaterial('controlUnit', cuMat);

    const cuCapGeo = new THREE.BoxGeometry(3.3, 0.05, 2.1);
    const cuCapMat = new THREE.MeshStandardMaterial({ map: this.cuTexture, metalness: 0.2, roughness: 0.15 });
    const cuCap = new THREE.Mesh(cuCapGeo, cuCapMat);
    cuCap.position.set(0, 0.31, 0);
    cuGroup.add(cuCap);

    this.componentsGroup.add(cuGroup);
    this.interactiveObjects.push(cuMesh);
    this.componentMap.set('controlUnit', cuGroup);

    const regGroup = new THREE.Group();
    regGroup.position.set(-5.2, 0.7, 5.0);

    const regGeo = new THREE.BoxGeometry(3.4, 0.6, 2.2);
    const regMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2, metalness: 0.8 });
    const regMesh = new THREE.Mesh(regGeo, regMat);
    regMesh.userData = { id: 'registers', name: 'REGISTER BANK', explodeGroup: 2 };
    regGroup.add(regMesh);
    this.registerMaterial('registers', regMat);

    const regCapGeo = new THREE.BoxGeometry(3.3, 0.05, 2.1);
    const regCapMat = new THREE.MeshStandardMaterial({ map: this.regTexture, metalness: 0.2, roughness: 0.15 });
    const regCap = new THREE.Mesh(regCapGeo, regCapMat);
    regCap.position.set(0, 0.31, 0);
    regGroup.add(regCap);

    this.componentsGroup.add(regGroup);
    this.interactiveObjects.push(regMesh);
    this.componentMap.set('registers', regGroup);
  }

  createPowerManagementUnit() {
    const pmuGroup = new THREE.Group();
    pmuGroup.position.set(-1.0, 0.75, 4.8);

    const pmuGeo = new THREE.BoxGeometry(3.8, 0.65, 2.4);
    const pmuMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.2, metalness: 0.6 });
    const pmuMesh = new THREE.Mesh(pmuGeo, pmuMat);
    pmuMesh.userData = { id: 'powerUnit', name: 'POWER MANAGEMENT UNIT', explodeGroup: 2 };
    pmuGroup.add(pmuMesh);
    this.registerMaterial('powerUnit', pmuMat);

    const pmuCapGeo = new THREE.BoxGeometry(3.7, 0.05, 2.3);
    const pmuCapMat = new THREE.MeshStandardMaterial({ map: this.pmuTexture, metalness: 0.2, roughness: 0.15 });
    const pmuCap = new THREE.Mesh(pmuCapGeo, pmuCapMat);
    pmuCap.position.set(0, 0.34, 0);
    pmuGroup.add(pmuCap);

    this.componentsGroup.add(pmuGroup);
    this.interactiveObjects.push(pmuMesh);
    this.componentMap.set('powerUnit', pmuGroup);
  }

  createMemoryAndIOInterface() {
    const memGroup = new THREE.Group();
    memGroup.position.set(3.6, 0.7, 3.6);

    const memGeo = new THREE.BoxGeometry(3.2, 0.6, 2.4);
    const memMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2, metalness: 0.6 });
    const memMesh = new THREE.Mesh(memGeo, memMat);
    memMesh.userData = { id: 'memInterface', name: 'MEMORY INTERFACE', explodeGroup: 2 };
    memGroup.add(memMesh);
    this.registerMaterial('memInterface', memMat);

    const memCapGeo = new THREE.BoxGeometry(3.1, 0.05, 2.3);
    const memCapMat = new THREE.MeshStandardMaterial({ map: this.memTexture, metalness: 0.2, roughness: 0.15 });
    const memCap = new THREE.Mesh(memCapGeo, memCapMat);
    memCap.position.set(0, 0.31, 0);
    memGroup.add(memCap);

    this.componentsGroup.add(memGroup);
    this.interactiveObjects.push(memMesh);
    this.componentMap.set('memInterface', memGroup);

    const ioGroup = new THREE.Group();
    ioGroup.position.set(5.8, 0.7, 5.8);

    const ioGeo = new THREE.BoxGeometry(2.6, 0.6, 2.0);
    const ioMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.2, metalness: 0.8 });
    const ioMesh = new THREE.Mesh(ioGeo, ioMat);
    ioMesh.userData = { id: 'ioBus', name: 'I/O & BUS INTERFACE', explodeGroup: 2 };
    ioGroup.add(ioMesh);
    this.registerMaterial('ioBus', ioMat);

    const ioCapGeo = new THREE.BoxGeometry(2.5, 0.05, 1.9);
    const ioCapMat = new THREE.MeshStandardMaterial({ map: this.ioTexture, metalness: 0.2, roughness: 0.15 });
    const ioCap = new THREE.Mesh(ioCapGeo, ioCapMat);
    ioCap.position.set(0, 0.31, 0);
    ioGroup.add(ioCap);

    this.componentsGroup.add(ioGroup);
    this.interactiveObjects.push(ioMesh);
    this.componentMap.set('ioBus', ioGroup);
  }

  createEtchedCopperTraces() {
    const aiPos = new THREE.Vector3(-0.5, 0.44, 0.5);
    const targets = [
      new THREE.Vector3(-4.2, 0.44, -4.2),
      new THREE.Vector3(1.0, 0.44, -4.4),
      new THREE.Vector3(4.8, 0.44, 0.5),
      new THREE.Vector3(-1.0, 0.44, 4.8),
      new THREE.Vector3(-5.2, 0.44, 2.4),
      new THREE.Vector3(3.6, 0.44, 3.6)
    ];

    const copperMat = new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.9, roughness: 0.2 });

    targets.forEach(t => {
      const dist = aiPos.distanceTo(t);
      const busGeo = new THREE.BoxGeometry(0.12, 0.03, dist);
      const bus = new THREE.Mesh(busGeo, copperMat);

      const mid = aiPos.clone().add(t).multiplyScalar(0.5);
      bus.position.copy(mid);
      bus.lookAt(t);
      this.componentsGroup.add(bus);
    });
  }
}
