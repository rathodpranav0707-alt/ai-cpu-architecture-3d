/**
 * AI-OPTIMIZED CPU ARCHITECTURE - COMPONENT DATABASE & KNOWLEDGE BASE
 * Contains descriptive educational content, viva Q&A, and architectural comparison matrices.
 */

export class ComponentDatabase {
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

export const COMPONENTS_DATA = ComponentDatabase.COMPONENTS_DATA;

export const PIPELINE_SEQUENCES = {
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

export const QUIZ_QUESTIONS = [
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

export const VIVA_QUESTIONS = [
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

export const PRESENTATION_STEPS = [
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

export const LEARN_TOPICS = [
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
