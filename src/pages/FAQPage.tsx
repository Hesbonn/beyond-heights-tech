import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from '../components/Footer';
import { Plus, Minus, HelpCircle, MessageCircle, Phone, ArrowRight } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b border-ink/10 last:border-none">
    <button
      onClick={onClick}
      className="w-full py-8 flex items-center justify-between text-left group"
    >
      <span className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-brand-electric' : 'text-ink/80 group-hover:text-ink'}`}>
        {question}
      </span>
      <div className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-brand-electric text-paper' : ''}`}>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-lg text-ink/40 pb-8 leading-relaxed max-w-3xl">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What safety certifications does your team hold?",
      answer: "Our technicians are IRATA (Industrial Rope Access Trade Association) certified, ranging from Level 1 to Level 3. We also maintain full compliance with OSHA standards and hold specialized certifications for chemical handling and heavy machinery operation."
    },
    {
      question: "How do you handle high-access projects in extreme weather?",
      answer: "Safety is our absolute priority. We monitor weather conditions in real-time. If wind speeds exceed 25mph or if there is any lightning within a 10-mile radius, we immediately suspend all high-access operations until conditions are safe."
    },
    {
      question: "Are your cleaning chemicals safe for the environment?",
      answer: "Yes, we prioritize eco-friendly, biodegradable cleaning agents. Our facade restoration and fumigation chemicals are selected to be highly effective while minimizing environmental impact and ensuring the safety of building occupants."
    },
    {
      question: "Do you provide emergency maintenance services?",
      answer: "We offer 24/7 emergency response for critical issues such as structural leaks, hazardous facade debris, or urgent pest infestations. Our rapid response teams can be deployed within hours for contracted clients."
    },
    {
      question: "How often should commercial facades be cleaned?",
      answer: "Frequency depends on the building's location and material. Generally, we recommend a full exterior cleaning every 6-12 months to prevent pollutant buildup and maintain structural integrity. We provide custom maintenance schedules based on site audits."
    },
    {
      question: "Is Beyond Heights fully insured?",
      answer: "Absolutely. We carry comprehensive general liability insurance, workers' compensation, and specialized high-risk insurance specifically tailored for high-access engineering and industrial maintenance."
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
            Support Center
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-gradient leading-none mb-8"
          >
            Questions?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ink/40 max-w-2xl mx-auto"
          >
            Find answers to common questions about our specialized services, 
            safety protocols, and project management.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto mb-32 glass p-12 rounded-[3rem]">
          <div className="mb-12 flex items-center gap-4 text-brand-electric">
            <HelpCircle size={32} />
            <h2 className="text-3xl font-bold">General FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>

        {/* Still have questions? */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem] flex flex-col justify-between group"
          >
            <div>
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-brand-electric mb-8 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Chat with us</h3>
              <p className="text-lg text-ink/40 mb-8">
                Our support team is available for real-time assistance during business hours.
              </p>
            </div>
            <button className="flex items-center gap-2 text-brand-electric font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
              Start Live Chat <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem] flex flex-col justify-between group"
          >
            <div>
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-brand-electric mb-8 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Give us a call</h3>
              <p className="text-lg text-ink/40 mb-8">
                Prefer to talk? Our experts are just a phone call away for any technical inquiries.
              </p>
            </div>
            <button className="flex items-center gap-2 text-brand-electric font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
              +254 700 000 000 <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};
