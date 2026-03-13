import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { DiagonalCard } from '../components/DiagonalCard';
import { Target, Eye, Heart, History, Award, Users, ShieldCheck, Zap, TrendingUp, Clock, Smile, CheckCircle2 } from 'lucide-react';

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyChooseUs = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Certified Expertise",
      desc: "All personnel are certified and trained in the latest safety standards and industry best practices.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Zap size={28} />,
      title: "Modern Equipment",
      desc: "We invest in state-of-the-art equipment and approved chemicals to deliver superior results.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Proven Track Record",
      desc: "Trusted by major institutions, property managers, and building owners across Kenya.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Safety Compliance",
      desc: "Strict adherence to occupational health and safety standards in all operations.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Clock size={28} />,
      title: "Reliable Service",
      desc: "Timely delivery and consistent quality across all projects, big or small.",
      image: "https://images.unsplash.com/photo-1520209268518-9601fe652423?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Smile size={28} />,
      title: "Client Satisfaction",
      desc: "Long-term partnerships built on trust, transparency, and measurable results.",
      image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const values = [
    {
      icon: <Target className="text-brand-electric" size={32} />,
      title: "Precision",
      desc: "We approach every project with surgical accuracy, ensuring every detail meets our rigorous standards."
    },
    {
      icon: <Award className="text-brand-electric" size={32} />,
      title: "Excellence",
      desc: "Good is never enough. We strive for industry-leading quality in every service we provide."
    },
    {
      icon: <Users className="text-brand-electric" size={32} />,
      title: "Integrity",
      desc: "Transparency and honesty form the bedrock of our relationships with clients and partners."
    },
    {
      icon: <Heart className="text-brand-electric" size={32} />,
      title: "Safety",
      desc: "The well-being of our team and clients is our absolute priority, governed by strict safety protocols."
    }
  ];

  const milestones = [
    { year: "2015", title: "The Beginning", desc: "Beyond Heights was founded with a single van and a vision to redefine high-access maintenance." },
    { year: "2017", title: "Expansion", desc: "We introduced specialized fumigation and industrial cleaning services to our portfolio." },
    { year: "2019", title: "Certification", desc: "Achieved full IRATA certification, setting a new benchmark for safety in the region." },
    { year: "2022", title: "Innovation", desc: "Launched our proprietary eco-friendly chemical line for sustainable facade restoration." },
    { year: "2024", title: "Market Leader", desc: "Now serving over 500 commercial properties across the country." }
  ];

  const team = [
    {
      name: "Eunice Mashaiti",
      role: "Founder & Operations Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000", // Placeholder for the uploaded image
      bio: "A visionary leader with over a decade of experience in specialized building maintenance and high-access solutions."
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
        {/* Hero Section */}
        <div className="mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold text-gradient leading-none mb-12"
          >
            Beyond Limits.
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-ink/60 leading-relaxed"
            >
              We are a team of specialized engineers, technicians, and visionaries dedicated to 
              preserving and maintaining the modern skyline. Our expertise spans from the 
              depths of structural waterproofing to the peaks of high-rise facade engineering.
            </motion.p>
            <div className="relative rounded-[3rem] overflow-hidden aspect-video glass">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Office" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} />
            </div>
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <Eye className="text-brand-electric" /> Our Vision
            </h2>
            <p className="text-xl text-ink/50 leading-relaxed">
              To be the global benchmark for specialized building maintenance, 
              where technology meets craftsmanship to create safer, cleaner, 
              and more sustainable urban environments.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <History size={120} />
            </div>
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <Target className="text-brand-electric" /> Our Mission
            </h2>
            <p className="text-xl text-ink/50 leading-relaxed">
              To deliver uncompromising quality in specialized services through 
              continuous innovation, rigorous safety standards, and a 
              relentless commitment to client satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl text-center hover:bg-brand-electric/10 transition-all duration-500 group/value"
              >
                <div className="mb-6 flex justify-center group-hover/value:scale-110 transition-transform">{val.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover/value:text-brand-electric transition-colors">{val.title}</h3>
                <p className="text-ink/40 group-hover/value:text-ink/60 transition-colors">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Choose Us?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ink/50 max-w-2xl mx-auto"
            >
              We combine expertise, professionalism, and commitment to excellence.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <DiagonalCard
                key={item.title}
                title={item.title}
                description={item.desc}
                image={item.image}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold mb-24 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 hidden md:block" />
            <div className="space-y-24">
              {milestones.map((m, idx) => (
                <motion.div 
                  key={m.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="text-6xl font-bold text-brand-electric/20 mb-2">{m.year}</span>
                      <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                      <p className="text-ink/40 max-w-md">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-brand-electric relative z-10 shadow-[0_0_20px_rgba(0,255,242,0.5)]" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Leadership
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ink/50 max-w-2xl mx-auto"
            >
              Meet the visionaries driving excellence at Beyond Heights.
            </motion.p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {team.map((member) => (
                <DiagonalCard
                  key={member.name}
                  title={member.name}
                  description={member.bio}
                  image={member.image}
                  icon={<Users size={24} />}
                  tags={[member.role]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};
