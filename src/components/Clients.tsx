'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Clients() {
  const logos = [
    {
      name: 'ESCORTS',
      element: (
        <div className="client-logo-content">
          <svg className="escorts-icon" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z M50 25 C37.5 25 27.5 35 27.5 47.5 C27.5 53 29.5 58 33 62 L33 77.5 L67 77.5 L67 62 C70.5 58 72.5 53 72.5 47.5 C72.5 35 62.5 25 50 25 Z M50 35 C55 35 60 38 61 43 L48 43 L48 52 L61 52 C59 58 54 61 48 60 C42 59 38 53 40 47 C41 40 46 35 50 35 Z" />
          </svg>
          <span className="escorts-text">ESCORTS</span>
        </div>
      ),
    },
    {
      name: 'JCB',
      element: (
        <div className="jcb-box">
          <span className="jcb-text">
            JCB
          </span>
        </div>
      ),
    },
    {
      name: 'MINDA',
      element: (
        <div className="minda-pill">
          <span className="minda-text">
            MINDA
          </span>
        </div>
      ),
    },
    {
      name: 'YAMAHA',
      element: (
        <div className="yamaha-wrap">
          <div className="yamaha-emblem">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
              <circle cx="50" cy="50" r="42" strokeWidth="8"/>
              <line x1="50" y1="8" x2="50" y2="92" />
              <line x1="14" y1="29" x2="86" y2="71" />
              <line x1="14" y1="71" x2="86" y2="29" />
            </svg>
          </div>
          <span className="yamaha-text">YAMAHA</span>
        </div>
      ),
    },
    {
      name: 'KEIHIN',
      element: (
        <div className="keihin-wrap">
          <span className="keihin-text">
            KE<span className="relative">I<span className="keihin-star">★</span></span>HIN
          </span>
        </div>
      ),
    },
    {
      name: 'SHOWA',
      element: (
        <div className="showa-wrap">
          <span className="showa-text">
            SHOWA
          </span>
        </div>
      ),
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="clients-section">
      <div className="container-global">
        {/* White Rounded Container with Thin Border */}
        <div className="clients-box">
          <Slider {...settings}>
            {logos.map((logo, idx) => (
              <div key={idx}>
                <div className="client-logo-item">
                  {logo.element}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
