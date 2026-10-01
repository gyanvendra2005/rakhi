'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Download,
  ShieldCheck,
  Volume1,
  Wrench,
  Feather,
  HardHat,
  Flame,
  Bot,
  ScanLine,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import type { Product } from '@/data/products';
import { getRelatedProducts } from '@/data/products';

const comparisonIcons: Record<string, React.ElementType> = {
  Volume1,
  Wrench,
  Feather,
};

const toolingIcons: Record<string, React.ElementType> = {
  HardHat,
  Flame,
  Bot,
};

type TabKey = 'mechanical' | 'tooling' | 'quality' | 'certifications';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'mechanical', label: '1. Mechanical & Physical Properties' },
  { key: 'tooling', label: '2. Tooling & Mold Architecture' },
  { key: 'quality', label: '3. Metrology & Quality' },
  { key: 'certifications', label: '4. Certifications & RoHS' },
];

function RedPillLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="btn-red-pill">
      <div className="btn-cir">
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="btn-text">{label}</div>
    </Link>
  );
}

export default function ProductDetail({ product }: { product: Product }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKey>('mechanical');
  const [submitted, setSubmitted] = useState(false);
  const related = getRelatedProducts(product.slug, 3);
  const { detail } = product;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pdp-root">
      <ScrollReveal />

      {/* BREADCRUMB */}
      <section className="pdp-breadcrumb-bar">
        <div className="container-global pdp-breadcrumb-inner">
          <nav aria-label="Breadcrumb" className="pdp-breadcrumb">
            <Link href="/">Home</Link>
            <span className="pdp-breadcrumb-sep">/</span>
            <Link href="/products">Products</Link>
            <span className="pdp-breadcrumb-sep">/</span>
            <Link href="/products">{product.category}</Link>
            <span className="pdp-breadcrumb-sep">/</span>
            <span className="pdp-breadcrumb-current">{product.title}</span>
          </nav>
          <div className="pdp-breadcrumb-meta">
            <span className="pdp-breadcrumb-oem">
              <span className="pdp-breadcrumb-dot" /> OEM TIER-1 VALIDATED
            </span>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="pdp-hero-section">
        <div className="container-global pdp-hero-grid">
          {/* Gallery */}
          <div className="pdp-gallery">
            <div className="pdp-gallery-main">
              <span className="pdp-gallery-tag">
                <ScanLine size={14} /> Interactive Model View
              </span>
              <img
                src={product.thumbnails[activeThumb]?.image ?? product.image}
                alt={product.title}
                className="pdp-gallery-img"
              />
            </div>
            <div className="pdp-gallery-thumbs">
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={thumb.label}
                  type="button"
                  className={`pdp-thumb${activeThumb === idx ? ' is-active' : ''}`}
                  onClick={() => setActiveThumb(idx)}
                >
                  <img src={thumb.image} alt={thumb.label} className="pdp-thumb-img" />
                  <span className="pdp-thumb-label">{thumb.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Specs & Actions */}
          <div className="pdp-info">
            <div className="pdp-info-top">
              <span className="pdp-part-number">
                Part No: <strong>{detail.partNumber}</strong>
              </span>
              <span className="pdp-cert-inline">
                <ShieldCheck size={16} /> {detail.certBadges[detail.certBadges.length - 1]}
              </span>
            </div>
            <h1 className="pdp-title">{product.title}</h1>
            <p className="pdp-desc">{detail.longDescription}</p>

            <div className="pdp-cert-badges">
              {detail.certBadges.map((badge) => (
                <span className="pdp-cert-badge" key={badge}>{badge}</span>
              ))}
            </div>

            <ul className="pdp-key-specs">
              {detail.keySpecs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>

            <div className="pdp-actions">
              <RedPillLink href="/contact" label="Request Part RFQ & Sample Kit" />
              <a className="pdp-datasheet-btn" href="#rfq-section">
                <Download size={18} />
                Download TDS Datasheet (PDF)
              </a>
            </div>

            <div className="pdp-tooling-card">
              <div className="pdp-tooling-header">
                <span>Standard Tooling &amp; Mold Parameters</span>
                <span className="pdp-tooling-life">Tool Life: {detail.tooling.toolLife}</span>
              </div>
              <div className="pdp-tooling-grid">
                <div className="pdp-tooling-item">
                  <span>Nominal Module</span>
                  <strong>{detail.tooling.module}</strong>
                </div>
                <div className="pdp-tooling-item">
                  <span>Pressure Angle</span>
                  <strong>{detail.tooling.pressureAngle}</strong>
                </div>
                <div className="pdp-tooling-item">
                  <span>Tool Cavitation</span>
                  <strong>{detail.tooling.cavitation}</strong>
                </div>
                <div className="pdp-tooling-item">
                  <span>Press Tonnage</span>
                  <strong>{detail.tooling.pressTonnage}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABBED SPECIFICATIONS */}
      <section className="pdp-tabs-section">
        <div className="container-global">
          <div className="pdp-tabs-header">
            <div>
              <div className="overview-eyebrow">
                Technical Specifications
                <span className="red-line"></span>
              </div>
              <h2 className="overview-heading pdp-tabs-heading">Manufacturing, Metrology &amp; Material Data</h2>
            </div>
            <p className="overview-text pdp-tabs-sub">
              Tested and audited in accordance with automotive VDA 6.3, AIAG PPAP 4th Edition, and ISO
              gear/dimensional accuracy criteria.
            </p>
          </div>

          <div className="pdp-tab-btns" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`pdp-tab-btn${activeTab === tab.key ? ' is-active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'mechanical' && (
            <div className="pdp-tab-panel pdp-mechanical-grid">
              <div className="pdp-mechanical-table-card">
                <h3 className="pdp-card-heading">
                  Standard Tested Material Properties
                  <span className="pdp-card-heading-sub">Spec: ASTM D638 / ISO 527</span>
                </h3>
                <div className="pdp-spec-rows">
                  {detail.mechanical.rows.map((row) => (
                    <div className="pdp-spec-row" key={row.label}>
                      <span>{row.label}</span>
                      <strong>{row.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pdp-chart-card">
                <div className="pdp-chart-top">
                  <span>Stress-Cycle Curve</span>
                  <span className="pdp-chart-cycles">10^7 Cycles</span>
                </div>
                <p className="pdp-chart-desc">{detail.mechanical.chartNote}</p>
                <div className="pdp-chart-wrap">
                  <svg viewBox="0 0 280 120" className="pdp-chart-svg">
                    <line x1="0" x2="280" y1="20" y2="20" stroke="#E2E8F0" strokeDasharray="2 2" strokeWidth="1" />
                    <line x1="0" x2="280" y1="60" y2="60" stroke="#E2E8F0" strokeDasharray="2 2" strokeWidth="1" />
                    <line x1="0" x2="280" y1="100" y2="100" stroke="#CBD5E1" strokeWidth="1.5" />
                    {detail.mechanical.chartSeries.map((series) => (
                      <path
                        key={series.label}
                        d={series.points}
                        fill="none"
                        stroke={series.color}
                        strokeWidth={series.dashed ? 2 : 3}
                        strokeDasharray={series.dashed ? '4 2' : undefined}
                      />
                    ))}
                    <circle cx="270" cy="50" r="4" fill="#c91823" />
                  </svg>
                  <div className="pdp-chart-legend">
                    {detail.mechanical.chartSeries.map((series) => (
                      <span key={series.label} className="pdp-chart-legend-item">
                        <span className="pdp-chart-legend-dot" style={{ backgroundColor: series.color }} />
                        {series.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pdp-chart-footer">
                  <span>Fatigue Life Extension:</span>
                  <strong>{detail.mechanical.fatigueGain}</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tooling' && (
            <div className="pdp-tab-panel pdp-tooling-arch-grid">
              {detail.toolingArchitecture.map((card) => {
                const Icon = toolingIcons[card.icon] ?? HardHat;
                return (
                  <div className="pdp-arch-card" key={card.title}>
                    <div className="pdp-arch-icon"><Icon size={22} strokeWidth={1.8} /></div>
                    <h4 className="pdp-arch-title">{card.title}</h4>
                    <p className="pdp-arch-desc">{card.desc}</p>
                    <div className="pdp-arch-footer">{card.footer}</div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'quality' && (
            <div className="pdp-tab-panel pdp-quality-grid">
              <div className="pdp-quality-text">
                <h3 className="pdp-card-heading">Statistical Process Validation</h3>
                <p className="overview-text">{detail.quality.desc}</p>
                <div className="pdp-quality-stats">
                  {detail.quality.stats.map((stat) => (
                    <div className="pdp-quality-stat" key={stat.label}>
                      <span>{stat.label}</span>
                      <strong>{stat.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pdp-quality-cpk">
                <div className="pdp-quality-cpk-header">
                  <span>{detail.quality.cpkLabel}</span>
                  <span className="pdp-quality-cpk-badge">Certified</span>
                </div>
                <div className="pdp-quality-cpk-row">
                  <span>{detail.quality.cpkValue}</span>
                </div>
                <div className="pdp-quality-cpk-bar">
                  <div className="pdp-quality-cpk-bar-fill" style={{ width: `${detail.quality.cpkPercent}%` }} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="pdp-tab-panel pdp-cert-table">
              {detail.certifications.map((row) => (
                <div className="pdp-spec-row" key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="pdp-compare-section">
        <div className="container-global">
          <div className="pdp-compare-header" data-reveal="left">
            <div className="overview-eyebrow">
              Why Engineered Polymer Wins
              <span className="red-line"></span>
            </div>
            <h2 className="overview-heading pdp-compare-heading">Designed to Outperform Sintered Metal</h2>
          </div>
          <div className="pdp-compare-grid">
            {detail.comparison.map((item, idx) => {
              const Icon = comparisonIcons[item.icon] ?? Volume1;
              return (
                <div className="pdp-compare-card" key={item.label} data-reveal="scale" data-reveal-delay={String((idx % 4) + 1)}>
                  <div className="icon-badge pdp-compare-icon"><Icon size={22} strokeWidth={1.8} /></div>
                  <div className="pdp-compare-stat">{item.stat}</div>
                  <div className="pdp-compare-label">{item.label}</div>
                  <p className="pdp-compare-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RFQ FORM */}
      <section className="pdp-rfq-section" id="rfq-section">
        <div className="container-global">
          <div className="pdp-rfq-panel">
            <div className="pdp-rfq-info" data-reveal="left">
              <div className="overview-eyebrow">
                Engineering Samples
                <span className="red-line"></span>
              </div>
              <h2 className="overview-heading pdp-rfq-heading">Request RFQ &amp; Sample Kit</h2>
              <p className="overview-text">
                Tell us about your application and our application engineers will respond with a
                technical quotation and sample lead time within 24 hours.
              </p>
            </div>
            <div className="pdp-rfq-form-card" data-reveal="right">
              {submitted ? (
                <div className="pdp-rfq-success">
                  <ShieldCheck size={32} />
                  <h3>Request Received</h3>
                  <p>An application engineer will contact you shortly regarding {product.title}.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="pdp-name">Full Name *</label>
                      <input className="contact-input" id="pdp-name" placeholder="e.g. Rajesh Mehra" required type="text" />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="pdp-org">Company Name</label>
                      <input className="contact-input" id="pdp-org" placeholder="e.g. Maruti Suzuki / Hero MotoCorp" type="text" />
                    </div>
                  </div>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="pdp-email">Email Address *</label>
                      <input className="contact-input" id="pdp-email" placeholder="you@company.com" required type="email" />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="pdp-qty">Estimated Annual Volume</label>
                      <select className="contact-select" id="pdp-qty" defaultValue="">
                        <option value="" disabled>Select a range</option>
                        <option value="prototype">Prototype / Samples Only</option>
                        <option value="10k">Up to 10,000 units</option>
                        <option value="100k">10,000 – 100,000 units</option>
                        <option value="1m">100,000+ units</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="pdp-details">Application Details *</label>
                    <textarea
                      className="contact-input contact-textarea"
                      id="pdp-details"
                      placeholder={`Tell us about your use case for ${product.title}...`}
                      required
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="btn-red-pill">
                    <div className="btn-cir">
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="btn-text">Submit RFQ</div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="pdp-related-section">
          <div className="container-global">
            <div className="overview-eyebrow">
              Keep Exploring
              <span className="red-line"></span>
            </div>
            <h2 className="overview-heading pdp-related-heading">
              Related Automotive Drive &amp; Transmission Components
            </h2>
            <div className="pdp-related-grid">
              {related.map((rp) => (
                <Link href={`/products/${rp.slug}`} className="pdp-related-card" key={rp.slug}>
                  <img src={rp.image} alt={rp.title} className="pdp-related-img" />
                  <div className="pdp-related-body">
                    <span className="pdp-related-ref">{rp.partRef}</span>
                    <h3 className="pdp-related-title">{rp.title}</h3>
                    <span className="pdp-related-link">
                      View Product <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
