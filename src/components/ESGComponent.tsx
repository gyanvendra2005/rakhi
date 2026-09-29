'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const envSliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

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
      <span className="red-line esgc-red-line-sm"></span>
    </div>
  );
}

function IconBadge({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="icon-badge">
      <Icon size={20} strokeWidth={1.8} />
    </div>
  );
}

export default function ESGComponent() {
  return (
    <div className="esgc-root">
      <ScrollReveal />
      {/* HERO SECTION */}
      <section className="esgc-hero">
        <div className="esgc-hero-bg"></div>
        <div className="esgc-hero-inner container-global">
          <div className="esgc-hero-copy">
            <div className="esgc-hero-badge" data-reveal>
              <span className="esgc-dot-red"></span>
              Sustainability &amp; Governance
            </div>
            <h1
              className="esgc-hero-title"
              data-reveal
              data-reveal-delay="1"
            >
              Our approach to ESG at Rikki Plastic
            </h1>
            <p
              className="esgc-hero-desc"
              data-reveal
              data-reveal-delay="2"
            >
              We make precision plastic components for automotive OEMs, and that means our environmental footprint,
              our people, and our neighbours near our plants all matter to how we run the business — not as a side
              project, but as part of day-to-day operations.
            </p>
            <div className="esgc-hero-cta-row" data-reveal data-reveal-delay="3">
              <RedPillCTA href="#csr" label="Explore CSR Programmes" />
              <a className="esgc-btn-outline" href="#governance-report">
                <Download size={16} />
                <span>Download 2024 ESG Report</span>
              </a>
            </div>
          </div>

          {/* Metric Strip */}
          <div className="esgc-metric-grid">
            <div className="esgc-metric-card" data-reveal="scale" data-reveal-delay="1">
              <span className="esgc-metric-label">Carbon Intensity</span>
              <div className="esgc-metric-value-wrap">
                <span className="esgc-metric-value">-42.6%</span>
              </div>
              <span className="esgc-metric-sub">Scope 1 &amp; 2 reduction vs. 2020 baseline</span>
            </div>
            <div className="esgc-metric-card" data-reveal="scale" data-reveal-delay="2">
              <span className="esgc-metric-label">PCR Polymer Share</span>
              <div className="esgc-metric-value-wrap">
                <span className="esgc-metric-value">68.4%</span>
              </div>
              <span className="esgc-metric-sub">Integrated in automotive drive lines</span>
            </div>
            <div className="esgc-metric-card" data-reveal="scale" data-reveal-delay="3">
              <span className="esgc-metric-label">Renewable Power</span>
              <div className="esgc-metric-value-wrap">
                <span className="esgc-metric-value">100%</span>
              </div>
              <span className="esgc-metric-sub">Faridabad operational plants grid</span>
            </div>
            <div className="esgc-metric-card" data-reveal="scale" data-reveal-delay="4">
              <span className="esgc-metric-label">Audit Standards</span>
              <div className="esgc-metric-value-wrap">
                <span className="esgc-metric-value esgc-metric-value-red">GRI / IATF</span>
              </div>
              <span className="esgc-metric-sub">Dual-accredited independent verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: United Nations SDGs */}
      <section className="esgc-section" id="esg">
        <div className="container-global esgc-container-gap-lg">
          <div className="esgc-sdg-header">
            <div className="esgc-sdg-header-copy">
              <Eyebrow data-reveal="left">Global Alignment</Eyebrow>
              <h2
                className="overview-heading esgc-heading-flush esgc-heading-normal"
                data-reveal="left"
                data-reveal-delay="1"
              >
                Where we line up with the <span className="overview-heading-red">UN Sustainable Development Goals</span>
              </h2>
              <p
                className="overview-text esgc-text-15 esgc-text-mt"
                data-reveal="left"
                data-reveal-delay="2"
              >
                We don&apos;t claim to move the needle on all 17 SDGs — but there are a handful where our operations and
                our CSR work genuinely overlap, and that&apos;s where we&apos;ve chosen to focus.
              </p>
            </div>
            <a className="esgc-link-red esgc-link-group" href="#governance-report">
              <span>View our full ESG report</span>
              <ArrowRight size={16} className="esgc-link-arrow" />
            </a>
          </div>

          <div className="esgc-sdg-grid">
            {/* Spotlight Card */}
            <div className="esgc-spotlight-card" data-reveal="left">
              <div className="esgc-spotlight-top">
                <span className="esgc-badge-pill">Circularity in Action</span>
                <h3 className="esgc-spotlight-title">Decarbonizing our polymer supply chain</h3>
                <p className="esgc-spotlight-text">
                  We blend recycled feedstock into precision drive-gear parts wherever the tolerances allow it — the
                  goal is to displace virgin resin without compromising on what the OEM actually needs.
                </p>
              </div>
              <div className="esgc-spotlight-img-wrap">
                <img
                  className="esgc-spotlight-img"
                  alt="Stylized artistic visual of planet earth integrated with green bio-polymers"
                  src="https://placehold.co/600x400"
                />
              </div>
              <div className="esgc-spotlight-footer">
                <span>Audited standard: GRI 301/302</span>
                <span className="esgc-text-red-semibold">ISO 14001:2015</span>
              </div>
            </div>

            {/* SDG Grid */}
            <div className="esgc-sdg-cards-grid">
              {sdgGoals.map((goal, idx) => (
                <div
                  key={goal.number}
                  className="sdg-card"
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <div className="esgc-sdg-card-top">
                    <span className="sdg-card-number">{goal.number}</span>
                    <span className="esgc-sdg-ref">{goal.ref}</span>
                  </div>
                  <div>
                    <h4 className="esgc-card-title">{goal.title}</h4>
                    <p className="esgc-card-text">{goal.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CSR - Commitment & Environment */}
      <section className="esgc-section esgc-section-alt" id="csr">
        <div className="container-global esgc-container-gap-lg">
          {/* Part A: Creating a Difference */}
          <div className="esgc-two-col-grid">
            <div className="esgc-two-col-left">
              <Eyebrow data-reveal="left">Our Commitment</Eyebrow>
              <h2
                className="overview-heading esgc-heading-flush"
                data-reveal="left"
                data-reveal-delay="1"
              >
                Creating a <span className="overview-heading-red">Difference</span>
              </h2>
              <p className="overview-text esgc-text-15" data-reveal="left" data-reveal-delay="2">
                The Rikki Plastic CSR Foundation works close to home — in the towns around our plants in Ballabgarh,
                Faridabad, and Sanand. Our focus areas are rural education, preventative health, water conservation,
                and vocational training, chosen because they are the things our neighbours actually ask for.
              </p>
              <div className="esgc-stats-grid">
                <div className="esg-card esg-card-static">
                  <span className="esgc-stat-label">Communities Reached</span>
                  <span className="esgc-stat-value esgc-stat-value-red">120,000+</span>
                  <span className="esgc-stat-sub">across our village programmes to date</span>
                </div>
                <div className="esg-card esg-card-static">
                  <span className="esgc-stat-label">Villages Adopted</span>
                  <span className="esgc-stat-value">48</span>
                  <span className="esgc-stat-sub">under multi-year development plans</span>
                </div>
              </div>
              <div className="esgc-cta-wrap">
                <RedPillCTA href="#national" label="Know More" />
              </div>
            </div>

            <div className="esgc-two-col-right" data-reveal="right">
              <div className="esgc-feature-img-wrap">
                <img
                  className="esgc-feature-img"
                  alt="Indian school children sitting attentively in uniform inside a modern renovated bright rural classroom"
                  src="https://placehold.co/600x400"
                />
                <div className="esgc-feature-overlay">
                  <div className="esgc-feature-overlay-top">
                    <span className="esgc-dot-red"></span>
                    <span className="esgc-feature-overlay-label">
                      Flagship Project: Vidya Jyoti
                    </span>
                  </div>
                  <p className="esgc-feature-overlay-text">
                    Upgrading rural school infrastructure — science labs, clean sanitation, and basic computer literacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Commitment to Environment */}
          <div className="esgc-part-b">
            <div>
              <Eyebrow data-reveal="left">Ecological Stewardship</Eyebrow>
              <h2
                className="overview-heading esgc-heading-flush-top"
                data-reveal="left"
                data-reveal-delay="1"
              >
                Commitment to <span className="overview-heading-red">Environment</span>
              </h2>
            </div>

            <div className="esg-env-slider" data-reveal="scale">
              <Slider {...envSliderSettings}>
                {csrEnvironmentCards.map(({ image, title, text }) => (
                  <div key={title}>
                    <div className="esgc-env-card">
                      <div className="esgc-env-img-wrap">
                        <img src={image} alt={title} className="esgc-env-img" />
                      </div>
                      <div>
                        <h4 className="esgc-card-title">{title}</h4>
                        <p className="esgc-card-text">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: National Presence & Testimonials */}
      <section className="esgc-section" id="national">
        <div className="container-global esgc-container-gap-lg">
          {/* National Presence */}
          <div className="esgc-two-col-grid">
              <div className="esgc-national-left">
                <Eyebrow data-reveal="left">Our Presence</Eyebrow>
                <h2
                  className="overview-heading esgc-heading-flush"
                  data-reveal="left"
                  data-reveal-delay="1"
                >
                  National <span className="overview-heading-red">Presence</span>
                </h2>
                <p className="overview-text" data-reveal="left" data-reveal-delay="2">
                  Our CSR field centres sit close to our manufacturing corridors, so the teams running them work
                  directly with district authorities and local panchayats rather than through intermediaries.
                </p>
                <div className="esg-card esg-card-row">
                  <IconBadge Icon={MapPin} />
                  <div>
                    <div className="esgc-inline-stat-value">18 Centres</div>
                    <div className="esgc-inline-stat-sub">Across North, West, and South manufacturing hubs</div>
                  </div>
                </div>
                <div className="esgc-legend-grid">
                  <div className="esgc-legend-item">
                    <span className="esgc-dot-red-sm"></span>
                    <span>Faridabad NCR (8 Centres)</span>
                  </div>
                  <div className="esgc-legend-item">
                    <span className="esgc-dot-red-sm"></span>
                    <span>Sanand, Gujarat (3 Centres)</span>
                  </div>
                  <div className="esgc-legend-item">
                    <span className="esgc-dot-red-sm"></span>
                    <span>Pune Cluster (4 Centres)</span>
                  </div>
                  <div className="esgc-legend-item">
                    <span className="esgc-dot-red-sm"></span>
                    <span>Chennai &amp; Bengaluru (3 Centres)</span>
                  </div>
                </div>
              </div>

              <div className="esgc-national-right" data-reveal="right">
                <div className="esgc-map-legend-bar">
                  <span className="esgc-map-legend-title">
                    Pan-India footprint
                  </span>
                  <div className="esgc-map-legend-items">
                    <span className="esgc-map-legend-item">
                      <span className="esgc-dot-dark"></span> Manufacturing Hub
                    </span>
                    <span className="esgc-map-legend-item esgc-map-legend-item-red">
                      <span className="esgc-dot-red"></span> CSR Outreach
                    </span>
                  </div>
                </div>

                <div className="esgc-map-wrap">
                  <img
                    src="/india-map.png"
                    alt="Map of India - National Presence"
                    className="esgc-map-img"
                  />
                </div>
              </div>
            </div>

        </div>
      </section>

      {/* SECTION 4: CSR Focus Areas & Policy */}
      <section className="esgc-section esgc-section-alt" id="policy">
        <div id="csr-policy" className="container-global esgc-container-gap-lg">
          {/* Focus Areas */}
          <div className="esgc-focus-wrap">
            <div className="esgc-focus-header">
              <div>
                <Eyebrow data-reveal="left">Thematic Interventions</Eyebrow>
                <h2
                  className="overview-heading esgc-heading-flush-top"
                  data-reveal="left"
                  data-reveal-delay="1"
                >
                  Our CSR <span className="overview-heading-red">Focus Areas</span>
                </h2>
              </div>
              <p className="esgc-focus-desc" data-reveal="right">
                Chosen in line with Schedule VII of the Companies Act, 2013, and reviewed for real, lasting impact
                rather than one-off activity.
              </p>
            </div>
            <div className="esgc-pillars-grid">
              {csrPillars.map(({ label, title, text }, idx) => (
                <div
                  key={label}
                  className="esg-card"
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <span className="esgc-pillar-label">
                    {label}
                  </span>
                  <h4 className="esgc-card-title-flush">{title}</h4>
                  <p className="esgc-card-text">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Objectives Split */}
          <div className="esgc-policy-grid">
            <div className="esgc-policy-card" data-reveal="left">
              <div className="esgc-policy-card-top">
                <Eyebrow>Statutory Mandate</Eyebrow>
                <h3 className="esgc-policy-title">Policy Objectives</h3>
                <p className="esgc-policy-desc">
                  Framed under Section 135 of the Companies Act, 2013. In plain terms: spend transparently, measure
                  the outcomes, and keep an audit trail we&apos;d be comfortable sharing.
                </p>
              </div>
              <div className="esgc-clauses-wrap">
                {policyClauses.map((clause) => (
                  <div key={clause.num} className="esgc-clause-item">
                    <span className="esgc-clause-num">
                      {clause.num}
                    </span>
                    <div>
                      <h4 className="esgc-clause-title">{clause.title}</h4>
                      <p className="esgc-clause-text">{clause.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="esgc-policy-footer">
                <ShieldCheck size={16} className="esgc-icon-red" />
                <span>Reviewed and approved by the Board&apos;s CSR Committee</span>
              </div>
            </div>

            {/* Dark Spotlight Card */}
            <div className="esgc-dark-card" data-reveal="right">
              <div className="esgc-dark-card-bg"></div>
              <div className="esgc-dark-card-gradient"></div>
              <div className="esgc-dark-card-content">
                <span className="esgc-pill-red">
                  Integrated Responsibility
                </span>
                <h3 className="esgc-dark-card-title">
                  Building stronger communities together
                </h3>
                <p className="esgc-dark-card-text">
                  We measure ourselves on manufacturing quality first, but we also want the towns that host our
                  plants to be better off for it.
                </p>
                <div className="esgc-cta-wrap">
                  <RedPillCTA href="#governance-report" label="View CSR Policy" />
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring, Measurement & Transparency */}
          <div id="supp-sustainability" className="esgc-monitoring-wrap">
            <div className="esgc-monitoring-header">
              <div className="esgc-center-row">
                <Eyebrow data-reveal>Governance Framework</Eyebrow>
              </div>
              <h3 className="esgc-monitoring-title" data-reveal data-reveal-delay="1">
                Monitoring &amp; Transparency
              </h3>
              <p className="esgc-monitoring-desc" data-reveal data-reveal-delay="2">
                How we keep ourselves honest about whether our CSR programmes are actually working.
              </p>
            </div>
            <div className="esgc-monitoring-grid">
              {monitoringCards.map(({ Icon, title, text }, idx) => (
                <div
                  key={title}
                  className="esg-card"
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <IconBadge Icon={Icon} />
                  <h4 className="esgc-card-title-flush">{title}</h4>
                  <p className="esgc-card-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Case Studies */}
      <section className="esgc-section" id="stories">
        <div className="container-global esgc-container-gap-lg">
          <div className="esgc-stories-header">
            <div className="esgc-stories-header-copy">
              <Eyebrow data-reveal="left">Field Notes</Eyebrow>
              <h2
                className="overview-heading esgc-heading-flush-top"
                data-reveal="left"
                data-reveal-delay="1"
              >
                Stories behind our <span className="overview-heading-red">ESG work</span>
              </h2>
              <p className="overview-text" data-reveal="left" data-reveal-delay="2">
                A few longer reads on how our sustainability and community work actually happens on the ground.
              </p>
            </div>
            <a className="esgc-btn-ghost" href="#">
              <span>View All Stories</span>
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="esgc-stories-grid">
            {caseStudies.map((story, idx) => (
              <article
                key={story.title}
                className="esg-story-card esgc-story-card"
                data-reveal="scale"
                data-reveal-delay={String((idx % 4) + 1)}
              >
                <div className="esgc-story-img-wrap">
                  <img
                    className="esgc-story-img"
                    alt={story.title}
                    src={story.img}
                  />
                  <span className="esgc-story-tag">
                    {story.tag}
                  </span>
                </div>
                <div className="esgc-story-body">
                  <div className="esgc-story-body-top">
                    <span className="esgc-story-date">{story.date}</span>
                    <h3 className="esgc-story-title">{story.title}</h3>
                    <p className="esgc-card-text">{story.text}</p>
                  </div>
                  <a className="esgc-story-link" href="#">
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
      <section className="esgc-cta-section" id="governance-report">
        <div className="container-global esgc-cta-inner">
          <div className="esgc-cta-copy">
            <div className="esgc-cta-badge" data-reveal="left">
              <ShieldCheck size={14} />
              Audited under Section 135 of the Companies Act, 2013
            </div>
            <h2
              className="esgc-cta-title"
              data-reveal="left"
              data-reveal-delay="1"
            >
              Read more about our CSR and ESG work
            </h2>
            <p
              className="esgc-cta-desc"
              data-reveal="left"
              data-reveal-delay="2"
            >
              Our annual CSR filings, impact assessments, and committee disclosures are available if you&apos;d like
              to look at the detail behind what&apos;s on this page.
            </p>
            <div className="esgc-cta-meta">
              <span>CIN: U25209HR1995PTC032840</span>
              <span>•</span>
              <span>IATF 16949 Audited</span>
            </div>
          </div>
          <div className="esgc-cta-actions" data-reveal="right">
            <a className="esgc-btn-solid-red" href="#">
              <Download size={16} />
              <span>Download 2024 ESG Report</span>
            </a>
            <a className="esgc-btn-solid-white" href="#">
              <FileText size={16} />
              <span>Statutory CSR Policy Document</span>
            </a>
            <a className="esgc-btn-text" href="#contact">
              <span>Partner with us / contact the CSR team</span>
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
