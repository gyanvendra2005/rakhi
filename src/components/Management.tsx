import React from 'react';
import { ArrowRight } from 'lucide-react';

const team = [
  {
    name: 'XYZ',
    role: 'Managing Director',
    contact: '+91 98100 00001',
    image: 'https://placehold.co/500x360',
  },
  {
    name: 'XYZ',
    role: 'Executive Director',
    contact: '+91 98100 00002',
    image: 'https://placehold.co/500x360',
  },
  {
    name: 'XYZ',
    role: 'Director, Operations',
    contact: '+91 98100 00003',
    image: 'https://placehold.co/500x360',
  },
  {
    name: 'XYZ',
    role: 'Head of Quality',
    contact: '+91 98100 00004',
    image: 'https://placehold.co/500x360',
  },
  {
    name: 'XYZ',
    role: 'Head of Sales',
    contact: '+91 98100 00005',
    image: 'https://placehold.co/500x360',
  },
  {
    name: 'XYZ',
    role: 'Head of Manufacturing',
    contact: '+91 98100 00006',
    image: 'https://placehold.co/500x360',
  },
];

export default function Management() {
  return (
    <section id="management" className="mgmt-section">
      <div className="container-global">
        <div className="mgmt-header-grid">
          <div>
            <div className="overview-eyebrow">
              ABOUT US
              <span className="red-line"></span>
            </div>
            <h1 className="mgmt-heading">
              Meet our <span className="overview-heading-red">Leadership Team</span>
            </h1>
          </div>
          <p className="overview-text mgmt-header-text">
            Our management team brings decades of combined experience in engineering,
            operations, and customer partnership, driving Rikki Plastic&apos;s commitment to
            quality and growth.
          </p>
        </div>

        <div className="mgmt-grid">
          {team.map((member, idx) => (
            <div className="mgmt-card" key={idx}>
              <div className="mgmt-card-image-wrap">
                <img src={member.image} alt={member.name} className="mgmt-card-image" />
              </div>

              <div className="mgmt-card-name">{member.name}</div>
              <div className="mgmt-card-role">{member.role}</div>
              <a href={`tel:${member.contact.replace(/\s+/g, '')}`} className="mgmt-card-contact">
                {member.contact}
              </a>

              <a href="#contact" className="mgmt-card-link">
                READ MORE <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
