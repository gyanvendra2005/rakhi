import React from 'react';
import Navbar from '@/components/Navbar';
import Overview from '@/components/Overview';
import MilestoneCarousel from '@/components/MilestoneCarousel';
import Management from '@/components/Management';
import Footer from '@/components/Footer';

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <Overview />
      <MilestoneCarousel />
      <Management />
      <Footer />
    </div>
  );
}
