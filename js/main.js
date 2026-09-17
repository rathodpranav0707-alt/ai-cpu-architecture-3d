/**
 * AI-OPTIMIZED CPU ARCHITECTURE - STANDALONE 3D ENGINE BUNDLE
 * Contains all components, 3D model geometry, shaders, animations, simulator, audio & controls.
 * Zero external relative dependencies - 100% compatible with GitHub Pages and static web servers.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ==========================================
// 1. COMPONENTS & ARCHITECTURE DATABASE
// ==========================================
/**
 * AI-OPTIMIZED CPU ARCHITECTURE - COMPONENT DATABASE & KNOWLEDGE BASE
 * Contains descriptive educational content, viva Q&A, and architectural comparison matrices.
 */

class ComponentDatabase {
  static get COMPONENTS_DATA() {
    return {
      package: {
        id: 'package',
        name: 'CPU Package & Substrate',
        badge: 'Hardware Package',
        role: 'Physical Interface & Protection',
        specs: 'PGA/LGA 1700 Pins • 250W Max Thermal Power',
        description: 'The outer protective substrate housing the silicon die, providing electrical interconnects, gold contact pins, and heat dissipation pathways to the system motherboard.',
        functions: [
          'Physical encapsulation and protection of delicate silicon die',
          'Pin Grid Array (PGA / LGA) electrical signal routing',
          'Thermal dissipation pathway to heat spreader and cooler',
          'Integrated Power Distribution Network (PDN)'
        ]
      },
      die: {
        id: 'die',
        name: 'Silicon Chip Die',
        badge: 'Semiconductor Surface',
        role: 'Integrated Circuit Foundation',
        specs: '3nm Lithography Process • 15 Billion Transistors',
        description: 'The micro-fabricated silicon wafer containing billions of microscopic transistors, copper interconnect layers, logic gates, and internal bus pathways.',
        functions: [
          'Houses semiconductor transistor logic gates',
          'Multi-layer copper/aluminum interconnect buses',
          'High-density layout of compute cores and cache arrays'
        ]
      },
      core1: {
        id: 'core1',
        name: 'CPU CORE 1',
        badge: 'Compute Core',
        role: 'General Purpose Execution (Primary)',
        specs: '4.8 GHz Clock • Embedded ALU, REGS & CTRL',
        description: 'First high-performance general-purpose processing unit capable of executing scalar arithmetic, logical instructions, and system control flow tasks.',
        functions: [
          'Executes general operating system instructions',
          'Fetch, Decode, Execute pipeline execution',
          'Direct L1 Data & Instruction cache access'
        ]
      },
      core2: {
        id: 'core2',
        name: 'CPU CORE 2',
        badge: 'Compute Core',
        role: 'General Purpose Execution',
        specs: '4.8 GHz Clock • Embedded ALU, REGS & CTRL',
        description: 'Second independent compute core providing parallel thread execution for multi-threaded applications and operating system workloads.',
        functions: [
          'Parallel thread execution',
          'Out-of-order instruction scheduling',
          'Independent ALU & Register operation'
        ]
      },
      core3: {
        id: 'core3',
        name: 'CPU CORE 3',
        badge: 'Compute Core',
        role: 'Efficiency / Parallel Compute',
        specs: '3.6 GHz Clock • Embedded ALU, REGS & CTRL',
        description: 'Third processing core dynamically activated by the AI Optimization Unit when workload demand scales beyond dual-core capacity.',
        functions: [
          'Scalable multi-core throughput',
          'Dynamic power-gated sleep/active states',
          'Shared L3 cache access'
        ]
      },
      core4: {
        id: 'core4',
        name: 'CPU CORE 4',
        badge: 'Compute Core',
        role: 'Efficiency / Parallel Compute',
        specs: '3.6 GHz Clock • Embedded ALU, REGS & CTRL',
        description: 'Fourth compute core enabling quad-core parallel execution. Managed intelligently to maximize performance per watt.',
        functions: [
          'Peak parallel processing burst execution',
          'Workload offloading and background execution',
          'Real-time frequency scaling'
        ]
      },
      aiUnit: {
        id: 'aiUnit',
        name: 'AI OPTIMIZATION UNIT',
        badge: 'Central AI Engine',
        role: 'Intelligent Workload Management',
        specs: 'Real-Time Telemetry Engine • Predictive Neural Scheduler',
        description: 'A conceptual hardware-accelerated unit that continuously monitors instruction telemetry, predicts workload patterns, and dynamically schedules resources, core power, and cache allocation.',
        functions: [
          'Real-time telemetry and workload pattern monitoring',
          'Predictive resource allocation and scheduling',
          'Dynamic voltage & frequency scaling (DVFS) control',
          'Intelligent routing of AI tasks to NPU vs CPU cores',
          'Thermal and power efficiency optimization'
        ]
      },
      npu: {
        id: 'npu',
        name: 'NEURAL PROCESSING UNIT (NPU)',
        badge: 'AI Accelerator',
        role: 'Tensor & Matrix Compute Unit',
        specs: '45 TOPS (INT8/FP16) • Neural Matrix Network',
        description: 'Dedicated domain-specific hardware designed specifically for matrix multiplications, activation functions, and deep learning neural network inference.',
        functions: [
          'High-throughput matrix multiplication engines',
          'Accelerated tensor processing for AI inference',
          'Energy-efficient machine learning workload handling',
          'Substantially lower energy per inference than general CPU'
        ]
      },
      cacheL1: {
        id: 'cacheL1',
        name: 'L1 CACHE (Per Core)',
        badge: 'Memory Hierarchy',
        role: 'Ultra-Fast Local Storage',
        specs: '64 KB per core • 1 Clock Cycle Latency',
        description: 'Smallest and fastest cache located directly inside each compute core, split into instruction (L1i) and data (L1d) caches.',
        functions: [
          'Single-cycle access latency for active data',
          'Dedicated instruction & data cache lines',
          'Minimal access energy consumption'
        ]
      },
      cacheL2: {
        id: 'cacheL2',
        name: 'L2 CACHE (Per Core)',
        badge: 'Memory Hierarchy',
        role: 'Mid-Level Speed & Storage',
        specs: '2 MB per Core Block • 4 Clock Cycles Latency',
        description: 'Intermediate cache array balancing capacity and access latency, acting as a secondary buffer between L1 cache and shared L3 cache.',
        functions: [
          'Buffers L1 cache misses',
          'Low latency access (few clock cycles)',
          'Per-core or paired-core allocation'
        ]
      },
      cacheL3: {
        id: 'cacheL3',
        name: 'L3 CACHE (Shared)',
        badge: 'Memory Hierarchy',
        role: 'Shared High-Capacity Cache',
        specs: '32 MB Shared SRAM Array • Unified Core Access',
        description: 'Large shared cache array accessible by all CPU cores and the AI unit, reducing costly requests to main system RAM.',
        functions: [
          'Shared data coherency across all cores',
          'Reduces off-chip main memory bandwidth pressure',
          'Intelligently managed by AI Optimization Unit'
        ]
      },
      alu: {
        id: 'alu',
        name: 'ARITHMETIC LOGIC UNIT (ALU)',
        badge: 'Execution Logic',
        role: 'Math & Logical Operations',
        specs: '64-Bit Integer Pipeline • Single-Cycle ADD/SUB/AND/OR',
        description: 'The fundamental digital circuit inside the core that executes binary arithmetic (ADD, SUBTRACT) and logical operations (AND, OR, NOT, XOR, COMPARE).',
        functions: [
          'Integer addition, subtraction, bitwise logic',
          'Condition flag evaluation (Zero, Carry, Overflow)',
          'High-speed single-cycle calculation execution'
        ]
      },
      controlUnit: {
        id: 'controlUnit',
        name: 'CONTROL UNIT (CU)',
        badge: 'Processor Control',
        role: 'Instruction Decoding & Control Signals',
        specs: 'Multi-Stage Pipeline Control • Micro-Op Decoder',
        description: 'Directs the operation of the processor by fetching instructions from cache/RAM, decoding opcodes, and generating timing and control signals.',
        functions: [
          'Instruction Fetch (IF) and Instruction Decode (ID)',
          'Generates micro-operation control signals',
          'Manages pipeline timing and program counter flow'
        ]
      },
      registers: {
        id: 'registers',
        name: 'REGISTER BANK',
        badge: 'Internal Storage',
        role: 'Highest-Speed Storage Locations',
        specs: '16 General Purpose Registers (R1-R16) • PC • IR',
        description: 'Set of internal processor storage locations (R1-R4, Program Counter, Instruction Register) operating at core clock speed.',
        functions: [
          'Stores immediate ALU operands and results',
          'Program Counter (PC) tracks current execution address',
          'Instruction Register (IR) holds active opcode'
        ]
      },
      fpu: {
        id: 'fpu',
        name: 'FLOATING POINT UNIT (FPU)',
        badge: 'Specialized Math',
        role: 'IEEE 754 Floating-Point Arithmetic',
        specs: 'AVX-512 SIMD Vector Pipeline • IEEE 754 FP32/FP64',
        description: 'Specialized coprocessor block engineered for high-precision floating-point arithmetic (single/double precision real numbers).',
        functions: [
          'Scientific calculations and 3D graphics math',
          'IEEE 754 standard floating-point operations',
          'Multi-cycle pipeline hardware execution'
        ]
      },
      powerUnit: {
        id: 'powerUnit',
        name: 'POWER MANAGEMENT UNIT',
        badge: 'Power Control',
        role: 'Dynamic Energy & Rail Regulation',
        specs: 'Integrated Voltage Regulators (IVVR) • DVFS Telemetry',
        description: 'Controls power domains, voltage rails, and clock frequencies across cores, cache, and NPU based on real-time AI optimization feedback.',
        functions: [
          'Power gating idle core blocks to zero power',
          'Dynamic Voltage and Frequency Scaling (DVFS)',
          'Thermal throttling protection'
        ]
      },
      memInterface: {
        id: 'memInterface',
        name: 'MEMORY INTERFACE',
        badge: 'System Bus',
        role: 'Off-Chip Main Memory Access',
        specs: 'Dual-Channel DDR5 6400 MT/s Controller',
        description: 'High-speed memory controller and bus interface connecting the CPU package to system RAM (DDR5/LPDDR5).',
        functions: [
          'Manages read/write channels to system RAM',
          'Memory request queuing and arbitration',
          'High-bandwidth data packet transfer'
        ]
      },
      ioBus: {
        id: 'ioBus',
        name: 'I/O & BUS INTERFACE',
        badge: 'Peripherals Bus',
        role: 'System I/O & PCIe Controller',
        specs: 'PCIe 5.0 x16 Lanes • High-Speed Peripheral Interconnect',
        description: 'Handles high-speed input/output bus communications between the CPU package, PCIe graphics cards, NVMe SSDs, and chipset peripherals.',
        functions: [
          'PCI Express 5.0 root complex controller',
          'Direct Memory Access (DMA) channel management',
          'High-speed system peripheral arbitration'
        ]
      }
    };
  }
}

