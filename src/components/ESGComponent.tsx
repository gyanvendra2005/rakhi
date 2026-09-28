'use client';

import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Download,
  MapPin,
  ShieldCheck,
  ClipboardCheck,
  CalendarClock,
  FileText,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function RedPillCTA({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="btn-red-pill">
      <div className="btn-cir">
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="btn-text">{label}</div>
    </a>
  );
}

const sdgGoals = [
  {
    number: '04',
    ref: 'SDG 4.4',
    title: 'Quality Education',
    text: 'We have set up computer and skills labs in schools near our Faridabad and Sanand plants, mostly for children of families in our supply chain.',
  },
  {
    number: '05',
    ref: 'SDG 5.5',
    title: 'Gender Equality',
    text: 'Our polytechnic scholarship programme is deliberately weighted toward young women, and we run an all-women line on one of our tooling shifts.',
  },
  {
    number: '08',
    ref: 'SDG 8.2',
    title: 'Decent Work & Growth',
    text: 'Apprenticeships lead to real jobs on the shop floor, and we track safety incidents closely rather than treating it as a reporting formality.',
  },
  {
    number: '09',
    ref: 'SDG 9.4',
    title: 'Industry & Innovation',
    text: 'We replaced most of our hydraulic presses with electric ones over the last few years — quieter, more precise, and cheaper to run.',
  },
  {
    number: '12',
    ref: 'SDG 12.5',
    title: 'Responsible Production',
    text: 'Regrind from our own trimmings and purge goes back into production wherever the part tolerances allow it.',
  },
  {
    number: '13',
    ref: 'SDG 13.2',
    title: 'Climate Action',
    text: 'Rooftop solar covers a meaningful share of daytime plant load, and we keep chasing down the rest through efficiency projects.',
  },
];

const csrEnvironmentCards = [
  {
    image: 'https://placehold.co/200x200',
    title: 'Waste Management',
    text: 'Polymer trimmings and purged plastic are granulated and reprocessed on-site instead of going to landfill.',
  },
  {
    image: 'https://placehold.co/200x200',
    title: 'Energy Conservation',
    text: 'Older hydraulic machines are being phased out in favour of servo-drive units that use noticeably less power per kilogram of output.',
  },
  {
    image: 'https://placehold.co/200x200',
    title: 'Green Belts & Agro',
    text: 'We plant native species around our plant boundaries and help nearby farmers with rainwater catchment for their fields.',
  },
  {
    image: 'https://placehold.co/200x200',
    title: 'Renewable & GHG',
    text: 'Rooftop solar panels at our Faridabad site feed directly into the press lines, cutting the load we draw from the grid.',
  },
];

const csrPillars = [
  {
    label: 'PILLAR 01',
    title: 'Education & Skill Development',
    text: 'Supporting schools and polytechnic pathways for young people near our plants.',
  },
  {
    label: 'PILLAR 02',
    title: 'Health & Well-being',
    text: 'Mobile health camps, maternal health awareness sessions, and better sanitation in nearby villages.',
  },
  {
    label: 'PILLAR 03',
    title: 'Resource Conservation',
    text: 'Watershed and rainwater work with local farmers, plus tree planting around our facilities.',
  },
  {
    label: 'PILLAR 04',
    title: 'Community Engagement',
    text: 'Working with village councils on local priorities and pitching in during disaster relief when it is needed.',
  },
];

const policyClauses = [
  {
    num: '01',
    title: 'Local Perimeter Empowerment',
    text: 'We focus most of our CSR spend within a reasonable radius of our manufacturing sites, where our presence is most direct.',
  },
  {
    num: '02',
    title: 'Technical Apprenticeship & Equity',
    text: 'We prioritise gender-balanced vocational training and tooling certifications for graduates from nearby schools.',
  },
  {
    num: '03',
    title: 'Resource Circularity & Stewardship',
    text: 'Water and energy conservation are built into how we design new facilities, not treated as an afterthought.',
  },
  {
    num: '04',
    title: 'Employee Civic Action',
    text: 'Employees get paid time each year to volunteer on approved community projects.',
  },
];

const monitoringCards = [
  {
    Icon: ClipboardCheck,
    title: 'Impact Tracking',
    text: 'Funded initiatives are reviewed at the start, midway through, and after completion, so we know what actually worked.',
  },
  {
    Icon: CalendarClock,
    title: 'Periodic Review',
    text: 'The CSR committee checks progress against budget every quarter rather than waiting for year-end.',
  },
  {
    Icon: FileText,
    title: 'Responsible Reporting',
    text: 'Our CSR filings go to the Ministry of Corporate Affairs every year, and the numbers are available on request.',
  },
];

