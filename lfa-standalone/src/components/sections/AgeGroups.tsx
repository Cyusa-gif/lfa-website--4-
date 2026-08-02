import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, Zap, Trophy } from 'lucide-react';
import { lfaConfig } from '../../data/config';

const iconMap = { seedling: Leaf, clock: Clock, lightning: Zap, trophy: Trophy };

export function AgeGroups() {
  return (
    <section className="py-24 bg-[#f0f2f7] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
          <div className="w-2 h-10 bg-[#f5c112]"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2744] uppercase tracking-tight">Age Groups & Fees</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {lfaConfig.ageGroups.map((group, i) => {
            const Icon = iconMap[group.icon as keyof typeof iconMap];
            return (
              <motion.div key={group.age} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col" style={{ borderTop: `4px solid ${group.color}` }}>
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${group.color}15`, color: group.color }}>
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{group.age}</h3>
                      <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: group.color }}>{group.stage}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Monthly</span>
                      <span className="font-bold text-gray-900">{lfaConfig.pricing.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">Kit</span>
                      <span className="font-bold text-gray-900">{lfaConfig.pricing.kit}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1a2744] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full text-center md:text-left">
            <div>
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">Total First Month</p>
              <p className="text-[#f5c112] text-3xl font-black">{lfaConfig.pricing.firstMonthTotal}</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="md:hidden w-full h-px bg-white/20"></div>
            <div>
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">From Month 2</p>
              <p className="text-[#f5c112] text-3xl font-black">{lfaConfig.pricing.fromMonthTwo}</p>
            </div>
          </div>
          <div className="text-white/60 text-sm bg-white/5 px-4 py-3 rounded-lg w-full md:w-auto text-center md:text-right border border-white/10">
            Includes {lfaConfig.pricing.registration} registration fee<br className="hidden md:block" /> (first month only)
          </div>
        </motion.div>
      </div>
    </section>
  );
}
