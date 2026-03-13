import React from 'react';
import { motion } from 'motion/react';
import { StitchedImage } from './StitchedImage';

interface GalleryGridProps {
  title: string;
  images: string[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ title, images }) => {
  return (
    <div className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-px bg-brand-electric" />
        <h3 className="text-2xl font-bold uppercase tracking-widest">{title} Showcase</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px" }}
            transition={{ delay: idx * 0.1 }}
          >
            <StitchedImage 
              src={img} 
              alt={`${title} ${idx + 1}`} 
              className="aspect-[3/4] rounded-2xl"
              parallaxSpeed={30 + (idx * 5)}
              direction={idx % 2 === 0 ? 'up' : 'down'}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
