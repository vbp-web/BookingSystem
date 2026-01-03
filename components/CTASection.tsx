
import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-blue-700 rounded-[3rem] p-12 lg:p-20 text-center">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-950/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
            Ready to <span className="text-slate-950">Dominate</span> Your Market?
          </h2>
          <p className="text-white/80 text-xl md:text-2xl mb-12 font-medium">
            Join the elite circle of venues using ProSport Booking. 
            Get a tailored proposal and demo for your facility today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-950 text-white hover:bg-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <Send className="w-6 h-6" />
              REQUEST PROPOSAL
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <MessageSquare className="w-6 h-6" />
              WHATSAPP US
            </button>
          </div>
          
          <p className="mt-12 text-white/60 font-bold uppercase tracking-widest text-sm">
            NO CREDIT CARD REQUIRED • SET UP IN 48 HOURS
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
