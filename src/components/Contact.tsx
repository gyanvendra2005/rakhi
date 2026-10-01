'use client';

import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  Award,
  Headset,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Navigation,
  Copy,
  Calendar,
  Download,
  X,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function RedPillCTA({
  label,
  type = 'button',
  onClick,
}: {
  label: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}) {
  return (
    <button type={type} onClick={onClick} className="btn-red-pill contact-btn-full">
      <div className="btn-cir">
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="btn-text">{label}</div>
    </button>
  );
}

const heroBadges = [
  { icon: Zap, title: 'Rapid Technical Review', sub: 'Rapid RFQ review' },
  { icon: ShieldCheck, title: 'NDA & IP Protection', sub: 'Bilateral protocol' },
  { icon: Award, title: 'IATF 16949 / ISO 9001', sub: 'Automotive certified' },
  { icon: Headset, title: 'OEM Dedicated Desk', sub: 'Direct tech support' },
];

type FacilityKey = 1 | 2;

const facilityData: Record<
  FacilityKey,
  {
    tab: string;
    corridor: string;
    title: string;
    desc: string;
    presses: string;
    pressesSub: string;
    special: string;
    specialSub: string;
    cluster: string;
    clusterSub: string;
    address: string;
    phones: string;
    gps: string;
    tag: string;
    leads: { initials: string; name: string; title: string }[];
  }
> = {
  1: {
    tab: 'Faridabad (HQ & Plant I)',
    corridor: 'Northern Automotive Corridor',
    title: 'Faridabad Headquarter & Plant I',
    desc: 'Integrated automotive plastics hub equipped with high-tonnage micro-precision injection moulding units, high-speed CNC EDM tool development, and comprehensive metrology CMM laboratories.',
    presses: '28+ Injection Presses',
    pressesSub: '50T to 850T clamping capacity',
    special: 'In-House EDM Tool Room',
    specialSub: 'Wire-cut & mirror EDM finish',
    cluster: 'Passenger & Commercial OEM',
    clusterSub: 'Direct JIT line feeds',
    address: 'B-5, Opposite JCB India, Sector 58, Ballabgarh, Faridabad, Haryana - 121004, India',
    phones: '+91 129 415 4941  |  +91 129 415 4948  |  +91 129 415 4950',
    gps: '28.3241° N, 77.3198° E',
    tag: 'Faridabad Main Campus',
    leads: [
      { initials: 'AS', name: 'Er. Arun Sharma', title: 'Plant Head & Manufacturing Director' },
      { initials: 'SP', name: 'Suresh K. Patel', title: 'Head of Metrology & Quality Systems' },
    ],
  },
  2: {
    tab: 'Hosur Facility (South Corridor)',
    corridor: 'Southern Automotive Corridor',
    title: 'Hosur Facility, Tamil Nadu',
    desc: 'High-speed precision moulding unit serving the southern OEM ecosystem, with dedicated two-wheeler and electronics-grade tooling lines alongside in-house assembly automation.',
    presses: '16+ Injection Presses',
    pressesSub: '50T to 650T clamping capacity',
    special: 'Automated Assembly Cells',
    specialSub: 'Robotic pick-and-place integration',
    cluster: 'Two-Wheeler & Electronics OEM',
    clusterSub: 'South corridor supply base',
    address: 'Plot 42, SIDCO Industrial Estate, Hosur, Tamil Nadu - 635126, India',
    phones: '+91 4344 276 210  |  +91 4344 276 215',
    gps: '12.7409° N, 77.8253° E',
    tag: 'Hosur South Campus',
    leads: [
      { initials: 'RK', name: 'R. Karthikeyan', title: 'Plant Head, Hosur Operations' },
      { initials: 'MV', name: 'Meera Venkat', title: 'Head of Quality & Compliance' },
    ],
  },
};

const faqs = [
  {
    q: 'What CAD file formats do you accept for quotation and tooling feasibility?',
    a: 'Standard 3D solid formats work fine — STEP, Parasolid, IGES, or native NX/CATIA files. For 2D drawing reviews with critical GD&T, a vector PDF or DWG/DXF is preferred. Everything you upload sits in an encrypted, access-logged sandbox until our tooling team reviews it.',
  },
  {
    q: 'What is your standard lead time for prototype tooling vs production multi-cavity molds?',
    a: 'Soft-tool prototypes with T1 sample parts usually go out in 7 to 14 business days. Hardened, production-grade multi-cavity molds take 4 to 6 weeks, which includes the DFM pass, moldflow simulation, and first-article CMM checks — we do not skip those steps to hit a date.',
  },
  {
    q: 'Are both your Faridabad and Hosur manufacturing facilities certified for automotive Tier-1 supply?',
    a: 'Yes, both plants carry independent IATF 16949:2016 and ISO 9001:2015 certification. Each metrology lab runs its own CMM, melt flow index, moisture analysis, and tensile testing equipment so Level 3 PPAP work does not have to travel between sites.',
  },
  {
    q: 'Can Rikki Plastic handle custom polymer compounding and circular recycled resins?',
    a: 'We regularly work with glass-filled engineering resins (up to 50% GF), mineral stabilizers, UL94-V0 flame retardants, and post-industrial recycled polymers that meet OEM decarbonization and EU ELV recyclability requirements — happy to discuss specifics on a call.',
  },
];

