
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Ready & tested solution by 50+ venues",
  "Zero downtime infrastructure",
  "Unlimited bookings & transactions",
  "Dedicated support on WhatsApp",
  "Advanced member management",
  "Weekly performance analytics"
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" 
              alt="Dashboard Preview" 
              className="relative rounded-3xl shadow-2xl border border-slate-700 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-slate-950">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Growth Boost</p>
                  <p className="text-xl font-black text-white">+40% Bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Built for Performance,<br/><span className="text-emerald-400">Designed for Scale.</span></h2>
          <p className="text-slate-400 text-lg mb-10">Stop relying on manual spreadsheets or WhatsApp chats. Professionalize your operations with a system that works while you sleep.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-slate-200 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
            <p className="text-emerald-400 font-bold mb-2 uppercase tracking-tighter italic">"The ROI was immediate. We saved 15 hours a week in manual admin work alone."</p>
            <p className="text-slate-400 text-sm">— Rahul Sharma, Owner of Apex Arena</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
