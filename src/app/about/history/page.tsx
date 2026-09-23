import React from 'react';
import Navbar from '@/components/Navbar';
import HistoryTimeline from '@/components/HistoryTimeline';
import Footer from '@/components/Footer';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <HistoryTimeline />
      <Footer />
    </div>
  );
}
