---
title: "Computational Neuroscience"
excerpt: "Theses are my notes from the course era course: Computational Neuroscience by the University of Washington."
coverImage: "/assets/blog/linear-algebra/cover.jpg"
date: "2024-03-21T12:00:00.000Z"
author:
  name: William Wall
ogImage:
  url: "/assets/blog/linear-algebra/cover.jpg"
---

Theses are my notes from the course era course: Computational Neuroscience by the University of Washington. It's a general overview and a fair bit conceptual, but I had a lot of fun with this one.

# module 1

## Overview of Receptive Fields

#### **Terry Sejnowski's Definition**

- Computational neuroscience aims to explain how the brain generates behavior in **computational terms**.
    

#### **Dayan & Abbott's Framework**

Computational neuroscience provides tools and methods for:

1. **Characterizing** what nervous systems do.
    
2. **Determining** how they function.
    
3. **Understanding** why they operate in particular ways.
    

#### **Corresponding Model Types**

- **Descriptive Models** – Characterize system outputs.
    
- **Mechanistic Models** – Explain how systems work.
    
- **Interpretive Models** – Explain why systems work a certain way.
    

---

### **Receptive Fields**

#### **Historical Context**

- **Hubel and Wiesel (1960s)** investigated the visual system in cats.
    
- Used implanted electrodes to record **spikes** (action potentials) in the visual cortex.
    
- Found that specific neurons responded selectively to certain **visual stimuli** (e.g., bars of light at 45° orientation).
    

#### **Definition of Receptive Field**

- A receptive field is the set of **stimulus features** (e.g., orientation, location) that reliably trigger a response in a neuron.
    

#### Examples:

- **Retina cell**: Responds to a light spot at a specific location.
    
- **Visual cortex cell**: Responds to a bar of light at a specific orientation.
    

Mathematically:

Response=f(stimulus features)\text{Response} = f(\text{stimulus features})Response=f(stimulus features)

---

## **Descriptive Models of Receptive Fields**

##### **Retinal Receptive Fields**

- Studied by flashing circular light spots at different locations.
    
- **Center-Surround Structure**:
    

R(x,y)=Gc(x,y)−Gs(x,y)R(x, y) = G_c(x, y) - G_s(x, y)R(x,y)=Gc​(x,y)−Gs​(x,y)

Where:

- GcG_cGc​: Gaussian for excitatory center
    
- GsG_sGs​: Broader Gaussian for inhibitory surround  
    (aka **Difference of Gaussians**, or DoG)
    

#### Types:

- **On-Center, Off-Surround**: Activated when light turns _on_ in center or _off_ in surround.
    
- **Off-Center, On-Surround**: Activated when light turns _off_ in center or _on_ in surround.
    

##### **Visual Cortex Receptive Fields (V1)**

- Respond to **oriented bars of light**.
    
- Vary by:
    
    - **Orientation** (e.g., vertical, oblique)
        
    - **Polarity** (light-on-dark vs. dark-on-light)
        

These are often modeled using **Gabor functions**:

