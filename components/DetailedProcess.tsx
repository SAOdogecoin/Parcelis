import React from 'react';
import { Settings, Shield, FileCheck, TrendingUp } from 'lucide-react';

const DetailedProcess: React.FC = () => {
  const steps = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Integrate",
      description: "Connect Parcelis via our Shopify, WooCommerce, or API integration in minutes. No coding, no contracts — just instant coverage for your customers."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Offer Protection",
      description: "At checkout, customers can opt-in to protect their order against loss, damage, or theft — giving them confidence to complete their purchase."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "We Handle Claims",
      description: "If a package goes missing or arrives damaged, customers submit claims directly through our self-service portal. Our team manages resolution and payout in 5–7 days, keeping your inbox clear and your customers satisfied."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "You Stay Focused on Growth",
      description: "Parcelis removes the burden of post-delivery issues — freeing your team to focus on sales, your brand, and scaling your business, not support tickets."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand">How Parcelis Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full">
              <div className="mb-6">
                {React.cloneElement(step.icon as React.ReactElement<{ className?: string; strokeWidth?: number }>, { className: "w-12 h-12 text-brand", strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-bold text-brand mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProcess;