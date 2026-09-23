import React from 'react';
import Navbar from '@/components/Navbar';
import Management from '@/components/Management';
import Footer from '@/components/Footer';

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <Management />
      <Footer />
    </div>
  );
}
