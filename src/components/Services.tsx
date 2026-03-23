import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Wind, Bug, ArrowUpCircle, Building2 } from 'lucide-react';
import { ServicePillar } from './ServicePillar';

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgTextY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const services = [
    {
      title: "High-Level Cleaning",
      desc: "Expert façade and cladding cleaning using industry-approved equipment and safe access techniques. We restore the architectural brilliance of your structure.",
      icon: <Wind size={28} />,
      mainImage: "src/assets/BH-Window-Cleaning.jpg",
      detailImage: "src/assets/kenya-service-5-interior-cleaning.jpg",
      tags: ["Façade", "Cladding", "Atrium"],
      direction: 'left' as const
    },
    {
      title: "Fumigation Services",
      desc: "Comprehensive pest control solutions using approved chemicals to ensure safe and hygienic environments for commercial and residential spaces.",
      icon: <Bug size={28} />,
      mainImage: "src/assets/BH-fumigation.jpg",
      detailImage: "src/assets/BH-fumigation 2.jpg",
      tags: ["Pest Control", "Hygiene", "Safety"],
      direction: 'right' as const
    },
    {
      title: "Height Access Solutions",
      desc: "Smart solutions for hard-to-reach areas including rope access, specialized lifts, and scaffolding. Safety is our primary thread.",
      icon: <ArrowUpCircle size={28} />,
      mainImage: "src/assets/Beyond H 1.jpeg",
      detailImage: "src/assets/Beyond H 2.jpeg",
      tags: ["Rope Access", "Lifts", "Scaffolding"],
      direction: 'top' as const
    },
    {
      title: "Facility Maintenance",
      desc: "Ongoing maintenance for lift shafts and specialized building components to ensure operational efficiency and structural longevity.",
      icon: <Building2 size={28} />,
      mainImage: "src/assets/BH-equipment-setup.jpg",
      detailImage: "src/assets/BH-equipment-setup.jpg",
      tags: ["Lift Shafts", "Industrial", "Commercial"],
      direction: 'bottom' as const
    }
  ];

  return (
    <section ref={containerRef} id="services" className="py-60 relative bg-paper overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "0px" }}
            className="max-w-2xl"
          >
            <span className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Stitching Stories</span>
            <h2 className="text-6xl md:text-9xl font-bold leading-none tracking-tighter">
              Our <br />
              <span className="text-ink/20 italic">Expertise.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "0px" }}
            transition={{ delay: 0.3 }}
            className="max-w-md text-ink/40 text-xl leading-relaxed"
          >
            We combine architectural precision with tactical engineering to solve the most complex vertical challenges in the modern skyline.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
          {services.map((service, index) => (
            <ServicePillar
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-ink/[0.02] select-none pointer-events-none uppercase"
      >
        Services
      </motion.div>
    </section>
  );
};
