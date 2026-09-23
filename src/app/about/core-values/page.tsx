import React from 'react';
import Navbar from '@/components/Navbar';
import CoreValues from '@/components/CoreValues';
import Footer from '@/components/Footer';

export default function CoreValuesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <CoreValues />
      <Footer />
    </div>
  );
}
