import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="lg:w-1/3 space-y-8">
             <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand flex-shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 mb-1">Email</p>
                            <a href="mailto:support@myparcelis.com" className="text-brand hover:text-brand-dark transition-colors font-medium">
                                support@myparcelis.com
                            </a>
                            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                                Our team typically responds within 24 business hours.
                            </p>
                        </div>
                    </div>
                </div>
             </div>

             <div className="bg-blue-900/5 p-8 rounded-2xl border border-blue-900/5">
                <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white flex-shrink-0">
                        <MessageSquare size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Need faster help?</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Check out our detailed FAQ section for quick answers to common questions about claims, integration, and pricing.
                        </p>
                        <a href="/faq" className="text-brand font-bold text-sm hover:underline">
                            Visit FAQ Center &rarr;
                        </a>
                    </div>
                </div>
             </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Name *</label>
                            <input 
                                type="text" 
                                placeholder="Your name"
                                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email *</label>
                            <input 
                                type="email" 
                                placeholder="your@email.com"
                                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                        <input 
                            type="text" 
                            placeholder="Your company (optional)"
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Subject *</label>
                         <div className="relative">
                            <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all appearance-none cursor-pointer">
                                <option value="" disabled selected>Select a subject</option>
                                <option value="sales">Sales Inquiry</option>
                                <option value="support">Customer Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Message *</label>
                        <textarea 
                            rows={5}
                            placeholder="Tell us how we can help..."
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-gray-400 resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button type="button" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;