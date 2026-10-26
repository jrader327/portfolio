// All site copy lives here so it can be updated without touching components.
// Items marked TODO need real links or details filled in.

export const profile = {
  name: 'Jackson Rader',
  initials: 'JR',
  title: 'Mechanical Engineering Student & Prototyping Enthusiast',
  school: 'Boston University, College of Engineering',
  degree: 'B.S. Mechanical Engineering',
  gradDate: 'Expected May 2028',
  location: 'Boston, MA',
  email: 'jrader327@gmail.com',
  phone: '203-715-6308',
  linkedin: 'https://www.linkedin.com/in/jackson-rader-b03550187',
  resume: './Jackson_Rader_Resume.pdf',
}

export const coursework = ['Engineering Design', 'Energy & Thermodynamics', 'Mechanics', 'Circuits']

export const categories = ['All', 'CAD & Design', 'FEA & Simulation', 'Hardware & Robotics', 'Hands-On / Fabrication']

export const projects = [
  {
    id: 'desktop-robot',
    title: 'Animated Desktop Robot',
    status: 'In Progress',
    categories: ['Hardware & Robotics', 'CAD & Design', 'Hands-On / Fabrication'],
    tools: ['Fusion 360', 'Arduino', '3D Printing', 'Soldering'],
    summary:
      'A desk-sized companion robot designed end to end: mechanical CAD, 3D-printed shell, wiring harness, and embedded firmware.',
    overview:
      'A solo build covering every layer of a small electromechanical product. The robot expresses emotion through an LED face, moves its head and arms with servos, and speaks through an onboard text-to-speech module, all from a rechargeable pack.',
    specs: [
      ['Display', '8×8 LED matrix for facial expressions'],
      ['Actuation', '3 hobby servos (head pan + two arms)'],
      ['Audio', 'Text-to-speech module with onboard speaker'],
      ['Power', 'Rechargeable battery pack'],
      ['Controller', 'Arduino-based microcontroller'],
      ['Enclosure', 'FDM 3D-printed shell, modeled in Fusion 360'],
    ],
    constraints: [
      'Desk-sized footprint with all electronics packaged inside the shell',
      'Servo mounts must carry head and arm loads without visible flex',
      'Shell must be printable without heavy supports and open for battery access',
      'Untethered operation on battery power',
    ],
  },
  {
    id: 'whack-a-mole',
    title: 'Adaptable Whack-A-Mole Device',
    status: 'Team Project',
    categories: ['Hardware & Robotics', 'CAD & Design'],
    tools: ['Arduino', 'CAD', 'Circuit Prototyping', 'Laser Cutting'],
    summary:
      'An assistive whack-a-mole game with adjustable difficulty, built to support motor skill development in children.',
    overview:
      'Co-designed with a team as a human-centered design project. The device turns repetitive motor-skill practice into a game, with difficulty that can be tuned to the user so it stays challenging without being frustrating.',
    specs: [
      ['Users', 'Children developing motor skills'],
      ['Difficulty', 'Adjustable target timing / speed'],
      ['Input', 'Hit-detecting targets'],
      ['Feedback', 'Visual cues for active targets'],
    ],
    constraints: [
      'Safe for children: no pinch points, sharp edges, or exposed wiring',
      'Durable enough to withstand repeated impacts',
      'Difficulty must be adjustable by a caregiver without tools',
      'Intuitive enough to use without written instructions',
    ],
  },
  {
    id: 'wireless-comm',
    title: 'Point-to-Point Wireless Communication Device',
    status: 'Team Project',
    categories: ['Hardware & Robotics'],
    tools: ['Arduino', 'Circuit Prototyping', 'Soldering'],
    summary:
      'A pair of prototyped wireless devices that send and display text messages between each other.',
    overview:
      'A team project to design and build two matched devices that transmit messages wirelessly and show them on an onboard display, validated by successful messaging at the target range.',
    specs: [
      ['Topology', 'Point-to-point, two matched units'],
      ['Verified range', '5 ft'],
      ['Output', 'Onboard message display'],
    ],
    constraints: [
      'Both units must send and receive',
      'Reliable message delivery at the specified range',
      'Built from prototyping-level components',
    ],
  },
  {
    id: 'photo-booth',
    title: 'Raspberry Pi Event Photo Booth',
    status: 'Deployed at Events',
    categories: ['Hardware & Robotics'],
    tools: ['Python', 'Raspberry Pi'],
    summary:
      'A Python photo booth application for live events with camera auto-detection, themed templates, and QR-code photo delivery.',
    overview:
      'A self-contained photo booth built on a Raspberry Pi. Guests take photos that are composited into event-themed templates, then scan a QR code to get their photos on their phones, with no app or cables needed.',
    specs: [
      ['Platform', 'Raspberry Pi'],
      ['Language', 'Python'],
      ['Camera', 'Auto-detection of connected cameras'],
      ['Output', 'Custom themed photo templates'],
      ['Delivery', 'QR code download to guest phones'],
    ],
    constraints: [
      'Runs unattended through a live event',
      'Works with whatever camera is plugged in',
      'Delivers photos without guests installing anything',
    ],
  },
  {
    id: 'roller-coaster',
    title: 'Scale-Model Roller Coaster Components',
    status: 'Terrier Ride Engineering',
    categories: ['Hands-On / Fabrication', 'CAD & Design'],
    tools: ['SolidWorks', 'Milling', '3D Printing', 'Laser Cutting'],
    summary:
      'Track and structural components for a scale-model roller coaster entered in a collegiate engineering competition.',
    overview:
      'As a build team member, I take parts from 3D CAD models through machining and manufacturing to finished components that are assembled into the competition coaster.',
    specs: [
      ['Scope', 'Track and structural members'],
      ['Workflow', '3D CAD → manufacturing plan → finished part'],
      ['Processes', 'Milling, additive, and laser-cut parts'],
      ['Context', 'Collegiate ride engineering competition'],
    ],
    constraints: [
      'Track geometry must stay within tolerance for a smooth ride',
      'Structure must carry dynamic loads from the moving train',
      'Parts must be manufacturable with club shop equipment',
      'Must meet competition rules and deadlines',
    ],
  },
  {
    id: 'rocket-propulsion',
    title: 'Liquid Rocket Engine Hardware',
    status: 'Rocket Propulsion Group',
    categories: ['Hands-On / Fabrication', 'FEA & Simulation'],
    tools: ['Milling', 'MATLAB', 'Fluid Mechanics', 'Propulsion'],
    summary:
      'Machining metal components and applying propulsion fundamentals for a team aiming to launch the first collegiate liquid-fueled rocket to space.',
    overview:
      'I machine metal components from the team’s mechanical designs and simulations, and apply fluid properties and propulsion fundamentals to the liquid rocket engine and propulsion system components.',
    specs: [
      ['Mission', 'First collegiate liquid-fueled rocket to space'],
      ['Role', 'Machining + propulsion system support'],
      ['Material', 'Metal flight and test hardware'],
      ['Analysis', 'Fluid properties and propulsion fundamentals'],
    ],
    constraints: [
      'Tight tolerances on parts that carry pressurized propellant',
      'Machined parts must match simulation-validated designs',
      'Materials must be compatible with the propellants in use',
    ],
  },
  {
    id: 'architecture-models',
    title: 'Architectural Concept Models',
    status: 'Pickard Chilton',
    categories: ['CAD & Design', 'Hands-On / Fabrication'],
    tools: ['Revit', 'AutoCAD', 'Laser Cutting', 'Model Making'],
    summary:
      'Physical and digital models that communicated design concepts for commercial architecture projects.',
    overview:
      'During an architecture apprenticeship, I built physical and digital models used to communicate design concepts for commercial projects, and followed those projects from concept through final construction.',
    specs: [
      ['Project type', 'Commercial architecture'],
      ['Deliverables', 'Physical scale models + digital models'],
      ['Lifecycle', 'Concept through final construction'],
    ],
    constraints: [
      'Models must read clearly to clients and design teams',
      'Accurate scale and proportion',
      'Fast turnaround to keep pace with design reviews',
    ],
  },
]

