import React from 'react';

export default function HeroBanner() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-bg-video"
      >
        <source src="/rikki banner.webm" type="video/webm" />
      </video>
      
      {/* Overlay gradient */}
      {/* <div className="hero-overlay" /> */}

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
              <div className="btn-cir">
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="btn-text">About Rikki Plastic</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
