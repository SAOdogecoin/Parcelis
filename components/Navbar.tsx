import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Self-Insurance Risks', path: '/self-insurance-risks' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  // Dynamic Styles
  // Static: White text on transparent background (overlaying dark hero), NO BORDER
  // Scrolled: Dark text on glass/white background, NO BORDER (seamless), NO SHADOW (per request)
  const navBackgroundClass = scrolled 
    ? 'glass-nav' 
    : 'bg-transparent';
    
  const textColorClass = scrolled ? 'text-gray-600' : 'text-white drop-shadow-md';
  const logoColorClass = scrolled ? 'text-brand' : 'text-white drop-shadow-md';
  const hoverColorClass = scrolled ? 'hover:text-brand' : 'hover:text-blue-200';
  const activeColorClass = scrolled ? 'text-brand font-bold' : 'text-white font-bold underline decoration-2 underline-offset-4';
  
  // Button logic:
  // Static: White Background, Purple Text (as requested)
  // Scrolled: Purple Background, White Text
  const applyButtonClass = scrolled
    ? 'bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20'
    : 'bg-white hover:bg-gray-100 text-brand shadow-lg';

  const fileClaimButtonClass = scrolled
    ? 'text-gray-700 hover:text-brand font-medium'
    : 'bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm font-medium transition-all'; 

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
             <Link to="/" className="flex items-center gap-2">
               {/* Parcelis Brand Logo */}
               <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${logoColorClass} transition-colors duration-300`}>
                  <path d="M7 8H19C22.3137 8 25 10.6863 25 14C25 17.3137 22.3137 20 19 20H12V26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
                  <path d="M7 20H10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
               </svg>
               <span className={`font-extrabold text-2xl tracking-widest font-sans transition-colors duration-300 ${logoColorClass}`}>PARCELIS</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? activeColorClass
                    : `${textColorClass} ${hoverColorClass}`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`text-sm transition-colors ${fileClaimButtonClass}`}>
              File a Claim
            </button>
            <button className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 ${applyButtonClass}`}>
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColorClass} ${hoverColorClass} focus:outline-none p-2 rounded-lg hover:bg-white/10`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl absolute w-full shadow-xl rounded-b-3xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                   isActive(link.path)
                    ? 'text-brand bg-brand-50'
                    : 'text-gray-700 hover:text-brand hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-2">
                <button className="w-full text-center text-brand font-bold bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50">File a Claim</button>
                <button className="w-full text-center bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl shadow-md">Apply Now</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;