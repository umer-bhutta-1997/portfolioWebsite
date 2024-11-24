import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';


console.log("Rendering /blogs page");
export default function Blogs({ blogs }) {
    if (!blogs || blogs.length === 0) {
      return <p className="text-center text-gray-600">No blogs found.</p>;
    }
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.slug} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.excerpt}</p>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="text-indigo-600 hover:underline">Read more</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

// Fetch blog metadata dynamically
export async function getStaticProps() {
  const blogsDir = path.join(process.cwd(), 'src/blogs');
  const filenames = fs.readdirSync(blogsDir);

  const blogs = filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(blogsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContent); // Extract front matter
    return {
      slug,
      title: data.title || 'Untitled Blog',
      excerpt: data.excerpt || 'No description available.',
    };
  });

  return {
    props: { blogs },
  };
}
