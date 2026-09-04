import React from 'react';
import Seperator from './Seperator';

export default function Capabilities() {
  const capabilitiesList = [
    {
      title: 'Sub Assemblies',
      icon: (
        <img className="capability-icon" src="/capaicon.png" alt="Sub Assemblies" />
      ),
    },
    {
      title: 'Insert Moulding',
      icon: (
        <img className="capability-icon" src="/2cap.png" alt="Insert Moulding" />
      ),
    },
    {
      title: 'Mould Manufacturing',
      icon: (
        <img className="capability-icon" src="/3cap.png" alt="Mould Manufacturing" />
      ),
    },
    {
      title: 'Over Moulding',
      icon: (
        <img className="capability-icon" src="/4cap.png" alt="Over Moulding" />
      ),
    },
  ];

  return (
    <section id="capabilities" className="capabilities-section">
      <Seperator/>
      <div className="container-global">
        {/* Header Row */}
        <div className="capabilities-header-grid">
          <div className="capabilities-header-left">
            <h2 className="section-heading">
              Our Capabilities
            </h2>
          </div>
          <div className="capabilities-header-right">
            <p className="section-paragraph">
              High-speed automated injection molding, precision tool manufacturing, insert molding, and sub-assembly processes engineered to deliver zero-defect automotive components for global OEMs.
            </p>
            <div className="capabilities-btn-wrapper">
              <a href="#capabilities-details" className="btn-red-pill">
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

        {/* 4 Cards Grid */}
        <div className="capabilities-cards-grid">
          {capabilitiesList.map((item, idx) => (
            <div key={idx} className="capability-card group">
              {/* Icon Container */}
              <div className="capability-icon-container">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="capability-title">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
