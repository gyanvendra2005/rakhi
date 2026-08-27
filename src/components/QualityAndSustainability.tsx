import React from 'react';

export default function QualityAndSustainability() {
  return (
    <section id="sustainability" className="sustainability-section">
      <div className="sustainability-container container-global">
        {/* LEFT SIDE */}
        <div className="quality-section">
          {/* Image */}
          <div className="quality-image">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop"
              alt="Quality Assurance Automotive Workshop"
            />
          </div>

          {/* Quality Content */}
          <div className="quality-content">
            <div className="quality-label">
              QUALITY ASSURANCE
            </div>

            <h2>
              Lorem ipsum is standard placeholder text used in design and publishing.
            </h2>

            <div className="sustainability-button-wrapper">
              <a href="#quality-details" className="btn-red-pill">
                <span className="btn-circle-icon">
                  &rsaquo;
                </span>
                <span className="button-text">
                  Know more
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="sustainability-card">
          <div className="sustainability-content">
            <h2>
              Sustainability
            </h2>

            <p>
              Our processes and techniques are designed to minimize the energy and resource consumption as well as minimize the waste produced as part of the moulding process.
            </p>

            <div className="sustainability-button-wrapper">
              <a href="#sustainability-details" className="btn-red-pill">
                <span className="btn-circle-icon">
                  &rsaquo;
                </span>
                <span className="button-text">
                  Know more
                </span>
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