const COMPONENTS_DATA = ComponentDatabase.COMPONENTS_DATA;

const PIPELINE_SEQUENCES = {
  ADD: {
    title: 'Scalar Integer Addition (ADD R1, R2, R3)',
    steps: [
      { target: 'controlUnit', stage: 'FETCH & DECODE', desc: 'Control Unit fetches ADD opcode from L1 Instruction Cache and decodes control signals.' },
      { target: 'registers', stage: 'OPERAND READ', desc: 'Register Bank reads source values from registers R2 and R3 into internal buffers.' },
      { target: 'core1', stage: 'EXECUTE', desc: 'CPU Core 1 ALU performs binary 64-bit integer addition and sets Zero/Carry flags.' },
      { target: 'registers', stage: 'WRITEBACK', desc: 'Result is written back into destination register R1.' }
    ]
  },
  LOAD: {
    title: 'Memory Data Fetch (LOAD R1, [0x04F2])',
    steps: [
      { target: 'memInterface', stage: 'RAM BUS REQUEST', desc: 'Memory Interface issues bus request to external DDR system RAM.' },
      { target: 'cacheL3', stage: 'CACHE ALLOCATION', desc: 'Fetched memory block is allocated in shared L3 cache lines.' },
      { target: 'cacheL1', stage: 'L1 CACHE FILL', desc: 'Target word is loaded into Core 1 local L1 Data Cache.' },
      { target: 'registers', stage: 'REGISTER WRITE', desc: 'Data word is written directly into CPU Register R1.' }
    ]
  },
  AI_MATMUL: {
    title: 'AI Tensor Matrix MatMul (NPU Inference)',
    steps: [
      { target: 'aiUnit', stage: 'AI WORKLOAD PREDICTION', desc: 'AI Optimization Unit detects neural inference call and selects NPU execution route.' },
      { target: 'powerUnit', stage: 'POWER RAIL ACTIVATION', desc: 'Power Management Unit ramps voltage rail on NPU tensor array.' },
      { target: 'npu', stage: 'TENSOR MATRIX COMPUTE', desc: 'NPU Systolic Array executes 45 TFLOPS matrix-multiplication & activation.' },
      { target: 'cacheL3', stage: 'FEATURE MAP WRITEBACK', desc: 'Inference output feature map is saved into shared L3 cache for system access.' }
    ]
  }
};

