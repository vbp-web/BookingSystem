
import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Star, User, CreditCard, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { DEMO_SLOTS } from '../constants';
import { TimeSlot } from '../types';

const LiveDemo: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleBook = () => {
    if (selectedSlot) {
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        setSelectedSlot(null);
      }, 4000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Venue Info (Left) */}
      <div className="lg:col-span-4 bg-slate-800/50 rounded-3xl p-6 border border-slate-700/50">
        <div className="relative rounded-2xl overflow-hidden h-48 mb-6">
          <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800" alt="Box Cricket Turf" className="w-full h-full object-cover" />
          <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-bold px-2 py-1 rounded text-xs">OPEN</div>
        </div>
        
        <h3 className="text-2xl font-bold mb-2">Lords Box Cricket Turf</h3>
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
          <MapPin className="w-4 h-4 text-emerald-400" />
          Downtown Sports Arena, Mumbai
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold">4.8</span>
            <span className="text-xs text-slate-500">(120 Reviews)</span>
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-slate-700">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Surface Type</span>
            <span className="text-slate-100 font-medium">Synthetic Turf</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Dimensions</span>
            <span className="text-slate-100 font-medium">60 x 40 ft</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Floodlights</span>
            <span className="text-emerald-400 font-medium">Available</span>
          </div>
        </div>
      </div>

      {/* Booking Interface (Right) */}
      <div className="lg:col-span-8 bg-slate-800/30 rounded-3xl p-4 md:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden min-h-[500px]">
        {isBooked && (
          <div className="absolute inset-0 z-20 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-slide-up">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle className="w-12 h-12 text-slate-950" />
            </div>
            <h4 className="text-4xl font-black mb-2 uppercase italic tracking-tighter text-emerald-400">Booking Confirmed!</h4>
            <p className="text-xl text-white font-medium mb-2">Slot: {selectedSlot?.time}</p>
            <p className="text-slate-400 max-w-sm">A confirmation SMS and Email have been sent to the user. This simulation resets in 4 seconds.</p>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-1">Select Your Slot</h4>
            <p className="text-slate-400 text-sm">Today, 24th Oct 2023</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button className="whitespace-nowrap px-4 py-2 bg-emerald-500 text-slate-950 rounded-xl text-sm font-bold">Today</button>
            <button className="whitespace-nowrap px-4 py-2 bg-slate-700 text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-600">Tomorrow</button>
            <button className="p-2 bg-slate-700 text-slate-300 rounded-xl hover:bg-slate-600">
              <CalendarIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {DEMO_SLOTS.map((slot) => (
            <button
              key={slot.id}
              onClick={() => slot.isAvailable && setSelectedSlot(slot)}
              disabled={!slot.isAvailable}
              className={`
                group relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200
                ${!slot.isAvailable 
                  ? 'bg-slate-900 border-slate-800 opacity-40 cursor-not-allowed' 
                  : selectedSlot?.id === slot.id
                    ? 'bg-emerald-500 border-emerald-400 text-slate-950 scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    : 'bg-slate-700/50 border-slate-600 hover:border-emerald-400/50 hover:bg-slate-700'
                }
              `}
            >
              <span className={`text-xs font-bold mb-1 ${selectedSlot?.id === slot.id ? 'text-slate-950' : 'text-slate-400'}`}>
                {slot.time}
              </span>
              <span className="text-sm font-black">
                {slot.isAvailable ? `₹${slot.price}` : 'Booked'}
              </span>
            </button>
          ))}
        </div>

        {/* Summary & Payment */}
        <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-700 mt-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-2 text-center md:text-left">
              <p className="text-slate-400 text-sm">Selected Slot</p>
              <div className="text-xl font-bold">
                {selectedSlot ? `${selectedSlot.time} (₹${selectedSlot.price})` : 'Please select a slot'}
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button 
                onClick={handleBook}
                disabled={!selectedSlot}
                className={`
                  flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black transition-all
                  ${selectedSlot 
                    ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20' 
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  }
                `}
              >
                BOOK NOW
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap justify-center md:justify-start gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-400" /> Secure SSL</span>
            <span className="flex items-center gap-1"><CreditCard className="w-3 h-3 text-emerald-400" /> UPI/Razorpay</span>
            <span className="flex items-center gap-1"><User className="w-3 h-3 text-emerald-400" /> Guest Booking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
