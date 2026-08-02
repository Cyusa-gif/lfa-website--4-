import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/gallery-1.jpeg', caption: 'Training Session — Kagarama FIFA Arena' },
  { src: '/gallery-2.jpg',  caption: 'Skills Drill — Coach Supervising' },
  { src: '/gallery-3.jpg',  caption: 'Ball Mastery Warm-Up' },
  { src: '/gallery-4.jpg',  caption: 'Speed & Agility Training' },
  { src: '/gallery-5.jpg',  caption: 'Group Drill — Full Squad' },
];

export function PlayerGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const open  = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev  = () => setLightbox(i => ((i ?? 0) + photos.length - 1) % photos.length);
  const next  = () => setLightbox(i => ((i ?? 0) + 1) % photos.length);

  const Img = ({ index, className }: { index: number; className: string }) => (
    <motion.button initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} onClick={() => open(index)} className={`group relative overflow-hidden bg-[#1a2744] ${className}`}>
      <img src={photos[index].src} alt={photos[index].caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[#1a2744]/0 group-hover:bg-[#1a2744]/50 transition-all duration-300 flex items-end">
        <span className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-sm font-semibold px-4 py-3 w-full bg-gradient-to-t from-black/60 to-transparent">
          {photos[index].caption}
        </span>
      </div>
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[28px] border-l-[28px] border-t-[#f5c112] border-l-transparent rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );

  return (
    <section className="py-24 bg-[#1a2744] px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
          <div className="w-2 h-10 bg-[#f5c112]" />
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Player Gallery</h2>
            <p className="text-gray-400 text-sm mt-1 tracking-wide">Life at Legacy Football Academy — on the pitch, every day</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[520px]">
          <Img index={0} className="row-span-2 col-span-1 rounded-xl" />
          <Img index={1} className="col-span-2 rounded-xl" />
          <Img index={2} className="rounded-xl" />
          <Img index={3} className="rounded-xl" />
        </div>
        <div className="mt-2 h-48"><Img index={4} className="w-full rounded-xl" /></div>
        <p className="text-center text-gray-500 text-xs mt-6 tracking-widest uppercase">Click any photo to enlarge</p>
      </div>
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4" onClick={close}>
            <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" onClick={close}><X size={32} /></button>
            <button className="absolute left-4 text-white/70 hover:text-white transition-colors p-2" onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft size={44} /></button>
            <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <motion.img key={lightbox} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} src={photos[lightbox].src} alt={photos[lightbox].caption} className="max-h-[80vh] max-w-[82vw] object-contain rounded-xl shadow-2xl" />
              <p className="text-white/80 text-sm tracking-wide">{photos[lightbox].caption}</p>
              <p className="text-white/40 text-xs">{lightbox + 1} / {photos.length}</p>
            </div>
            <button className="absolute right-4 text-white/70 hover:text-white transition-colors p-2" onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight size={44} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
