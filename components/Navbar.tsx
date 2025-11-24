import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Self-Insurance Risks', path: '/self-insurance-risks' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.hash = '#'}>
            <div className="flex items-center gap-2">
               {/* Parcelis Brand Logo */}
               <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand">
                  <path d="M7 8H19C22.3137 8 25 10.6863 25 14C25 17.3137 22.3137 20 19 20H12V26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
                  <path d="M7 20H10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
               </svg>
               <span className="font-extrabold text-2xl tracking-widest text-brand font-sans">PARCELIS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-brand font-bold'
                    : 'text-gray-500 hover:text-brand'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-semibold text-gray-700 hover:text-brand px-3 py-2">
              File a Claim
            </button>
            <button className="bg-brand hover:bg-brand-dark text-white text-sm font-bold px-5 py-2.5 rounded-md transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-brand focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   isActive(link.path)
                    ? 'text-brand bg-brand-50'
                    : 'text-gray-700 hover:text-brand hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3">
                <button className="w-full text-center text-gray-700 font-semibold py-2 border border-gray-200 rounded-md hover:bg-gray-50">File a Claim</button>
                <button className="w-full text-center bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-md shadow-md">Apply Now</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;