const QUIZ_QUESTIONS = [
  {
    question: 'What is the primary role of the Neural Processing Unit (NPU)?',
    options: [
      'Executing operating system control loops',
      'Accelerating matrix multiplications & AI inference at high energy efficiency',
      'Managing physical voltage rails on the motherboard',
      'Storing long-term file system data'
    ],
    answer: 1,
    explanation: 'NPUs are domain-specific hardware designed specifically for matrix/tensor operations, offering significantly higher power efficiency for AI tasks than general-purpose CPUs.'
  },
  {
    question: 'Which cache level has the lowest latency (fastest access speed)?',
    options: ['Shared L3 Cache', 'Level 2 (L2) Cache', 'Level 1 (L1) Cache', 'System RAM'],
    answer: 2,
    explanation: 'L1 Cache is located directly inside the compute core, operating at core clock speed with single-cycle access latency.'
  },
  {
    question: 'In this conceptual model, how does the AI Optimization Unit assist processor scheduling?',
    options: [
      'It manually rewrites application source code',
      'It predicts workload patterns and dynamically allocates cores, NPU routes, and power domains',
      'It replaces the physical copper interconnects with optical fiber',
      'It eliminates the need for any system RAM'
    ],
    answer: 1,
    explanation: 'The AI Optimization Unit processes telemetry to predict compute spikes, intelligently scheduling tasks across cores and NPU while tuning power gating.'
  },
  {
    question: 'What operation is performed by the Arithmetic Logic Unit (ALU)?',
    options: [
      'HTML DOM rendering',
      'Binary arithmetic (ADD, SUB) and logical operations (AND, OR, XOR)',
      'Generating clock crystal frequencies',
      'Converting AC power to DC voltage'
    ],
    answer: 1,
    explanation: 'The ALU is the digital circuit responsible for executing integer arithmetic and bitwise logic operations inside the CPU core.'
  },
  {
    question: 'What technique does the Power Management Unit use to save energy on idle cores?',
    options: [
      'Power Gating (shutting off power to unused silicon blocks)',
      'Overclocking to 6.0 GHz',
      'Increasing L3 cache allocation',
      'Deleting unused operating system files'
    ],
    answer: 0,
    explanation: 'Power Gating cuts off leakage current to idle core blocks, reducing energy consumption to zero for inactive silicon areas.'
  }
];

