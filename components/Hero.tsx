import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-900 via-brand to-[#2e32d4] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#4a4eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6a6eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#3a3eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-3/5 text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#000050] bg-opacity-30 text-blue-100 text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm">
                Merchant Risk Assessment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            The Hidden Risks of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                Self-Insuring Your Shipments
            </span>
            </h1>
            
            <p className="mt-4 text-lg text-blue-100 font-light leading-relaxed mb-8">
            Saving a dollar on “free” shipping protection can quietly turn into thousands in losses — and, in many states, potential regulatory penalties.
            </p>

            <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5 flex-shrink-0"></div>
                    <p><strong className="text-white">Operational risk:</strong> every lost order means replacement product, shipping, and support time.</p>
                </div>
                <div className="flex items-start gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5 flex-shrink-0"></div>
                    <p><strong className="text-white">Margin risk:</strong> even a small loss rate silently cuts dollars from every order.</p>
                </div>
                <div className="flex items-start gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5 flex-shrink-0"></div>
                    <p><strong className="text-white">Compliance risk:</strong> in many states, each “self-insured” shipment can count as a separate violation.</p>
                </div>
            </div>

            <button 
                onClick={() => {
                    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-brand hover:bg-gray-50 hover:text-brand-dark font-bold py-4 px-10 rounded-lg shadow-xl transition-all transform hover:-translate-y-1 ring-1 ring-white/10"
            >
                Check Your Risk
            </button>
        </div>

        {/* Right Content - Abstract Visual/Intro */}
        <div className="md:w-2/5 relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white shadow-2xl">
                 <p className="text-lg font-medium leading-relaxed">
                    "Many merchants 'self-insure' by promising to replace lost or damaged packages out of pocket. It feels simple and cheap — until loss rates creep up, margins erode, and regulators view those promises as selling insurance without a license."
                 </p>
            </div>
        </div>

      </div>
      
      {/* Clean bottom separation - no wave line */}
    </div>
  );
};

export default Hero;