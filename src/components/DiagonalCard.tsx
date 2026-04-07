import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface DiagonalCardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  className?: string;
  tags?: string[];
}

export const DiagonalCard: React.FC<DiagonalCardProps> = ({ id, title, description, image, icon, className, tags }) => {
  const CardContent = () => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-charcoal aspect-[4/5] cursor-pointer shadow-2xl ${className}`}
    >
      {/* Image Half with Diagonal Clip Path */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-110"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 65%)',
        }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/10 transition-colors duration-700" />
      </div>

      {/* Circular Badge in the Middle */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-16 h-16 rounded-full bg-brand-electric flex items-center justify-center text-paper shadow-[0_0_40px_rgba(0,229,255,0.4)] border-[6px] border-charcoal transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
          {icon}
        </div>
      </div>

      {/* Content Area */}
      <div className="absolute inset-x-0 bottom-0 p-8 z-10 flex flex-col justify-end h-1/2">
        <div className="translate-y-16 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]">
          {tags && (
            <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              {tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-brand-electric/60 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-3xl font-bold mb-3 text-paper leading-tight group-hover:text-brand-electric transition-colors duration-500">{title}</h3>
          <p className="text-paper/50 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
      
      {/* Bottom Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90 pointer-events-none" />
      
      {/* Border Glow on Hover */}
      <div className="absolute inset-0 border-2 border-brand-electric/0 group-hover:border-brand-electric/20 rounded-[2.5rem] transition-colors duration-700 pointer-events-none" />
    </motion.div>
  );

  if (id) {
    return (
      <Link to={`/services/${id}`}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};
