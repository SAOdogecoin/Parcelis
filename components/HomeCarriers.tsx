import React from 'react';

const HomeCarriers: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-brand mb-4">All Major Carriers Covered</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers.
        </p>

        {/* Removed opacity, grayscale, and hover transition classes */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
             {/* Simple Text Logos as Placeholders mimicking standard logos */}
             <div className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-blue-800 italic tracking-tighter">UNITED STATES POSTAL SERVICE</span>
                <span className="text-[10px] font-bold text-blue-800 mt-1">USPS</span>
             </div>
             
             <div className="flex flex-col items-center">
                <div className="bg-[#351C15] text-[#FFB500] font-bold text-2xl px-2 py-1 rounded-sm flex items-center gap-1">
                    <span className="font-serif">ups</span>
                </div>
                <span className="text-[10px] font-bold text-gray-500 mt-1">UPS</span>
             </div>

             <div className="flex flex-col items-center">
                 <div className="flex text-4xl font-bold tracking-tighter">
                     <span className="text-[#4D148C]">Fed</span><span className="text-[#FF6600]">Ex</span>
                 </div>
                 <span className="text-[10px] font-bold text-gray-500 mt-1">FedEx</span>
             </div>

             <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#D40511] italic tracking-wide bg-gray-200/20 px-2 skew-x-[-12deg]">DHL</span>
                <span className="text-[10px] font-bold text-gray-500 mt-1">DHL</span>
             </div>
        </div>
        
        <p className="text-gray-400 text-sm mt-12 font-medium">+ all regional and international carriers</p>
      </div>
    </div>
  );
};

export default HomeCarriers;