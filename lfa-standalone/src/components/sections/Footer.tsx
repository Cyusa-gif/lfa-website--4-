import React from 'react';

export function Footer() {
  return (
    <footer>
      <div className="bg-[#1a2744] w-full py-16 px-4 text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[#f5c112] font-bold text-sm tracking-[0.2em] uppercase">Ephesians 6:1-3</p>
          <p className="text-white text-xl md:text-3xl font-serif italic leading-relaxed">
            "Children, obey your parents in the Lord, for this is right. Honor your father and mother... so that it may go well with you and that you may enjoy long life on the earth."
          </p>
          <p className="text-[#f5c112] font-bold text-xs tracking-[0.3em] uppercase pt-4">+ Foundation of Champions +</p>
        </div>
      </div>
      <div className="bg-[#111827] w-full py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 100 110" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L90 20V50C90 75 50 105 50 105C50 105 10 75 10 50V20L50 5Z" fill="#f5c112" />
              <path d="M50 12L82 24V50C82 70 50 95 50 95C50 95 18 70 18 50V24L50 12Z" fill="#1a2744" />
              <text x="50" y="65" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="900" fill="#f5c112" textAnchor="middle">LFA</text>
            </svg>
            <div>
              <h4 className="text-white font-black tracking-tight text-lg">LEGACY FOOTBALL ACADEMY</h4>
              <p className="text-gray-500 text-xs mt-0.5">Kigali, Rwanda &middot; Est. 2026</p>
            </div>
          </div>
          <div className="text-gray-500 text-xs font-medium text-center md:text-right">
            &copy; 2026 LEGACY FOOTBALL ACADEMY<br className="md:hidden" />
            <span className="hidden md:inline"> &middot; </span>Kigali, Rwanda &middot; Est. 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