const VIVA_QUESTIONS = [
  {
    q: '1. What is the main purpose of the AI Optimization Unit in this model?',
    a: 'In this conceptual educational model, the AI Optimization Unit acts as an intelligent controller. It monitors workload telemetry in real-time, predicts upcoming compute demands, and dynamically schedules CPU cores, NPU acceleration, cache allocation, and power modes for optimal efficiency.'
  },
  {
    q: '2. How does a Neural Processing Unit (NPU) differ from a general-purpose CPU core?',
    a: 'A CPU core is designed for sequential scalar execution and complex control logic, offering high performance on general tasks. An NPU is a specialized matrix/tensor processing engine optimized for parallel matrix multiplication and activation functions used in AI and ML inference at significantly higher power efficiency.'
  },
  {
    q: '3. What is the role of the Cache Hierarchy (L1, L2, L3) in computer architecture?',
    a: 'Cache is high-speed SRAM located close to the processor to reduce memory latency. L1 is the smallest, fastest, core-specific cache; L2 acts as an intermediate buffer; L3 is a larger shared cache across all cores that minimizes expensive off-chip accesses to main RAM.'
  },
  {
    q: '4. What components make up the classic Von Neumann / Harvard processor core?',
    a: 'A classic processor core contains the Control Unit (CU) for instruction fetch and decode, the Arithmetic Logic Unit (ALU) for mathematical/logical execution, the Register Bank for immediate data storage, and local L1 cache.'
  },
  {
    q: '5. Why is Dynamic Power Management important in modern CPU design?',
    a: 'As transistor density increases, power consumption and thermal dissipation become critical bottlenecks (dark silicon problem). Dynamic Power Management gates off idle cores (power gating) and lowers voltage/frequency during low workloads (DVFS) to extend energy efficiency.'
  },
  {
    q: '6. Is this 3D model representing an exact commercial CPU from Intel, AMD, or ARM?',
    a: 'No. This is a conceptual educational model developed for Computer Architecture & Organization coursework. It combines standard processor components (ALU, CU, Cache) with modern heterogeneous trends (NPU, AI-assisted scheduling) to demonstrate architectural evolution.'
  }
];

const PRESENTATION_STEPS = [
  {
    step: 1,
    title: 'Overview: CPU Package & Substrate',
    target: 'package',
    text: 'Welcome to the AI-Optimized CPU Architecture presentation. Here we see the complete 3D processor package resting on its substrate with perimeter contact pins and silicon die base.'
  },
  {
    step: 2,
    title: 'General Compute Cores (Cores 1-4)',
    target: 'core1',
    text: 'These 4 general-purpose CPU cores handle standard operating system threads. Each core integrates embedded sub-blocks for ALU, Registers, and Control logic.'
  },
  {
    step: 3,
    title: 'Memory Cache Hierarchy (L1, L2, L3)',
    target: 'cacheL3',
    text: 'Data access speed is critical. The vertically stacked L1, L2, and shared L3 caches store frequently needed instructions and data close to the compute logic.'
  },
  {
    step: 4,
    title: 'Specialized Coprocessor: Floating Point Unit (FPU)',
    target: 'fpu',
    text: 'The FPU handles high-precision vector floating-point math and scientific calculations independently from scalar CPU logic.'
  },
  {
    step: 5,
    title: 'Heart of Innovation: AI Optimization Unit',
    target: 'aiUnit',
    text: 'The central AI Optimization Unit continuously monitors workload patterns, predicting compute spikes and dynamically routing tasks to the NPU or CPU cores.'
  },
  {
    step: 6,
    title: 'Specialized Hardware: Neural Processing Unit (NPU)',
    target: 'npu',
    text: 'The NPU is a specialized matrix/tensor engine built specifically to run AI and machine learning inference efficiently without overburdening main CPU cores.'
  },
  {
    step: 7,
    title: 'Control Unit & Register Bank',
    target: 'controlUnit',
    text: 'The Control Unit decodes opcodes and sequences pipeline control signals, while the Register Bank provides single-cycle access to active operands.'
  },
  {
    step: 8,
    title: 'Power Management & System Bus Interfaces',
    target: 'powerUnit',
    text: 'The Power Management Unit regulates voltage rails, while the Memory Interface and I/O Bus Interface handle external DDR RAM and PCIe peripheral communications.'
  }
];

const LEARN_TOPICS = [
  {
    title: '1. What is a CPU?',
    desc: 'The Central Processing Unit (CPU) is the primary electronic circuit that executes instructions comprising a computer program by performing basic arithmetic, logic, controlling, and input/output operations.'
  },
  {
    title: '2. CPU Architecture Basics',
    desc: 'Modern CPUs use pipelined microarchitecture, fetching instructions from cache/RAM, decoding them into micro-operations, executing them in parallel functional units, and writing results back to registers or memory.'
  },
  {
    title: '3. Multicore Processing',
    desc: 'Instead of increasing clock speed indefinitely (which causes thermal barriers), modern processors integrate multiple compute cores on a single silicon die to execute independent threads simultaneously.'
  },
  {
    title: '4. Arithmetic Logic Unit (ALU)',
    desc: 'The ALU is the mathematical engine of the core. It computes binary operations like ADD, SUBTRACT, bitwise AND/OR, and sets status flags (Zero, Carry, Overflow) used for branch decisions.'
  },
  {
    title: '5. Control Unit & Instruction Pipeline',
    desc: 'The Control Unit reads opcodes, sequences control signals across functional units, and manages pipeline stages (Fetch, Decode, Execute, Memory Access, Writeback).'
  },
  {
    title: '6. Processor Registers',
    desc: 'Registers are tiny, ultra-fast storage cells located directly on the core. Key registers include the Program Counter (PC), Instruction Register (IR), Accumulator, and General Purpose Registers (R1-R4).'
  },
  {
    title: '7. Cache Memory Hierarchy',
    desc: 'To bridge the speed gap between fast CPU clock rates and slower main RAM, CPUs use a multi-tiered cache hierarchy: L1 (fastest/smallest), L2 (intermediate), and L3 (shared/largest).'
  },
  {
    title: '8. Neural Processing Unit (NPU)',
    desc: 'An NPU is domain-specific hardware designed for parallel matrix-vector operations, accelerating machine learning workloads like convolutional neural networks and transformer inference.'
  },
  {
    title: '9. Conceptual AI Optimization Unit',
    desc: 'Represents intelligent telemetry-driven scheduling. By predicting workload bursts, an AI-assisted scheduler reduces resource contention, lowers thermal throttling, and optimizes thread placement.'
  },
  {
    title: '10. Dynamic Power Management',
    desc: 'Modern processors use Power Gating to turn off unneeded silicon areas completely and Dynamic Voltage and Frequency Scaling (DVFS) to match clock speeds with workload demand.'
  },
  {
    title: '11. CPU vs NPU Acceleration',
    desc: 'CPUs excel at complex logic, branching, and low-latency single-thread tasks. NPUs excel at massive parallel arithmetic with low precision (INT8/FP16), achieving far higher efficiency for AI tasks.'
  },
  {
    title: '12. Workload-Aware Scheduling',
    desc: 'Future heterogeneous chips classify incoming tasks automatically—directing scalar tasks to CPU cores, vector tasks to GPUs, and tensor/AI tasks to NPUs under intelligent control.'
  }
];


