import React from 'react';
import { ShieldCheck, TrendingUp, Smile, Lock, Check } from 'lucide-react';

const WhyParcelis: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Licensed & Compliant",
      description: "Parcelis partners with fully licensed insurance carriers, ensuring every protected shipment is backed by a compliant, regulated insurance product — not an internal promise."
    },
    {
      icon: <Lock size={40} strokeWidth={1.5} />,
      title: "Predictable Cost per Order",
      description: "Self-insurance is unpredictable. With Parcelis, you pay a flat, transparent fee per protected order. No more unexpected loss spikes destroying your monthly P&L."
    },
    {
      icon: <Smile size={40} strokeWidth={1.5} />,
      title: "Instant, Automated Claims",
      description: "Parcelis automates the entire process: fast customer submission, auto-documentation, and streamlined review. You recover hours of operational time every week."
    },
    {
      icon: <TrendingUp size={40} strokeWidth={1.5} />,
      title: "No Inventory Losses",
      description: "Replacing lost shipments out of pocket destroys margins. We remove that burden. No paying for replacement inventory or double shipping costs."
    }
  ];

  const checklistItems = [
    "Fully licensed & compliant",
    "Predictable per-order cost",
    "Automated claims workflow",
    "Less customer service workload",
    "Zero inventory replacement cost",
    "Better margin protection",
    "Happier customers & repeat buyers",
    "Zero regulatory risk"
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Parcelis Is The Safer Choice</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Shift the risk off your balance sheet and onto ours. We are the licensed standard for logistics protection.
          </p>
        </div>
        
        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="text-brand flex-shrink-0 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Merchants Choose Parcelis Box */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 mb-20">
            <h3 className="text-2xl font-bold text-center mb-10">Why Merchants Choose Parcelis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
                {checklistItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                            <Check size={16} className="text-brand group-hover:text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand to-[#151885] opacity-95"></div>
            
            <div className="relative px-8 py-20 md:px-16 text-center md:text-left md:flex md:items-center md:justify-between z-10">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to secure your shipments?</h2>
                    <p className="text-brand-100 text-lg">Don't let hidden risks sink your business.</p>
                </div>
                <div className="mt-8 md:mt-0">
                    <button className="bg-white text-brand font-bold py-5 px-10 rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl text-lg">
                        Learn More About Parcelis Protection
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyParcelis;