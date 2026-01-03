
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-xs font-semibold mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            TRUSTED BY 50+ SPORTS VENUES WORLDWIDE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-white leading-[1.1] mb-6">
            All-in-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Sports Booking</span> System
          </h1>
          
          <p className="text-slate-400 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your turf or sports facility with a complete online booking platform. 
            Automate slots, accept payments, and grow your revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg px-8 py-4 rounded-xl transition-all hover:translate-y-[-2px] shadow-lg shadow-emerald-500/20">
              View Live Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all border border-slate-700">
              Get Custom Proposal
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="text-white font-bold text-xl uppercase tracking-tighter">Box Cricket</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="text-white font-bold text-xl uppercase tracking-tighter">Badminton Pro</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="text-white font-bold text-xl uppercase tracking-tighter">Turf Masters</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="text-white font-bold text-xl uppercase tracking-tighter">PoolHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
