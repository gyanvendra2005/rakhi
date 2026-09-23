import React from 'react';
import Seperator from './Seperator';
import AnimatedCounter from './AnimatedCounter';

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <Seperator />
      <div className="container-global">
        <div className="about-grid">
          {/* Left Content Column */}
          <div className="about-content">
            {/* Section Title */}
            <h2 className="heading-about" data-reveal="left">
              About Rikki Plastic
            </h2>

            {/* Paragraph Text */}
            <p className="about-text" data-reveal="left" data-reveal-delay="1">
              Rikki Plastic Pvt. Ltd. is a professionally managed partnership firm in the business of manufacturing and Supply of Automotive components. We have pleasure in introducing ourselves as a leading manufacturer of Plastic Components for automotive and allied industries...
            </p>

            {/* Red Pill Button */}
            <div className="about-btn-wrapper" data-reveal="left" data-reveal-delay="2">
              <a href="#about-details" className="btn-red-pill">
                <div className="btn-cir">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="btn-text">Know More</div>
              </a>
            </div>

            {/* Stats Cards Row */}
            <div className="about-stats-grid">
              {/* Card 1: Employees */}
              <div className="stat-card" data-reveal="scale" data-reveal-delay="2">
                <div className="stat-number">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <div className="stat-label">
                  Employees
                </div>
              </div>

              {/* Card 2: Years */}
              <div className="stat-card" data-reveal="scale" data-reveal-delay="3">
                <div className="stat-number">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="stat-label">
                  Years
                </div>
              </div>

              {/* Card 3: Million Turnover */}
              <div className="stat-card" data-reveal="scale" data-reveal-delay="4">
                <div className="stat-number stat-rupee-wrapper">
                  <span className="stat-rupee-symbol">₹</span>
                  <AnimatedCounter end={250} suffix="" />
                </div>
                <div className="stat-label">
                  Million
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="about-image-column" data-reveal="right">
            <div className="about-image-wrapper">
              <img
                src="https://placehold.co/600x400"
                alt="About Rikki Plastic Facility"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
