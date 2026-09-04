import React from 'react';
import Clients from './Clients';
import AnimatedCounter from './AnimatedCounter';

export default function GlobalPresence() {
  return (
    <section id="global-presence" className="global-presence-section">
      <div className="container-global">
        {/* Soft Rounded Gray Outer Container */}
        <div className="global-presence-box">
          {/* Top Line Separator */}
          <div className="global-presence-separator" />

          {/* Header Row */}
          <div className="global-presence-header-grid">
            <div className="global-presence-header-left">
              <h2 className="section-heading">
                Global Presence
              </h2>
            </div>
            <div className="global-presence-header-right">
              <p className="section-paragraph">
                Rikki Plastic Pvt. Ltd. is a professionally managed partnership firm in the business of manufacturing and Supply of Automotive components. We have pleasure in introducing ourselves as a leading manufacturer of Plastic Components for automotive and allied industries...
              </p>
              <div>
                <a href="#about" className="btn-red-pill">
                  <div className="btn-cir">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="btn-text">Know more</div>
                </a>
              </div>
            </div>
          </div>

          {/* Map and Stats Row */}
          <div className="global-presence-map-row">
            {/* Left Stats Column */}
            <div className="global-presence-stats-col">
              {/* Stat 1: 20+ */}
              <div className="global-presence-stat-item">
                <div className="global-presence-stat-icon-wrap">
                  <img className="global-presence-stat-icon" src="/1.png" alt="Icon 1" />
                </div>
                <div>
                  <div className="global-presence-stat-number text-gradient-primary">
                    <AnimatedCounter end={20} suffix="+" />
                  </div>
                  <div className="global-presence-stat-label">Countries Served</div>
                </div>
              </div>

              {/* Stat 2: 100+ */}
              <div className="global-presence-stat-item">
                <div className="global-presence-stat-icon-wrap">
                  <img className="global-presence-stat-icon" src="/2.png" alt="Icon 2" />
                </div>
                <div>
                  <div className="global-presence-stat-number text-gradient-primary">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <div className="global-presence-stat-label">Happy Clients</div>
                </div>
              </div>

              {/* Stat 3: 10+ */}
              <div className="global-presence-stat-item">
                <div className="global-presence-stat-icon-wrap">
                  <img className="global-presence-stat-icon" src="/3.png" alt="Icon 3" />
                </div>
                <div>
                  <div className="global-presence-stat-number text-gradient-primary">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <div className="global-presence-stat-label">Global Experience</div>
                </div>
              </div>
            </div>

            {/* Right Map Canvas */}
            <div className="global-presence-map-canvas">
              {/* Vector World Map */}
              <img 
                src="/world-map.svg" 
                alt="World Map vector" 
                className="global-presence-world-svg"
              />

              {/* Dotted Leader Lines */}
              <svg viewBox="0 0 1000 500" className="global-presence-svg-lines">
                <line x1="220" y1="130" x2="280" y2="130" className="dot-line" />
                <line x1="240" y1="210" x2="290" y2="210" className="dot-line" />
                <line x1="490" y1="110" x2="520" y2="110" className="dot-line" />
                <line x1="560" y1="140" x2="610" y2="140" className="dot-line" />
                <line x1="470" y1="180" x2="500" y2="180" className="dot-line" />
                <line x1="360" y1="340" x2="410" y2="340" className="dot-line" />
                <line x1="750" y1="190" x2="800" y2="190" className="dot-line" />
                <line x1="760" y1="260" x2="810" y2="260" className="dot-line" />
                <line x1="730" y1="320" x2="780" y2="320" className="dot-line" />
              </svg>

              {/* Pins & Country Labels */}
              <div className="map-pin pin-canada">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">Canada</span>
              </div>

              <div className="map-pin pin-us">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">US</span>
              </div>

              <div className="map-pin pin-uk">
                <span className="map-pin-label">UK</span>
                <span className="map-pin-dot"></span>
              </div>

              <div className="map-pin pin-romania">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">Romania</span>
              </div>

              <div className="map-pin pin-spain">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">Spain</span>
              </div>

              <div className="map-pin pin-brazil">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">Brazil</span>
              </div>

              <div className="map-pin pin-india">
                <span className="map-pin-label map-pin-india-text">India</span>
                <span className="map-pin-dot map-pin-dot-large"></span>
              </div>

              <div className="map-pin pin-china">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">China</span>
              </div>

              <div className="map-pin pin-thailand">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">Thailand</span>
              </div>

              <div className="map-pin pin-indonesia">
                <span className="map-pin-dot"></span>
                <span className="map-pin-label">Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Clients/> */}
    </section>
  );
}