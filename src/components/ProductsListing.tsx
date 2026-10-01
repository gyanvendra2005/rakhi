'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  SlidersHorizontal,
  ShieldCheck,
  Gauge,
  Search,
  ArrowUpRight,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import {
  products,
  categoryFilters,
  resinMatrix,
  type Product,
} from '@/data/products';

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

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div className="plp-card" data-reveal="scale" data-reveal-delay={String((index % 4) + 1)}>
      <div className="plp-card-media">
        <img src={product.image} alt={product.title} className="plp-card-img" />
        <div className="plp-card-badges">
          {product.badges.map((b) => (
            <span className="plp-card-badge" key={b}>{b}</span>
          ))}
        </div>
        <div className="plp-card-spec-chip">{product.specLabel}</div>
      </div>
      <div className="plp-card-body">
        <div>
          <span className="plp-card-ref">Part Ref: {product.partRef}</span>
          <h3 className="plp-card-title">{product.title}</h3>
        </div>
        <div className="plp-card-keyvals">
          <div className="plp-card-keyval">
            <span>Polymer Matrix:</span>
            <strong>{product.specs.polymer}</strong>
          </div>
          <div className="plp-card-keyval">
            <span>Tolerance:</span>
            <strong>{product.specs.tolerance}</strong>
          </div>
          <div className="plp-card-keyval">
            <span>Sub-System:</span>
            <strong className="plp-card-keyval-red">{product.specs.subSystem}</strong>
          </div>
        </div>
        <p className="plp-card-desc">{product.description}</p>
        <div className="plp-card-footer">
          <Link href={`/products/${product.slug}`} className="plp-card-link">
            View Full Specs
            <ArrowUpRight size={16} />
          </Link>
          <span className="plp-card-ppap">
            <span className="plp-card-dot" /> PPAP Level 3 Ready
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductsListing() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.categoryKey === activeCategory;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.specs.polymer.toLowerCase().includes(q) ||
        p.specs.subSystem.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="plp-root">
      <ScrollReveal />

      {/* HERO */}
      <section className="plp-hero">
        <img src="https://placehold.co/1600x700" alt="Precision injection molding facility" className="plp-hero-bg" />
        <div className="plp-hero-overlay"></div>
        <div className="container-global plp-hero-inner">
          <div className="plp-hero-text">
            <div className="overview-eyebrow">
              Automotive &amp; Industrial Polymer Solutions
              <span className="red-line"></span>
            </div>
            <h1 className="overview-heading plp-hero-heading" data-reveal>
              High-Precision Engineered{' '}
              <span className="overview-heading-red">Plastic Components</span>
            </h1>
            <p className="overview-text plp-hero-sub" data-reveal data-reveal-delay="1">
              Delivering micro-tolerance injection molded drive systems, high-stress powertrain
              modules, and structural interior/exterior assemblies for Tier-1 mobility leaders
              worldwide.
            </p>
            <div className="plp-hero-badges" data-reveal data-reveal-delay="2">
              <div className="plp-hero-badge">
                <div className="icon-badge"><SlidersHorizontal size={18} strokeWidth={1.8} /></div>
                Sub-Micron (±0.005mm) Tolerance
              </div>
              <div className="plp-hero-badge">
                <div className="icon-badge"><ShieldCheck size={18} strokeWidth={1.8} /></div>
                IATF 16949 &amp; ISO 9001
              </div>
              <div className="plp-hero-badge">
                <div className="icon-badge"><Gauge size={18} strokeWidth={1.8} /></div>
                Six Sigma Ppk &gt; 1.67
              </div>
            </div>
            <div className="plp-hero-actions" data-reveal data-reveal-delay="3">
              <RedPillLink href="/contact" label="Request Technical RFQ" />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="plp-filter-bar">
        <div className="container-global plp-filter-inner">
          <div className="plp-filter-pills">
            {categoryFilters.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`plp-filter-pill${activeCategory === cat.key ? ' is-active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="plp-search-row">
            <div className="plp-search-field">
              <Search size={18} className="plp-search-icon" />
              <input
                type="text"
                className="plp-search-input"
                placeholder="Search part name, polymer, or application..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <span className="plp-search-count">
              Showing <strong>{filtered.length}</strong> of {products.length} Programs
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="plp-grid-section">
        <div className="container-global">
          <div className="plp-grid">
            {filtered.map((product, idx) => (
              <ProductCard product={product} index={idx} key={product.slug} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="plp-empty">No products match that filter yet. Try clearing your search.</p>
          )}
        </div>
      </section>

      {/* RESIN MATRIX TABLE */}
      <section className="plp-resin-section" id="polymer-matrix">
        <div className="container-global">
          <div className="plp-resin-header" data-reveal="left">
            <div className="overview-eyebrow">
              Raw Material Processing Capabilities
              <span className="red-line"></span>
            </div>
            <h2 className="overview-heading plp-resin-heading">
              Engineering Resins &amp; Advanced Polymer Compounding
            </h2>
            <p className="overview-text plp-resin-sub">
              Our automated raw material conveying, drying (dew point &lt;-40°C), and gravimetric dosing
              silos in Faridabad and Hosur ensure zero moisture volatility across mission-critical compounds.
            </p>
          </div>
          <div className="plp-table-wrap" data-reveal="scale">
            <table className="plp-table">
              <thead>
                <tr>
                  <th>Polymer Family</th>
                  <th>Reinforcements &amp; Additives</th>
                  <th>Tensile Modulus (MPa)</th>
                  <th>HDT @ 1.8 MPa</th>
                  <th>Primary Automotive Application</th>
                  <th className="plp-table-right">In-Stock Status</th>
                </tr>
              </thead>
              <tbody>
                {resinMatrix.map((row) => (
                  <tr key={row.family}>
                    <td>
                      <div className="plp-table-family">{row.family}</div>
                      <span className="plp-table-code">{row.code}</span>
                    </td>
                    <td>{row.reinforcements}</td>
                    <td className="plp-table-mono">{row.modulus}</td>
                    <td className="plp-table-mono plp-table-red">{row.hdt}</td>
                    <td>{row.application}</td>
                    <td className="plp-table-right">
                      <span className="plp-table-status">
                        <span className="plp-table-dot" /> {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
