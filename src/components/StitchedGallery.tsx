import React from 'react';
import { motion } from 'motion/react';
import { StitchedImage } from './StitchedImage';

export const StitchedGallery = () => {
  return (
    <section className="py-40 bg-paper overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-32 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            Visual Rhythm
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold text-gradient leading-none"
          >
            Stitched Excellence.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          {/* Column 1 */}
          <div className="md:col-span-5 space-y-32 md:pt-20">
            <StitchedImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
              alt="Architecture"
              className="aspect-[4/5] rounded-[3rem]"
              direction="left"
              accentSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
            />
            <div className="pl-12">
              <h3 className="text-3xl font-bold mb-4 italic">Precision in every stitch.</h3>
              <p className="text-ink/40 max-w-sm">
                Our approach to building maintenance is architectural. We don't just clean; we restore the original vision of the structure.
              </p>
            </div>
            <StitchedImage 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
              alt="Interior"
              className="aspect-square rounded-[3rem]"
              direction="up"
            />
          </div>

          {/* Column 2 (Spacer for staggered effect) */}
          <div className="hidden md:block md:col-span-2" />

          {/* Column 3 */}
          <div className="md:col-span-5 space-y-32">
            <div className="pr-12 text-right">
              <h3 className="text-3xl font-bold mb-4 italic">Elevated Standards.</h3>
              <p className="text-ink/40 max-w-sm ml-auto">
                Safety is the thread that runs through everything we do. From rope access to specialized chemical engineering.
              </p>
            </div>
            <StitchedImage 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
              alt="Bridge"
              className="aspect-[3/4] rounded-[3rem]"
              direction="right"
              accentSrc="https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?auto=format&fit=crop&q=80&w=400"
            />
            <StitchedImage 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000"
              alt="Detail"
              className="aspect-video rounded-[3rem]"
              direction="down"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
