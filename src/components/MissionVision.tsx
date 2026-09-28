import React from 'react';
import { CircleDollarSign, BookOpen, Leaf, Award, Users, Eye } from 'lucide-react';

const principles = [
  { icon: CircleDollarSign, text: 'Prudent Financial and Cost Management' },
  { icon: BookOpen, text: 'Knowledge Management Practices' },
  { icon: Leaf, text: 'Continuing to be an environmentally conscious organization' },
  { icon: Award, text: 'Becoming an Employer of Choice' },
  { icon: Users, text: 'Highly Engaged Employees' },
  { icon: Eye, text: 'Transparency in all aspects of our business' },
];

export default function MissionVision() {
  return (
    <section id="mission" className="mv-section">
      <div className="container-global">
        <div className="mv-top-grid">
          {/* Left Content */}
          <div className="mv-top-content">
            <div className="overview-eyebrow">
              ABOUT US
              <span className="red-line"></span>
            </div>

            <h1 className="mv-heading">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
            </h1>

            <div className="mv-btn-wrapper">
              <a href="#contact" className="btn-red-pill">
                <div className="btn-cir">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="btn-text">Get Started</div>
              </a>
            </div>
          </div>

          {/* Right Paragraph */}
          <div className="mv-top-text">
            <p className="overview-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Image + Cards Grid */}
        <div className="mv-grid">
          {/* Story Image */}
          <div className="mv-image-wrapper">
            <img
              src="https://placehold.co/600x400"
              alt="Our Story"
              className="mv-image"
            />
            <div className="mv-image-caption">Our Story</div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="mv-cards-col">
            <div className="mv-card mv-card-light">
              <div className="mv-card-title">Our Mission</div>
              <p className="mv-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="mv-card mv-card-dark">
              <div className="mv-card-title">Our Vision</div>
              <p className="mv-card-text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat duis aute irure.
              </p>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="mv-principles-section">
          <div className="overview-eyebrow">
            OUR PRINCIPLES
            <span className="red-line"></span>
          </div>
          <h2 className="mv-principles-heading">
            What <span className="ov2-heading-red">Guides Us</span>
          </h2>

          <div className="mv-principles-grid">
            {principles.map(({ icon: Icon, text }) => (
              <div className="mv-principle-item" key={text}>
                <div className="mv-principle-icon-wrap">
                  <Icon className="mv-principle-icon" strokeWidth={1.5} />
                </div>
                <span className="mv-principle-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
