import React from 'react';
import Navbar from '@/components/Navbar';
import ESGComponent from '@/components/ESGComponent';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ESG Commitment & Initiatives | Rikki Plastic',
  description: 'Discover our ESG commitment, United Nations Sustainable Development Goals, and ESG impact stories.',
};

export default function ESGPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ESGComponent />
      <Footer />
    </main>
  );
}
