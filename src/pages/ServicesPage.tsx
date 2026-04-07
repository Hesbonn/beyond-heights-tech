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
      image: "/assets/BH-fumigation 2.jpg",
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
      image: "/assets/Beyond H 15.jpeg",
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
      image: "/assets/BH-Window-Cleaning.jpg",
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
      image: "/assets/BH-Gutter Cleaning.jpeg",
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
      image: "/assets/kenya-service-5-interior-cleaning.jpg",
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
      image: "/assets/Beyond H 2.jpeg",
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
      image: "/assets/Beyond H 3.jpeg",
      services: [
        "Roof Waterproofing",
        "Basement Waterproofing",
        "Window Sealing",
        "Facade Waterproofing"
      ]
    }
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-paper text-ink">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/beyond height video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/BH-Equipments.jpg"
        />
        <div className="absolute inset-0 bg-paper/60 backdrop-blur-xs" />
        <div className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-6 py-20">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block inline-block px-5 py-2 bg-glass rounded-full"
            >
              Comprehensive Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-gradient leading-none mt-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ink/70 mt-8 max-w-3xl mx-auto"
            >
              From the ground to the highest peaks, we provide specialized engineering 
              and maintenance solutions tailored for modern infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-paper min-h-screen"
      >
        <div className="container mx-auto px-6 py-32">
          <div className="mb-32">
            <StackedDeck cards={categories} />
          </div>

          <div className="space-y-32 mb-32">
            <GalleryGrid 
              title="Height Access" 
              images={[
                "/assets/Beyond H 4.jpeg",
                "/assets/Beyond H 5.jpeg",
                "/assets/Beyond H 16.jpeg",
                "/assets/Beyond H 7.jpeg"
              ]} 
            />
            <GalleryGrid 
              title="Window Cleaning" 
              images={[
                "/assets/BH-Window-Cleaning.jpg",
                "/assets/kenya-service-4-window-detail.jpg",
                "/assets/BH-residential-service.jpg",
                "/assets/Beyond H 11.jpeg"
              ]} 
            />
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};
