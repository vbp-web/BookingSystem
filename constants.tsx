
import React from 'react';
import { 
  Calendar, 
  CreditCard, 
  ShieldCheck, 
  LayoutDashboard, 
  Smartphone, 
  Zap,
  Clock,
  Settings
} from 'lucide-react';
import { Feature, SportType, TimeSlot } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Online Slot Booking',
    description: 'Customers can browse and book available slots in seconds with an intuitive calendar view.',
    icon: 'Calendar'
  },
  {
    id: 'f2',
    title: 'Real-Time Availability',
    description: 'Avoid double bookings with live synchronization across all admin and user interfaces.',
    icon: 'Clock'
  },
  {
    id: 'f3',
    title: 'Online Payments',
    description: 'Integrated with Razorpay, UPI, and major gateways for seamless instant transactions.',
    icon: 'CreditCard'
  },
  {
    id: 'f4',
    title: 'Admin Dashboard',
    description: 'Powerful backend to manage bookings, track revenue, and analyze peak hours.',
    icon: 'LayoutDashboard'
  },
  {
    id: 'f5',
    title: 'Mobile-First Design',
    description: 'A responsive PWA that works perfectly on iOS, Android, and Desktop browsers.',
    icon: 'Smartphone'
  },
  {
    id: 'f6',
    title: 'Custom Pricing',
    description: 'Set dynamic rates for peak hours, weekends, and seasonal promotional periods.',
    icon: 'Settings'
  }
];

export const SPORTS: SportType[] = [
  {
    id: 's1',
    name: 'Box Cricket',
    icon: '🏏',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
    description: 'Compact turf specialized for indoor-style cricket.'
  },
  {
    id: 's2',
    name: 'Football Turf',
    icon: '⚽',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    description: 'High-quality synthetic grass for 5-a-side or 7-a-side matches.'
  },
  {
    id: 's3',
    name: 'Badminton Court',
    icon: '🏸',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800',
    description: 'Professional wooden or synthetic flooring courts.'
  },
  {
    id: 's4',
    name: 'Tennis Court',
    icon: '🎾',
    image: 'https://images.unsplash.com/photo-1595435063162-421736780496?auto=format&fit=crop&q=80&w=800',
    description: 'Hard or clay courts with professional lighting.'
  },
  {
    id: 's5',
    name: 'Basketball Court',
    icon: '🏀',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
    description: 'Full-court or half-court configurations with adjustable hoops.'
  },
  {
    id: 's6',
    name: 'Swimming Pool',
    icon: '🏊‍♂️',
    image: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&q=80&w=800',
    description: 'Hourly lane bookings or general access slots.'
  }
];

export const DEMO_SLOTS: TimeSlot[] = [
  { id: '1', time: '06:00 AM', isAvailable: true, price: 800 },
  { id: '2', time: '07:00 AM', isAvailable: true, price: 800 },
  { id: '3', time: '08:00 AM', isAvailable: false, price: 1000 },
  { id: '4', time: '09:00 AM', isAvailable: false, price: 1000 },
  { id: '5', time: '05:00 PM', isAvailable: true, price: 1200 },
  { id: '6', time: '06:00 PM', isAvailable: true, price: 1500 },
  { id: '7', time: '07:00 PM', isAvailable: true, price: 1500 },
  { id: '8', time: '08:00 PM', isAvailable: false, price: 1500 },
  { id: '9', time: '09:00 PM', isAvailable: true, price: 1500 },
  { id: '10', time: '10:00 PM', isAvailable: true, price: 1200 },
];