export default function Contact() {
  const [facility, setFacility] = useState<FacilityKey>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copyLabel, setCopyLabel] = useState('Copy');
  const [modalOpen, setModalOpen] = useState(false);
  const [refId, setRefId] = useState('');

  const activeFacility = facilityData[facility];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = `#RP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(id);
    setModalOpen(true);
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(activeFacility.address);
      setCopyLabel('Copied!');
      setTimeout(() => setCopyLabel('Copy'), 2000);
    } catch {
      setCopyLabel('Copy failed');
      setTimeout(() => setCopyLabel('Copy'), 2000);
    }
  }

  return (
    <div className="contact-root">
      <ScrollReveal />

      {/* HERO */}
      <section className="contact-hero">
        <img src="https://placehold.co/1600x700" alt="Rikki Plastic Manufacturing" className="contact-hero-bg" />
        <div className="contact-hero-overlay"></div>
        <div className="container-global contact-hero-inner">
          <h1 className="overview-heading contact-hero-heading" data-reveal>
            Let&apos;s Build <span className="overview-heading-red">Precision Together.</span>
          </h1>
          <p className="overview-text contact-hero-sub" data-reveal data-reveal-delay="1">
            Whether you need custom automotive tooling, high-volume injection moulding, or rapid prototype
            sampling, our Faridabad and Hosur engineering centres are ready to collaborate — with a direct
            line to OEM application engineers.
          </p>

          <div className="contact-hero-badges">
            {heroBadges.map(({ icon: Icon, title, sub }, idx) => (
              <div className="contact-hero-badge-card" key={title} data-reveal="scale" data-reveal-delay={String((idx % 4) + 1)}>
                <div className="icon-badge">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="contact-hero-badge-title">{title}</div>
                  <div className="contact-hero-badge-sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ + DESKS */}
      <section className="contact-section" id="rfq-section">
        <div className="container-global">
          <div className="contact-rfq-panel-bg">
            <div className="contact-rfq-grid">
              {/* INFO */}
              <div className="contact-rfq-info" data-reveal="left">
                <div className="overview-eyebrow">
                  Get In Touch
                  <span className="red-line"></span>
                </div>
                <h2 className="overview-heading contact-panel-heading">Contact Us</h2>
                <p className="overview-text">
                  Have a question about our products, capacity, or a project in mind? Send us a message
                  and our team will get back to you.
                </p>

                <div className="contact-rfq-quick">
                  <a className="contact-rfq-quick-item" href="mailto:rfquest@rikkiplastic.com">
                    <Mail size={18} />
                    rfquest@rikkiplastic.com
                  </a>
                  <a className="contact-rfq-quick-item" href="tel:+911294154941">
                    <Phone size={18} />
                    +91 129 415 4941
                  </a>
                </div>
              </div>

              {/* FORM CARD */}
              <div className="contact-rfq-panel" data-reveal="right">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="contact-name">Full Name *</label>
                      <input className="contact-input" id="contact-name" placeholder="e.g. Rajesh Mehra" required type="text" />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="contact-org">Company Name</label>
                      <input className="contact-input" id="contact-org" placeholder="e.g. Maruti Suzuki / Hero MotoCorp" type="text" />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="contact-email">Email Address *</label>
                      <input className="contact-input" id="contact-email" placeholder="you@company.com" required type="email" />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="contact-phone">Phone Number *</label>
                      <div className="contact-phone-row">
                        <select className="contact-select contact-select-code" defaultValue="+91">
                          <option value="+91">+91 (IN)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+49">+49 (DE)</option>
                          <option value="+81">+81 (JP)</option>
                        </select>
                        <input className="contact-input" id="contact-phone" placeholder="98100 12345" required type="tel" />
                      </div>
                    </div>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="contact-details">How can we help? *</label>
                    <textarea
                      className="contact-input contact-textarea"
                      id="contact-details"
                      placeholder="Tell us briefly what you're looking for..."
                      required
                      rows={4}
                    />
                  </div>

                  <RedPillCTA label="Submit" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY SWITCHER */}
      <section className="contact-section contact-section-alt">
        <div className="container-global">
          <div className="contact-facility-header">
            <div data-reveal="left">
              <div className="overview-eyebrow">
                Dual-Plant Operational Footprint
                <span className="red-line"></span>
              </div>
              <h2 className="overview-heading contact-panel-heading">High-Precision Manufacturing Facilities</h2>
            </div>
            <div className="contact-facility-tabs" role="tablist" data-reveal="right">
              {([1, 2] as FacilityKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={facility === key}
                  onClick={() => setFacility(key)}
                  className={`contact-facility-tab${facility === key ? ' is-active' : ''}`}
                >
                  <span className="contact-facility-tab-dot"></span>
                  {facilityData[key].tab}
                </button>
              ))}
            </div>
          </div>

          <div className="contact-facility-panel" data-reveal="scale">
            <div className="contact-facility-grid">
              <div className="contact-facility-details">
                <h3 className="contact-facility-title">{activeFacility.title}</h3>
                <p className="overview-text">{activeFacility.desc}</p>

                <div className="contact-facility-stats">
                  <div className="contact-facility-stat">
                    <div className="contact-facility-stat-label">Press Fleet</div>
                    <div className="contact-facility-stat-value">{activeFacility.presses}</div>
                    <div className="contact-facility-stat-sub">{activeFacility.pressesSub}</div>
                  </div>
                  <div className="contact-facility-stat">
                    <div className="contact-facility-stat-label">Specialization</div>
                    <div className="contact-facility-stat-value">{activeFacility.special}</div>
                    <div className="contact-facility-stat-sub">{activeFacility.specialSub}</div>
                  </div>
                  <div className="contact-facility-stat">
                    <div className="contact-facility-stat-label">Key Ecosystem</div>
                    <div className="contact-facility-stat-value">{activeFacility.cluster}</div>
                    <div className="contact-facility-stat-sub">{activeFacility.clusterSub}</div>
                  </div>
                </div>

                <div className="contact-facility-contact-box">
                  <div className="contact-facility-contact-row">
                    <MapPin size={20} className="contact-icon-red" />
                    <div>
                      <div className="contact-facility-contact-label">Physical Address:</div>
                      <div className="contact-facility-contact-value">{activeFacility.address}</div>
                    </div>
                  </div>
                  <div className="contact-facility-contact-row contact-facility-contact-row-border">
                    <Phone size={18} className="contact-icon-red" />
                    <div className="contact-facility-contact-value">{activeFacility.phones}</div>
                  </div>
                </div>

                <div className="contact-facility-leads">
                  <div className="contact-label">Facility Leadership &amp; Engineering Contacts</div>
                  <div className="contact-facility-leads-grid">
                    {activeFacility.leads.map((lead) => (
                      <div className="contact-facility-lead" key={lead.name}>
                        <div className="contact-facility-avatar">{lead.initials}</div>
                        <div>
                          <div className="contact-facility-lead-name">{lead.name}</div>
                          <div className="contact-facility-lead-title">{lead.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-facility-media">
                <div className="contact-facility-image-wrap">
                  <img
                    className="contact-facility-image"
                    alt={activeFacility.title}
                    src="https://placehold.co/600x500"
                  />
                </div>
                <div className="contact-facility-actions">
                  <a
                    className="contact-action-btn"
                    href={`https://maps.google.com/?q=${encodeURIComponent(activeFacility.address)}`}
                    rel="noopener"
                    target="_blank"
                  >
                    <Navigation size={18} />
                    Get Driving Directions
                  </a>
                  <button className="contact-action-btn contact-action-btn-icon" onClick={copyAddress} title="Copy Plant Address" type="button">
                    <Copy size={18} />
                    <span>{copyLabel}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-section contact-section-alt">
        <div className="container-global contact-faq-grid">
          <div className="contact-faq-side" data-reveal="left">
            <div className="contact-faq-label">FAQ</div>
            <h2 className="overview-heading contact-panel-heading contact-faq-heading">
              Still have technical questions?
            </h2>
            <p className="overview-text">
              If there&apos;s something about certifications, tolerances, or turnaround you want to ask
              before you submit an RFQ, drop your email and we&apos;ll get back to you directly.
            </p>
            <form className="contact-faq-ask" onSubmit={(e) => e.preventDefault()}>
              <input className="contact-faq-ask-input" type="email" placeholder="Enter your email" required />
              <button className="contact-faq-ask-submit" type="submit">Submit</button>
            </form>
          </div>

          <div className="contact-faq-list" data-reveal="right">
            {faqs.map((item, idx) => (
              <div className={`contact-faq-item${openFaq === idx ? ' is-open' : ''}`} key={item.q}>
                <button
                  className="contact-faq-question"
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className="contact-faq-icon" />
                </button>
                <div className="contact-faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="contact-cta-section">
        <div className="container-global contact-cta-inner">
          <div className="contact-cta-copy" data-reveal="left">
            <h2 className="contact-cta-title">Schedule a Guided In-Person or Virtual Plant Tour</h2>
            <p className="contact-cta-desc">
              Witness our cleanroom injection moulding, automated optical sorting, and tool room
              telemetry in Faridabad or Hosur. Virtual walkthroughs are also available for international
              OEMs.
            </p>
          </div>
          <div className="contact-cta-actions" data-reveal="right">
            <button className="esgc-btn-solid-red" type="button">
              <Calendar size={16} />
              <span>Book Plant Tour</span>
            </button>
            <a className="esgc-btn-outline contact-cta-outline" href="#">
              <Download size={16} />
              <span>Download Infrastructure Catalog (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* STATUS MODAL */}
      {modalOpen && (
        <div className="contact-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={() => setModalOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
            <div className="contact-modal-icon">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="contact-modal-title">Inquiry Successfully Transmitted</h3>
            <p className="contact-modal-text">
              Your RFQ details and technical requirements have been assigned Reference ID{' '}
              <span className="contact-modal-ref">{refId}</span>. An application engineer will contact
              you within 24 hours.
            </p>
            <button className="contact-modal-btn" onClick={() => setModalOpen(false)} type="button">
              Return to Portal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
