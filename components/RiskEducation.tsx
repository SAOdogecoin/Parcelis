import React from 'react';
import { AlertTriangle, DollarSign, Scale } from 'lucide-react';

const RiskEducation: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* What It Means */}
            <div className="flex flex-col items-start p-8 rounded-3xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                <div className="mb-6 text-brand">
                    <AlertTriangle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What “Self-Insuring” Really Means</h3>
                <div className="text-gray-600 leading-relaxed text-base space-y-4">
                    <p>When you promise customers that you’ll replace lost or damaged packages out of pocket, you’re effectively acting as their insurer.</p>
                    <p>Instead of paying a predictable fee to a licensed carrier for each shipment, you’re:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-500">
                        <li>Taking on all of the risk yourself, and</li>
                        <li>Potentially entering the regulated business of insurance without a license.</li>
                    </ul>
                    <p className="font-medium text-brand-900">That combination can be expensive from a margin perspective — and risky from a regulatory one.</p>
                </div>
            </div>

            {/* Financial Cost */}
            <div className="flex flex-col items-start p-8 rounded-3xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                <div className="mb-6 text-brand">
                    <DollarSign size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Financial Cost: Margin Erosion</h3>
                <div className="text-gray-600 leading-relaxed text-base space-y-4">
                    <p>For a typical DTC brand, every lost or damaged order costs far more than just the product:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-500">
                        <li>Replacement inventory</li>
                        <li>Pick & pack labor</li>
                        <li>Outbound shipping</li>
                        <li>Customer service time</li>
                    </ul>
                    <p>Across thousands of orders, even a modest loss rate adds an invisible cost per order — often in the $2–$4 range — that quietly erodes profit.</p>
                </div>
            </div>

             {/* Regulatory Cost */}
             <div className="flex flex-col items-start p-8 rounded-3xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                <div className="mb-6 text-brand">
                    <Scale size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Regulatory Cost: State Penalties</h3>
                <div className="text-gray-600 leading-relaxed text-base space-y-4">
                    <p>Insurance is one of the most heavily regulated industries. Most states treat “offering protection in exchange for payment” as insurance.</p>
                    <p>When a merchant self-insures, regulators may see each covered order as an unlicensed insurance transaction. This can mean:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-500">
                        <li>Fines per violation (thousands of dollars)</li>
                        <li>Strict liability for losses</li>
                        <li>Potential criminal exposure</li>
                    </ul>
                    <p className="font-medium text-brand-900">Multiply that by thousands of shipments, and the theoretical penalty exposure becomes enormous.</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default RiskEducation;