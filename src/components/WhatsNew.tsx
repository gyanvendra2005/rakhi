import React from 'react';
import { MoreHorizontal, Plus, Globe } from 'lucide-react';
import Seperator from './Seperator';

export default function WhatsNew() {
  return (
    <section id="news" className="news-section">
      <Seperator/>
      {/* Background Soft Wave Texture */}
      <div className="news-bg-wave" />

      <div className="container-global news-container">
        {/* Top Accent Line */}
        <div className="news-top-separator" />

        {/* Section Title */}
        <h2 className="section-heading text-slate-900">
          News &amp; Events
        </h2>

        {/* 2 Column Social Cards Grid */}
        <div className="news-cards-grid">
          {/* Card 1: Yamaha Appreciation Award */}
          <div className="social-post-card group">
            {/* Header */}
            <div className="post-header">
              <div className="post-author-wrap">
                <div className="post-author-avatar">
                  RIKKI
                </div>
                <div>
                  <div className="post-author-name">Rikki Plastic Pvt Ltd</div>
                  <div className="post-meta">
                    <span>1,000 followers</span>
                    <span>•</span>
                    <span>1mo</span>
                    <span>•</span>
                    <Globe className="post-globe-icon" />
                  </div>
                </div>
              </div>
              <div className="post-actions">
                <button className="post-follow-btn">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Follow</span>
                </button>
                <MoreHorizontal className="post-more-icon" />
              </div>
            </div>

            {/* Post Content */}
            <div className="post-text-body">
              <p>
                Proud moment for all of us at Rikki Plastic Private Limited to receive the <strong className="font-bold text-slate-900">Appreciation Award for Delivery from India Yamaha Motor Pvt. Ltd.</strong>
              </p>
              <p>
                This recognition reflects our team&apos;s consistent focus on execution, reliability, and commitment to customer timelines.
              </p>
              <p>
                Grateful to our entire team for making this possible, and to Yamaha for the continued trust and partnership.
              </p>
              <p>
                We remain committed to raising the bar further.
              </p>

              {/* Hashtags & Tags */}
              <div className="post-hashtags">
                <div>#RikkiPlastic #CustomerFirst #DeliveryExcellence #Manufacturing #OEM</div>
                <div className="text-slate-500">Rakesh Jaggi • Sanchit Jaggi • Rachit Jaggi</div>
              </div>
            </div>

            {/* Post Banner / Award Image */}
            <div className="post-award-banner">
              <div className="post-award-content">
                <div className="post-yamaha-row">
                  <div className="post-yamaha-dot">
                    🔴
                  </div>
                  <span className="post-yamaha-title">YAMAHA</span>
                </div>
                <div className="post-award-pill">
                  Appreciation Award
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Aligarh Project Expo Event */}
          <div className="social-post-card group">
            {/* Header */}
            <div className="post-header">
              <div className="post-author-wrap">
                <div className="post-author-avatar">
                  RIKKI
                </div>
                <div>
                  <div className="post-author-name">Rikki Plastic Pvt Ltd</div>
                  <div className="post-meta">
                    <span>1,000 followers</span>
                    <span>•</span>
                    <span>1mo</span>
                    <span>•</span>
                    <Globe className="post-globe-icon" />
                  </div>
                </div>
              </div>
              <div className="post-actions">
                <button className="post-follow-btn">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Follow</span>
                </button>
                <MoreHorizontal className="post-more-icon" />
              </div>
            </div>

            {/* Post Content */}
            <div className="post-excerpt">
              Good to be associated with colleges across India and engage with students on emerging technologies, industry practices, and the future of manufacturing. <span className="text-slate-400 cursor-pointer">...more</span>
            </div>

            {/* Inner Shared Post Box */}
            <div className="inner-post-box">
              <div className="inner-post-header">
                <div className="inner-author-wrap">
                  <div className="inner-author-avatar">
                    2aligarh
                  </div>
                  <div>
                    <div className="inner-author-name">AforAligarh</div>
                    <div className="inner-meta">12 followers • 1mo</div>
                  </div>
                </div>
                <button className="post-follow-btn">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Follow</span>
                </button>
              </div>

              <div className="inner-post-title">
                WRAP ON PROJECT EXPO 2.0!
              </div>

              <div className="inner-post-desc">
                Innovation. Engineering. Impact. What an absolute powerhouse of talent... <span className="text-slate-400 cursor-pointer">more</span>
              </div>
            </div>

            {/* Post Image */}
            <div className="post-event-image-area">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" 
                alt="Project Expo Event" 
                className="post-event-image"
              />
              <div className="post-event-badge">
                EXPO 2.0 • 2aligarh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