const caseStudies = [
  {
    tag: 'DECARBONIZATION',
    date: 'September 2024',
    title: 'What it actually takes to run a closed-loop mould shop',
    text: 'Notes from switching one of our automotive lines over to a closed-loop regrind process without giving up on NVH tolerances.',
    img: 'https://placehold.co/600x400',
  },
  {
    tag: 'MATERIALS',
    date: 'July 2024',
    title: 'Where recycled content works in automotive parts — and where it doesn’t yet',
    text: 'An honest look at which components can take recycled polyamide today, and which ones still need virgin resin.',
    img: 'https://placehold.co/600x400',
  },
  {
    tag: 'PEOPLE',
    date: 'February 2025',
    title: 'A conversation with our materials team about what comes next',
    text: 'Our materials lead talks through the roadmap for reducing virgin plastic use over the next few years.',
    img: 'https://placehold.co/600x400',
  },
];

function Eyebrow({
  children,
  ...rest
}: { children: React.ReactNode } & Record<string, unknown>) {
  return (
    <div className="overview-eyebrow" {...rest}>
      {children}
      <span className="red-line" style={{ width: '48px' }}></span>
    </div>
  );
}

function IconBadge({ Icon }: { Icon: React.ElementType }) {
  return (
    <div
      className="icon-badge w-11 h-11 rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: '#fdecec', color: 'var(--primary-red)' }}
    >
      <Icon size={20} strokeWidth={1.8} />
    </div>
  );
}

