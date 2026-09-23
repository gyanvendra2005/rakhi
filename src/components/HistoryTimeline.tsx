'use client';

import React, { useEffect, useRef } from 'react';

const milestones = [
  {
    year: '1969',
    title: 'Lorem Ipsum Dolor Sit Amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: '1975',
    title: 'Ut Enim Ad Minim Veniam',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    year: '1980',
    title: 'Duis Aute Irure Dolor',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    year: '1990',
    title: 'Excepteur Sint Occaecat',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    year: '1994',
    title: 'Sed Ut Perspiciatis Unde',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    year: '2000',
    title: 'Nemo Enim Ipsam Voluptatem',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    year: '2010',
    title: 'Neque Porro Quisquam',
    text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
  },
  {
    year: '2020',
    title: 'Quis Autem Vel Eum',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
  },
  {
    year: '2022',
    title: 'At Vero Eos Et Accusamus',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
  },
];

export default function HistoryTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const items = wrap.querySelectorAll('.timeline-item');

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item-visible');
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    items.forEach((item) => itemObserver.observe(item));

    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wrap.classList.add('timeline-wrap-visible');
            lineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    lineObserver.observe(wrap);

    return () => {
      itemObserver.disconnect();
      lineObserver.disconnect();
    };
  }, []);

  return (
    <section id="history" className="timeline-section">
      <div className="container-global">
        <div className="overview-eyebrow reveal-fade-down">
          ABOUT US
          <span className="red-line"></span>
        </div>

        <h1 className="overview-heading reveal-fade-down reveal-delay-1">
          HISTORY <span className="overview-heading-red">&amp; TIMELINE</span>
        </h1>

        <div className="timeline-wrap" ref={wrapRef}>
          <div className="timeline-line"></div>
          <div className="timeline-line-progress"></div>

          {milestones.map((milestone, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
              key={milestone.year}
              style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
            >
              <div className="timeline-dot">
                <span className="timeline-dot-ping"></span>
              </div>
              <div className="timeline-card">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-title">{milestone.title}</div>
                <p className="timeline-text">{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
