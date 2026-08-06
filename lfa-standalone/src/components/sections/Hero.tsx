import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-[#1a2744] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f5c112" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-8">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-32 h-32 md:w-40 md:h-40">
          <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
            <path d="M50 5L90 20V50C90 75 50 105 50 105C50 105 10 75 10 50V20L50 5Z" fill="#f5c112" stroke="#1a2744" strokeWidth="4" />
            <path d="M50 12L82 24V50C82 70 50 95 50 95C50 95 18 70 18 50V24L50 12Z" fill="#1a2744" />
            <text x="50" y="65" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="900" fill="#f5c112" textAnchor="middle" letterSpacing="2">LFA</text>
          </svg>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
            Legacy Football <br className="hidden md:block" /> Academy
          </h1>
          <p className="text-[#f5c112] font-bold text-lg md:text-xl uppercase tracking-widest">
            Shaping champions — on and off the pitch
          </p>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col md:flex-row items-center gap-4 mt-8">
          <div className="bg-[#f5c112] text-[#1a2744] font-bold px-6 py-3 rounded-full text-sm md:text-base shadow-lg uppercase tracking-wide">
            Enrolment Open — Starting 5th July 2026
          </div>
          <div className="border-2 border-white/30 text-white font-medium px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#f5c112]" />
            Under-15 Academy &middot; Kigali, Rwanda
          </div>
        </motion.div>
      </div>
    </section>
  );
}
