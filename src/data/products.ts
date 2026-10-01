// Shared product data model for the Products Listing and Product Detail pages.
// All imagery uses the project's established https://placehold.co/<w>x<h> convention.

export interface SpecRow {
  label: string;
  value: string;
}

export interface ToolingCard {
  icon: string;
  title: string;
  desc: string;
  footer: string;
}

export interface ChartSeries {
  label: string;
  color: string;
  dashed?: boolean;
  points: string; // SVG path "d" attribute
}

export interface ComparisonStat {
  icon: string;
  label: string;
  stat: string;
  desc: string;
}

export interface ProductDetail {
  partNumber: string;
  certBadges: string[];
  longDescription: string;
  keySpecs: string[];
  tooling: {
    module: string;
    pressureAngle: string;
    cavitation: string;
    pressTonnage: string;
    toolLife: string;
  };
  mechanical: {
    rows: SpecRow[];
    chartNote: string;
    chartSeries: ChartSeries[];
    fatigueGain: string;
  };
  toolingArchitecture: ToolingCard[];
  quality: {
    desc: string;
    stats: SpecRow[];
    cpkLabel: string;
    cpkValue: string;
    cpkPercent: number;
  };
  certifications: SpecRow[];
  comparison: ComparisonStat[];
}

export interface Product {
  slug: string;
  partRef: string;
  title: string;
  categoryKey: 'powertrain' | 'interior' | 'electrical' | 'fluid' | 'tooling';
  category: string;
  image: string;
  thumbnails: { label: string; image: string }[];
  badges: string[];
  specLabel: string;
  specs: {
    polymer: string;
    tolerance: string;
    subSystem: string;
  };
  description: string;
  tags: string[];
  inStock: boolean;
  detail: ProductDetail;
}

export const resinMatrix = [
  {
    family: 'PA66 / Polyamide 66',
    code: 'ISO 1043: PA66',
    reinforcements: '15%–50% Glass Fiber, Heat Stabilized, Glycol Resistant',
    modulus: '8,500 – 15,000',
    hdt: '245°C',
    application: 'EV Battery Chillers, Engine Covers, Oil Separators',
    status: 'Faridabad & Hosur',
  },
  {
    family: 'POM Copolymer (Polyacetal)',
    code: 'ISO 1043: POM',
    reinforcements: 'Low Wear PTFE, Carbon Fiber, Mineral Anti-Static',
    modulus: '2,800 – 4,500',
    hdt: '110°C',
    application: 'Helical Drive Gears, Window Lift Sliders, Fuel Sender Flanges',
    status: 'Active Stock',
  },
  {
    family: 'PBT / Polybutylene Terephthalate',
    code: 'ISO 1043: PBT',
    reinforcements: '20%–30% Glass Filled, UL94-V0, Low Warpage',
    modulus: '6,000 – 10,200',
    hdt: '205°C',
    application: 'High Voltage EV Connectors, Ignition Coil Cases, ADAS Plugs',
    status: 'Active Stock',
  },
  {
    family: 'PPS (Polyphenylene Sulfide)',
    code: 'ISO 1043: PPS',
    reinforcements: '40% Glass & Mineral Hybrid, Extreme Chemical Shield',
    modulus: '14,000 – 18,500',
    hdt: '260°C',
    application: 'Electronic Water Pump Impellers, High-Heat E-Motor Bushings',
    status: 'Automotive Dedicated',
  },
  {
    family: 'PCR Circular Resins (r-PP & r-PA)',
    code: 'ESG Decarbonized',
    reinforcements: '30%–70% Certified Post-Consumer Recycled Content (ISCC+)',
    modulus: '1,800 – 4,800',
    hdt: '125°C',
    application: 'HVAC Ducts, Underbody Aero Shields, Wheel Arch Liners',
    status: 'Circular Certified',
  },
];

