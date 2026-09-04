'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Clients() {
  const clientLogos = [
    { name: 'ESCORTS', src: '/c1.png' },
    { name: 'JCB', src: '/c2.png' },
    { name: 'MINDA', src: '/c3.png' },
    { name: 'YAMAHA', src: '/c4.png' },
    { name: 'KEIHIN', src: '/c5.png' },
    { name: 'SHOWA', src: '/c6.png' },
  ];

  // Tripled logos array to guarantee continuous infinite marquee sliding
  const extendedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="clients-section">
      <div className="container-global">
        {/* White Rounded Container */}
        <div className="clients-box">
          <Slider {...settings}>
            {extendedLogos.map((client, idx) => (
              <div key={idx}>
                <div className="client-logo-item">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="client-logo-img"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

