import React from 'react';

export default function QualityAndSustainability() {
  return (
    <section id="sustainability" className="sustainability-section">
      <div className="sustainability-container container-global">
        {/* LEFT SIDE */}
        <div className="quality-section">
          {/* Image */}
          <div className="quality-image" data-reveal="left">
            <img
              src="https://placehold.co/600x400"
              alt="Quality Assurance Automotive Workshop"
            />
          </div>

          {/* Quality Content */}
          <div className="quality-content">
            <div className="quality-label" data-reveal="right">
              QUALITY ASSURANCE
            </div>

            <h2 data-reveal="right" data-reveal-delay="1">
             Precision-driven quality you can rely on
            </h2>
            <p className="section-paragraph" data-reveal="right" data-reveal-delay="2">
              We maintain rigorous quality standards across every stage of the moulding process, from design and tooling to production and final inspection. Our controlled processes, attention to detail, and consistent checks ensure reliable performance, dimensional accuracy, and high-quality results.
            </p>

            <div className="sustainability-button-wrapper" data-reveal="right" data-reveal-delay="3">
              <a href="#quality-details" className="btn-red-pill">
                <div className="btn-cir">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="btn-text">
                  Know more
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="sustainability-card" data-reveal="scale">
          <div className="sustainability-content">
            <h2>
              Sustainability
            </h2>

            <p className="section-paragraph">
              Our processes and techniques are designed to minimize the energy and resource consumption as well as minimize the waste produced as part of the moulding process.
            </p>

            <div className="sustainability-button-wrapper">
              <a href="#sustainability-details" className="btn-red-pill">
                <div className="btn-cir">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="btn-text">
                  Know more
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="card-bottom-line"></div>
        </div>
      </div>
    </section>
  );
}