export const experience = [
  {
    org: 'BU Terrier Ride Engineering Club',
    role: 'Team Build Member',
    dates: 'Sep 2026 – Present',
    location: 'Boston, MA',
    type: 'Engineering',
    points: [
      'Design and fabricate track and structural components for a scale-model roller coaster entered in a collegiate engineering competition',
      'Take parts from 3D CAD models to finished components through machining and manufacturing processes',
    ],
  },
  {
    org: 'BU Rocket Propulsion Group',
    role: 'Member',
    dates: 'Sep 2025 – Present',
    location: 'Boston, MA',
    type: 'Engineering',
    points: [
      'Machine metal components from mechanical designs and simulations for a team aiming to launch the first collegiate liquid-fueled rocket to space',
      'Apply fluid properties and propulsion fundamentals to liquid rocket engine design and propulsion system components',
    ],
  },
  {
    org: 'Tau Kappa Epsilon, Boston University',
    role: 'Former President · previously Treasurer & Historian',
    dates: 'Leadership',
    location: 'Boston, MA',
    type: 'Leadership',
    points: [
      'Led the chapter as President after serving as Treasurer, managing chapter finances, and as Historian',
      'Raised over $10,000 for St. Jude Children’s Research Hospital by organizing chapter charity events',
      'Designed social media promotion for chapter events, including sponsored content with Red Bull, Spikeball, and Raising Cane’s',
    ],
  },
  {
    org: 'Pickard Chilton',
    role: 'Architecture Apprentice',
    dates: 'Sep 2023 – May 2024',
    location: 'New Haven, CT',
    type: 'Industry',
    points: [
      'Built physical and digital models to communicate design concepts for commercial projects, following them from concept through final construction',
    ],
  },
]

export const skillGroups = [
  {
    name: 'CAD & Design',
    icon: 'compass',
    skills: ['SolidWorks', 'Fusion 360', 'Onshape', 'AutoCAD', 'Revit'],
  },
  {
    name: 'Prototyping & Fabrication',
    icon: 'wrench',
    skills: ['Milling', '3D Printing', 'Laser Cutting', 'Soldering', 'Circuit Prototyping'],
  },
  {
    name: 'Programming & Electronics',
    icon: 'cpu',
    skills: ['MATLAB', 'Python', 'Arduino', 'Raspberry Pi', 'Oscilloscope'],
  },
]
