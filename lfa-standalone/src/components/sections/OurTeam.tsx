import React from 'react';
import { motion } from 'framer-motion';
import { lfaConfig } from '../../data/config';
import { User } from 'lucide-react';

export function OurTeam() {
  return (
    <section className="py-24 bg-[#f0f2f7] px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
          <div className="w-2 h-10 bg-[#f5c112]"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2744] uppercase tracking-tight">Our Team</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {lfaConfig.team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              <div className="w-32 h-32 rounded-full border-4 border-[#f5c112] shrink-0 bg-[#1a2744] overflow-hidden">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User size={64} className="text-[#f5c112]/50 mt-4" />
                  </div>
                )}
              </div>
              <div className="text-center sm:text-left flex-1">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest mb-3">{member.role}</span>
                <h3 className="text-2xl font-black text-[#1a2744] mb-1">{member.name}</h3>
                <p className="text-[#f5c112] font-bold uppercase text-sm tracking-wide mb-4">Legacy Football Academy</p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
