
import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Trophy className="text-slate-950 w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-heading tracking-tight text-white">ProSport<span className="text-emerald-400">Booking</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#demo" className="text-slate-300 hover:text-emerald-400 transition-colors">Demo</a>
          <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">Features</a>
          <a href="#sports" className="text-slate-300 hover:text-emerald-400 transition-colors">Sports</a>
          <a href="#process" className="text-slate-300 hover:text-emerald-400 transition-colors">How it works</a>
        </div>

        <div>
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Get Proposal
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
