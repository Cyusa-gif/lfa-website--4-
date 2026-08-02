import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AgeGroups } from '../components/sections/AgeGroups';
import { TrainingSchedule } from '../components/sections/TrainingSchedule';
import { TrainingVenues } from '../components/sections/TrainingVenues';
import { PlayerGallery } from '../components/sections/PlayerGallery';
import { OurTeam } from '../components/sections/OurTeam';
import { Registration } from '../components/sections/Registration';
import { Footer } from '../components/sections/Footer';
import { FloatingWhatsApp } from '../components/layout/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f2f7] font-sans selection:bg-[#f5c112] selection:text-[#1a2744]">
      <Hero />
      <AgeGroups />
      <TrainingSchedule />
      <TrainingVenues />
      <PlayerGallery />
      <OurTeam />
      <Registration />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
