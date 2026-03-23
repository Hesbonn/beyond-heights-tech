import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const contactInfo = [
    { icon: <Phone size={20} />, text: "+254 715-638 324", label: "Primary" },
    { icon: <Mail size={20} />, text: "beyondheights632@gmail.com", label: "Email" },
    { icon: <MapPin size={20} />, text: "Sirikwa Business Centre, Nairobi CBD", label: "Location" }
  ];

  return (
    <footer id="contact" className="pt-32 pb-12 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-none">
              Start Your <br />
              <span className="text-gradient">Vertical Journey</span>
            </h2>
            <div className="grid grid-cols-2 gap-12 mb-12">
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.3em] text-ink/30 font-bold">Navigation</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-ink/60 hover:text-brand-electric transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-ink/60 hover:text-brand-electric transition-colors">About Us</Link></li>
                  <li><Link to="/services" className="text-ink/60 hover:text-brand-electric transition-colors">Services</Link></li>
                  <li><Link to="/portfolio" className="text-ink/60 hover:text-brand-electric transition-colors">Portfolio</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.3em] text-ink/30 font-bold">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/team" className="text-ink/60 hover:text-brand-electric transition-colors">Our Team</Link></li>
                  <li><Link to="/faq" className="text-ink/60 hover:text-brand-electric transition-colors">FAQ</Link></li>
                  <li><Link to="/contact" className="text-ink/60 hover:text-brand-electric transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-electric group-hover:bg-brand-electric group-hover:text-paper transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-ink/30 block mb-1">{item.label}</span>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3rem]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-ink/40">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-brand-electric outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-ink/40">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-brand-electric outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ink/40">Service Interested In</label>
                <select className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-brand-electric outline-none transition-colors appearance-none">
                  <option className="bg-paper">High-Level Cleaning</option>
                  <option className="bg-paper">Fumigation</option>
                  <option className="bg-paper">Height Access Solutions</option>
                  <option className="bg-paper">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ink/40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-brand-electric outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <button className="w-full bg-ink text-paper py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-electric hover:text-paper transition-colors group">
                Send Inquiry
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
          
            <img
              src="src/assets/BH-logo.png"           // ← your file path (in public/ or imported from assets/)
              alt="Your Company Name"
              className="w-8 h-8 object-contain transition-colors rounded-lg duration-700"
            />
            <span className="font-bold tracking-tighter">BEYOND HEIGHTS</span>
          </div>
          <p className="text-ink/30 text-sm">
            © {new Date().getFullYear()} Designed by Hesbon Onyango Nyamweya. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-ink/50">
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-ink transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-electric/5 to-transparent pointer-events-none" />
    </footer>
  );
};
