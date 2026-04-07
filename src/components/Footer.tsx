import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const contactInfo = [
    { icon: <Phone size={20} />, text: "+254 715-638 324", label: "Primary" },
    { icon: <Phone size={20} />, text: "+254 711 904 053", label: "Secondary" },
    { icon: <Mail size={20} />, text: "info@beyondheightstech.co.ke", label: "Email" },
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
                  <input type="text" className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-brand-electric outline-none transition-colors" placeholder="John Kariuki" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-ink/40">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-ink/10 py-3 focus:border-brand-electric outline-none transition-colors" placeholder="johnkari@gmail.com" />
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

        <div className="pt-12 border-t border-ink/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src="/assets/BH-logo.png"
              alt="Beyond Heights Logo"
              className="w-8 h-8 object-contain transition-colors rounded-lg duration-700"
            />
            <span className="font-bold tracking-tighter">BEYOND HEIGHTS</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-ink/50 hover:text-brand-electric transition-colors">Privacy</a>
            <a href="#" className="text-sm text-ink/50 hover:text-brand-electric transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/17eQWstTQo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-[#1877F2] text-white shadow-lg hover:scale-105 transition-transform"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@beyond.heights.tech?_r=1&_t=ZS-94DMQTY0WZR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-black text-white shadow-lg hover:scale-105 transition-transform"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.562 7.866h-2.27c-.193 0-.385-.01-.575-.03v8.318c0 2.73-2.233 4.949-4.96 4.949-2.726 0-4.96-2.219-4.96-4.95 0-2.73 2.233-4.95 4.96-4.95.39 0 .772.048 1.132.138v3.837c-.35-.084-.716-.13-1.092-.13-1.67 0-3.027 1.358-3.027 3.03 0 1.673 1.357 3.031 3.027 3.031 1.55 0 2.84-1.063 2.98-2.47.017-.15.03-.304.03-.459V9.256h2.27c.193 0 .387.01.576.03v-1.42c0-1.463 1.185-2.697 2.651-2.67V4.28a4.17 4.17 0 0 1-3.227-1.232 4.141 4.141 0 0 1-1.222-3.097h-1.97c.023 1.046.44 2.05 1.187 2.853.747.803 1.776 1.245 2.836 1.245V7.87Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/beyond_heights_consultancy_?igsh=MTVlamhocnJ2dTd6OQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white shadow-lg hover:scale-105 transition-transform"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/beyond-heights-tech-limited/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0A66C2] text-white shadow-lg hover:scale-105 transition-transform"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <p className="text-ink/30 text-sm">
            © {new Date().getFullYear()} Designed by Hesbon Onyango Nyamweya. All rights reserved.
          </p>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-electric/5 to-transparent pointer-events-none" />
    </footer>
  );
};
