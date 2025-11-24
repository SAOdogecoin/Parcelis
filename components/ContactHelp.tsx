import React from 'react';
import { Link } from 'react-router-dom';

const ContactHelp: React.FC = () => {
  return (
    <div className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Other Ways to Get Help</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">Apply Now</h3>
                <p className="text-gray-500 text-sm mb-0">Ready to get started?</p>
            </div>

            <Link to="/pricing" className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group block">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">View Pricing</h3>
                <p className="text-gray-500 text-sm mb-0">Calculate your costs</p>
            </Link>

        </div>
      </div>
    </div>
  );
};

export default ContactHelp;