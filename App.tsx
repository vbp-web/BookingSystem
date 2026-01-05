
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveDemo from './components/LiveDemo';
import FeaturesGrid from './components/FeaturesGrid';
import SportsShowcase from './components/SportsShowcase';
import ProcessSteps from './components/ProcessSteps';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="demo" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Experience the Future</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Live Demo: Box Cricket</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                This is a live functional preview built for Box Cricket. 
                Our flexible engine can be customized for <span className="text-white font-semibold">any sport or venue</span> with your branding.
              </p>
            </div>
            <LiveDemo />
          </div>
        </section>

        <section id="features" className="py-24">
          <FeaturesGrid />
        </section>

        <section id="sports" className="py-24 bg-slate-900/30">
          <SportsShowcase />
        </section>

        <section id="process" className="py-24">
          <ProcessSteps />
        </section>

        <section id="benefits" className="py-24 bg-slate-900/50">
          <WhyChooseUs />
        </section>

        <section id="contact" className="py-24">
          <CTASection />
        </section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
