import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Palette, Check } from 'lucide-react';
import { useTheme, Mood } from '../context/ThemeContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const { mood, setMood } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const moods: { id: Mood; name: string; color: string }[] = [
    { id: 'electric', name: 'Electric', color: '#00E5FF' },
    { id: 'midnight', name: 'Midnight', color: '#D4AF37' },
    { id: 'romantic', name: 'Romantic', color: '#E91E63' },
    { id: 'sky', name: 'Sky', color: '#2B6CB0' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-12 h-12 bg-ink flex items-center justify-center rounded-full transition-colors duration-700">
            <img
              src="/assets/BH-logo.png"           
              alt="Your Company Name"
              className="w-10 h-10 object-contain rounded-full transition-colors duration-700"  
            />
          </div>
          <span className="hidden sm:inline">BEYOND HEIGHTS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="glass px-6 py-2 rounded-full flex gap-3 bg-white/10 border-white/25">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'bg-white/30 text-brand-electric shadow-lg shadow-brand-electric/30'
                    : 'text-white/85 hover:text-brand-electric hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              className={`glass p-2 rounded-full transition-colors duration-300 ${isPaletteOpen ? 'text-brand-electric bg-ink/5' : 'text-ink/60 hover:text-brand-electric'}`}
            >
              <Palette size={20} />
            </motion.button>

            <AnimatePresence>
              {isPaletteOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-48 glass rounded-2xl p-2 shadow-2xl border border-ink/10 overflow-hidden"
                >
                  <div className="text-[10px] uppercase tracking-widest text-ink/40 px-3 py-2 font-bold">Select Mood</div>
                  {moods.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setMood(m.id);
                        setIsPaletteOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-300 group ${mood === m.id ? 'bg-brand-electric/10 text-brand-electric' : 'hover:bg-ink/5 text-ink/60'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                        <span className="text-sm font-medium">{m.name}</span>
                      </div>
                      {mood === m.id && <Check size={14} />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-ink text-paper px-6 py-2 rounded-full text-sm font-bold magnetic transition-colors duration-700"
          >
            Hire Us
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
            className="glass p-2 rounded-full text-brand-electric"
          >
            <Palette size={18} />
          </button>
          <button
            className="glass p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass mt-2 py-6 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-lg font-medium border-b border-white/10 pb-2"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex gap-4 py-4 overflow-x-auto no-scrollbar">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setMood(m.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${mood === m.id ? 'border-brand-electric bg-brand-electric/10 text-brand-electric' : 'border-ink/10 text-ink/60'}`}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                  <span className="text-xs font-bold uppercase tracking-widest">{m.name}</span>
                </button>
              ))}
            </div>

            <button className="bg-ink text-paper py-3 rounded-xl font-bold mt-4 transition-colors duration-700">
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
