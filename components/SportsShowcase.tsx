
import React from 'react';
import { SPORTS } from '../constants';

const SportsShowcase: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase">VERSATILITY</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 italic tracking-tighter uppercase">Same System. <span className="text-slate-500">Any Sport.</span></h2>
          <p className="text-slate-400 text-lg">One platform, endless possibilities. Our system is built with a flexible architecture that adapts to any venue type and booking rules.</p>
        </div>
        <div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-3 rounded-full border border-slate-700 transition-all">
            See Case Studies
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SPORTS.map((sport) => (
          <div key={sport.id} className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer">
            <img 
              src={sport.image} 
              alt={sport.name} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{sport.icon}</span>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">{sport.name}</h3>
              </div>
              <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {sport.description}
              </p>
            </div>
            
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-slate-800/30 p-8 rounded-3xl border border-dashed border-slate-700 text-center">
        <p className="text-slate-400 italic">"Don't see your sport? Our team provides custom design services for specific specialized venues."</p>
      </div>
    </div>
  );
};

export default SportsShowcase;
