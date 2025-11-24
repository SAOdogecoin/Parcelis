import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactHero: React.FC = () => {
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
      
      {/* Animated Parallax Elements - Rolling Squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div 
            className="absolute top-[15%] left-[8%] w-36 h-36 bg-white/5 rounded-3xl backdrop-blur-3xl"
            style={{ 
                transform: `translateY(${scrollY * 0.3}px) rotate(${12 + scrollY * 0.15}deg)`,
                transition: 'transform 0.1s linear'
            }}
          ></div>
          <div 
            className="absolute bottom-[25%] right-[12%] w-52 h-52 bg-white/5 rounded-[3rem] backdrop-blur-3xl"
            style={{ 
                transform: `translateY(${scrollY * 0.2}px) rotate(${-10 - scrollY * 0.1}deg)`,
                transition: 'transform 0.1s linear'
            }}
          ></div>
          <div 
            className="absolute top-[45%] left-[25%] w-20 h-20 bg-blue-400/10 rounded-2xl backdrop-blur-xl"
            style={{ 
                transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.3}deg)`,
                transition: 'transform 0.1s linear'
            }}
          ></div>
           <div 
            className="absolute bottom-[10%] left-[35%] w-16 h-16 bg-indigo-500/20 rounded-xl backdrop-blur-md"
            style={{ 
                transform: `translateY(-${scrollY * 0.1}px) rotate(${45 + scrollY * 0.2}deg)`,
                transition: 'transform 0.1s linear'
            }}
          ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Get in Touch
        </h1>
        
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Questions about PARCELIS? We're here to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand hover:bg-blue-50 font-bold py-3.5 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                Apply Now
            </button>
            <Link to="/pricing" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-3.5 px-10 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                View Pricing
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;