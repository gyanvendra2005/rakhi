'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'History', href: '/about/history' },
  { label: 'Mission & Vision', href: '/about/mission-and-vision' },
  { label: 'Core Values', href: '/about/core-values' },
];

export default function AboutTabs() {
  const pathname = usePathname();

  return (
    <div className="about-tabs">
      <div className="container-global about-tabs-inner">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <a
              key={tab.href}
              href={tab.href}
              className={`about-tab-item ${isActive ? 'about-tab-item-active' : ''}`}
            >
              {tab.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
