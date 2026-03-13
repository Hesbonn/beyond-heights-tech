import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from '../components/Footer';
import { ExternalLink, MapPin, Calendar, Tag } from 'lucide-react';

export const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Skyline Towers Restoration",
      category: "Facade Restoration",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      location: "New York, NY",
      date: "2023",
      desc: "Complete facade cleaning and structural restoration of a 60-story commercial tower."
    },
    {
      id: 2,
      title: "Grand Atrium Maintenance",
      category: "Window Cleaning",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      location: "Chicago, IL",
      date: "2023",
      desc: "Specialized internal glass cleaning for a complex geometric atrium structure."
    },
    {
      id: 3,
      title: "Industrial Complex Sealing",
      category: "Waterproofing",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      location: "Houston, TX",
      date: "2022",
      desc: "Large-scale membrane waterproofing for a 500,000 sq ft industrial facility."
    },
    {
      id: 4,
      title: "Heritage Plaza Fumigation",
      category: "Fumigation",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      location: "Boston, MA",
      date: "2023",
      desc: "Eco-friendly pest management for a historic residential complex."
    },
    {
      id: 5,
      title: "Bridge Inspection Services",
      category: "Height Access",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
      location: "San Francisco, CA",
      date: "2022",
      desc: "Rope access structural inspection and minor repairs for a major suspension bridge."
    },
    {
      id: 6,
      title: "Solar Farm Maintenance",
      category: "Window Cleaning",
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?auto=format&fit=crop&q=80&w=1000",
      location: "Phoenix, AZ",
      date: "2023",
      desc: "Automated and manual cleaning solutions for a 50MW solar installation."
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-paper min-h-screen pt-40"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-gradient leading-none mb-8"
          >
            Proven Results.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ink/40 max-w-2xl"
          >
            Explore our track record of excellence across complex commercial, 
            industrial, and residential projects nationwide.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-brand-electric text-paper' 
                  : 'glass text-ink/60 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="glass rounded-[2.5rem] overflow-hidden group cursor-pointer hover:bg-brand-electric/5 transition-colors duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img 
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-brand-electric text-xs font-mono uppercase tracking-widest mb-4">
                    <Tag size={14} />
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-electric transition-colors">{project.title}</h3>
                  <p className="text-ink/40 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex items-center justify-between text-xs text-ink/30 border-t border-ink/10 pt-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {project.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};
