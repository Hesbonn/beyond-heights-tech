import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target, Users } from 'lucide-react';

export const Vision = () => {
  const values = [
    {
      icon: <Shield className="text-brand-electric" />,
      title: "Safety First",
      desc: "Commitment to world-class working-at-height practices and environmental protection."
    },
    {
      icon: <Zap className="text-brand-electric" />,
      title: "Innovation",
      desc: "Smart solutions for high-rise challenges using rope access, lifts, and advanced scaffolding."
    },
    {
      icon: <Target className="text-brand-electric" />,
      title: "Excellence",
      desc: "Certified expertise delivering consistent, high-quality results for every structure."
    },
    {
      icon: <Users className="text-brand-electric" />,
      title: "Customer Centric",
      desc: "Tailored solutions building long-term partnerships rather than one-off jobs."
    }
  ];

  return (
    <section id="vision" className="py-32 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-template-columns-[1fr_1.5fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "0px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Redefining <br />
              <span className="text-ink/40">Vertical Access</span>
            </h2>
            <p className="text-xl text-ink/60 leading-relaxed mb-12">
              Beyond Heights Tech is a professional service provider specializing in external window cleaning, 
              fumigation, and comprehensive height-related access solutions. We enhance safety, hygiene, 
              and the overall appearance of buildings while addressing unique operational challenges.
            </p>
            
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-brand-electric font-bold mb-4 uppercase tracking-widest text-sm">Our Mission</h3>
              <p className="text-lg italic">
                "To deliver professional exterior and interior building cleaning solutions through certified expertise, 
                ensuring safe, clean, and pest-free environments."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "0px" }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl hover:bg-ink/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-ink/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-ink/50 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-electric/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};
