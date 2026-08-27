import React from 'react';

export default function HeroBanner() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-bg-img" />
      
      {/* Overlay gradient */}
      <div className="hero-overlay" />

      {/* Content Container */}
      <div className="banner-content hero-container container-global">
        {/* Top Horizontal Separator Line */}
        <div className="hero-separator" />

        <div className="hero-body">
          {/* Subheading Tag */}
          <div className="banner-innovation">
            Innovation
          </div>

          {/* Main Hero Headline */}
          <h1 className="banner-headline">
            Precision Engineering,<br />
            Built To Perform.
          </h1>

          {/* Subtitle Paragraph */}
          <p className="banner-subtitle">
            Precision plastic components for automotive and home appliances, built for durability and performance.
          </p>

          {/* Action Button */}
          <div className="hero-btn-wrapper">
            <a href="#about" className="btn-red-pill">
              <span className="btn-circle-icon">
                &rsaquo;
              </span>
              <span>About Rikki Plastic</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
