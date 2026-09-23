import React from 'react';
import Navbar from '@/components/Navbar';
import Overview from '@/components/Overview';
import Footer from '@/components/Footer';

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <Overview />
      <Footer />
    </div>
  );
}
