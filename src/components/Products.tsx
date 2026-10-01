import React from 'react';
import { ChevronRight } from 'lucide-react';
import Seperator from './Seperator';

export default function Products() {
  const productsList = [
    {
      title: 'Shock Absorber ',
      image: '/shock_absorb.png',
    },
    {
      title: '2W Switch Housing',
      image: '/2w-switch.png',
    },
    {
      title: 'Floor Mat',
      image: '/flor-mat.png',
    },
    {
      title: 'Handle Grip',
      image: '/2w-switch.png',
    },
  ];

  return (
    <section id="products" className="products-section">
      <Seperator />
      <div className="container-global">
        <div className="products-grid">
          {/* Left Description Column */}
          <div className="products-left">
            <h2 className="section-heading" data-reveal="left">
              Our Products
            </h2>

            <p className="section-paragraph" data-reveal="left" data-reveal-delay="1">
              Precision engineered plastic components designed for automotive and industrial applications. Manufactured to exact tolerance standards ensuring reliability, durability, and seamless integration.
            </p>

            <div className="products-btn-wrapper" data-reveal="left" data-reveal-delay="2">
              <a href="/products" className="btn-red-pill">
                <div className="btn-cir">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8 1.8L7 7L1.8 12.2" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="btn-text">Explore all products</div>
              </a>
            </div>
          </div>

          {/* Right 2x2 Product Cards Grid */}
          <div className="products-cards-grid">
            {productsList.map((product, idx) => (
              <div
                key={idx}
                className="product-card group"
                data-reveal="scale"
                data-reveal-delay={String((idx % 4) + 1)}
              >
                {/* Product Image Area */}
                <div className="product-image-area">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-image"
                  />
                </div>

                {/* Footer Label Bar */}
                <div className="product-footer-bar">
                  <span className="product-title">
                    {product.title}
                  </span>
                  <ChevronRight className="product-chevron" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
