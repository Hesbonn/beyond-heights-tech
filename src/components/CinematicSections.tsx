import React from 'react';
import { 
  ScrollRevealText, 
  MaskedReveal, 
  KineticText, 
  PinnedStorySection 
} from './CinematicTypography';

export const CinematicSections = () => {
  return (
    <div className="bg-paper">
      {/* Kinetic Typography Intro */}
      <section className="py-40 flex flex-col items-center justify-center overflow-hidden">
        <KineticText 
          text="Beyond" 
          className="text-[15vw] leading-none text-ink/5"
        />
        <div className="container mx-auto px-6 text-center -mt-[5vw] relative z-10">
          <MaskedReveal>
            <h2 className="text-5xl md:text-8xl font-bold mb-8">Built for real buildings.</h2>
          </MaskedReveal>
          <ScrollRevealText 
            text="We don't just maintain buildings; we keep them safe, clean, and ready for the people who use them every day."
            className="text-2xl md:text-3xl text-ink/40 max-w-4xl mx-auto justify-center"
            highlightWords={["safe", "clean", "ready"]}
          />
        </div>
        <KineticText 
          text="Heights" 
          className="text-[15vw] leading-none text-ink/5 -mt-[5vw]"
        />
      </section>

      {/* Storytelling Sections */}
      <PinnedStorySection 
        title="Care in every job"
        content="Building maintenance is about reliable execution. Every rope descent, chemical application, and seal repair is done by experienced crews who know the work and understand the risks."
        image="/assets/kenya-service-4-window-detail.jpg"
      />

      <PinnedStorySection 
        title="Straightforward service"
        content="Our clients see us as partners because we communicate clearly, keep promises, and focus on practical solutions that keep buildings working."
        image="/assets/BH-Team.jpg"
        reverse
      />

      {/* Final Kinetic Statement */}
      <section className="py-60 bg-ink text-paper overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <MaskedReveal className="mb-12">
            <span className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase">The Beyond Heights Standard</span>
          </MaskedReveal>
          <ScrollRevealText 
            text="Clear safety practices. Steady execution. Results you can trust."
            className="text-4xl md:text-7xl font-bold justify-center"
            highlightWords={["safety", "execution", "trust"]}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <KineticText text="PRECISION" className="text-[30vw]" />
        </div>
      </section>
    </div>
  );
};

