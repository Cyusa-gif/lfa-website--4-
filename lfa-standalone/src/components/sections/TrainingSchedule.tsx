import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock as ClockIcon, Sun, BookOpen } from 'lucide-react';
import { lfaConfig } from '../../data/config';

export function TrainingSchedule() {
  return (
    <section className="py-24 bg-[#f0f2f7] px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
          <div className="w-2 h-10 bg-[#f5c112]"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2744] uppercase tracking-tight">Training Schedule</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1a2744] rounded-2xl p-8 shadow-xl text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Sun size={120} /></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/10 text-[#f5c112] rounded-full text-xs font-bold uppercase tracking-widest mb-4">School Holiday Training</span>
              <h3 className="text-3xl font-black mb-8 text-white">Holiday Programme</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><Calendar className="text-[#f5c112]" size={20} /></div>
                  <div>
                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider mb-1">Days</p>
                    <p className="font-semibold text-lg">{lfaConfig.schedules.holiday.days}</p>
                    <p className="text-[#f5c112] text-sm font-medium mt-1">3x per week</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><ClockIcon className="text-[#f5c112]" size={20} /></div>
                  <div>
                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider mb-1">Time</p>
                    <p className="font-semibold">Mon / Wed / Fri: {lfaConfig.schedules.holiday.timeTueThu}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#6b21a8] rounded-2xl p-8 shadow-xl text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><BookOpen size={120} /></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/10 text-[#f5c112] rounded-full text-xs font-bold uppercase tracking-widest mb-4">During School Term</span>
              <h3 className="text-3xl font-black mb-8 text-white">Academic Year</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><Calendar className="text-[#f5c112]" size={20} /></div>
                  <div>
                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider mb-1">Days</p>
                    <p className="font-semibold text-lg">{lfaConfig.schedules.term.days}</p>
                    <p className="text-[#f5c112] text-sm font-medium mt-1">2x per week</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><ClockIcon className="text-[#f5c112]" size={20} /></div>
                  <div>
                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider mb-1">Time</p>
                    <p className="font-semibold">{lfaConfig.schedules.term.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Voluntary Session</h4>
              <p className="text-gray-500 text-sm">For players not committed to a full month</p>
            </div>
            <div className="text-right">
              <span className="block font-black text-[#1a2744] text-xl">{lfaConfig.pricing.voluntarySession}</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Per Session</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Individual Training</h4>
              <p className="text-gray-500 text-sm">Personalized 1-on-1 coaching</p>
            </div>
            <div className="text-right">
              <span className="block font-black text-[#1a2744] text-xl">{lfaConfig.pricing.individualTraining}</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Fee</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
