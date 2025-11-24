import React from 'react';

const AboutLogos: React.FC = () => {
  return (
    <div className="pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100/70 rounded-3xl p-16 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-10">Supported Carriers</h3>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                {/* USPS */}
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-extrabold text-blue-800 italic tracking-tighter">USPS</span>
                    <span className="text-[8px] font-bold text-blue-800 uppercase tracking-widest mt-0.5">United States Postal Service</span>
                </div>
                
                {/* UPS */}
                <div className="flex flex-col items-center">
                    <div className="bg-[#351C15] text-[#FFB500] font-bold text-2xl px-2 py-1 rounded-sm flex items-center gap-1">
                        <span className="font-serif">ups</span>
                    </div>
                </div>

                {/* FedEx */}
                <div className="flex flex-col items-center">
                    <div className="flex text-3xl font-bold tracking-tighter">
                        <span className="text-[#4D148C]">Fed</span><span className="text-[#FF6600]">Ex</span>
                    </div>
                </div>

                {/* DHL */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-extrabold text-[#D40511] italic tracking-wide bg-gray-200/20 px-2 skew-x-[-12deg]">DHL</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLogos;