import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { Vision } from '../components/Vision';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Footer } from '../components/Footer';
import { StitchedGallery } from '../components/StitchedGallery';
import { CinematicSections } from '../components/CinematicSections';

export const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <div className="relative z-10">
        <Vision />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        <CinematicSections />
        <Services />
        <StitchedGallery />
        <Portfolio />
        <Footer />
      </div>
    </motion.div>
  );
};
