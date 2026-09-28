'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const milestones = [
  {
    letter: 'R',
    year: '1998',
    headline: 'Rikki Plastic is founded',
    text: 'Established in Faridabad as a small-scale manufacturer of precision plastic components for the automotive industry.',
  },
  {
    letter: 'I',
    year: '2004',
    headline: 'Investment in advanced tooling',
    text: 'Upgraded our injection moulding capacity with high-precision tools to serve growing customer demand.',
  },
  {
    letter: 'K',
    year: '2010',
    headline: 'Key OEM partnerships secured',
    text: 'Became an approved vendor for leading two-wheeler and passenger vehicle OEMs across India.',
  },
  {
    letter: 'K',
    year: '2016',
    headline: 'Knowledge-driven quality systems',
    text: 'Implemented ISO and IATF certified quality management systems across all manufacturing lines.',
  },
  {
    letter: 'I',
    year: '2022',
    headline: 'International market entry',
    text: 'Began exporting precision components to global markets, expanding our footprint beyond India.',
  },
];

export default function MilestoneCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % milestones.length);
  const active = milestones[activeIndex];

  return (
    <section className="milestone-section">
      <div className="container-global">
        <div className="overview-eyebrow">
          OUR JOURNEY
          <span className="red-line"></span>
        </div>
        <h2 className="ov2-legacy-heading">
          Our <span className="ov2-heading-red">Milestones</span>
        </h2>

        <div className="milestone-grid">
          <div className="milestone-letters-col">
            <div className="milestone-track-line"></div>
            {milestones.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`milestone-row ${idx === activeIndex ? 'milestone-row-active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className="milestone-letter-badge">{item.letter}</span>
              </button>
            ))}
          </div>

          <div className="milestone-detail">
            <div className="milestone-detail-card" key={activeIndex}>
              <h3 className="milestone-headline">{active.headline}</h3>
              <p className="milestone-text overview-text">{active.text}</p>
            </div>

            <div className="milestone-controls">
              <button
                type="button"
                className="milestone-ctrl-btn milestone-play-btn"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button type="button" className="milestone-ctrl-btn" onClick={goPrev} aria-label="Previous">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button type="button" className="milestone-ctrl-btn" onClick={goNext} aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
