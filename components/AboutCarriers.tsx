import React from 'react';

const AboutCarriers: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Carrier Coverage</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Full protection across all major carriers with no geographic limitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* USPS */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow h-full">
            <div className="h-20 flex items-center justify-center mb-6">
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-extrabold text-blue-800 italic tracking-tighter">USPS</span>
                    <span className="text-[8px] font-bold text-blue-800 uppercase tracking-widest mt-0.5">United States Postal Service</span>
                </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">USPS</h3>
            <p className="text-sm text-gray-500">Full domestic coverage including Priority and First-Class Mail</p>
          </div>

          {/* UPS */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow h-full">
            <div className="h-20 flex items-center justify-center mb-6">
                <div className="bg-[#351C15] text-[#FFB500] font-bold text-3xl px-3 py-1.5 rounded-sm flex items-center gap-1">
                    <span className="font-serif">ups</span>
                </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">UPS</h3>
            <p className="text-sm text-gray-500">Ground, Air, and international UPS shipments covered</p>
          </div>

          {/* FedEx */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow h-full">
            <div className="h-20 flex items-center justify-center mb-6">
                 <div className="flex text-4xl font-bold tracking-tighter">
                     <span className="text-[#4D148C]">Fed</span><span className="text-[#FF6600]">Ex</span>
                 </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">FedEx</h3>
            <p className="text-sm text-gray-500">All FedEx services including Express and Ground</p>
          </div>

          {/* DHL */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center flex flex-col items-center hover:shadow-xl transition-shadow h-full">
            <div className="h-20 flex items-center justify-center mb-6">
                 <span className="text-4xl font-extrabold text-[#D40511] italic tracking-wide bg-gray-200/20 px-2 skew-x-[-12deg]">DHL</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">DHL</h3>
            <p className="text-sm text-gray-500">Global coverage for international DHL shipments</p>
          </div>

        </div>

        <p className="text-center text-gray-400 mt-12 font-medium">
            + Regional carriers and international postal services worldwide
        </p>
      </div>
    </div>
  );
};

export default AboutCarriers;