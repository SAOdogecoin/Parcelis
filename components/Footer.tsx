import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
               <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M7 8H19C22.3137 8 25 10.6863 25 14C25 17.3137 22.3137 20 19 20H12V26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
                  <path d="M7 20H10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
               </svg>
               <span className="font-bold text-lg text-white tracking-widest font-sans">PARCELIS</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The standard for modern logistics protection. Fully licensed, fully compliant, and designed to protect your bottom line.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide text-sm uppercase">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/claims" className="hover:text-white transition-colors">Claims</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide text-sm uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide text-sm uppercase">Resources</h4>
             <ul className="space-y-3 text-sm">
              <li><Link to="/self-insurance-risks" className="text-[#4e54ff] hover:text-[#7e82ff] transition-colors font-medium">Self-Insurance Risks</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Parcelis. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;