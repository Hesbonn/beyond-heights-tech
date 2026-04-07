import { writeFileSync } from 'fs';
const path = './src/data/blogData.ts';
const categories = ['Maintenance', 'Safety', 'Innovation', 'Fumigation', 'Height Access', 'Window Cleaning', 'Gutter Cleaning', 'Pressure Washing', 'Facade Restoration', 'Waterproofing'];

const posts = Array.from({ length: 109 }, (_, i) => {
  const id = i + 1;
  const date = new Date(2026, 2, (i % 30) + 1); // rotate through month days
  const dateStr = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const category = categories[i % categories.length];
  return {
    id,
    title: `Sample Post #${id} in ${category}`,
    excerpt: `This is excerpt text for sample post ${id}.`,
    content: `This is the full content for sample post ${id} in category ${category}.`,
    author: `Author ${id}`,
    date: dateStr,
    category,
    image: `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80`,
    takeaways: [`Key point A${id}`, `Key point B${id}`, `Key point C${id}`],
  };
});

const output = 'export const blogPosts = ' + JSON.stringify(posts, null, 2) + ';\n';
writeFileSync(path, output, 'utf8');
console.log('Wrote', posts.length, 'posts.');
