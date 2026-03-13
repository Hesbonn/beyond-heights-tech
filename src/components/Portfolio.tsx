import React from 'react';
import { DiagonalCard } from './DiagonalCard';
import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const projects = [
    {
      client: "Holiday Inn",
      location: "Two Rivers, Nairobi",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
      desc: "Full façade maintenance and high-level window cleaning for the luxury hotel group."
    },
    {
      client: "KRA",
      location: "Ushuru Pension Plaza, Westlands",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      desc: "Comprehensive height-access solutions and exterior cleaning for the national tax authority."
    },
    {
      client: "ODP",
      location: "Office of the Deputy President",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
      desc: "Specialized maintenance and cleaning services for high-security government facilities."
    },
    {
      client: "Britam Tower",
      location: "Upper Hill, Nairobi",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
      desc: "Complex rope access engineering and structural inspections for the iconic skyscraper."
    },
    {
      client: "Prism Tower",
      location: "Upper Hill, Nairobi",
      image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=1000",
      desc: "Specialized glass restoration and high-level window cleaning for modern architectural facets."
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-paper">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-brand-electric font-mono text-xs tracking-widest uppercase mb-4 block">Our Impact</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Trusted by Leaders</h2>
          <p className="text-xl text-ink/40 max-w-2xl">
            Our work speaks through the clients we serve. We partner with property managers, 
            building owners, and institutions to deliver expert vertical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <DiagonalCard
              key={project.client}
              title={project.client}
              description={project.desc}
              image={project.image}
              icon={<ExternalLink size={24} />}
              tags={[project.location]}
            />
          ))}
        </div>

        {/* Infinite Marquee for Partners */}
        <div className="mt-32 pt-20 border-t border-ink/5">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-ink/30 mb-12">Strategic Partnerships</p>
          <div className="flex overflow-hidden group">
            <div className="flex gap-20 animate-marquee whitespace-nowrap py-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="text-4xl font-bold opacity-20 hover:opacity-100 transition-opacity cursor-default">
                  {i % 2 === 0 ? "BEYOND HEIGHTS" : "VERTICAL TECH"}
                </div>
              ))}
            </div>
            <div className="flex gap-20 animate-marquee whitespace-nowrap py-4" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="text-4xl font-bold opacity-20 hover:opacity-100 transition-opacity cursor-default">
                  {i % 2 === 0 ? "BEYOND HEIGHTS" : "VERTICAL TECH"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
