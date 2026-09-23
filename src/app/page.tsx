import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import Capabilities from '@/components/Capabilities';
import QualityAndSustainability from '@/components/QualityAndSustainability';
import GlobalPresence from '@/components/GlobalPresence';
import WhatsNew from '@/components/WhatsNew';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      <ScrollReveal />
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Hero Banner */}
      <HeroBanner />

      {/* 3. About Us Section */}
      <AboutUs />

      {/* 4. Products Section */}
      <Products />

          {/* 7. Global Presence & Map */}
      <GlobalPresence />

  {/* 9. Clients Showcase */}
      <Clients />

      {/* 5. Capabilities */}
      <Capabilities />

      {/* 6. Quality Assurance & Sustainability */}
      <QualityAndSustainability />

  

      {/* 8. What's New & Awards */}
      <WhatsNew />

      

      {/* 10. Footer Section */}
      <Footer />
    </div>
  );
}
