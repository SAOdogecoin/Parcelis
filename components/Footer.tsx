import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-footer text-gray-300 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 pr-8 flex flex-col items-start">
             <div className="flex flex-col items-start gap-4 mb-8">
               <svg width="56" height="56" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M7 8H19C22.3137 8 25 10.6863 25 14C25 17.3137 22.3137 20 19 20H12V26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
                  <path d="M7 20H10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
               </svg>
               <span className="font-extrabold text-4xl text-white tracking-widest font-sans">PARCELIS</span>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-sm">
              Turn package protection into profit. Zero hassle. Real insurance.
            </p>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-8 tracking-wider text-sm uppercase opacity-70">Product</h4>
            <ul className="space-y-6 text-lg">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors text-gray-400 font-medium">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors text-gray-400 font-medium">Pricing</Link></li>
              <li><Link to="/self-insurance-risks" className="hover:text-white transition-colors text-gray-400 font-medium">Risk Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 tracking-wider text-sm uppercase opacity-70">Company</h4>
            <ul className="space-y-6 text-lg">
              <li><Link to="/about" className="hover:text-white transition-colors text-gray-400 font-medium">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-gray-400 font-medium">Contact</Link></li>
              <li><Link to="/apply" className="hover:text-white transition-colors text-gray-400 font-medium">Apply Now</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-8 tracking-wider text-sm uppercase opacity-70">Legal</h4>
             <ul className="space-y-6 text-lg mb-10">
              <li><Link to="/privacy" className="hover:text-white transition-colors text-gray-400 font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors text-gray-400 font-medium">Terms of Use</Link></li>
              <li><Link to="/affiliate" className="hover:text-white transition-colors text-gray-400 font-medium">Affiliate Program</Link></li>
            </ul>

            <h4 className="text-white font-bold mb-4 tracking-wider text-sm uppercase opacity-70">Contact</h4>
            <a href="mailto:hello@myparcelis.com" className="flex items-center gap-3 text-lg text-gray-400 hover:text-white transition-colors font-medium">
                <Mail size={20} />
                hello@myparcelis.com
            </a>
          </div>

        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PARCELIS. All rights reserved.</p>
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <span>Powered by</span>
            <div className="bg-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 text-gray-300 font-semibold">
                <div className="w-3 h-3 border-2 border-gray-300 rounded-sm"></div>
                InsureShip
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;