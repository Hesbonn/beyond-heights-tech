import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { Linkedin, Twitter, Mail, Award, Shield, Zap, Phone } from 'lucide-react';

export const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Eunice Mashaiti",
      role: "Co-Founder and Operations Director",
      image: "/assets/Eunice Mashaiti.jpeg",
      bio: "A visionary leader with over a decade of experience in specialized building maintenance and high-access solutions. She is a seasoned operations expert with 15+ years in hospitality and safety leadership. Eunice co-founded Beyond Heights in 2025, bringing unparalleled mastery to risk assessment, site inspections, and rescue planning.",
      specialty: "Strategic Leadership",
      email: "eunice.mashaiti@beyondheights.co.ke",
      phone: "+254 715-638 324",
      linkedin: "https://linkedin.com/in/eunice-mashaiti",
      certifications: ["IRATA Level 2", "Safety Management", "Operations Excellence"],
      experience: "15+ years"
    },
    {
      name: "Bernard Naiyani",
      role: "Co-Founder and Technical Director",
      image: "/assets/CEO of beyond heights.jpeg",
      bio: "A global leader in high-access safety. From the cliffs of Laikipia to professional arenas in Kuwait, Bernard combines international rock climbing mastery with elite safety credentials (NEBOSH & OSH Diploma). He ensures every project at Beyond Heights Tech Ltd meets world-class standards in rope access and occupational health.",
      specialty: "Technical Excellence",
      email: "bernard.naiyani@beyondheights.co.ke",
      phone: "+254 711 904 053",
      linkedin: "https://linkedin.com/in/bernard-naiyani",
      certifications: ["NEBOSH Diploma", "OSH Management", "Rock Climbing Instructor"],
      experience: "12+ years"
    },
    {
      name: "Nicholas Kaparo",
      role: "Senior Rope Access Specialist",
      image: "/assets/Nicholas-Kaparo.png",
      bio: "Climbing wall instructor with 3 years experience. He is responsible for installing external cladding on high-rise projects, working on scaffolding over 20 meters high. He ensures that all scaffolding are secured and utilized full body harness fall-arrest systems. He has maintained a 100% incident-free record over 3 years.",
      specialty: "Rope Access Operations",
      email: "nicholas.kaparo@beyondheights.co.ke",
      phone: "+254 720 123 456",
      linkedin: "https://linkedin.com/in/nicholas-kaparo",
      certifications: [ "Scaffolding Supervisor", "Fall Protection"],
      experience: "3+ years"
    },
    
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
            { label: "Team Members", value: "6", icon: <Zap size={20} /> },
            { label: "Certifications", value: "25+", icon: <Award size={20} /> },
            { label: "Safety Rating", value: "100%", icon: <Shield size={20} /> },
            { label: "Combined Experience", value: "55+", icon: <Zap size={20} /> }
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
                  <a href={`mailto:${member.email}`} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                    <Mail size={18} />
                  </a>
                  <a href={`tel:${member.phone}`} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                    <Phone size={18} />
                  </a>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                      <Linkedin size={18} />
                    </a>
                  )}
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                    <Twitter size={18} />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-brand-electric text-xs font-mono uppercase tracking-widest mb-2">
                  {member.specialty}
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-ink/60 mb-2 font-medium">{member.role}</p>
                <p className="text-brand-electric text-sm font-semibold mb-4">{member.experience} Experience</p>

                <p className="text-ink/40 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Certifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-ink/80 mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, idx) => (
                      <span key={idx} className="text-xs bg-brand-electric/10 text-brand-electric px-2 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-ink/60">
                    <Mail size={14} />
                    <a href={`mailto:${member.email}`} className="hover:text-brand-electric transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-ink/60">
                    <Phone size={14} />
                    <a href={`tel:${member.phone}`} className="hover:text-brand-electric transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>
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
