
import React from 'react';
import { 
  Calendar, 
  CreditCard, 
  ShieldCheck, 
  LayoutDashboard, 
  Smartphone, 
  Settings,
  ArrowRight
} from 'lucide-react';
import { FEATURES } from '../constants';

const FeatureIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'Calendar': return <Calendar className={className} />;
    case 'Clock': return <Settings className={className} />;
    case 'CreditCard': return <CreditCard className={className} />;
    case 'LayoutDashboard': return <LayoutDashboard className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Settings': return <Settings className={className} />;
    default: return <Settings className={className} />;
  }
};

const FeaturesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features for Growth</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Everything you need to manage and scale your sports business in one unified platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <div key={feature.id} className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
              <FeatureIcon name={feature.icon} className="w-7 h-7 text-emerald-400 group-hover:text-slate-950" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{feature.description}</p>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
