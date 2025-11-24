'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RiskEducation from '@/components/RiskEducation';
import PenaltyCalculator from '@/components/PenaltyCalculator';
import WhyParcelis from '@/components/WhyParcelis';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-col w-full">
          <Hero />
          <RiskEducation />
          <PenaltyCalculator />
          <WhyParcelis />
        </div>
      </main>
      <Footer />
    </div>
  );
}