export const developmentSteps = [
  {
    number: '01',
    icon: 'Box',
    title: 'DFM & Moldflow',
    desc: 'Autodesk Moldflow warpage prediction, gate location analysis, and fiber orientation simulation before steel cutting.',
    footer: 'Lead: 5–7 Working Days',
  },
  {
    number: '02',
    icon: 'Cog',
    title: 'In-House CNC & EDM',
    desc: 'High-speed 5-axis Mazak milling and Sodick wire-cut EDM tooling centers maintaining ±0.002mm core/cavity precision.',
    footer: 'Hardened H13 & Stavax Steel',
  },
  {
    number: '03',
    icon: 'ScanLine',
    title: 'CMM 3D Metrology',
    desc: 'Zeiss bridge CMM and optical scanning providing complete 100-point dimensional verification and PPAP Level 3 documentation.',
    footer: 'Cp / Cpk > 1.67 Guarantee',
  },
  {
    number: '04',
    icon: 'Rocket',
    title: 'APQP Mass Ramp',
    desc: 'Automated multi-cavity injection molding with automated robotic sprue cutting, camera vision inspection, and Kan-ban delivery.',
    footer: '24/7 Automated Production',
  },
];

function lightDetail(opts: {
  partNumber: string;
  polymer: string;
  tolerance: string;
  application: string;
  tensile: string;
  hdt: string;
  module: string;
  comparisonLabel: string;
  comparisonStat: string;
}): ProductDetail {
  return {
    partNumber: opts.partNumber,
    certBadges: ['IATF 16949', 'ISO 9001', 'PPAP Level 3'],
    longDescription: `Engineered in ${opts.polymer} to hold ${opts.tolerance} process tolerance across high-volume automotive production runs, validated for ${opts.application}.`,
    keySpecs: [
      `Polymer Matrix: ${opts.polymer}`,
      `Process Tolerance: ${opts.tolerance}`,
      `Target Application: ${opts.application}`,
      'Operating Range: -40°C to +130°C',
    ],
    tooling: {
      module: opts.module,
      pressureAngle: '20° Standard',
      cavitation: '4-Cav. Valve Gate',
      pressTonnage: '120T Fanuc Roboshot',
      toolLife: '1M+ Shots',
    },
    mechanical: {
      rows: [
        { label: 'Base Polymer Composite', value: opts.polymer },
        { label: 'Tensile Yield Strength (23°C)', value: opts.tensile },
        { label: 'Heat Deflection Temp (1.8 MPa)', value: opts.hdt },
        { label: 'Continuous Working Temperature', value: '-40°C to +130°C' },
        { label: 'Linear Mold Shrinkage', value: '1.6% – 1.9% (Pre-compensated)' },
      ],
      chartNote: 'S-N fatigue endurance boundary based on 10,000,000 continuous production cycles.',
      chartSeries: [
        { label: 'Commercial Generic Resin', color: '#75777D', dashed: true, points: 'M 10 30 Q 80 65, 270 85' },
        { label: 'Rikki Engineering Compound', color: '#c91823', points: 'M 10 18 Q 90 32, 270 50' },
      ],
      fatigueGain: '+30% Over Standard',
    },
    toolingArchitecture: [
      {
        icon: 'HardHat',
        title: 'Steel Selection & Hardness',
        desc: 'Core & cavity inserts machined from hardened tool steel to resist abrasive micro-wear across long production runs.',
        footer: 'Machined tolerance: ±0.005 mm',
      },
      {
        icon: 'Flame',
        title: 'Hot Runner & Gating',
        desc: 'Sequential valve gate system ensuring uniform fill and consistent dimensional stability shot to shot.',
        footer: 'Cycle Time: ~20 seconds',
      },
      {
        icon: 'Bot',
        title: 'Robotic Degating & Vision',
        desc: 'Integrated robotic EOAT with 100% in-line vision inspection for flash, short-shot, and feature completeness.',
        footer: 'Automated ESD tray packaging',
      },
    ],
    quality: {
      desc: 'Every tool trial and production lot undergoes dimensional inspection via climate-controlled CMM labs at both Faridabad and Hosur.',
      stats: [
        { label: 'Dimensional Deviation', value: '≤ 0.010 mm' },
        { label: 'Surface Finish', value: 'SPI A-2 / B-1' },
        { label: 'First Article Approval', value: 'PPAP Level 3' },
      ],
      cpkLabel: 'Critical Dimension CPK',
      cpkValue: '1.70 (Target ≥ 1.67)',
      cpkPercent: 85,
    },
    certifications: [
      { label: 'Quality Management', value: 'IATF 16949:2016 / ISO 9001:2015' },
      { label: 'Material Compliance', value: 'IMDS Reported, RoHS & REACH Compliant' },
      { label: 'Flammability', value: 'UL94 Rated (where applicable)' },
      { label: 'Environmental', value: 'ELV Directive Conformant' },
    ],
    comparison: [
      { icon: 'Volume1', label: 'Acoustic Performance', stat: opts.comparisonStat, desc: opts.comparisonLabel },
      { icon: 'Wrench', label: 'Maintenance Interval', stat: 'Zero Lubrication', desc: 'Self-lubricating polymer blend eliminates scheduled greasing versus sintered metal.' },
      { icon: 'Feather', label: 'Mass Reduction', stat: 'Up to 60% Lighter', desc: 'Engineered polymer replaces sintered metal and die-cast components at a fraction of the mass.' },
    ],
  };
}

