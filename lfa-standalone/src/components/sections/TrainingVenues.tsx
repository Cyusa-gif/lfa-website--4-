import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { lfaConfig } from '../../data/config';

function VenueGallery({ photos, name }: { photos: string[]; name: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((p) => (p! + photos.length - 1) % photos.length);
  const next = () => setLightbox((p) => (p! + 1) % photos.length);

  const GalleryBtn = ({ index, className }: { index: number; className: string }) => (
    <button className={`overflow-hidden relative group ${className}`} onClick={() => open(index)}>
      <img src={photos[index]} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </button>
  );

  const Lightbox = () => (
    <AnimatePresence>
      {lightbox !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={close}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={close}><X size={32} /></button>
          <button className="absolute left-4 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft size={40} /></button>
          <motion.img key={lightbox} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} src={photos[lightbox]} alt={`${name} photo ${lightbox + 1}`} className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight size={40} /></button>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightbox + 1} / {photos.length}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (photos.length === 2) return (
    <><div className="grid grid-cols-2 gap-1.5 h-64"><GalleryBtn index={0} className="h-full" /><GalleryBtn index={1} className="h-full" /></div><Lightbox /></>
  );

  if (photos.length <= 4) return (
    <><div className="grid grid-rows-2 grid-cols-3 gap-1.5 h-72"><GalleryBtn index={0} className="row-span-2 col-span-2 h-full" />{photos.slice(1).map((_, i) => <GalleryBtn key={i} index={i + 1} className="h-full" />)}</div><Lightbox /></>
  );

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-3 gap-1.5 h-72">
        <GalleryBtn index={0} className="row-span-2 col-span-2 h-full" />
        <GalleryBtn index={1} className="h-full" />
        <GalleryBtn index={2} className="h-full" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 mt-1.5">
        {photos.slice(3).map((_, idx) => (
          <button key={idx} className="overflow-hidden relative group h-28" onClick={() => open(idx + 3)}>
            <img src={photos[idx + 3]} alt={`${name} view ${idx + 4}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            {idx === photos.slice(3).length - 1 && photos.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-xl">+{photos.length - 5}</span>
              </div>
            )}
          </button>
        ))}
      </div>
      <Lightbox />
    </>
  );
}

export function TrainingVenues() {
  return (
    <section className="py-24 bg-[#f0f2f7] px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
          <div className="w-2 h-10 bg-[#f5c112]"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2744] uppercase tracking-tight">Training Venues</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lfaConfig.venues.map((venue, i) => (
            <motion.div key={venue.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative overflow-hidden">
                {venue.photos && venue.photos.length > 0 ? (
                  <div className="p-1.5 bg-[#1a2744]"><VenueGallery photos={venue.photos} name={venue.name} /></div>
                ) : (
                  <div className="h-64 bg-[#1a2744] flex items-center justify-center"><MapPin className="text-[#f5c112]/30" size={64} /></div>
                )}
              </div>
              <div className="bg-[#1a2744] px-6 py-5 flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full border-2 border-[#f5c112] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#f5c112]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{venue.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">Kigali, Rwanda</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
