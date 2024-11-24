import { Link } from "react-router-dom";

export default function BlogList() {
  const blogs = [
    {
      title: "Blog 1",
      slug: "blog1",
      description: "An introductory blog discussing the basics of our platform and what to expect.",
    },
    {
      title: "Blog 2",
      slug: "blog2",
      description: "Dive deep into the latest features and updates in this detailed guide.",
    },
    {
      title: "Blog 3",
      slug: "blog3",
      description: "Explore tips and tricks for maximizing your experience with our tools.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog.slug}`}
            key={blog.slug}
            className="block bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <span className="text-indigo-600 font-medium hover:underline">Read more &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