export const products: Product[] = [
  {
    slug: 'high-torque-helical-planetary-drive-gear',
    partRef: 'RKP-GR-8840',
    title: 'High-Torque Precision Helical & Planetary Drive Gear',
    categoryKey: 'powertrain',
    category: 'Powertrain & Drive Systems',
    image: 'https://placehold.co/800x600',
    thumbnails: [
      { label: 'Full Assembly', image: 'https://placehold.co/200x150' },
      { label: 'Cross Section', image: 'https://placehold.co/200x150' },
      { label: 'Moldflow Analysis', image: 'https://placehold.co/200x150' },
      { label: 'CMM Lab Sample', image: 'https://placehold.co/200x150' },
    ],
    badges: ['DIN 5–6 Class', 'EV Powertrain'],
    specLabel: '±0.005 mm',
    specs: {
      polymer: 'Polyacetal POM / PEEK',
      tolerance: 'DIN 3962 Cl. 5 / ±0.005mm',
      subSystem: 'Steer-by-Wire & EV Actuators',
    },
    description:
      'Micro-pitch gears optimized for acoustic dampening (<24dB) and high cyclic fatigue life under continuous reversing torque.',
    tags: ['EV Steer-by-Wire', 'Electronic Brake Boosters'],
    inStock: true,
    detail: {
      partNumber: 'RP-DRV-7420',
      certBadges: ['DIN 3962 Class 5', 'PPAP Level 3 Qualified', 'IMDS Reported'],
      longDescription:
        'Engineered for next-generation automotive electric actuators, electronic throttle bodies (ETB), electronic power steering (EPS), and steer-by-wire subsystems requiring zero backlash and ultra-quiet mechanical efficiency.',
      keySpecs: [
        'DIN 3962 Class 5 Precision',
        'POM-H + PTFE Tribo-Blend',
        'NVH Acoustic Profile <32 dB(A)',
        '-40°C to +130°C Operating',
      ],
      tooling: {
        module: '0.65 Mn',
        pressureAngle: '20° / Helix 15°',
        cavitation: '8-Cav. Valve Gate',
        pressTonnage: '120T Fanuc Roboshot',
        toolLife: '1.5M Shots (Class 101 SPI)',
      },
      mechanical: {
        rows: [
          { label: 'Base Polymer Composite', value: 'Delrin® 500AF / PEEK 450FC30 Option' },
          { label: 'Tensile Yield Strength (23°C)', value: '75.0 MPa (Standard POM) / 135 MPa (PEEK)' },
          { label: 'Flexural Modulus (ISO 178)', value: '3,100 MPa' },
          { label: 'Izod Notched Impact Strength', value: '6.5 kJ/m²' },
          { label: 'Static Coefficient of Friction (Dry)', value: '0.14 μ (Self-Lubricating)' },
          { label: 'Continuous Working Temperature', value: '-40°C to +130°C (+160°C Excursion)' },
          { label: 'Linear Mold Shrinkage (Flow / Cross)', value: '1.8% / 1.7% (Pre-compensated)' },
        ],
        chartNote:
          'S-N Wöhler fatigue endurance boundary based on 10,000,000 continuous drive cycles under 18.5 Nm stall torque loading.',
        chartSeries: [
          { label: 'Commercial Generic POM', color: '#75777D', dashed: true, points: 'M 10 30 Q 80 65, 270 85' },
          { label: 'Rikki High-Torque Compound', color: '#c91823', points: 'M 10 18 Q 90 32, 270 50' },
        ],
        fatigueGain: '+42% Over Standard',
      },
      toolingArchitecture: [
        {
          icon: 'HardHat',
          title: 'Steel Selection & Hardness',
          desc: 'Core & Cavity inserts crafted from Bohler M333 ISOPLAST / Uddeholm Stavax ESR hardened to 54±1 HRC with DLC coatings to resist abrasive micro-wear.',
          footer: 'Machined tolerance: ±0.002 mm',
        },
        {
          icon: 'Flame',
          title: 'Hot Runner & Gating',
          desc: 'Mold-Masters 8-drop sequential valve gate system guaranteeing zero vestige and uniform radial fill to prevent tooth pitch distortion and anisotropic shrink warpage.',
          footer: 'Cycle Time: 18.2 seconds',
        },
        {
          icon: 'Bot',
          title: 'Robotic Degating & Vision',
          desc: 'Integrated Fanuc 6-axis clean-room robot with vacuum end-of-arm tooling (EOAT). Instant 100% in-line Keyence vision check for flash, short-shot, and tooth completeness.',
          footer: 'Automated ESD tray packaging',
        },
      ],
      quality: {
        desc: 'Every tool trial and production lot undergoes gear inspection via our climate-controlled Zeiss Prismo 3D CMM and Klingelnberg Gear Inspection Centers. Gear topography reports are generated for individual tooth pitch variation (fp), total profile error (Fα), and total helix deviation (Fβ).',
        stats: [
          { label: 'Profile Deviation (Fα)', value: '≤ 0.005 mm' },
          { label: 'Helix Deviation (Fβ)', value: '≤ 0.007 mm' },
          { label: 'Radial Runout (Fr)', value: '≤ 0.006 mm' },
        ],
        cpkLabel: 'Critical Pitch Index CPK',
        cpkValue: '1.82 (Target ≥ 1.67)',
        cpkPercent: 88,
      },
      certifications: [
        { label: 'Quality Management', value: 'IATF 16949:2016 / ISO 9001:2015' },
        { label: 'Material Compliance', value: 'IMDS ID #8849201, RoHS & REACH Compliant' },
        { label: 'Gear Accuracy', value: 'ISO 1328 Cylindrical Gear Class 5' },
        { label: 'Environmental', value: 'ELV Directive Conformant' },
      ],
      comparison: [
        { icon: 'Volume1', label: 'Acoustic Performance', stat: '<32 dB(A)', desc: 'Zero-backlash tooth profile and internal damping eliminate the metallic whine typical of sintered steel gear trains.' },
        { icon: 'Wrench', label: 'Maintenance Interval', stat: 'Zero Lubrication', desc: 'Self-lubricating PTFE tribo-blend eliminates scheduled greasing required by sintered metal gear sets.' },
        { icon: 'Feather', label: 'Mass Reduction', stat: '58% Lighter', desc: 'Engineered polymer gear replaces sintered metal assemblies at a fraction of the rotating mass.' },
      ],
    },
  },
  {
    slug: 'sensor-housings-connector-enclosures',
    partRef: 'RKP-ECU-419',
    title: 'Sensor Housings & Connector Enclosures',
    categoryKey: 'electrical',
    category: 'Electrical & Sensor Housings',
    image: 'https://placehold.co/800x600',
    thumbnails: [
      { label: 'Full Assembly', image: 'https://placehold.co/200x150' },
      { label: 'Cross Section', image: 'https://placehold.co/200x150' },
    ],
    badges: ['IP6K9K Hermetic', 'Insert Molded'],
    specLabel: 'UL94-V0',
    specs: {
      polymer: 'PBT-GF30 (Hydrolysis Resistant)',
      tolerance: 'IP6K9K Sealed, ±0.010 mm',
      subSystem: 'ADAS Radar, BMS & Motor ECUs',
    },
    description:
      'Engineered with multi-station insert-molding brass pins and continuous laser weld profiles for extreme underhood conditions.',
    tags: ['BMS Master Modules', '77GHz Radar Mounts'],
    inStock: true,
    detail: lightDetail({
      partNumber: 'RP-ECU-419',
      polymer: 'PBT-GF30 Hydrolysis Stabilized',
      tolerance: 'IP6K9K Sealed, ±0.010 mm',
      application: 'BMS Master Modules, 77GHz Radar Mounts',
      tensile: '115 MPa',
      hdt: '205°C',
      module: 'N/A (Enclosure)',
      comparisonLabel: 'Laser-welded hermetic seal removes gasket degradation risk versus die-cast metal housings.',
      comparisonStat: 'IP6K9K Sealed',
    }),
  },
  {
    slug: 'cooling-thermal-fluid-manifolds',
    partRef: 'RKP-FL-1092',
    title: 'Cooling & Thermal Fluid Manifolds',
    categoryKey: 'fluid',
    category: 'Fluid & Thermal Management',
    image: 'https://placehold.co/800x600',
    thumbnails: [
      { label: 'Full Assembly', image: 'https://placehold.co/200x150' },
      { label: 'Cross Section', image: 'https://placehold.co/200x150' },
    ],
    badges: ['>18 Bar Burst', '-40°C to +150°C'],
    specLabel: 'PA66-GF35',
    specs: {
      polymer: 'PA66-GF35 Heat Stabilized',
      tolerance: 'Burst >18.5 Bar @ 125°C',
      subSystem: 'EV Battery Chillers & E-Axle',
    },
    description:
      'Vibration-welded multi-chamber cooling assembly engineered to resist aggressive ethylene-glycol anti-freeze cycling.',
    tags: ['High Voltage Battery Thermal Management'],
    inStock: true,
    detail: lightDetail({
      partNumber: 'RP-FLM-1092',
      polymer: 'PA66-GF35 Heat Aged 1500h',
      tolerance: 'Burst >18 Bar, -40°C to 150°C',
      application: 'High Voltage Battery Thermal Management',
      tensile: '180 MPa',
      hdt: '245°C',
      module: 'N/A (Manifold)',
      comparisonLabel: 'Vibration-welded polymer manifold resists corrosion that affects aluminium coolant lines.',
      comparisonStat: '>18.5 Bar Burst',
    }),
  },
  {
    slug: 'hvac-actuator-air-flap-assemblies',
    partRef: 'RKP-HV-702',
    title: 'HVAC Actuator & Air Flap Assemblies',
    categoryKey: 'interior',
    category: 'Automotive Interior & Dashboard',
    image: 'https://placehold.co/800x600',
    thumbnails: [
      { label: 'Full Assembly', image: 'https://placehold.co/200x150' },
      { label: 'Cross Section', image: 'https://placehold.co/200x150' },
    ],
    badges: ['<28 dB Acoustic', 'Low-NVH'],
    specLabel: 'PTFE Lubed',
    specs: {
      polymer: 'POM + PTFE Low-Friction Alloy',
      tolerance: 'Acoustic <28dB, Torque 1.8 Nm',
      subSystem: 'Dual-Zone Automotive Climate Unit',
    },
    description:
      'Zero-backlash gear segment geometry providing whisper-quiet damper valve modulation across 300,000 continuous cycle tests.',
    tags: ['Automotive Climate Control HVAC'],
    inStock: true,
    detail: lightDetail({
      partNumber: 'RP-HVA-702',
      polymer: 'POM + 15% PTFE Internal Lube',
      tolerance: 'Acoustic <28dB, Torque 1.8 Nm',
      application: 'Automotive Climate Control HVAC',
      tensile: '68 MPa',
      hdt: '110°C',
      module: '0.5 Mn',
      comparisonLabel: 'Internally lubricated gear segments eliminate the audible clicking common to metal-geared actuators.',
      comparisonStat: '<28 dB(A)',
    }),
  },
  {
    slug: 'high-load-engine-bushings-dampers',
    partRef: 'RKP-BS-5310',
    title: 'High-Load Engine Bushings & Dampers',
    categoryKey: 'powertrain',
    category: 'Powertrain & Drive Systems',
    image: 'https://placehold.co/800x600',
    thumbnails: [
      { label: 'Full Assembly', image: 'https://placehold.co/200x150' },
      { label: 'Cross Section', image: 'https://placehold.co/200x150' },
    ],
    badges: ['Tribological', 'Heavy Duty'],
    specLabel: 'PPS / PA46',
    specs: {
      polymer: 'PA46 / PPS Self-Lubricating',
      tolerance: '>190 MPa compressive yield',
      subSystem: 'Steering Columns & Anti-Roll Bar',
    },
    description:
      'Self-lubricating bushing and damper sleeves engineered for continuous high-compressive load cycling in chassis and steering sub-systems.',
    tags: ['Steering Columns', 'Anti-Roll Bar Mounts'],
    inStock: true,
    detail: lightDetail({
      partNumber: 'RP-BSH-5310',
      polymer: 'PA46 / PPS Self-Lubricating',
      tolerance: '>190 MPa compressive yield',
      application: 'Steering Columns & Anti-Roll Bar',
      tensile: '190 MPa',
      hdt: '260°C',
      module: 'N/A (Bushing)',
      comparisonLabel: 'Self-lubricating polymer sleeve removes the need for grease nipples required on bronze bushings.',
      comparisonStat: 'Zero Grease',
    }),
  },
  {
    slug: 'electro-mechanical-switch-gear-cases',
    partRef: 'RKP-SW-1187',
    title: 'Electro-Mechanical Switch Gear Cases',
    categoryKey: 'electrical',
    category: 'Electrical & Sensor Housings',
    image: 'https://placehold.co/800x600',
    thumbnails: [
      { label: 'Full Assembly', image: 'https://placehold.co/200x150' },
      { label: 'Cross Section', image: 'https://placehold.co/200x150' },
    ],
    badges: ['Dielectric >25 kV/mm', 'Flame Retardant'],
    specLabel: 'UL94-V0',
    specs: {
      polymer: 'Flame Retardant PC/ABS UL94-V0',
      tolerance: 'Dielectric >25 kV/mm, ±0.02 mm',
      subSystem: 'Steering Wheel Controls & Driver Switchgear',
    },
    description:
      'Flame-retardant switch gear casings engineered for repeated tactile cycling and high dielectric isolation in driver-facing controls.',
    tags: ['Steering Wheel Controls', 'Driver Switchgear'],
    inStock: true,
    detail: lightDetail({
      partNumber: 'RP-SWG-1187',
      polymer: 'Flame Retardant PC/ABS UL94-V0',
      tolerance: 'Dielectric >25 kV/mm, ±0.02 mm',
      application: 'Steering Wheel Controls & Driver Switchgear',
      tensile: '60 MPa',
      hdt: '98°C',
      module: 'N/A (Enclosure)',
      comparisonLabel: 'High dielectric polymer casing removes short-circuit risk inherent to uncoated metal switch housings.',
      comparisonStat: '>25 kV/mm',
    }),
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}

export const categoryFilters: { key: Product['categoryKey'] | 'all'; label: string }[] = [
  { key: 'all', label: 'All Products' },
  { key: 'powertrain', label: 'Powertrain & Drive Systems' },
  { key: 'interior', label: 'Automotive Interior & Dashboard' },
  { key: 'electrical', label: 'Electrical & Sensor Housings' },
  { key: 'fluid', label: 'Fluid & Thermal Management' },
];