G(x,y)=exp⁡(−x′2+γ2y′22σ2)⋅cos⁡(2πx′λ+ϕ)G(x, y) = \exp\left( -\frac{x'^2 + \gamma^2 y'^2}{2\sigma^2} \right) \cdot \cos\left( 2\pi \frac{x'}{\lambda} + \phi \right)G(x,y)=exp(−2σ2x′2+γ2y′2​)⋅cos(2πλx′​+ϕ)

Where:

- θ\thetaθ: preferred orientation
    
- λ\lambdaλ: wavelength of cosine
    
- σ\sigmaσ: spread of Gaussian envelope
    

##### **Method Mentioned**

- **Reverse Correlation**: A method to estimate the receptive field by analyzing the correlation between input stimuli and neural responses.
    

---

## **Mechanistic Models of Receptive Fields**

##### **Objective**

Explain how **oriented V1 receptive fields** are formed from **center-surround LGN fields**.

##### **Visual Pathway Overview**

Retina→Optic Nerve→LGN→V1\text{Retina} \rightarrow \text{Optic Nerve} \rightarrow \text{LGN} \rightarrow \text{V1}Retina→Optic Nerve→LGN→V1

- **LGN cells**: Have center-surround receptive fields.
    
- **V1 cells**: Develop elongated, orientation-specific fields.
    

##### **Feedforward Model (Hubel & Wiesel)**

- V1 neurons receive converging input from **aligned LGN cells**:
    
$$
RV1=∑iwi⋅RLGN,iR_{\text{V1}} = \sum_i w_i \cdot R_{\text{LGN}, i}RV1​=i∑​wi​⋅RLGN,i​
$$
- This summation creates selectivity to oriented bars.
    

##### **Limitations**

- The feedforward model **ignores**:
    
    - **Recurrent connections** within V1.
        
    - Inputs from **other V1 neurons**, not just LGN.
        
- These recurrent circuits further refine receptive field responses.
    

---

## **Interpretive Models of Receptive Fields**

##### **Key Question**

Why are V1 receptive fields shaped this way?  
→ What **computational advantages** do they offer?

##### **Efficient Coding Hypothesis**

- Proposed by **Olshausen & Field**, **Bell & Sejnowski**, etc.
    
- Idea: The brain efficiently represents the sensory world using:
    
    - **Sparse** and **independent** codes
        
    - Limited neural resources
        

##### **Optimization Objective**

Minimize the **reconstruction error** of natural stimuli, while enforcing sparsity:
 $$
min⁡a∥x−∑iaiϕi∥2+λ∑i∣ai∣\min_{\mathbf{a}} \left\| \mathbf{x} - \sum_i a_i \phi_i \right\|^2 + \lambda \sum_i |a_i|amin​​x−i∑​ai​ϕi​​2+λi∑​∣ai​∣
$$ 
Where:

- x\mathbf{x}x: input image patch
    
- ϕi\phi_iϕi​: learned basis (receptive field)
    
- aia_iai​: neural response coefficient
    
- λ\lambdaλ: sparsity constraint
    
##### **Implementation Process**

1. Initialize with **random receptive fields**.
    
2. Apply learning algorithms:
    
    - **Sparse Coding** (Olshausen & Field)
        
    - **Independent Component Analysis (ICA)** (Bell & Sejnowski)
        
    - **Predictive Coding** (Dana Ballard)
        
3. Train using **natural image patches** (e.g., trees, textures).
    

##### **Outcome**

- Learned receptive fields become:
    
    - **Oriented**
        
    - **Localized**
        
    - **ON/OFF polarity**
        
- They **resemble real V1 neurons**.
    

##### **Broader Applications**

- Efficient coding also helps explain:
    
    - Receptive fields in **auditory cortex**
        
    - Sensory encoding in other systems
## Intro to Neurons, electrical properties

---

### **Introduction to Neurons**

- **Neurons** are the fundamental structural and functional units of the brain.
    
- Example neuron from the **visual cortex**:
    
    - **Size**: ~25 microns (1 micron = 10−610^{-6}10−6 meters)
        
    - **Structure**:
        
        - **Dendrites**: Branches that receive inputs
            
        - **Cell body (soma)**
            
        - **Axon**: Slender branch conveying output
            

---

### **Types of Neurons**

- Illustrated by **Ramon y Cajal's** early 20th-century drawings:
    
    - **Pyramidal Neurons** (visual cortex, motor system)
        
        - Triangular-shaped cell bodies
            
        - Axons form the **pyramidal tract**
            
    - **Purkinje Cells** (cerebellum)
        
        - Extensive dendritic branching
            
    - **Optic Tectum Cells**
        
        - Diverse branching patterns by depth
            

---

### **Neuron Doctrine**

- States three key principles:
    
    1. **Neurons are discrete** structural and functional units (not continuous).
        
    2. **Neurons are individual cells**, not a syncytium (disproved reticular theory).
        
    3. **Information flows** from **dendrites → soma → axon**.
        
- While exceptions exist, these hold true for most neurons.
    

---

### **Basic Neuron Model**

- **Idealized neuron**:
    
    - Inputs → EPSPs (Excitatory Post-Synaptic Potentials)
        
    - Summation of EPSPs → threshold → **Action potential (spike)**
        

---

### **Cellular Structure of a Neuron**

- **Neuron as a “leaky bag of charged liquid”**
    
- Enclosed by a **lipid bilayer membrane** (impermeable to ions)
    
- **Ions involved**: Na⁺, K⁺, Cl⁻
    
- **Resting Membrane Potential**: ~ -70 mV
    
    - Maintained by **ion pumps** (e.g., Na⁺/K⁺ pump)
        
    - Pumps use energy (ATP)
        

---

### **Ion Channels**

- Embedded in the membrane; allow selective ion passage
    
- **Types of gated channels**:
    
    - **Voltage-gated**: Open/close based on membrane potential
        
    - **Chemically-gated**: Open when neurotransmitters bind (seen at synapses)
        
    - **Mechanically-gated**: Respond to pressure/stretch
        

---

### **Synaptic Transmission**

- **Synapse**: Junction between axon of one neuron and dendrite/soma of another
    
- **Chemically-gated channels** at synapse:
    
    - Open when neurotransmitter binds
        
    - Sodium influx causes **depolarization**
        
- **Depolarization** → Opens **voltage-gated channels**
    
    - If threshold is reached → spike/action potential
        
- **Hyperpolarization**:
    
    - Potassium efflux or chloride influx → makes inside more negative
        

---

### **Action Potential**

- Triggered by strong depolarization
    
- **Steps**:
    
    1. Voltage-gated **Na⁺ channels** open → Na⁺ influx → rapid depolarization
        
    2. Na⁺ channels **inactivate**
        
    3. Voltage-gated **K⁺ channels** open → K⁺ efflux → repolarization
        
    4. **Return to resting potential** as K⁺ channels close
        
- **Stereotypical waveform** (no information encoded in shape)
    
- **Propagated along axon** by successive opening of channels
    

---

### **Myelination and Signal Propagation**

- **Oligodendrocytes** create **myelin sheaths**
    
- **Nodes of Ranvier**: Gaps in myelin where action potentials regenerate
    
- **Saltatory conduction**:
    
    - Action potentials "hop" between nodes
        
    - Enables **fast, efficient transmission**
        
- **Multiple Sclerosis**: Autoimmune loss of myelin → impaired neural communication
    

---

### **Summary of Key Concepts**

- Neuron structure: dendrites, soma, axon
    
- Neuron communication via **action potentials**
    
- Information transferred across **synapses**
    
- Membrane potential dynamics controlled by **ion gradients**, **channels**, and **pumps**
    
- **Myelination** enables rapid signal conduction

## Synapses

### Introduction to Synapses

- **Definition**: A synapse is a junction between two neurons.
    
- **Types of Synapses**:
    
    - **Electrical Synapses**: Use gap junctions.
        
    - **Chemical Synapses**: Use neurotransmitters.
        

---

### Electrical Synapses

- **Mechanism**:
    
    - Direct passage of ions via gap junctions between adjacent neurons (e.g., Neuron A to Neuron B).
        
    - Allows fast transmission and synchronization.
        
- **Structure**: Ionic channels span membranes of both neurons.
    
- **Use Cases**:
    
    - Synchronizing neural activity.
        
    - Escape reflexes (e.g., in crayfish).
        

---

### Chemical Synapses

- **Mechanism**:
    
    - Action potential arrives at axon terminal of Neuron A.
        
    - Neurotransmitter-filled **vesicles** release contents into **synaptic cleft**.
        
    - Neurotransmitters bind to **chemically gated ion channels** on Neuron B.
        
    - Ion flow (e.g., Na⁺ influx) changes membrane potential of Neuron B.
        
- **Significance**:
    
    - Allows modulation of signal strength.
        
    - Supports learning and memory.
        
- **Evolutionary Advantage**:
    
    - Signal modulation via changing ion channel density.
        
    - Basis for **synaptic plasticity**.
        

---

### Synaptic Density and Function

- **Visual Example**: Image from Kennedy Lab—resembles a city at night.
    
- **Typical Synapse Count**: ~10,000 per neuron.
    
- **Synapse Types**:
    
    - **Excitatory Synapse**:
        
        - Increases postsynaptic potential.
            
        - Example: Glutamate → Na⁺ influx → Depolarization → EPSP (Excitatory Postsynaptic Potential).
            
    - **Inhibitory Synapse**:
        
        - Decreases postsynaptic potential.
            

---

### The Synapse Doctrine

- All memories, skills, and learning are encoded in synapses.
    
- Synapses are fundamental units of learning and memory in the brain.
    

---

### Synaptic Plasticity

- **Definition**: The ability of synapses to change their strength.
    
- **Key Type**: **Hebbian Plasticity**
    
    - **Rule**: “Neurons that fire together, wire together.”
        
    - **Strengthening**: If Neuron A consistently activates Neuron B, the A→B connection is strengthened.
        
    - **Example**:
        
        - Hear a growl (A fires), see a tiger (B fires).
            
        - Strengthened A→B connection leads to faster prediction/response next time.
            

---

### Experimental Evidence for Plasticity

- **Long-Term Potentiation (LTP)**:
    
    - Increased synaptic strength over time.
        
    - Measured by larger EPSPs after repeated stimulation.
        
- **Long-Term Depression (LTD)**:
    
    - Decreased synaptic strength over time.
        
    - Measured by smaller EPSPs over repeated trials.
        

---

### Spike Timing-Dependent Plasticity (STDP)

- **Key Idea**: Synaptic changes depend on the _timing_ of spikes.
    
- **Timing Rules**:
    
    - **If A fires _before_ B**: → LTP (Δt > 0).
        
    - **If A fires _after_ B**: → LTD (Δt < 0).
        
- **Plasticity Window**: ~40 ms; determines whether synapse strengthens or weakens.
    
- **Importance**:
    
    - Critical for sequence learning and prediction.
        
    - Observed in brain areas like the cerebral cortex.
        

---

### Looking Ahead

- Despite knowledge of individual neurons and synapses:
    
    - **Open Questions**: How do networks of neurons give rise to behavior, perception, consciousness?
        
- **Large-Scale Projects**:
    
    - **Europe**: Human Brain Project (Henry Markram) — Simulate the human brain.
        
    - **USA**: BRAIN Initiative — Map activities of thousands of neurons to understand cognition and behavior.

## The Brain's Areas and their Functions
##### Overview: Nervous System Structure

###### Two Major Divisions

1. **Central Nervous System (CNS)**: Brain and spinal cord
    
2. **Peripheral Nervous System (PNS)**: All nerves outside CNS
    

---

##### Peripheral Nervous System (PNS)

####### 1. **Somatic Nervous System**

- Controls **voluntary movements** and transmits **sensory information**
    
- Comprised of **nerves** (bundles of axons)
    
- Two types of nerve fibers:
    
    - **Afferent fibers**: Sensory input → CNS
        
    - **Efferent fibers**: Motor commands ← CNS
        

**Example**: Handshake

- Brain sends **efferent signals** to arm muscles
    
- **Afferent fibers** relay touch sensation from skin to brain
    

###### 2. **Autonomic Nervous System**

- Controls **involuntary functions** (e.g., heart rate, digestion, respiratory rate)
    
- Connects to **internal organs**, **smooth muscles**, **glands**
    
- Operates **below conscious control**
    
- Governs **fight-or-flight** and **homeostasis**
    

---

##### Central Nervous System (CNS)

##### Spinal Cord

- Implements **reflex arcs** (e.g., withdrawal from hot pan)
    
- Routes **descending motor commands** from brain to periphery
    
- Routes **ascending sensory feedback** to brain for further processing
    
- Integrates local and brain-directed motor control (e.g., walking)
    

---

### Brain Regions and Functions

#### Hindbrain

1. **Medulla Oblongata**:
    
    - Regulates breathing, blood pressure, muscle tone
        
2. **Pons**:
    
    - Involved in sleep, arousal
        
    - Connects to cerebellum
        
3. **Cerebellum**:
    
    - Coordinates voluntary movement
        
    - Maintains equilibrium
        
    - Implicated in language and attention
        

#### Midbrain

- Controls **eye movements**, **visual/auditory reflexes**
    
- Includes **reticular formation**:
    
    - Roles: Breathing, pain perception, sleep/wake regulation, arousal, reflexes
        

#### Diencephalon

1. **Thalamus**:
    
    - Relay for all sensory information **except smell**
        
    - Sends sensory input to cortex
        
    - Regulates sleep/wake cycles
        
2. **Hypothalamus**:
    
    - Regulates homeostatic drives: **fighting, fleeing, feeding, mating**
        

#### Forebrain: Cerebrum

- Includes:
    
    - **Cerebral Cortex**: Perception, language, cognition, decision-making
        
    - **Basal Ganglia**
        
    - **Hippocampus**: Memory
        
    - **Amygdala**: Emotion
        

---

### Cerebral Cortex

- ~1/8 inch thick sheet of ~30 billion neurons
    
- Each neuron forms ~10,000 synapses → ~300 trillion total
    
- Organized in **6 layers**:
    
    - **Layer IV**: Primary sensory input (e.g., from thalamus)
        
    - **Layer VI**: Output to thalamus
        
    - **Layer V**: Output to subcortical areas
        
    - **Layers II/III**: Output to other cortical regions
        
    - **Layer I**: Receives feedback from higher cortical areas
        
- Suggests **uniform cortical architecture** and possible **shared computational principles**
    

---

### Open Research Question

- What is the **computational principle** of the cortex?
    
    - Still unknown
        
    - Possibly solvable through computational neuroscience
        

---

### Brain vs. Digital Computing

|Metric|Brain|Digital Computers|
|---|---|---|
|Device Count|~100 billion neurons|~10^10 transistors|
|Connectivity|Highly interconnected (10⁴ synapses/neuron)|Sparse interconnects|
|Speed|~100 µs resolution|~100 ps (10 GHz clocks)|
|Computation Style|Parallel, adaptive (plasticity)|Sequential, fixed architecture|
|Best at...|Ill-posed problems (e.g., vision, speech)|Symbolic/math problems|

---

### Summary: Brain Computation

- **Storage**: Structural/chemical states of neurons and synapses
    
- **Transmission**: Combination of **electrical (spikes)** and **chemical (neurotransmitters)** signals
    
- **Elements**: Neurons
    
- **Computational Models**: Descriptive, mechanistic, interpretive
# module 2

### Neural Coding – Introduction and Core Concepts

- Neurons embody concepts.
- 

#### Overview of Neural Coding

- Neural coding is the study of how sensory information is represented and transformed in the brain.
    
- The goal is to understand how information is encoded in neural activity and how it can be decoded.
    
- Key focus: translating physical stimuli (e.g., sensory input, written language) into internal neural representations.
    

---

#### Brain Recording Techniques (From Large-Scale to Small-Scale)

1. **fMRI (Functional Magnetic Resonance Imaging)**
    
    - Non-invasive, used during task performance.
        
    - Measures blood oxygenation changes (BOLD signal).
        
    - Spatial resolution: ~1 mm³.
        
    - Slow temporal resolution (seconds).
        
    - Records averaged activity of millions of neurons.
        
2. **EEG (Electroencephalography)**
    
    - Non-invasive, high temporal resolution.
        
    - Captures electrical fields via scalp electrodes.
        
    - Noisy signal; averages many neuronal responses.
        
    - Suitable for real-time, awake human experiments.
        
3. **Multi-Electrode Arrays**
    
    - Used in direct neural tissue access (e.g., brain slices).
        
    - Electrodes ~10 microns in diameter.
        
    - Can record simultaneously from many neurons.
        
    - Examples: recordings from hippocampal slices.
        
4. **Penetrating Electrodes**
    
    - Used in behaving animals.
        
    - Electrodes penetrate tissue, record at different depths.
        
    - Newer versions allow adjustable electrode positioning.
        
5. **Calcium Imaging**
    
    - Uses calcium indicators to infer action potentials.
        
    - Allows visualization of activity across many neurons.
        
    - Can record deep brain activity via fiber optics.
        
6. **Patch-Clamp Electrophysiology**
    
    - Direct electrical contact with a single cell’s interior.
        
    - High-resolution intracellular recordings.
        

---

#### Understanding Neural Codes: The Retina Example

- **Retina as a Neural Model:**
    
    - Retinal ganglion cells output visual information.
        
    - A movie projected onto the retina elicits repeatable patterns of neural spikes.
        
    - Raster plots used to visualize spike timing across repeated stimuli.
        
- **Key Insights:**
    
    - Neurons respond selectively to features in the stimulus.
        
    - Different neurons encode different or overlapping features.
        
    - Investigates single neuron coding vs. population coding.
        

---

#### Encoding vs. Decoding in Neural Systems

- **Encoding:**
    
    - How a stimulus leads to a pattern of neural responses.
        
    - Goal: Model P(response∣stimulus)P(\text{response} \mid \text{stimulus})P(response∣stimulus).
        
- **Decoding:**
    
    - Inferring the stimulus from observed neural responses.
        
    - Goal: Model P(stimulus∣response)P(\text{stimulus} \mid \text{response})P(stimulus∣response).
        
- **Coding Models:**
    
    - Must define: proper stimulus representation, proper neural response measure, and their functional relationship.
        
    - Probabilistic models account for noise and unknown variables.
        

---

#### Tuning Curves and Functional Maps

1. **Tuning Curves:**
    
    - Measure firing rate vs. a stimulus parameter (e.g., orientation, direction).
        
    - Examples:
        
        - V1 neurons: Gaussian tuning to orientation.
            
        - Motor cortex: Cosine tuning to movement direction.
            
2. **Functional Maps:**
    
    - Cortical representation of preferred stimulus parameters.
        
    - Pinwheel structures in V1 reflect orientation tuning.
        
    - Maps of preferred spatial frequency in different species.
        

---

#### Complex and Semantic Representations

- **High-Level Representations:**
    
    - fMRI studies show regions selectively activated by semantic categories (e.g., faces, places).
        
    - Single neurons can respond to specific concepts (e.g., "Jennifer Aniston" neuron).
        
- **Generalization in High-Level Neurons:**
    
    - Some neurons respond to photos, drawings, names (even audio) of the same person.
        
    - Indicates conceptual coding beyond visual properties.
        

---

#### Hierarchical Processing and Feedback

- **Hierarchy of Features:**
    
    - Retina → LGN: simple receptive fields.
        
    - V1: oriented edges.
        
    - V4: contours.
        
    - IT/Temporal cortex: semantic categories.
        
- **Increasing Invariance:**
    
    - Higher areas less sensitive to low-level details (e.g., location, color).
        
    - Enables object recognition despite variation.
        
- **Feedback and Top-Down Effects:**
    
    - Thalamus receives feedback from cortex.
        
    - Semantic knowledge influences early visual representation.
        
    - Learning and expectations shape perception.

