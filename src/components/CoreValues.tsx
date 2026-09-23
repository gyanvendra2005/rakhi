import React from 'react';
import { ShieldCheck, Users, Lightbulb, Handshake, Target } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    size: 'cv-tile-large',
  },
  {
    icon: Users,
    title: 'Customer First',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    size: 'cv-tile-medium',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    size: 'cv-tile-small',
  },
  {
    icon: Handshake,
    title: 'Teamwork',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    size: 'cv-tile-small',
  },
  {
    icon: Target,
    title: 'Excellence',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    size: 'cv-tile-small',
  },
];

export default function CoreValues() {
  return (
    <section id="core-values" className="cv-section">
      <div className="container-global">
        <div className="overview-eyebrow">
          ABOUT US
          <span className="red-line"></span>
        </div>

        <div className="cv-header-grid">
          <h1 className="overview-heading cv-heading">
            OUR <span className="overview-heading-red">CORE VALUES</span>
          </h1>
          <p className="cv-header-text">
            We believe in creating an ecosphere that nurtures the minds behind our success
            based on integrity of ethics, chivalry &amp; accountability with space to grow as
            an individual.
          </p>
        </div>

        <div className="cv-bento-grid">
          {values.map(({ icon: Icon, title, text, size }) => (
            <div className={`cv-tile ${size}`} key={title}>
              <div className="cv-tile-icon">
                <Icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="cv-tile-title">{title}</div>
              <p className="cv-tile-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
