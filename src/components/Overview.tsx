import React from 'react';
import { ShieldCheck, Settings, Users, Globe2, Ruler, Wrench, Clock, Calendar, TrendingUp, Building2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const heroBadges = [
  { icon: ShieldCheck, label: 'QUALITY\nCOMPONENTS' },
  { icon: Settings, label: 'RELIABLE\nPARTNER' },
  { icon: Users, label: 'A STRONGER\nTOMORROW' },
  { icon: Globe2, label: 'GLOBAL\nPRESENCE' },
];

const legacyStats = [
  { icon: Calendar, value: '25+', label: 'Years of Experience' },
  { icon: Users, value: '150+', label: 'Employees' },
  { icon: TrendingUp, value: '₹250 Million', label: 'Annual Turnover' },
  { icon: Building2, value: '2', label: 'Locations', sublabel: 'Faridabad | Hosur' },
];

const capabilities = [
  { icon: Users, title: 'Customer Collaboration', text: 'Working closely to iterate value' },
  { icon: Ruler, title: 'Part Design Support', text: 'Optimizing for performance and cost' },
  { icon: Wrench, title: 'Advanced Tool Room', text: 'EDM, Wire Cut, Milling, Surface Grinder with digital-controlled machines' },
  { icon: Clock, title: 'Timely Execution', text: 'Committed turnaround for faster project delivery' },
];



const row1Clients = [
  { name: 'JCB', logo: 'https://placehold.co/600x400' },
  { name: 'MUNJAL', logo: 'https://placehold.co/600x400' },
  { name: 'MINDA', logo: 'https://placehold.co/600x400' },
  { name: 'YAMAHA', logo: 'https://placehold.co/600x400' },
];

const row2Clients = [
  { name: 'Imperial Auto', logo: 'https://placehold.co/600x400' },
  { name: 'Chikautso', logo: 'https://placehold.co/600x400' },
];

export default function Overview() {
  return (
    <section id="overview" className="ov2-page">
      <ScrollReveal />
      {/* Hero */}
      <div className="ov2-hero">
        <img src="https://placehold.co/600x400" alt="Rikki Plastic Manufacturing" className="ov2-hero-bg" />
        <div className="ov2-hero-overlay"></div>
        <div className="container-global ov2-hero-inner">
          <div className="ov2-hero-content">
            <div className="ov2-hero-eyebrow" data-reveal>
              <span>PRECISION IN PLASTICS</span>
              <span className="ov2-hero-red-line"></span>
            </div>
            <h1 className="ov2-hero-heading" data-reveal data-reveal-delay="1">
              Built for <span className="ov2-hero-heading-red">A Stronger Tomorrow.</span>
            </h1>
            <p className="ov2-hero-sub" data-reveal data-reveal-delay="2">
              At Rikki, we make high quality plastic precision parts to achieve maximum customer satisfaction.
            </p>

            <div className="ov2-hero-badges" data-reveal data-reveal-delay="3">
              {heroBadges.map(({ icon: Icon, label }) => (
                <div className="ov2-hero-badge" key={label}>
                  <div className="ov2-hero-badge-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span>
                    {label.split('\n').map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Us / Legacy Section */}
      <div className="ov2-legacy-section">
        <div className="container-global">
          <div className="ov2-legacy-grid">
            {/* Left Content */}
            <div className="ov2-legacy-content">
              <div className="overview-eyebrow" data-reveal="left">
                ABOUT US
                <span className="red-line"></span>
              </div>
              <h2 className="ov2-legacy-heading" data-reveal="left" data-reveal-delay="1">
                A 25-Year Legacy
                <br />
                of <span className="ov2-heading-red">Precision and Trust</span>
              </h2>
              <p className="ov2-legacy-text" data-reveal="left" data-reveal-delay="2">
                Rikki Plastic Pvt. Ltd. is a professionally managed firm in the business of
                manufacturing high precision plastic injection moulded components for various
                Automobile OEMs &amp; its OESs. The company is a 25 year old Private Limited
                company with its presence in Faridabad, Haryana and Hosur, Tamil Nadu.
              </p>
              <p className="ov2-legacy-text" data-reveal="left" data-reveal-delay="3">
                Our commitment to provide upmost quality and on time delivery has helped
                increase our presence globally and earned a reputation of being a trusted
                leader in Plastic Injection Moulding.
              </p>

              <div className="ov2-btn-wrapper" data-reveal="left" data-reveal-delay="4">
                <a href="#contact" className="btn-red-pill">
                  <div className="btn-cir">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="btn-text">Our Journey</div>
                </a>
              </div>
            </div>

            {/* Center Product Image */}
            <div className="ov2-legacy-image-wrap" data-reveal="right">
              <img
                src="https://placehold.co/600x400"
                alt="Precision Plastic Injection Moulded Components"
                className="ov2-legacy-image"
              />
            </div>
                  </div>

          {/* Bottom Stats Strip */}
          <div className="ov2-stats-strip">
            {legacyStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  className="ov2-stat-card"
                  key={stat.label}
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <div className="ov2-stat-icon-wrap">
                    <Icon size={30} strokeWidth={1.8} className="ov2-stat-icon" />
                  </div>
                  <div className="ov2-stat-details">
                    <div className="ov2-stat-value">{stat.value}</div>
                    <div className="ov2-stat-label">{stat.label}</div>
                    {stat.sublabel && <div className="ov2-stat-sublabel">{stat.sublabel}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* People & Capabilities */}
      <div className="ov2-people-section">
        <div className="container-global ov2-people-grid">
          <div className="ov2-people-image-wrap" data-reveal="left">
            <img src="https://placehold.co/600x400" alt="Our People Power" className="ov2-people-image" />
            {/* <div className="ov2-people-caption">
              OUR PEOPLE
              <br />
              POWER
            </div> */}
          </div>

          <div className="ov2-people-content">
            <div className="overview-eyebrow" data-reveal="right">
              PEOPLE &amp; CAPABILITIES
              <span className="red-line"></span>
            </div>
            <h2 className="ov2-legacy-heading" data-reveal="right" data-reveal-delay="1">
              The Right Minds Drive <span className="ov2-heading-red">Superior Technology</span>
            </h2>
            <p className="overview-text" data-reveal="right" data-reveal-delay="2">
              With an overall strength of over 150 employees, we believe that true technology
              power can only be achieved by the right minds. Our employees are eager to learn,
              share and use the immense knowledge they have gained as part of their experience
              or qualification.
            </p>

            <div className="ov2-cap-grid">
              {capabilities.map(({ icon: Icon, title, text }, idx) => (
                <div
                  className="ov2-cap-item"
                  key={title}
                  data-reveal="scale"
                  data-reveal-delay={String((idx % 4) + 1)}
                >
                  <div className="ov2-cap-icon">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="ov2-cap-title">{title}</div>
                    <div className="ov2-cap-text">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Industries We Serve Section */}
      {/* <div className="container-global ov2-industries-section">
        <div className="ov2-industries-card">
          <div className="ov2-industries-header">
            <div className="ov2-bottom-eyebrow-light">
              <span>INDUSTRIES WE SERVE</span>
              <span className="ov2-bottom-white-line"></span>
            </div>
            <h2 className="ov2-materials-title ov2-title-white">Trusted by Leading OEMs</h2>
            <p className="ov2-materials-sub ov2-sub-white">
              We cater to prominent OEMs and OESs across automotive and industrial sectors.
            </p>
          </div>

          <div className="ov2-client-rows">
            <div className="ov2-client-row">
              {row1Clients.map((client) => (
                <div className="ov2-client-card" key={client.name}>
                  <img src={client.logo} alt={client.name} className="ov2-client-logo" />
                </div>
              ))}
            </div>
            <div className="ov2-client-row">
              {row2Clients.map((client) => (
                <div className="ov2-client-card" key={client.name}>
                  <img src={client.logo} alt={client.name} className="ov2-client-logo" />
                </div>
              ))}
              <span className="ov2-more-text">and many more...</span>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
