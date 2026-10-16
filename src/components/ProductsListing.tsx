'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, Phone, ArrowUpRight, ShieldCheck, CheckCircle2, SlidersHorizontal, Gauge } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { products, categoryFilters, type Product } from '@/data/products';

export default function ProductsListing() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.categoryKey === selectedCategory;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.partRef.toLowerCase().includes(q) ||
        p.specs.polymer.toLowerCase().includes(q) ||
        p.specs.subSystem.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="plp-page selection:bg-[#c91823] selection:text-white">
      <ScrollReveal />

      {/* =========================================================================
          HERO BANNER (Matches Overview, Contact & ESG page style)
         ========================================================================= */}
      <section className="plp-hero">
        <img
          src="/overview_hero_bg.jpg"
          alt="High-Precision Engineered Plastic Components Facility"
          className="plp-hero-bg"
        />
        <div className="plp-hero-overlay"></div>
        <div className="container-global plp-hero-inner">
          <div className="plp-hero-text">
            <div className="overview-eyebrow" data-reveal>
              Automotive &amp; Industrial Polymer Solutions
              <span className="red-line"></span>
            </div>
            <h1 className="overview-heading plp-hero-heading" data-reveal data-reveal-delay="1">
              High-Precision Engineered{' '}
              <span className="overview-heading-red">Plastic Components</span>
            </h1>
            <p className="overview-text plp-hero-sub" data-reveal data-reveal-delay="2">
              Delivering micro-tolerance injection molded drive systems, high-stress powertrain
              modules, and structural interior/exterior assemblies for Tier-1 mobility leaders worldwide.
            </p>
            <div className="plp-hero-badges" data-reveal data-reveal-delay="3">
              <div className="plp-hero-badge">
                <div className="icon-badge">
                  <SlidersHorizontal size={18} strokeWidth={1.8} />
                </div>
                Sub-Micron (&plusmn;0.005mm) Tolerance
              </div>
              <div className="plp-hero-badge">
                <div className="icon-badge">
                  <ShieldCheck size={18} strokeWidth={1.8} />
                </div>
                IATF 16949 &amp; ISO 9001
              </div>
              <div className="plp-hero-badge">
                <div className="icon-badge">
                  <Gauge size={18} strokeWidth={1.8} />
                </div>
                Six Sigma Ppk &gt; 1.67
              </div>
            </div>
            <div className="plp-hero-actions" data-reveal data-reveal-delay="4">
              <Link href="/contact" className="btn-red-pill">
                <div className="btn-cir">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="btn-text">Request Technical RFQ</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCTS & SOLUTIONS CATALOG SECTION (Imperial Auto Layout)
         ========================================================================= */}
      <section className="bg-white text-[#041521] min-h-screen py-12 lg:py-16">
        <div className="container-global">
        
        {/* =========================================================================
            1. EXACT TOP HEADER SECTION: Matches .productUp on imperialauto.com/products/
            <h6>DRIVING INTO THE FUTURE</h6>
            <h1>Products & Solutions</h1>
            <p>Tailor-made solutions built with precision to withstand extreme conditions.</p>
           ========================================================================= */}
        <div className="productUp text-center mb-12 lg:mb-14 max-w-3xl mx-auto">
          <h6 className="text-[#c91823] font-semibold text-[13px] tracking-[1.5px] uppercase mb-2.5">
            DRIVING INTO THE FUTURE
          </h6>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#041521] tracking-tight mb-2.5 leading-tight">
            Products &amp; Solutions
          </h1>
          <p className="text-[#5E5E5E] text-base leading-relaxed font-normal">
            Tailor-made solutions built with precision to withstand extreme conditions.
          </p>
        </div>

        {/* =========================================================================
            2. ROUNDED PILL SEARCH BAR & CATEGORY FILTER TABS
           ========================================================================= */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {/* Pill Search Input */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search by Part no, product or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-5 pr-11 py-2.5 text-sm bg-white border border-gray-300 rounded-full text-[#333] placeholder:text-gray-400 focus:outline-none focus:border-[#c91823] focus:ring-1 focus:ring-[#c91823] shadow-sm transition-all"
            />
            <button
              type="button"
              aria-label="Search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#c91823] transition-colors"
            >
              <Search className="size-4" />
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1 text-xs">
            {categoryFilters.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    active
                      ? 'bg-[#c91823] text-white shadow-sm hover:bg-[#a6121b]'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-[#041521]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="text-center text-xs text-gray-400 pt-1">
            Showing <strong className="text-gray-700">{filteredProducts.length}</strong> of {products.length} precision components
          </div>
        </div>

        {/* =========================================================================
            3. EXACT 4-COLUMN PRODUCT GRID (col-md-4 col-lg-3 col-sm-6 from screenshot)
               - Square studio container (#f7f7f7)
               - Real product render centered
               - Centered product title below
           ========================================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-gray-500 max-w-md mx-auto">
            <p className="text-base">No products match your search "{search}".</p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-sm text-[#c91823] font-semibold hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((prod) => (
              <div
                key={prod.slug}
                onClick={() => setSelectedProduct(prod)}
                className="prodBox group cursor-pointer flex flex-col transition-all duration-300"
              >
                {/* Square Image Box (.prodBoxImg) */}
                <div className="prodBoxImg relative aspect-square w-full bg-[#f7f7f7] rounded-[4px] overflow-hidden flex items-center justify-center p-6 border border-gray-100/90 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Centered Product Title below image */}
                <div className="mt-3 text-center px-1">
                  <h6 className="font-semibold text-[15px] sm:text-base text-[#041521] leading-snug group-hover:text-[#c91823] transition-colors">
                    {prod.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* =========================================================================
          5. PRODUCT DETAIL MODAL (Spacious & Modern)
         ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative my-auto border border-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 z-20 size-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div className="p-8 sm:p-10 lg:p-12">
              {/* Breadcrumbs */}
              <div className="text-xs font-medium text-slate-400 mb-8 flex items-center gap-2 flex-wrap">
                <span className="hover:text-[#c91823] cursor-pointer text-slate-500 transition-colors" onClick={() => setSelectedProduct(null)}>
                  Products &amp; Solutions
                </span>
                <span>/</span>
                <span className="text-slate-500">{selectedProduct.category}</span>
                <span>/</span>
                <span className="text-[#041521] font-semibold">{selectedProduct.title}</span>
              </div>

              {/* 2-Column Product Detail Layout with Generous Spacing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left Column: Image Box (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="bg-[#f8f9fa] rounded-2xl aspect-square flex items-center justify-center p-10 border border-slate-200/90 shadow-xs">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Right Column: Title, Description, Specs & Actions (7 cols) */}
                <div className="lg:col-span-7 space-y-7">
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#041521] leading-tight tracking-tight">
                      {selectedProduct.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {selectedProduct.detail?.longDescription || selectedProduct.description}
                  </p>

                  {/* Engineering Specifications Card */}
                  <div className="bg-slate-50/90 rounded-xl p-5 sm:p-6 border border-slate-200/90 space-y-3.5">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#c91823]"></span>
                      Engineering Specifications
                    </h4>
                    <div className="divide-y divide-slate-200/70 text-xs sm:text-[13px]">
                      <div className="flex justify-between py-2.5">
                        <span className="text-slate-500">Polymer Matrix</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.specs.polymer}</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-slate-500">Process Tolerance</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.specs.tolerance}</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-slate-500">Target Sub-System</span>
                        <span className="font-semibold text-[#c91823] text-right">{selectedProduct.specs.subSystem}</span>
                      </div>
                      <div className="flex justify-between py-2.5">
                        <span className="text-slate-500">Quality Standard</span>
                        <span className="font-semibold text-slate-900 text-right">IATF 16949:2016 / ISO 9001:2015</span>
                      </div>
                    </div>
                  </div>

                  {/* Target Applications / Tags */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Target Subsystems &amp; Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white text-slate-700 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-2xs hover:border-slate-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Spacious & Well-Organized */}
                  <div className="pt-2 space-y-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        onClick={() => setSelectedProduct(null)}
                        className="flex-1 bg-[#c91823] hover:bg-[#a6121b] text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all shadow-sm hover:shadow text-center cursor-pointer"
                      >
                        Request RFQ / Quotation
                      </Link>
                      <a
                        href="https://wa.me/919810000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-center"
                      >
                        <Phone className="size-4" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      </section>
    </div>
  );
}
