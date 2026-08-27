'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container-global navbar-container">
        {/* Left Brand Logo Image (logo.png) */}
        <a href="#" className="navbar-brand">
          <img src="/logo2.png" alt="Company Logo" className="logo-img" />
        </a>

        <div className="right-header">
          {/* Center Desktop Navigation */}
          <nav className="nav-link navbar-desktop-nav">
            {/* About Us Dropdown */}
            <div 
              className="navbar-dropdown-wrap"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="navbar-nav-item">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {aboutDropdownOpen && (
                <div className="navbar-dropdown-menu">
                  <a href="#about" className="navbar-dropdown-link">Company Overview</a>
                  <a href="#infrastructure" className="navbar-dropdown-link">Management &amp; Vision</a>
                  <a href="#quality" className="navbar-dropdown-link">Quality Certifications</a>
                </div>
              )}
            </div>

            <a href="#sustainability" className="navbar-nav-item">Sustainability</a>
            <a href="#capabilities" className="navbar-nav-item">Capabilities</a>
            <a href="#products" className="navbar-nav-item">Products</a>
            <a href="#contact" className="navbar-nav-item">Contact Us</a>
          </nav>

          {/* Right Utility Icons */}
          <div className="navbar-utilities">
            <button aria-label="Language & Settings" className="navbar-utility-btn">
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              aria-label="Toggle Navigation Menu" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-hamburger-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <a href="#about" className="navbar-mobile-link">About Us</a>
          <a href="#sustainability" className="navbar-mobile-link">Sustainability</a>
          <a href="#capabilities" className="navbar-mobile-link">Capabilities</a>
          <a href="#products" className="navbar-mobile-link">Products</a>
          <a href="#contact" className="navbar-mobile-link">Contact Us</a>
        </div>
      )}
    </header>
  );
}
