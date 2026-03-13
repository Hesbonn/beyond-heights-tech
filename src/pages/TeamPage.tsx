import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { Linkedin, Twitter, Mail, Award, Shield, Zap } from 'lucide-react';

export const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Eunice Mashaiti",
      role: "Founder & Operations Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      bio: "A visionary leader with over a decade of experience in specialized building maintenance and high-access solutions.",
      specialty: "Strategic Leadership"
    },
    {
      name: "Marcus Thorne",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      bio: "20+ years of experience in high-rise engineering and structural maintenance.",
      specialty: "Strategic Planning"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      bio: "Expert in logistics and large-scale project management for commercial properties.",
      specialty: "Operational Excellence"
    },
    {
      name: "David Chen",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      bio: "IRATA Level 3 certified instructor with a focus on rope access safety protocols.",
      specialty: "Safety Engineering"
    },
    {
      name: "Sarah Jenkins",
      role: "Lead Restoration Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600",
      bio: "Specializes in heritage building restoration and eco-friendly chemical engineering.",
      specialty: "Facade Restoration"
    },
    {
      name: "Robert Miller",
      role: "Senior Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
      bio: "Manages our industrial portfolio, ensuring compliance with environmental regulations.",
      specialty: "Industrial Solutions"
    },
    {
      name: "Amina Okafor",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600",
      bio: "Dedicated to building long-term partnerships and ensuring client satisfaction.",
      specialty: "Strategic Partnerships"
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
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            The Experts
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-gradient leading-none mb-8"
          >
            Our Team.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ink/40 max-w-2xl"
          >
            Meet the dedicated professionals who combine technical mastery with 
            unwavering safety standards to deliver excellence at every height.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { label: "Engineers", value: "25+", icon: <Zap size={20} /> },
            { label: "Certifications", value: "15", icon: <Award size={20} /> },
            { label: "Safety Rating", value: "100%", icon: <Shield size={20} /> },
            { label: "Projects", value: "2k+", icon: <Zap size={20} /> }
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl text-center group hover:bg-ink/5 transition-colors"
            >
              <div className="text-brand-electric mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-ink/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {team.map((member, idx) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-[2.5rem] overflow-hidden group hover:bg-brand-electric/5 transition-colors duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-60" />
                
                {/* Socials Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                    <Linkedin size={18} />
                  </div>
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                    <Twitter size={18} />
                  </div>
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                    <Mail size={18} />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-brand-electric text-xs font-mono uppercase tracking-widest mb-2">
                  {member.specialty}
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-ink/60 mb-4 font-medium">{member.role}</p>
                <p className="text-ink/40 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-16 rounded-[3rem] text-center mb-32 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-brand-electric/5 blur-[100px] -z-10" />
          <h2 className="text-4xl font-bold mb-6">Want to join the team?</h2>
          <p className="text-xl text-ink/50 max-w-2xl mx-auto mb-10">
            We are always looking for certified technicians and engineering 
            experts who share our passion for safety and excellence.
          </p>
          <button className="bg-ink text-paper px-10 py-4 rounded-2xl font-bold hover:bg-brand-electric hover:text-paper transition-colors">
            View Careers
          </button>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};
