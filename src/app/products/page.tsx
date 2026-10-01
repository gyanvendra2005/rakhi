import React from 'react';
import Navbar from '@/components/Navbar';
import ProductsListing from '@/components/ProductsListing';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <ProductsListing />
      <Footer />
    </div>
  );
}
