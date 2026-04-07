import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Show 9 posts per page instead of all 106

  const categories = [
    'All', 
    'Maintenance', 
    'Safety', 
    'Fumigation', 
    'Technology', 
    'Height Access', 
    'Window Cleaning', 
    'Gutter Cleaning', 
    'Pressure Washing', 
    'Facade Restoration', 
    'Waterproofing'
  ];

  // Memoize filtered posts to avoid recalculating on every render
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--bg-secondary)] text-[color:var(--text-primary)]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/great heights.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/Beyond H 1.jpeg"
        />
        <div className="absolute inset-0 bg-[color:var(--bg-primary)]/50 backdrop-blur-xs" />
        <div className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-6 py-20">
          <div className="max-w-4xl">
            <p className="inline-block px-5 py-2 bg-[color:var(--glass-bg)] text-[color:var(--color-brand-electric)] rounded-full text-sm font-bold tracking-wider mb-8">
              OUR BLOG
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Insights & Perspectives
              <br />
              <span className="text-[color:var(--color-brand-electric)]">Beyond</span>
              <br />
              <span className="text-[color:var(--color-brand-electric)]">The Edge</span>
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto">
              Browse practical lessons from our work on facades, safety, and upkeep. Real experience, rather than marketing slogans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--bg-secondary)] text-[color:var(--text-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters & Search section starts below */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap justify-center gap-2 bg-[color:var(--glass-bg)] p-3 rounded-full border border-[color:var(--glass-border)]">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {setActiveCategory(cat); setCurrentPage(1);}}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-[color:var(--color-brand-electric)] text-[color:var(--bg-primary)] shadow-lg shadow-[color:var(--color-brand-electric)]/30' 
                      : 'bg-[color:var(--glass-bg)] text-[color:var(--text-primary)] hover:bg-[color:var(--glass-border)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--text-secondary)]" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] text-[color:var(--text-primary)] focus:ring-2 focus:ring-[color:var(--color-brand-electric)] outline-none transition-all"
              />
            </div>
          </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }} // Reduced delay from 0.1 to 0.05
              className="bg-[color:var(--bg-primary)] rounded-2xl overflow-hidden border border-[color:var(--glass-border)] shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[color:var(--color-brand-electric)] text-[color:var(--bg-primary)] px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-[color:var(--color-brand-electric)]/40">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-[color:var(--text-secondary)] text-xs mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-4 group-hover:text-[color:var(--color-brand-electric)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[color:var(--text-secondary)] mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-[color:var(--color-brand-electric)] font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[color:var(--text-secondary)] text-lg">No articles found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('All'); setCurrentPage(1);}}
              className="mt-4 text-[color:var(--color-brand-electric)] font-bold"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-lg text-[color:var(--text-primary)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[color:var(--glass-border)] transition-colors"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => {
                  // Show first page, last page, current page, and pages around current
                  return page === 1 || 
                         page === totalPages || 
                         (page >= currentPage - 1 && page <= currentPage + 1);
                })
                .map((page, index, array) => (
                  <React.Fragment key={page}>
                    {index > 0 && array[index - 1] !== page - 1 && (
                      <span className="px-2 text-[color:var(--text-secondary)]">...</span>
                    )}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg border transition-colors ${
                        currentPage === page
                          ? 'bg-[color:var(--color-brand-electric)] text-[color:var(--bg-primary)] border-[color:var(--color-brand-electric)]'
                          : 'bg-[color:var(--glass-bg)] border-[color:var(--glass-border)] text-[color:var(--text-primary)] hover:bg-[color:var(--glass-border)]'
                      }`}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[color:var(--glass-bg)] border border-[color:var(--glass-border)] rounded-lg text-[color:var(--text-primary)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[color:var(--glass-border)] transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  </>
  );
};

export default BlogPage;