// ==========================================
// 2. SYNTHESIZED WEB AUDIO ENGINE
// ==========================================
/**
 * AI-OPTIMIZED CPU ARCHITECTURE - WEB AUDIO API SFX ENGINE
 * Zero-dependency synthesized sci-fi sound effects for interactive UI feedback.
 */

class AudioEngine {
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


// ==========================================
// 3. 3D CPU PROCEDURAL GEOMETRY BUILDER
// ==========================================
/**
 * AI-OPTIMIZED CPU ARCHITECTURE - PHYSICAL METALLIC 3D MODEL GENERATOR
 * Replicates the exact physical brushed metal / anodized aluminum rendering with ultra-high contrast, 100% opaque surface labels.
 */



class CPUModelBuilder {
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


// ==========================================
// 4. ANIMATION & DATA FLOW ENGINE
// ==========================================
/**
 * AI-OPTIMIZED CPU ARCHITECTURE - ANIMATION & PARTICLE SYSTEM ENGINE
 * Manages data flow particles, exploded view lerping, thermal heatmaps, presentation pop-up components, and pipeline visualizer.
 */



class AnimationEngine {
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


// ==========================================
// 5. WORKLOAD & TELEMETRY SIMULATOR
// ==========================================
/**
 * AI-OPTIMIZED CPU ARCHITECTURE - WORKLOAD SIMULATOR
 * Manages workload preset states, syncs 3D mesh materials, and renders HTML5 live canvas telemetry graphs.
 */

class WorkloadSimulator {
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


// ==========================================
// 6. CONTROLS, CAMERA & UI POSITION TRACKING
// ==========================================
/**
 * AI-OPTIMIZED CPU ARCHITECTURE - CONTROLS & CAMERA ENGINE
 * OrbitControls, floating label 2D screen projections, mouse hover tooltips, and presentation step choreography.
 */





class ControlsManager {
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


// ==========================================
// 7. MAIN APPLICATION ORCHESTRATION
// ==========================================
/**
 * AI-OPTIMIZED CPU ARCHITECTURE - MAIN ENTRY POINT
 * Orchestrates 3D scene creation, event binding, raycasting, audio, pipeline visualizer, and rendering.
 */









class App {
  constructor() {
    this.container = document.getElementById('webgl-container');
    this.selectedComponentId = null;

    this.initScene();
    this.initLighting();
    this.initGrid();

    // Instantiate Modules
    this.audioEngine = new AudioEngine();
    this.cpuBuilder = new CPUModelBuilder(this.scene);
    const modelData = this.cpuBuilder.build();
    this.interactiveObjects = modelData.interactiveObjects;

    this.animationEngine = new AnimationEngine(this.scene, this.cpuBuilder);
    this.simulator = new WorkloadSimulator(this.cpuBuilder, this.animationEngine);
    this.controlsManager = new ControlsManager(this.camera, this.renderer, this.scene, this.cpuBuilder);

    this.initRaycaster();
    this.bindEvents();

    // Default simulation state
    this.simulator.setPreset('AI');
    this.audioEngine.updateHum(true);

    // Expose app instance globally for label callbacks
    window.appMain = this;

    // Start render loop
    this.animate();
  }

