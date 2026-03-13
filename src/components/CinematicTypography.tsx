import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text, className = "", highlightWords = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-[0.3em] gap-y-0 ${className}`}>
      {words.map((word, i) => {
        const isHighlighted = highlightWords.some(h => word.toLowerCase().includes(h.toLowerCase()));
        return (
          <Word 
            key={i} 
            word={word} 
            index={i} 
            total={words.length} 
            containerRef={containerRef}
            isHighlighted={isHighlighted}
          />
        );
      })}
    </div>
  );
};

const Word: React.FC<{ 
  word: string; 
  index: number; 
  total: number; 
  containerRef: React.RefObject<HTMLDivElement>;
  isHighlighted: boolean;
}> = ({ word, index, total, containerRef, isHighlighted }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 98%", "start 20%"]
  });

  // Calculate start and end for this specific word based on its index
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const y = useTransform(scrollYProgress, [start, end], [20, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
  
  // Dynamic highlighting
  const highlightColor = useTransform(
    scrollYProgress, 
    [start, end, end + 0.1], 
    ["var(--text-primary)", "var(--color-brand-electric)", "var(--text-primary)"]
  );

  return (
    <motion.span
      style={{ 
        opacity, 
        y, 
        scale,
        color: isHighlighted ? highlightColor : "inherit",
        display: "inline-block"
      }}
      className="origin-bottom"
    >
      {word}
    </motion.span>
  );
};

export const MaskedReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "start 80%"]
  });

  const maskX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        viewport={{ margin: "0px" }}
      >
        {children}
      </motion.div>
      <motion.div 
        style={{ x: maskX }}
        className="absolute inset-0 bg-brand-electric z-10"
      />
    </div>
  );
};

export const KineticText: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"]
  });

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.05em", "0.2em"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <motion.div
      ref={ref}
      style={{ letterSpacing, scale, rotate }}
      className={`font-display uppercase font-black transition-all duration-300 ${className}`}
    >
      {text}
    </motion.div>
  );
};

export const PinnedStorySection: React.FC<{ 
  title: string; 
  content: string; 
  image: string;
  reverse?: boolean;
}> = ({ title, content, image, reverse = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'md:order-2' : ''}>
            <MaskedReveal className="mb-8">
              <h2 className="text-5xl md:text-7xl font-bold leading-none">{title}</h2>
            </MaskedReveal>
            <motion.div style={{ y: textY }}>
              <ScrollRevealText 
                text={content} 
                className="text-xl text-ink/60 leading-relaxed max-w-xl"
                highlightWords={["innovation", "future", "excellence", "heights"]}
              />
            </motion.div>
          </div>
          <div className={`relative aspect-[4/5] rounded-[3rem] overflow-hidden ${reverse ? 'md:order-1' : ''}`}>
            <motion.img 
              style={{ scale: imageScale }}
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paper/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};
