
import React from 'react';
import { Trophy, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Trophy className="text-slate-950 w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-heading text-white">ProSport<span className="text-emerald-400">Booking</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The world's most flexible booking infrastructure for sports venues and facility management companies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all border border-slate-800">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all border border-slate-800">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all border border-slate-800">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#demo" className="hover:text-emerald-400 transition-colors">Live Demo</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#sports" className="hover:text-emerald-400 transition-colors">Supported Sports</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Subscribe</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest sports management tips and product updates.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-all"
              />
              <button className="absolute right-2 top-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-1.5 rounded-lg transition-all">
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © 2023 ProSport Booking. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