  /**
   * 1. Initialize WebGL Renderer & Perspective Camera
   */
  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(18, 14, 18);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);
  }

  /**
   * 2. Studio Lighting Setup
   */
  initLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    this.scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(15, 22, 15);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.bias = -0.0001;
    this.scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    fillLight.position.set(-15, 12, -15);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.0);
    rimLight.position.set(0, -10, 15);
    this.scene.add(rimLight);
  }

  /**
   * 3. Technical Grid Floor
   */
  initGrid() {
    const gridHelper = new THREE.GridHelper(40, 40, 0x333333, 0x111111);
    gridHelper.position.y = -0.42;
    this.scene.add(gridHelper);
  }

  /**
   * 4. Mouse Raycasting for Selecting 3D Components
   */
  initRaycaster() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.renderer.domElement.addEventListener('click', (e) => {
      this.audioEngine.playClick();
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.interactiveObjects, true);

      if (intersects.length > 0) {
        let hitObj = intersects[0].object;
        while (hitObj && !hitObj.userData.id && hitObj.parent) {
          hitObj = hitObj.parent;
        }

        if (hitObj && hitObj.userData.id) {
          this.selectComponentById(hitObj.userData.id);
        }
      }
    });
  }

  selectComponentById(id) {
    this.selectedComponentId = id;
    if (this.controlsManager) {
      this.controlsManager.activeSelectedId = id;
    }

    const data = COMPONENTS_DATA[id];
    if (!data) return;

    const infoCard = document.getElementById('info-card');
    const titleEl = document.getElementById('info-title');
    const badgeEl = document.getElementById('info-badge');
    const roleEl = document.getElementById('info-role');
    const bodyEl = document.getElementById('info-body');
    const funcsEl = document.getElementById('info-funcs');

    if (titleEl) titleEl.innerText = data.name;
    if (badgeEl) badgeEl.innerText = data.badge;
    if (roleEl) roleEl.innerText = data.role;
    if (bodyEl) bodyEl.innerText = data.description;

    if (funcsEl) {
      funcsEl.innerHTML = '';
      data.functions.forEach(f => {
        const li = document.createElement('li');
        li.innerText = f;
        funcsEl.appendChild(li);
      });
    }

    if (infoCard) {
      infoCard.classList.add('visible');
      if (this.controlsManager) {
        this.controlsManager.updateInfoCardPosition();
      }
    }
  }

  /**
   * 5. Bind User Interface Button Events
   */
  bindEvents() {
    // Simulator Buttons
    const simBtns = document.querySelectorAll('.btn-sim');
    simBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.audioEngine.playModeSwitch();
        simBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-mode');
        this.simulator.setPreset(mode);
        this.audioEngine.updateHum(mode === 'AI');
      });
    });

    // Sound SFX Toggle
    const btnSound = document.getElementById('btn-sound');
    if (btnSound) {
      btnSound.addEventListener('click', () => {
        const enabled = this.audioEngine.toggleSound();
        btnSound.classList.toggle('muted', !enabled);
        btnSound.innerText = enabled ? 'Sound: ON' : 'Sound: OFF';
      });
    }

    // Thermal Heatmap Mode Toggle
    const btnHeatmap = document.getElementById('btn-heatmap');
    if (btnHeatmap) {
      btnHeatmap.addEventListener('click', () => {
        this.audioEngine.playClick();
        const active = this.animationEngine.toggleThermalHeatmap();
        btnHeatmap.classList.toggle('heatmap-on', active);
        btnHeatmap.innerText = active ? 'HEATMAP: ON' : 'THERMAL HEATMAP';
      });
    }

    // Instruction Pipeline Visualizer
    const btnPipeline = document.getElementById('btn-pipeline');
    if (btnPipeline) {
      btnPipeline.addEventListener('click', () => {
        this.audioEngine.playClick();
        this.controlsManager.startPipelineVisualizer('ADD');
      });
    }

    document.getElementById('btn-pipe-prev')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      this.controlsManager.prevPipelineStep();
    });
    document.getElementById('btn-pipe-next')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      this.controlsManager.nextPipelineStep();
    });
    document.getElementById('btn-pipe-exit')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      this.controlsManager.stopPipelineVisualizer();
    });

    const pipeSelect = document.getElementById('pipe-select');
    if (pipeSelect) {
      pipeSelect.addEventListener('change', (e) => {
        this.controlsManager.startPipelineVisualizer(e.target.value);
      });
    }

    // Action Controls
    const btnExplode = document.getElementById('btn-explode');
    if (btnExplode) {
      btnExplode.addEventListener('click', () => {
        this.audioEngine.playClick();
        const isExp = !this.animationEngine.isExploded;
        this.animationEngine.setExploded(isExp);
        btnExplode.classList.toggle('toggle-on', isExp);
        btnExplode.innerText = isExp ? 'RESET VIEW' : 'EXPLODED VIEW';
      });
    }

    const btnResetCam = document.getElementById('btn-reset-cam');
    if (btnResetCam) {
      btnResetCam.addEventListener('click', () => {
        this.audioEngine.playClick();
        this.controlsManager.resetCamera();
      });
    }

    const btnToggleLabels = document.getElementById('btn-toggle-labels');
    if (btnToggleLabels) {
      btnToggleLabels.addEventListener('click', () => {
        this.audioEngine.playClick();
        const active = this.controlsManager.toggleLabels();
        btnToggleLabels.classList.toggle('toggle-on', active);
      });
    }

    const btnToggleFlow = document.getElementById('btn-toggle-flow');
    if (btnToggleFlow) {
      btnToggleFlow.addEventListener('click', () => {
        this.audioEngine.playClick();
        const active = this.animationEngine.toggleDataFlow();
        btnToggleFlow.classList.toggle('toggle-on', active);
        btnToggleFlow.innerText = active ? 'DATA FLOW: ON' : 'DATA FLOW: OFF';
      });
    }

    // Top Action Presentation Mode
    const btnPres = document.getElementById('btn-pres-mode');
    if (btnPres) {
      btnPres.addEventListener('click', () => {
        this.audioEngine.playClick();
        this.controlsManager.startPresentation();
      });
    }

    document.getElementById('btn-pres-prev')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      this.controlsManager.prevPresentationStep();
    });
    document.getElementById('btn-pres-next')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      this.controlsManager.nextPresentationStep();
    });
    document.getElementById('btn-pres-exit')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      this.controlsManager.stopPresentation();
    });

    document.getElementById('info-card-close')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      document.getElementById('info-card').classList.remove('visible');
      if (this.controlsManager) {
        this.controlsManager.activeSelectedId = null;
      }
    });

    // Project Team Modal Bindings
    const teamModal = document.getElementById('team-modal');
    const openTeamModal = () => {
      this.audioEngine.playClick();
      teamModal?.classList.add('visible');
    };
    const closeTeamModal = () => {
      this.audioEngine.playClick();
      teamModal?.classList.remove('visible');
    };

    document.getElementById('btn-team')?.addEventListener('click', openTeamModal);
    document.getElementById('team-badge')?.addEventListener('click', openTeamModal);
    document.getElementById('team-modal-close')?.addEventListener('click', closeTeamModal);

    teamModal?.addEventListener('click', (e) => {
      if (e.target === teamModal) {
        closeTeamModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && teamModal?.classList.contains('visible')) {
        closeTeamModal();
      }
    });

    // ──── Mobile Dock & Panel Close Bindings ────
    const statsPanel = document.getElementById('stats-panel');
    const controlPanel = document.getElementById('control-panel');

    const closeMobilePanels = () => {
      statsPanel?.classList.remove('mobile-visible');
      controlPanel?.classList.remove('mobile-visible');
    };

    document.getElementById('btn-mobile-stats')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      controlPanel?.classList.remove('mobile-visible');
      statsPanel?.classList.toggle('mobile-visible');
    });

    document.getElementById('btn-mobile-controls')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      statsPanel?.classList.remove('mobile-visible');
      controlPanel?.classList.toggle('mobile-visible');
    });

    document.getElementById('btn-mobile-team')?.addEventListener('click', () => {
      closeMobilePanels();
      openTeamModal();
    });

    document.getElementById('stats-panel-close')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      statsPanel?.classList.remove('mobile-visible');
    });

    document.getElementById('control-panel-close')?.addEventListener('click', () => {
      this.audioEngine.playClick();
      controlPanel?.classList.remove('mobile-visible');
    });

    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  /**
   * Main Rendering Loop
   */
  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = 0.016;
    this.animationEngine.update(delta);
    this.controlsManager.update();
    this.simulator.renderTelemetryChart();

    this.renderer.render(this.scene, this.camera);
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
