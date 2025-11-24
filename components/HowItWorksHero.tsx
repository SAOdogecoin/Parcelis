import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HowItWorksHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-brand overflow-hidden pt-40 pb-32 flex flex-col items-center justify-center text-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
      
      {/* Parallax Background Squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"
          style={{ 
            transform: `translateY(-${scrollY * 0.15}px)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
        {/* New animated squares */}
        <div 
          className="absolute top-[30%] left-[10%] w-24 h-24 bg-white/5 rounded-2xl backdrop-blur-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.1}deg)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute bottom-[25%] right-[20%] w-40 h-40 bg-white/5 rounded-3xl backdrop-blur-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) rotate(-${scrollY * 0.05}deg)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Protection That Works — <br />
          So You Don't Have To.
        </h1>
        
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Seamlessly integrate Parcelis into your store, offer coverage at checkout, and let us handle every claim from start to finish.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand hover:bg-blue-50 font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                Get Started
            </button>
            <Link to="/pricing" className="bg-white/10 text-white hover:bg-white/20 font-bold py-3.5 px-8 rounded-xl transition-all">
                See Pricing
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksHero;