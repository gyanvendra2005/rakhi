import React from 'react';
import { ChevronRight } from 'lucide-react';
import Seperator from './Seperator';

export default function Products() {
  const productsList = [
    {
      title: 'Cabin',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Assemblies',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Electronics',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Cabin',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="products" className="products-section">
      <Seperator />
      <div className="container-global">
        <div className="products-grid">
          {/* Left Description Column */}
          <div className="products-left">
            <h2 className="section-heading">
              Our Products
            </h2>

            <p className="section-paragraph">
              Precision engineered plastic components designed for automotive and industrial applications. Manufactured to exact tolerance standards ensuring reliability, durability, and seamless integration.
            </p>

            <div className="products-btn-wrapper">
              <a href="#all-products" className="btn-red-pill">
                <span className="btn-circle-icon">
                  &rsaquo;
                </span>
                <span>Explore all products</span>
              </a>
            </div>
          </div>

          {/* Right 2x2 Product Cards Grid */}
          <div className="products-cards-grid">
            {productsList.map((product, idx) => (
              <div key={idx} className="product-card group">
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
