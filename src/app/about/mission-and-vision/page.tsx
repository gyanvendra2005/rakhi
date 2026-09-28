import React from 'react';
import Navbar from '@/components/Navbar';
import AboutTabs from '@/components/AboutTabs';
import MissionVision from '@/components/MissionVision';
import Footer from '@/components/Footer';

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <AboutTabs />
      <MissionVision />
      <Footer />
    </div>
  );
}
