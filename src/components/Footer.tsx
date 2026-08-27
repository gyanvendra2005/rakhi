import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container-global footer-container">
        <div className="footer-grid">
          {/* Left Column: Logo + Headline */}
          <div className="footer-col-brand">
            {/* RIKKI Logo Image */}
            <a href="#" className="footer-logo-link">
              <img 
                src="/logo2.png" 
                alt="Rikki Plastic Logo" 
                className="footer-logo-img" 
              />
            </a>

            {/* Headline */}
            <h2 className="footer-headline">
              The global leader in drive systems
            </h2>
          </div>

          {/* Center Column: Navigation Links */}
          <div className="footer-col-nav">
            <ul className="footer-nav-list">
              <li>
                <a href="#about" className="footer-nav-item">About Us</a>
              </li>
              <li>
                <a href="#capabilities" className="footer-nav-item">Our Capabilities</a>
              </li>
              <li>
                <a href="#quality" className="footer-nav-item">Quality</a>
              </li>
              <li>
                <a href="#csr" className="footer-nav-item">CSR/ESG</a>
              </li>
              <li>
                <a href="#clients" className="footer-nav-item">Clients</a>
              </li>
              <li>
                <a href="#team" className="footer-nav-item">Management Team</a>
              </li>
              <li>
                <a href="#news" className="footer-nav-item">News &amp; Events</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Details */}
          <div className="footer-col-contact">
            <h3 className="footer-contact-title">
              Contact Us
            </h3>

            {/* Address */}
            <p className="footer-address">
              B-5, Opposite JCB India, Sector 59,<br />
              Ballabgarh, Faridabad, Haryana-<br />
              121004
            </p>

            {/* Phone Numbers */}
            <div className="footer-phone-list">
              <div>+91 129 415 4941/48</div>
              <div>+91 129 415 4950</div>
            </div>

            {/* Email */}
            <div className="footer-email-wrap">
              <a href="mailto:info@rikkiplastic.com" className="footer-email-link">
                info@rikkiplastic.com
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator" />

        {/* Copyright Line */}
        <div className="footer-copyright-bar">
          &copy; Rikki Plastic Pvt. ltd. 2026
        </div>
      </div>
    </footer>
  );
}
