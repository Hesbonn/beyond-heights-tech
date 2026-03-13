import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Footer } from '../components/Footer';
import { StackedDeck } from '../components/StackedDeck';
import { Link } from 'react-router-dom';
import { 
  Bug, 
  ArrowUpCircle, 
  Wind, 
  Droplets, 
  Waves, 
  ShieldCheck, 
  PaintBucket,
  ChevronRight
} from 'lucide-react';
import { GalleryGrid } from '../components/GalleryGrid';

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      id: "fumigation",
      title: "Fumigation",
      icon: <Bug size={32} />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      services: [
        "Residential Pest Control",
        "Commercial Pest Control",
        "Industrial Pest Control",
        "Termite Treatment",
        "Rodent Control"
      ]
    },
    {
      id: "height-access",
      title: "Height Access",
      icon: <ArrowUpCircle size={32} />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
      services: [
        "Rope Access Services",
        "Lift Operations",
        "Scaffolding Services",
        "Facade Maintenance"
      ]
    },
    {
      id: "window-cleaning",
      title: "Window Cleaning",
      icon: <Wind size={32} />,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000",
      services: [
        "Residential Window Cleaning",
        "Commercial Window Cleaning",
        "Solar Panel Cleaning",
        "Atrium Cleaning"
      ]
    },
    {
      id: "gutter-cleaning",
      title: "Gutter Cleaning",
      icon: <Droplets size={32} />,
      image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=1000",
      services: [
        "Residential Gutter Cleaning",
        "Commercial Gutter Cleaning",
        "Gutter Repair & Maintenance",
        "Gutter Guard Installation"
      ]
    },
    {
      id: "pressure-washing",
      title: "Pressure Washing",
      icon: <Waves size={32} />,
      image: "https://images.unsplash.com/photo-1520209268518-9601fe652423?auto=format&fit=crop&q=80&w=1000",
      services: [
        "Residential Pressure Washing",
        "Commercial Pressure Washing",
        "Driveway & Patio Cleaning",
        "Deck & Fence Cleaning"
      ]
    },
    {
      id: "facade-restoration",
      title: "Facade Restoration",
      icon: <PaintBucket size={32} />,
      image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=1000",
      services: [
        "Building Facade Cleaning",
        "Cladding Maintenance",
        "Graffiti Removal",
        "Stone & Brick Restoration"
      ]
    },
    {
      id: "waterproofing",
      title: "Waterproofing",
      icon: <ShieldCheck size={32} />,
      image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1000",
      services: [
        "Roof Waterproofing",
        "Basement Waterproofing",
        "Window Sealing",
        "Facade Waterproofing"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-paper min-h-screen pt-40"
    >
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            Comprehensive Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-gradient leading-none"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ink/40 mt-8 max-w-2xl"
          >
            From the ground to the highest peaks, we provide specialized engineering 
            and maintenance solutions tailored for modern infrastructure.
          </motion.p>
        </div>

        <div className="mb-32">
          <StackedDeck cards={categories} />
        </div>

        <div className="space-y-32 mb-32">
          <GalleryGrid 
            title="Height Access" 
            images={[
              "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1517089596392-db9a5e9428f6?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1521203358991-741d24a71aee?auto=format&fit=crop&q=80&w=1000"
            ]} 
          />
          <GalleryGrid 
            title="Window Cleaning" 
            images={[
              "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
            ]} 
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};
