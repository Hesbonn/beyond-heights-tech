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
            <h2 className="text-5xl md:text-8xl font-bold mb-8">Engineering the Future.</h2>
          </MaskedReveal>
          <ScrollRevealText 
            text="We don't just maintain buildings; we preserve the architectural legacy of our cities through innovation and excellence."
            className="text-2xl md:text-3xl text-ink/40 max-w-4xl mx-auto justify-center"
            highlightWords={["innovation", "excellence", "legacy"]}
          />
        </div>
        <KineticText 
          text="Heights" 
          className="text-[15vw] leading-none text-ink/5 -mt-[5vw]"
        />
      </section>

      {/* Storytelling Sections */}
      <PinnedStorySection 
        title="Elegance in Motion"
        content="We believe that building maintenance is a performance. Every rope descent, every chemical application, and every structural seal is executed with the grace and precision of a master craftsman. Our innovation drives us to reach new heights of excellence."
        image="src/assets/kenya-service-4-window-detail.jpg"
      />

      <PinnedStorySection 
        title="Nurturing Connection"
        content="Our relationships with clients are built on the same foundation as the buildings we maintain: integrity, transparency, and a long-term vision for excellence. We are committed to securing the future of your infrastructure."
        image="src/assets/BH-Team.jpg"
        reverse
      />

      {/* Final Kinetic Statement */}
      <section className="py-60 bg-ink text-paper overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <MaskedReveal className="mb-12">
            <span className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase">The Beyond Heights Standard</span>
          </MaskedReveal>
          <ScrollRevealText 
            text="Uncompromising safety. Unparalleled precision. Unmatched results."
            className="text-4xl md:text-7xl font-bold justify-center"
            highlightWords={["safety", "precision", "results"]}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <KineticText text="PRECISION" className="text-[30vw]" />
        </div>
      </section>
    </div>
  );
};

