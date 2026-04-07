import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DiagonalCard } from './DiagonalCard';

interface ServicePillarProps {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  mainImage: string;
  detailImage: string;
  tags: string[];
  direction?: 'left' | 'right' | 'top' | 'bottom';
  index: number;
}

export const ServicePillar: React.FC<ServicePillarProps> = ({
  id,
  title,
  desc,
  icon,
  mainImage,
  tags,
  index
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the entire card container
  const cardY = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]);
  
  const isEven = index % 2 === 0;
  const marginTop = isEven ? 'md:mt-0' : 'md:mt-40';

  return (
    <motion.div 
      ref={containerRef} 
      style={{ y: cardY }}
      className={`relative ${marginTop} mb-20 md:mb-0`}
    >
      <DiagonalCard
        id={id}
        title={title}
        description={desc}
        image={mainImage}
        icon={icon}
        tags={tags}
      />
    </motion.div>
  );
};
