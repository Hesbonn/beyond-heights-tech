import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { img } from 'motion/react-client';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-paper/20 via-paper/40 to-paper z-10" />
        <motion.img 
          initial={{ scale: 1.1, x: '-2%', y: '-2%' }}
          animate={{ 
            scale: [1.1, 1.2, 1.1],
            x: ['-2%', '2%', '-2%'],
            y: ['-2%', '1%', '-2%']
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          src="/assets/kenya-service-3-rope-access.jpg" 
          alt="Modern Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Grain Texture */}
      <div className="absolute inset-0 z-[5] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="container mx-auto px-6 relative z-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 text-gradient">
            Elevate Expert Cleaning <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="italic font-light"
            >
              Beyond Heights Tech Ltd
            </motion.span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ink text-paper px-10 py-4 rounded-full font-bold text-lg magnetic shadow-2xl shadow-ink/10"
            >
              Explore Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-10 py-4 rounded-full font-bold text-lg"
            >
              Our Vision
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity, y: useTransform(scrollYProgress, [0, 0.2], [0, 100]) }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
        <ChevronDown size={20} className="opacity-50" />
      </motion.div>
    </section>
  );
}; 

