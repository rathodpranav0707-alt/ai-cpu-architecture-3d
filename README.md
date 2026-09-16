# AI-OPTIMIZED CPU ARCHITECTURE
## "How AI is Changing Processor Design"

An enhanced, interactive 3D WebGL educational model created for **Computer Architecture and Organization** coursework and college viva presentations.

---

## 🌟 Enhanced Feature Highlights

1. **Real-Time Interactive 3D CPU Model**:
   - **Outer Package & Substrate**: PGA gold contact pins, dark metallic PCB, heat spreader frame.
   - **Silicon Die**: Micro-circuit trace surface map with etched glowing bus lines.
   - **4 CPU Cores**: Raised 3D blocks with embedded local L1 Cache & ALU sub-blocks.
   - **AI Optimization Unit**: Central golden engine with raised border and glowing node telemetry icon.
   - **Neural Processing Unit (NPU)**: Dedicated high-throughput tensor acceleration matrix block.
   - **Cache Hierarchy**: Color-coded L1, L2, and shared L3 cache blocks.
   - **ALU & Control Unit**: Execution logic and opcode decoder blocks.
   - **Register Bank**: Sub-blocks (R1-R4, PC, IR).
   - **Floating Point Unit (FPU)**: Floating-point math coprocessor block.
   - **Power Management Unit**: Integrated dynamic energy controller with visual LED bar gauge.
   - **Memory Interface & RAM**: System bus connecting off-chip DDR RAM.

2. **🔥 Real-Time Thermal & Power Heatmap Shader Mode**:
   - Click **[ 🔥 THERMAL HEATMAP ]** to toggle dynamic chip surface heatmaps ($35^\circ\text{C}$ Cool Blue to $85^\circ\text{C}$ Hot Red) matching active workload power levels.

3. **📊 Live Telemetry Graph & Power Gauge**:
   - Animated HTML5 canvas line chart inside the Telemetry Panel showing real-time CPU Power Draw (Watts) and Frequency (GHz).

4. **⚙️ Step-by-Step Instruction Pipeline Visualizer**:
   - Select instructions (`Scalar ADD`, `Memory LOAD`, `AI MatMul (NPU)`) and step through Fetch ➔ Decode ➔ Execute ➔ Writeback while 3D data packets highlight active hardware blocks.

5. **🔊 Web Audio API Synthesized Sound Engine**:
   - Zero-dependency, synthesized sci-fi sound effects (ui click tones, frequency sweeps, ambient AI workload hums) with instant mute toggle.

6. **🔍 Instant Mouseover Micro-Spec Tooltips**:
   - Move mouse cursor over 3D component blocks to see floating micro-spec badges.

7. **📝 Interactive Viva Self-Test Quiz**:
   - Test your knowledge with a 5-question interactive quiz mode complete with real-time scoring and answer explanations.

8. **AI Workload Simulator**:
   - **Low Workload**: Core 1 Active, Cores 2-4 Idle/Sleep, Eco Power mode.
   - **Medium Workload**: Cores 1-2 Active, Balanced Power mode.
   - **High Workload**: Cores 1-4 Active (92% load), High Performance Power mode.
   - **AI Workload**: Cores 1-2 Active + NPU Full Acceleration (98%), Dynamic AI Power mode.

9. **3D Exploded View & Reset**:
   - Smooth vertical separation of Package, Die, Cores, Cache, and AI/NPU components.

10. **Guided 8-Step Viva Presentation Mode**:
    - Step-by-step interactive camera tour focusing sequentially on key architectural components.

---

## 📁 Project File Structure

```
AI-Optimized-CPU/
│
├── index.html            # Main HTML document with UI overlays & modals
├── css/
│   └── style.css         # Dark academic theme & glassmorphic dashboard styling
│
├── js/
│   ├── main.js           # App orchestration, rendering loop & raycasting
│   ├── cpuModel.js       # Procedural 3D Three.js geometry builder & bus lines
│   ├── controls.js       # OrbitControls, camera choreography, tooltips & labels
│   ├── simulator.js      # Workload manager & live telemetry canvas graph renderer
│   ├── animations.js     # Data flow particles, thermal heatmap lerp & pipeline visualizer
│   ├── audio.js          # Web Audio API synth sound engine
│   └── components.js     # Knowledge base, pipeline steps & viva quiz dataset
│
└── README.md             # Project documentation & presentation guide
```

---

## 🚀 How to Run Locally

1. **Option A: Direct Double Click (No Server Needed)**:
   - Double click `index.html` in your file explorer to open directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave.
   - All geometries, textures, and sounds are procedurally generated in memory, so **no CORS errors** occur!

2. **Option B: Local Web Server**:
   - If using VS Code, right-click `index.html` and select **Open with Live Server**.
   - Or run `npx http-server` in the directory.

---

## 🎤 5-Minute College Viva Presentation Script

1. **Minute 1: Introduction (Isometric View)**:
   - *"Good morning Professor. Today I am demonstrating an interactive 3D model of an AI-Optimized CPU Architecture for Computer Architecture & Organization."*
   - *"As transistor scaling hits thermal limits, processor design is shifting from pure frequency scaling to heterogeneous architecture."*

2. **Minute 2: Core Components & Cache Hierarchy**:
   - Click **[ Presentation Mode ]** or click individual cores.
   - *"Here we have 4 general-purpose CPU cores. Each core contains an ALU, Register bank, and Control Unit. Positioned nearby is our cache hierarchy: L1, L2, and shared L3 cache to minimize off-chip main RAM access latency."*

3. **Minute 3: The AI Optimization Unit & NPU**:
   - Focus camera on **AI OPTIMIZATION UNIT** and **NPU**.
   - *"The main highlight of this model is the central AI Optimization Unit and dedicated Neural Processing Unit (NPU)."*
   - *"The NPU offloads matrix and tensor math for neural network inference. The AI Optimization Unit acts as an intelligent controller that monitors workload telemetry and predicts compute spikes."*

4. **Minute 4: Workload Simulator, Heatmap & Live Telemetry**:
   - Click **[ AI WORKLOAD ]** in the simulator panel, then toggle **[ 🔥 THERMAL HEATMAP ]**.
   - *"Notice how in AI Workload mode, general tasks remain on Cores 1-2 while heavy tensor operations are routed to the NPU. The Thermal Heatmap shows real-time power dissipation, while the telemetry chart tracks power consumption."*

5. **Minute 5: Exploded View & Conclusion**:
   - Click **[ EXPLODED VIEW ]**.
   - *"Clicking Exploded View separates the physical layers—from the PGA package base up to the silicon die, cores, and AI engine."*
   - *"This demonstrates how hardware-assisted AI scheduling and domain-specific accelerators shape modern processor design. Thank you!"*
