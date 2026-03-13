import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-brand-electric" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      desc: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <Mail className="text-brand-electric" />,
      title: "Email Us",
      details: "hello@beyondheights.com",
      desc: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="text-brand-electric" />,
      title: "Visit Us",
      details: "123 Skyline Drive, Tech District",
      desc: "New York, NY 10001"
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
        <div className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-gradient leading-none mb-8"
          >
            Let's Connect.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ink/40 max-w-2xl mx-auto"
          >
            Have a project in mind? Our team is ready to help you scale new heights 
            with specialized maintenance and engineering solutions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 mb-32">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl flex items-start gap-6 group hover:bg-ink/5 transition-colors"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-lg text-ink/80 mb-1">{item.details}</p>
                  <p className="text-sm text-ink/40">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="glass p-10 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Globe className="text-brand-electric" /> Global Reach
              </h3>
              <p className="text-ink/50 leading-relaxed">
                While headquartered in Nairobi, we deploy specialized teams 
                globally for complex high-access and restoration projects.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                  <MessageSquare size={18} />
                </div>
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-electric transition-colors cursor-pointer">
                  <Clock size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-ink/40 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-ink/5 border border-ink/10 rounded-2xl p-5 focus:border-brand-electric focus:outline-none transition-colors text-ink"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-ink/40 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-ink/5 border border-ink/10 rounded-2xl p-5 focus:border-brand-electric focus:outline-none transition-colors text-ink"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-ink/40 ml-2">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="How can we help?"
                  className="w-full bg-ink/5 border border-ink/10 rounded-2xl p-5 focus:border-brand-electric focus:outline-none transition-colors text-ink"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-ink/40 ml-2">Message</label>
                <textarea 
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project..."
                  className="w-full bg-ink/5 border border-ink/10 rounded-2xl p-5 focus:border-brand-electric focus:outline-none transition-colors text-ink resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-ink text-paper py-6 rounded-2xl font-bold text-lg hover:bg-brand-electric hover:text-paper transition-all flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-32 rounded-[3rem] overflow-hidden h-[400px] glass relative group">
          <div className="absolute inset-0 bg-paper/40 group-hover:bg-paper/20 transition-colors z-10" />
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Map Location" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="glass p-8 rounded-3xl text-center">
              <MapPin className="text-brand-electric mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Our Headquarters</h3>
              <p className="text-ink/60">Sirikwa Business Centre, Nairobi CBD</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};
