import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface StitchedImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  accentSrc?: string;
}

export const StitchedImage: React.FC<StitchedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  parallaxSpeed = 100,
  direction = 'left',
  accentSrc
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image itself
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxSpeed, parallaxSpeed]);
  
  // Mask reveal animation
  const maskInitial = direction === 'left' ? 'inset(0 100% 0 0)' : 
                      direction === 'right' ? 'inset(0 0 0 100%)' :
                      direction === 'up' ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)';
  
  const maskAnimate = 'inset(0 0 0 0)';

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Main Image with Mask Reveal */}
      <motion.div
        initial={{ clipPath: maskInitial }}
        whileInView={{ clipPath: maskAnimate }}
        viewport={{ margin: "0px" }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        className="w-full h-full relative"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className="w-full h-[120%] object-cover absolute top-[-10%]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Decorative Stitch Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ margin: "0px" }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className={`absolute top-0 bottom-0 w-px bg-brand-electric/40 z-20 origin-top ${
          direction === 'left' ? 'right-0' : 'left-0'
        }`}
      />

      {/* Floating Accent Image */}
      {accentSrc && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: direction === 'left' ? 50 : -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ margin: "0px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className={`absolute z-30 w-1/3 aspect-square glass rounded-2xl overflow-hidden shadow-2xl ${
            direction === 'left' ? '-bottom-10 -right-10' : '-top-10 -left-10'
          }`}
        >
          <img 
            src={accentSrc} 
            alt="Detail" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}
    </div>
  );
};
