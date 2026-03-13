import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CardData {
  id: string;
  title: string;
  icon: React.ReactNode;
  services: string[];
  image: string;
}

interface StackedDeckProps {
  cards: CardData[];
}

export const StackedDeck: React.FC<StackedDeckProps> = ({ cards }) => {
  return (
    <div className="relative flex flex-col">
      {cards.map((card, index) => (
        <StackedCard 
          key={card.id} 
          card={card} 
          index={index} 
          total={cards.length} 
        />
      ))}
    </div>
  );
};

const StackedCard: React.FC<{ card: CardData; index: number; total: number }> = ({ card, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Single scroll progress from entering viewport to leaving viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Entrance: 0 to 0.5 (start at bottom to start at top)
  // Piling: 0.5 to 1 (start at top to end at top)
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [0.8, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  
  // Sticky positioning with a small offset for each card to show the "pile"
  const stickyTop = 100 + (index * 20);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen"
    >
      <motion.div
        style={{ 
          scale, 
          opacity,
          y,
          top: `${stickyTop}px`,
        }}
        className="sticky w-full h-[70vh] group cursor-pointer"
      >
        <Link to={`/services/${card.id}`} className="block w-full h-full">
          <div className="w-full h-full glass rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="absolute inset-0 z-0">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/40 to-transparent" />
            </div>

            <div className="relative z-10 h-full p-12 flex flex-col justify-end">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-brand-electric mb-8 group-hover:bg-brand-electric group-hover:text-paper transition-all">
                {card.icon}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 group-hover:text-brand-electric transition-colors">{card.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-end">
                <ul className="space-y-4">
                  {card.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-ink/70">
                      <div className="w-1.5 h-1.5 bg-brand-electric rounded-full" />
                      <span className="text-lg font-medium">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-end">
                  <div className="group/btn flex items-center gap-4 bg-brand-electric text-paper px-8 py-4 rounded-2xl font-bold transition-all group-hover:gap-6">
                    Explore Service <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};
