import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { useEffect } from 'react';

export const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h2>
          <Link to="/blog" className="text-blue-600 font-bold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog"
          className="mb-8 text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all inline-flex"
        >
          <ArrowLeft size={18} /> Back to Blog
        </Link>
        
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[420px] object-cover rounded-3xl mb-10 shadow-xl"
          referrerPolicy="no-referrer"
        />
        
        <div className="flex items-center gap-6 text-gray-500 mb-8 text-sm">
          <span className="flex items-center gap-2">
            <Calendar size={16} /> {post.date}
          </span>
          <span className="flex items-center gap-2">
            <User size={16} /> {post.author}
          </span>
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-bold">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
          {post.title}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-gray-800 border-l-4 border-blue-500 pl-6">
            {post.excerpt}
          </p>
          <p>{post.content}</p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-6">Key Takeaways</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {post.takeaways.map((takeaway, i) => (
              <li key={i}>{takeaway}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-20 pt-10 border-t border-gray-100">
          <h4 className="font-bold text-gray-900 mb-5">Share this article</h4>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Facebook'].map(platform => (
              <button 
                key={platform} 
                className="bg-gray-100 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-2xl transition-all text-sm font-medium"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostDetail;