import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Award,
  ChevronRight
} from 'lucide-react';
import { StitchedImage } from '../components/StitchedImage';
import { FlipCard } from '../components/FlipCard';

const serviceDetails: Record<string, any> = {
  "fumigation": {
    title: "Fumigation & Pest Control",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
    description: "Our professional fumigation services utilize industry-approved, eco-friendly chemicals to eliminate pests while ensuring the safety of occupants and the environment. We provide tailored solutions for residential, commercial, and industrial spaces.",
    subServices: [
      { name: "Residential Pest Control", desc: "Protecting your home from common pests with family-safe treatments." },
      { name: "Commercial Pest Control", desc: "Maintaining hygienic standards for offices, restaurants, and retail spaces." },
      { name: "Industrial Pest Control", desc: "Large-scale solutions for warehouses, factories, and production plants." },
      { name: "Termite Treatment", desc: "Advanced barrier and elimination systems for structural protection." },
      { name: "Rodent Control", desc: "Effective baiting and exclusion techniques to keep your facility rodent-free." }
    ],
    features: ["Eco-friendly Chemicals", "Certified Technicians", "24/7 Support", "Guaranteed Results"],
    gallery: [
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583912267550-d44d4a3c5a71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "height-access": {
    title: "Height Access Solutions",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000",
    description: "We specialize in smart solutions for high-rise and hard-to-reach areas. Our team is certified in various access techniques, ensuring that no height is out of reach for maintenance or cleaning.",
    subServices: [
      { name: "Rope Access Services", desc: "IRATA certified technicians for efficient vertical engineering." },
      { name: "Lift Operations", desc: "Safe operation of BMUs, cherry pickers, and scissor lifts." },
      { name: "Scaffolding Services", desc: "Professional installation of secure temporary access structures." },
      { name: "Facade Maintenance", desc: "Routine inspections and minor repairs at extreme heights." }
    ],
    features: ["IRATA Certified", "Safety Audited", "Rapid Deployment", "Minimal Disruption"],
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1517089596392-db9a5e9428f6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1521203358991-741d24a71aee?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1449156001935-d28bc1cd728f?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "window-cleaning": {
    title: "Professional Window Cleaning",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2000",
    description: "Crystal clear views for every structure. We use specialized equipment and pure water systems to deliver streak-free results for even the most complex architectural glass.",
    subServices: [
      { name: "Residential Window Cleaning", desc: "Premium cleaning for homes, apartments, and penthouses." },
      { name: "Commercial Window Cleaning", desc: "Regular maintenance for glass-clad office towers and retail fronts." },
      { name: "Solar Panel Cleaning", desc: "Enhancing energy efficiency through professional panel maintenance." },
      { name: "Atrium Cleaning", desc: "Specialized access for internal glass structures and skylights." }
    ],
    features: ["Streak-free Finish", "Pure Water Systems", "Eco-friendly", "Fully Insured"],
    gallery: [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1520209268518-9601fe652423?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  "gutter-cleaning": {
    title: "Gutter Maintenance",
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=2000",
    description: "Prevent water damage and structural issues with our comprehensive gutter services. We ensure your drainage systems are clear and functioning perfectly.",
    subServices: [
      { name: "Residential Gutter Cleaning", desc: "Debris removal and downspout flushing for homes." },
      { name: "Commercial Gutter Cleaning", desc: "Large-scale drainage maintenance for industrial buildings." },
      { name: "Gutter Repair & Maintenance", desc: "Fixing leaks, sags, and structural gutter issues." },
      { name: "Gutter Guard Installation", desc: "Preventative mesh systems to reduce maintenance frequency." }
    ],
    features: ["Debris Removal", "Leak Testing", "Structural Repair", "Annual Plans"]
  },
  "pressure-washing": {
    title: "Pressure Washing",
    image: "https://images.unsplash.com/photo-1520209268518-9601fe652423?auto=format&fit=crop&q=80&w=2000",
    description: "Restore the original beauty of your surfaces. Our high-pressure cleaning systems remove years of dirt, grime, and environmental staining from all exterior surfaces.",
    subServices: [
      { name: "Residential Pressure Washing", desc: "Cleaning driveways, walls, and pool decks." },
      { name: "Commercial Pressure Washing", desc: "Maintaining clean storefronts, parking lots, and walkways." },
      { name: "Driveway & Patio Cleaning", desc: "Deep cleaning for stone, concrete, and brick surfaces." },
      { name: "Deck & Fence Cleaning", desc: "Restoring wood and composite outdoor structures." }
    ],
    features: ["High-PSI Systems", "Surface Safe", "Instant Results", "Stain Removal"]
  },
  "facade-restoration": {
    title: "Facade Restoration",
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=2000",
    description: "Preserving architectural integrity. We specialize in cleaning and restoring building exteriors to their original glory using specialized techniques for different materials.",
    subServices: [
      { name: "Building Facade Cleaning", desc: "Removing pollutants and biological growth from exteriors." },
      { name: "Cladding Maintenance", desc: "Specialized care for metal, composite, and stone cladding." },
      { name: "Graffiti Removal", desc: "Safe and effective removal of unwanted markings without surface damage." },
      { name: "Stone & Brick Restoration", desc: "Deep cleaning and repointing for heritage and modern masonry." }
    ],
    features: ["Material Specific", "Heritage Safe", "Pollutant Removal", "Aesthetic Renewal"]
  },
  "waterproofing": {
    title: "Waterproofing Solutions",
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=2000",
    description: "Comprehensive protection against water ingress. We provide advanced sealing and membrane solutions to protect your building from the elements.",
    subServices: [
      { name: "Roof Waterproofing", desc: "Membrane and liquid-applied systems for all roof types." },
      { name: "Basement Waterproofing", desc: "Internal and external sealing to prevent rising damp." },
      { name: "Window Sealing", desc: "Replacing old gaskets and sealants to prevent leaks and drafts." },
      { name: "Facade Waterproofing", desc: "Clear repellent coatings for porous masonry and stone." }
    ],
    features: ["Leak Prevention", "Long-term Warranty", "Advanced Membranes", "Structural Protection"]
  }
};

export const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetails[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-brand-electric hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-paper min-h-screen"
    >
      {/* Hero Header */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-transparent" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-20">
          <Link to="/services" className="flex items-center gap-2 text-ink/60 hover:text-brand-electric transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold text-gradient"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20">
            {/* Left Column: Description & Sub-services */}
            <div>
              <p className="text-2xl text-ink/70 leading-relaxed mb-16">
                {service.description}
              </p>
              
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                <span className="w-8 h-1 bg-brand-electric" />
                Specialized Offerings
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {service.subServices.map((sub: any, idx: number) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <FlipCard
                      className="h-48"
                      front={
                        <div className="glass p-8 rounded-3xl h-full flex flex-col justify-center hover:bg-brand-electric/5 transition-colors group/card cursor-pointer shadow-lg">
                          <h3 className="text-xl font-bold mb-2 text-brand-electric transition-colors">{sub.name}</h3>
                          <p className="text-ink/50 transition-colors">{sub.desc}</p>
                          <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-electric/40 group-hover/card:text-brand-electric transition-colors">
                            Hover to reveal details <ChevronRight size={14} />
                          </div>
                        </div>
                      }
                      back={
                        <div className="bg-brand-electric p-8 rounded-3xl h-full flex flex-col justify-center text-paper shadow-2xl">
                          <h3 className="text-xl font-bold mb-4">Service Details</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm">
                              <CheckCircle2 size={16} /> Professional Grade Equipment
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <CheckCircle2 size={16} /> Certified Safety Standards
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                              <CheckCircle2 size={16} /> Satisfaction Guaranteed
                            </li>
                          </ul>
                        </div>
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Features & CTA */}
            <div className="space-y-8">
              <div className="glass p-10 rounded-[2.5rem] sticky top-32">
                <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-ink/40">Why Choose Us</h3>
                <div className="space-y-6">
                  {service.features.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-4">
                      <CheckCircle2 className="text-brand-electric" size={24} />
                      <span className="text-lg font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-ink/10 space-y-6">
                  <div className="flex items-center gap-4 text-ink/60">
                    <Clock size={20} />
                    <span>Rapid Response Time</span>
                  </div>
                  <div className="flex items-center gap-4 text-ink/60">
                    <Shield size={20} />
                    <span>Fully Insured & Certified</span>
                  </div>
                  <div className="flex items-center gap-4 text-ink/60">
                    <Award size={20} />
                    <span>Industry Leading Standards</span>
                  </div>
                </div>

                <button className="w-full bg-ink text-paper py-5 rounded-2xl font-bold mt-12 hover:bg-brand-electric hover:text-paper transition-colors flex items-center justify-center gap-2 group">
                  Request a Quote
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {service.gallery && (
            <div className="mt-32">
              <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
                <span className="w-8 h-1 bg-brand-electric" />
                Service Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.gallery.map((img: string, idx: number) => (
                  <StitchedImage 
                    key={idx}
                    src={img}
                    alt={`${service.title} gallery ${idx + 1}`}
                    className="aspect-square rounded-3xl"
                    direction={idx % 2 === 0 ? 'left' : 'right'}
                    parallaxSpeed={50 + (idx * 10)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};
