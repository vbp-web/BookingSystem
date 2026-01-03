
import React from 'react';
import { Target, Palette, Settings, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Select Sport",
    desc: "Choose from our pre-built templates for cricket, football, or pool."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "White-Label Design",
    desc: "We customize colors, logo, and layout to match your brand identity."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Configure Rules",
    desc: "Set pricing, peak hours, cancellation policies, and member perks."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Enable Payments",
    desc: "Link your Razorpay/UPI ID for instant direct-to-bank settlements."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Go Live",
    desc: "Launch your customized booking engine on your domain in 48 hours."
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Launch Your Platform in 5 Simple Steps</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">We've streamlined the deployment process so you can focus on managing your turf, not your website.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 shadow-xl relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 font-black text-xs border-4 border-slate-950">
                  {idx + 1}
                </div>
                <div className="text-emerald-400">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
