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
            <h2 className="heading-about">
              About Rikki Plastic
            </h2>

            {/* Paragraph Text */}
            <p className="about-text">
              Rikki Plastic Pvt. Ltd. is a professionally managed partnership firm in the business of manufacturing and Supply of Automotive components. We have pleasure in introducing ourselves as a leading manufacturer of Plastic Components for automotive and allied industries...
            </p>

            {/* Red Pill Button */}
            <div className="about-btn-wrapper">
              <a href="#about-details" className="btn-red-pill">
                <span className="btn-circle-icon">
                  &rsaquo;
                </span>
                <span>Know More</span>
              </a>
            </div>

            {/* Stats Cards Row */}
            <div className="about-stats-grid">
              {/* Card 1: Employees */}
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <div className="stat-label">
                  Employees
                </div>
              </div>

              {/* Card 2: Years */}
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="stat-label">
                  Years
                </div>
              </div>

              {/* Card 3: Million Turnover */}
              <div className="stat-card">
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
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop" 
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