export default function ESGComponent() {
  return (
    <div className="w-full bg-white text-slate-900 antialiased">
      <ScrollReveal />
      {/* HERO SECTION */}
      <section className="relative w-full bg-surface-dark text-white overflow-hidden py-16 md:py-24 border-b border-slate-800">
        <div
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage:
              "url('https://placehold.co/600x400')",
          }}
        ></div>
        <div className="relative z-10 container-global flex flex-col gap-10">
          <div className="max-w-3xl flex flex-col gap-4">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
              style={{ color: 'var(--primary-red)' }}
              data-reveal
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-red)' }}></span>
              Sustainability &amp; Governance
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
              data-reveal
              data-reveal-delay="1"
            >
              Our approach to ESG at Rikki Plastic
            </h1>
            <p
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
              data-reveal
              data-reveal-delay="2"
            >
              We make precision plastic components for automotive OEMs, and that means our environmental footprint,
              our people, and our neighbours near our plants all matter to how we run the business — not as a side
              project, but as part of day-to-day operations.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4" data-reveal data-reveal-delay="3">
              <RedPillCTA href="#csr" label="Explore CSR Programmes" />
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold tracking-wide transition-colors border border-white/20"
                href="#governance-report"
              >
                <Download size={16} />
                <span>Download 2024 ESG Report</span>
              </a>
            </div>
          </div>

          {/* Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div
              className="bg-white/5 rounded-xl p-5 border border-slate-800 flex flex-col justify-between"
              data-reveal="scale"
              data-reveal-delay="1"
            >
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Carbon Intensity</span>
              <div className="my-2">
                <span className="text-3xl font-extrabold text-white tracking-tight">-42.6%</span>
              </div>
              <span className="text-xs text-slate-400">Scope 1 &amp; 2 reduction vs. 2020 baseline</span>
            </div>
            <div
              className="bg-white/5 rounded-xl p-5 border border-slate-800 flex flex-col justify-between"
              data-reveal="scale"
              data-reveal-delay="2"
            >
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">PCR Polymer Share</span>
              <div className="my-2">
                <span className="text-3xl font-extrabold text-white tracking-tight">68.4%</span>
              </div>
              <span className="text-xs text-slate-400">Integrated in automotive drive lines</span>
            </div>
            <div
              className="bg-white/5 rounded-xl p-5 border border-slate-800 flex flex-col justify-between"
              data-reveal="scale"
              data-reveal-delay="3"
            >
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Renewable Power</span>
              <div className="my-2">
                <span className="text-3xl font-extrabold text-white tracking-tight">100%</span>
              </div>
              <span className="text-xs text-slate-400">Faridabad operational plants grid</span>
            </div>
            <div
              className="bg-white/5 rounded-xl p-5 border border-slate-800 flex flex-col justify-between"
              data-reveal="scale"
              data-reveal-delay="4"
            >
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Audit Standards</span>
              <div className="my-2">
                <span className="text-3xl font-extrabold tracking-tight text-[var(--primary-red)]">GRI / IATF</span>
              </div>
              <span className="text-xs text-slate-400">Dual-accredited independent verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: United Nations SDGs */}
      <section className="w-full py-16 lg:py-20 bg-white" id="esg">
        <div className="container-global flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="max-w-3xl flex flex-col gap-2">
              <Eyebrow data-reveal="left">Global Alignment</Eyebrow>
              <h2
                className="overview-heading"
                style={{ marginBottom: 0, textTransform: 'none' }}
                data-reveal="left"
                data-reveal-delay="1"
              >
                Where we line up with the <span className="overview-heading-red">UN Sustainable Development Goals</span>
              </h2>
              <p
                className="overview-text"
                style={{ fontSize: '15px', marginTop: '0.5rem' }}
                data-reveal="left"
                data-reveal-delay="2"
              >
                We don&apos;t claim to move the needle on all 17 SDGs — but there are a handful where our operations and
                our CSR work genuinely overlap, and that&apos;s where we&apos;ve chosen to focus.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group shrink-0"
              style={{ color: 'var(--primary-red)' }}
              href="#governance-report"
            >
              <span>View our full ESG report</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Spotlight Card */}
            <div
              className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 lg:p-7 border border-slate-200 flex flex-col justify-between group"
              data-reveal="left"
            >
              <div className="flex flex-col gap-3">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit"
                  style={{ backgroundColor: '#fdecec', color: 'var(--primary-red)' }}
                >
                  Circularity in Action
                </span>
                <h3 className="text-xl font-bold text-slate-900">Decarbonizing our polymer supply chain</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We blend recycled feedstock into precision drive-gear parts wherever the tolerances allow it — the
                  goal is to displace virgin resin without compromising on what the OEM actually needs.
                </p>
              </div>
              <div className="my-5 relative w-full h-48 rounded-xl overflow-hidden border border-slate-200">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Stylized artistic visual of planet earth integrated with green bio-polymers"
                  src="https://placehold.co/600x400"
                />
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-medium border-t border-slate-200">
                <span>Audited standard: GRI 301/302</span>
                <span className="font-semibold" style={{ color: 'var(--primary-red)' }}>ISO 14001:2015</span>
              </div>
            </div>

            {/* SDG Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sdgGoals.map((goal, idx) => (
                <div
                  key={goal.number}
                  className="sdg-card"
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <div className="flex items-center justify-between">
                    <span className="sdg-card-number">{goal.number}</span>
                    <span className="text-xs text-slate-400 font-mono">{goal.ref}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">{goal.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{goal.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CSR - Commitment & Environment */}
      <section className="w-full py-16 lg:py-20 bg-slate-50 border-y border-outline-border" id="csr">
        <div className="container-global flex flex-col gap-16">
          {/* Part A: Creating a Difference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <Eyebrow data-reveal="left">Our Commitment</Eyebrow>
              <h2
                className="overview-heading"
                style={{ marginBottom: 0 }}
                data-reveal="left"
                data-reveal-delay="1"
              >
                Creating a <span className="overview-heading-red">Difference</span>
              </h2>
              <p className="overview-text" style={{ fontSize: '15px' }} data-reveal="left" data-reveal-delay="2">
                The Rikki Plastic CSR Foundation works close to home — in the towns around our plants in Ballabgarh,
                Faridabad, and Sanand. Our focus areas are rural education, preventative health, water conservation,
                and vocational training, chosen because they are the things our neighbours actually ask for.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="esg-card esg-card-static">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Communities Reached</span>
                  <span className="text-2xl font-extrabold mt-2" style={{ color: 'var(--primary-red)' }}>120,000+</span>
                  <span className="text-xs text-slate-500 mt-1">across our village programmes to date</span>
                </div>
                <div className="esg-card esg-card-static">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Villages Adopted</span>
                  <span className="text-2xl font-extrabold text-slate-900 mt-2">48</span>
                  <span className="text-xs text-slate-500 mt-1">under multi-year development plans</span>
                </div>
              </div>
              <div className="pt-2">
                <RedPillCTA href="#national" label="Know More" />
              </div>
            </div>

            <div className="lg:col-span-6" data-reveal="right">
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-slate-200 group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Indian school children sitting attentively in uniform inside a modern renovated bright rural classroom"
                  src="https://placehold.co/600x400"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-5 rounded-xl text-white border border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-red)' }}></span>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary-red)' }}>
                      Flagship Project: Vidya Jyoti
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Upgrading rural school infrastructure — science labs, clean sanitation, and basic computer literacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Commitment to Environment */}
          <div className="flex flex-col gap-8 pt-6 border-t border-slate-200">
            <div>
              <Eyebrow data-reveal="left">Ecological Stewardship</Eyebrow>
              <h2
                className="overview-heading"
                style={{ marginBottom: 0, marginTop: '0.25rem' }}
                data-reveal="left"
                data-reveal-delay="1"
              >
                Commitment to <span className="overview-heading-red">Environment</span>
              </h2>
            </div>

            <div className="esg-scroll-row">
              {csrEnvironmentCards.map(({ image, title, text }, idx) => (
                <div
                  key={title}
                  className="esg-scroll-item flex flex-col items-center text-center gap-4"
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden shrink-0">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">{title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: National Presence & Testimonials */}
      <section className="w-full py-16 lg:py-20 bg-white" id="national">
        <div className="container-global flex flex-col gap-16">
          {/* National Presence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 flex flex-col gap-5">
                <Eyebrow data-reveal="left">Our Presence</Eyebrow>
                <h2
                  className="overview-heading"
                  style={{ marginBottom: 0 }}
                  data-reveal="left"
                  data-reveal-delay="1"
                >
                  National <span className="overview-heading-red">Presence</span>
                </h2>
                <p className="overview-text" style={{ fontSize: '14px' }} data-reveal="left" data-reveal-delay="2">
                  Our CSR field centres sit close to our manufacturing corridors, so the teams running them work
                  directly with district authorities and local panchayats rather than through intermediaries.
                </p>
                <div className="esg-card esg-card-row">
                  <IconBadge Icon={MapPin} />
                  <div>
                    <div className="text-xl font-extrabold text-slate-900">18 Centres</div>
                    <div className="text-xs text-slate-500 font-medium">Across North, West, and South manufacturing hubs</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></span>
                    <span>Faridabad NCR (8 Centres)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></span>
                    <span>Sanand, Gujarat (3 Centres)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></span>
                    <span>Pune Cluster (4 Centres)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></span>
                    <span>Chennai &amp; Bengaluru (3 Centres)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col items-center justify-center" data-reveal="right">
                <div className="w-full flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Pan-India footprint
                  </span>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-slate-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-slate-900"></span> Manufacturing Hub
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: 'var(--primary-red)' }}>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-red)' }}></span> CSR Outreach
                    </span>
                  </div>
                </div>

                <div className="w-full max-w-md py-6 flex items-center justify-center relative">
                  <img
                    src="/india-map.png"
                    alt="Map of India - National Presence"
                    className="w-full h-auto max-h-[360px] object-contain"
                  />
                </div>
              </div>
            </div>

        </div>
      </section>

      {/* SECTION 4: CSR Focus Areas & Policy */}
      <section className="w-full py-16 lg:py-20 bg-slate-50 border-y border-outline-border" id="policy">
        <div id="csr-policy" className="container-global flex flex-col gap-16">
          {/* Focus Areas */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <Eyebrow data-reveal="left">Thematic Interventions</Eyebrow>
                <h2
                  className="overview-heading"
                  style={{ marginBottom: 0, marginTop: '0.25rem' }}
                  data-reveal="left"
                  data-reveal-delay="1"
                >
                  Our CSR <span className="overview-heading-red">Focus Areas</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md" data-reveal="right">
                Chosen in line with Schedule VII of the Companies Act, 2013, and reviewed for real, lasting impact
                rather than one-off activity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {csrPillars.map(({ label, title, text }, idx) => (
                <div
                  key={label}
                  className="esg-card"
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <span className="text-[11px] font-bold tracking-wider font-mono" style={{ color: 'var(--primary-red)' }}>
                    {label}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">{title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Objectives Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div
              className="lg:col-span-7 bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 flex flex-col justify-between"
              data-reveal="left"
            >
              <div className="flex flex-col gap-3">
                <Eyebrow>Statutory Mandate</Eyebrow>
                <h3 className="text-2xl font-extrabold text-slate-900">Policy Objectives</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Framed under Section 135 of the Companies Act, 2013. In plain terms: spend transparently, measure
                  the outcomes, and keep an audit trail we&apos;d be comfortable sharing.
                </p>
              </div>
              <div className="flex flex-col gap-3 my-6">
                {policyClauses.map((clause) => (
                  <div key={clause.num} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <span className="text-lg font-black font-mono shrink-0" style={{ color: 'var(--primary-red)' }}>
                      {clause.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{clause.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{clause.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <ShieldCheck size={16} style={{ color: 'var(--primary-red)' }} />
                <span>Reviewed and approved by the Board&apos;s CSR Committee</span>
              </div>
            </div>

            {/* Dark Spotlight Card */}
            <div
              className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-end p-7 text-white bg-surface-dark min-h-[380px]"
              data-reveal="right"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                  backgroundImage:
                    "url('https://placehold.co/600x400')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/85 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <span
                  className="px-3 py-1 rounded-full text-white text-xs font-bold w-fit"
                  style={{ backgroundColor: 'var(--primary-red)' }}
                >
                  Integrated Responsibility
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Building stronger communities together
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We measure ourselves on manufacturing quality first, but we also want the towns that host our
                  plants to be better off for it.
                </p>
                <div className="pt-2">
                  <RedPillCTA href="#governance-report" label="View CSR Policy" />
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring, Measurement & Transparency */}
          <div id="supp-sustainability" className="flex flex-col gap-6 pt-4 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
              <div className="flex items-center justify-center">
                <Eyebrow data-reveal>Governance Framework</Eyebrow>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900" data-reveal data-reveal-delay="1">
                Monitoring &amp; Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-500" data-reveal data-reveal-delay="2">
                How we keep ourselves honest about whether our CSR programmes are actually working.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {monitoringCards.map(({ Icon, title, text }, idx) => (
                <div
                  key={title}
                  className="esg-card"
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <IconBadge Icon={Icon} />
                  <h4 className="text-base font-bold text-slate-900">{title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Case Studies */}
      <section className="w-full py-16 lg:py-20 bg-white" id="stories">
        <div className="container-global flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl flex flex-col gap-2">
              <Eyebrow data-reveal="left">Field Notes</Eyebrow>
              <h2
                className="overview-heading"
                style={{ marginBottom: 0, marginTop: '0.25rem' }}
                data-reveal="left"
                data-reveal-delay="1"
              >
                Stories behind our <span className="overview-heading-red">ESG work</span>
              </h2>
              <p className="overview-text" style={{ fontSize: '14px' }} data-reveal="left" data-reveal-delay="2">
                A few longer reads on how our sustainability and community work actually happens on the ground.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors shrink-0"
              href="#"
            >
              <span>View All Stories</span>
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((story, idx) => (
              <article
                key={story.title}
                className="esg-story-card bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group"
                data-reveal="scale"
                data-reveal-delay={String((idx % 4) + 1)}
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={story.title}
                    src={story.img}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-bold">
                    {story.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-400 font-mono">{story.date}</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{story.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{story.text}</p>
                  </div>
                  <a
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
                    style={{ color: 'var(--primary-red)' }}
                    href="#"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Closing CTA */}
      <section className="w-full bg-surface-dark text-white py-16 lg:py-20 border-t border-slate-800" id="governance-report">
        <div className="container-global flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase w-fit border"
              style={{ backgroundColor: 'rgba(201,24,35,0.15)', color: 'var(--primary-red)', borderColor: 'rgba(201,24,35,0.3)' }}
              data-reveal="left"
            >
              <ShieldCheck size={14} />
              Audited under Section 135 of the Companies Act, 2013
            </div>
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
              data-reveal="left"
              data-reveal-delay="1"
            >
              Read more about our CSR and ESG work
            </h2>
            <p
              className="text-slate-300 text-sm sm:text-base leading-relaxed"
              data-reveal="left"
              data-reveal-delay="2"
            >
              Our annual CSR filings, impact assessments, and committee disclosures are available if you&apos;d like
              to look at the detail behind what&apos;s on this page.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-slate-400 text-xs font-mono">
              <span>CIN: U25209HR1995PTC032840</span>
              <span>•</span>
              <span>IATF 16949 Audited</span>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0 w-full sm:w-auto"
            data-reveal="right"
          >
            <a
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold tracking-wide transition-colors"
              style={{ backgroundColor: 'var(--primary-red)' }}
              href="#"
            >
              <Download size={16} />
              <span>Download 2024 ESG Report</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-sm font-semibold tracking-wide transition-colors"
              href="#"
            >
              <FileText size={16} />
              <span>Statutory CSR Policy Document</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-2 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              href="#contact"
            >
              <span>Partner with us / contact the CSR team</span>
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
