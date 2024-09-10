import BlogCard from '@components/BlogCard';

// Sample data for blog posts
const blogs = [
  { title: 'Blog Post 1', description: 'This is the first blog post.' },
  { title: 'Blog Post 2', description: 'This is the second blog post.' },
  { title: 'Blog Post 3', description: 'This is the third blog post.' },
];

export default function Home() {
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog, index) => (
        <BlogCard key={index} title={blog.title} description={blog.description} />
      ))}
    </div>
  );
}
