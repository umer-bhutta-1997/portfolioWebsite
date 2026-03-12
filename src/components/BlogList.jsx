// // // // // import { Link } from "react-router-dom";
// // // // // // adjust the relative path if your folder structure differs
// // // // // import blogs from "../blogs_posts/blogs.json";

// // // // // export default function BlogList() {
// // // // //   return (
// // // // //     <div className="max-w-4xl mx-auto p-6">
// // // // //       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Blogs</h1>
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {blogs.map(({ title, slug, description }) => (
// // // // //           <Link
// // // // //             to={`/blogs/${slug}`}
// // // // //             key={slug}
// // // // //             className="block bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
// // // // //           >
// // // // //             <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
// // // // //             <p className="text-gray-600 mb-4">{description}</p>
// // // // //             <span className="text-indigo-600 font-medium hover:underline">
// // // // //               Read more &rarr;
// // // // //             </span>
// // // // //           </Link>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // // adjust the relative path if your folder structure differs
// // // // import blogs from "../blogs_posts/blogs.json";

// // // // export default function BlogList() {
// // // //   return (
// // // //     <section className="py-16">
// // // //       <div className="max-w-4xl mx-auto px-6">
// // // //         <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Blogs</h1>
// // // //         <p className="text-gray-600 text-center mb-8">
// // // //           Stay updated with our latest articles
// // // //         </p>

// // // //         {/* Search Bar */}
// // // //         <div className="relative mb-12 w-full max-w-md mx-auto">
// // // //           <svg
// // // //             className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             viewBox="0 0 24 24"
// // // //             strokeWidth={2}
// // // //             strokeLinecap="round"
// // // //             strokeLinejoin="round"
// // // //           >
// // // //             <circle cx={11} cy={11} r={8} />
// // // //             <line x1={21} y1={21} x2={16.65} y2={16.65} />
// // // //           </svg>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search articles"
// // // //             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // // //           />
// // // //         </div>

// // // //         {/* Vertical Blog Tiles with Left Image & Custom Background */}
// // // //         <div className="flex flex-col gap-8">
// // // //           {blogs.map(({ title, slug, description, image, author, date, color }) => (
// // // //             <Link
// // // //               to={`/blogs/${slug}`}
// // // //               key={slug}
// // // //               className="flex items-center shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl"
// // // //               style={{ backgroundColor: color }}
// // // //             >
// // // //               {/* Left Image */}
// // // //               {image && (
// // // //                 <img
// // // //                   src={image}
// // // //                   alt={`Cover for ${title}`}
// // // //                   className="w-1/3 h-32 object-cover"
// // // //                 />
// // // //               )}

// // // //               <div className="p-6 flex-1">
// // // //                 <h2 className="text-2xl font-semibold mb-2 text-gray-800">
// // // //                   {title}
// // // //                 </h2>
// // // //                 <p className="text-sm text-gray-500 mb-4">
// // // //                   By {author} on {date}
// // // //                 </p>
// // // //                 <p className="text-gray-600 mb-4">{description}</p>
// // // //                 <span className="text-indigo-600 font-medium hover:underline">
// // // //                   Read more &rarr;
// // // //                 </span>
// // // //               </div>
// // // //             </Link>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // // adjust the relative path if your folder structure differs
// // // import blogs from "../blogs_posts/blogs.json";

// // // export default function BlogList() {
// // //   return (
// // //     <section className="py-16 bg-gray-50">
// // //       <div className="max-w-4xl mx-auto px-6">
// // //         <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Blogs</h1>
// // //         <p className="text-gray-600 text-center mb-8">
// // //           Stay updated with our latest articles
// // //         </p>

// // //         {/* Search Bar */}
// // //         <div className="relative mb-12 w-full max-w-md mx-auto">
// // //           <svg
// // //             className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
// // //             fill="none"
// // //             stroke="currentColor"
// // //             viewBox="0 0 24 24"
// // //             strokeWidth={2}
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //           >
// // //             <circle cx={11} cy={11} r={8} />
// // //             <line x1={21} y1={21} x2={16.65} y2={16.65} />
// // //           </svg>
// // //           <input
// // //             type="text"
// // //             placeholder="Search articles"
// // //             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //           />
// // //         </div>

// // //         {/* Vertical Blog Tiles with Left Image & Accent Border */}
// // //         <div className="flex flex-col gap-8">
// // //           {blogs.map(({ title, slug, description, image, author, date }) => (
// // //             <Link
// // //               to={`/blogs/${slug}`}
// // //               key={slug}
// // //               className="flex items-stretch h-48 bg-white border-l-4 border-indigo-500 shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:bg-indigo-50"
// // //             >
// // //               {/* Left Image */}
// // //               {image && (
// // //                 <div className="w-1/3 h-full flex-shrink-0">
// // //                   <img
// // //                     src={image}
// // //                     alt={`Cover for ${title}`}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>
// // //               )}

// // //               <div className="p-6 flex-1 flex flex-col justify-between">
// // //                 <div>
// // //                   <h2 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-600">
// // //                     {title}
// // //                   </h2>
// // //                   <p className="text-sm text-indigo-500 mb-4">
// // //                     By {author} on {date}
// // //                   </p>
// // //                   <p className="text-gray-700">{description}</p>
// // //                 </div>
// // //                 <span className="text-indigo-600 font-medium hover:underline mt-4">
// // //                   Read more &rarr;
// // //                 </span>
// // //               </div>
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import React from "react";
// // import { Link } from "react-router-dom";
// // // adjust the relative path if your folder structure differs
// // import blogs from "../blogs_posts/blogs.json";

// // export default function BlogList() {
// //   return (
//     // Ensure full-page background matches original
//     // <section className="mx-auto px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-lg py-[100px]">
//     //   <div className="max-w-4xl mx-auto px-6">
//     //     <h1 className="text-4xl font-extrabold text-center text-white">Blogs</h1>
//     //     <p className="text-gray-600 text-center mb-8">


//     //     </p>

// //         {/* Search Bar */}
// //         <div className="relative mb-12 w-full max-w-md mx-auto">
// //           <svg
// //             className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             strokeWidth={2}
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           >
// //             <circle cx={11} cy={11} r={8} />
// //             <line x1={21} y1={21} x2={16.65} y2={16.65} />
// //           </svg>
// //           <input
// //             type="text"
// //             placeholder="Search articles"
// //             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         {/* Vertical Blog Tiles with Left Image & Colored Background */}
// //         <div className="flex flex-col gap-8">
// //           {blogs.map(({ title, slug, description, image, author, date }) => (
// //             <Link
// //               to={`/blogs/${slug}`}
// //               key={slug}
// //               className="flex items-start bg-indigo-50 border-l-4 border-indigo-500 shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg"
// //             >
// //               {/* Left Image */}
// //               {image && (
// //                 <div className="w-1/3 flex-shrink-0">
// //                   <img
// //                     src={image}
// //                     alt={`Cover for ${title}`}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>
// //               )}

// //               <div className="p-6 flex-1 flex flex-col justify-between">
// //                 <div>
// //                   <h2 className="text-2xl font-semibold mb-2 text-gray-800">
// //                     {title}
// //                   </h2>
// //                   <p className="text-sm text-indigo-500 mb-4">
// //                     By {author} on {date}
// //                   </p>
// //                   <p className="text-gray-700 break-words">
// //                     {description}
// //                   </p>
// //                 </div>
// //                 <span className="text-indigo-600 font-medium hover:underline mt-4">
// //                   Read more &rarr;
// //                 </span>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // adjust the relative path if your folder structure differs
// import blogs from "../blogs_posts/blogs.json";

// export default function BlogList() {
//   // State for search term
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter blogs based on search input (title, description, or author)
//   const filteredBlogs = blogs.filter(({ title, description, author }) => {
//     const term = searchTerm.toLowerCase();
//     return (
//       title.toLowerCase().includes(term) ||
//       description.toLowerCase().includes(term) ||
//       author.toLowerCase().includes(term)
//     );
//   });

//   return (
//     // Full-page background
//     <section className="mx-auto px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-lg py-[100px]">
//     <div className="max-w-4xl mx-auto px-6">
//       <h1 className="text-4xl font-extrabold text-center text-white">Blogs</h1>
//       <p className="text-gray-600 text-center mb-8">


//       </p>
//         {/* Search Bar */}
//         <div className="relative mb-12 w-full max-w-md mx-auto">
//           <svg
//             className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle cx={11} cy={11} r={8} />
//             <line x1={21} y1={21} x2={16.65} y2={16.65} />
//           </svg>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             placeholder="Search articles"
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         {/* Blog Tiles */}
//         {filteredBlogs.length > 0 ? (
//           <div className="flex flex-col gap-8">
//             {filteredBlogs.map(({ title, slug, description, image, author, date }) => (
//               <Link
//                 to={`/blogs/${slug}`}
//                 key={slug}
//                 className="flex flex-col bg-indigo-50 border-l-4 border-indigo-500 shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg"
//               >
//                 {/* Top Image */}
//                 {image && (
//                   <img
//                     src={image}
//                     alt={`Cover for ${title}`}
//                     className="w-full h-48 md:h-64 object-cover"
//                   />
//                 )}

//                 <div className="p-6 flex-1 flex flex-col justify-between">
//                   <div>
//                     <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
//                       {title}
//                     </h2>
//                     <p className="text-sm text-indigo-500 mb-4">
//                       By {author} on {date}
//                     </p>
//                     <p className="text-gray-700 break-words">
//                       {description}
//                     </p>
//                   </div>
//                   <span className="mt-4 text-indigo-600 font-medium hover:underline">
//                     Read more &rarr;
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-12">
//             No articles found for "{searchTerm}".
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../blogs_posts/blogs.json";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");

  const sorted = [...blogs].reverse();

  const filtered = sorted.filter(({ title, description, author }) => {
    const t = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(t) ||
      description.toLowerCase().includes(t) ||
      author.toLowerCase().includes(t)
    );
  });

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric",
      });
    } catch { return dateStr; }
  };

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto px-5 py-20">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors duration-200"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6b7280" }}>
            Writing
          </p>
          <h1
            className="font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "-0.03em" }}
          >
            Thoughts on<br />
            <span style={{ color: "#374151" }}>AI &amp; LLMs.</span>
          </h1>
          <p style={{ color: "#6b7280" }} className="text-base max-w-lg leading-relaxed">
            Deep dives into RAG, fine-tuning, prompt engineering, and building
            production AI systems — written from the trenches.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full max-w-md pl-11 pr-4 py-3 text-sm rounded-xl outline-none transition-all duration-200"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#e2e8f0",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* List */}
        {filtered.length > 0 ? (
          <div className="flex flex-col">
            {filtered.map(({ title, slug, description, image, author, date }) => (
              <Link
                key={slug}
                to={`/blogs/${slug}`}
                className="group flex flex-col sm:flex-row gap-5 py-8 border-b transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                {image && (
                  <div className="flex-shrink-0 overflow-hidden rounded-xl" style={{ width: 120, height: 80 }}>
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ filter: "grayscale(15%)" }}
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono" style={{ color: "#6b7280" }}>{formatDate(date)}</span>
                    <span style={{ color: "#374151" }}>·</span>
                    <span className="text-xs" style={{ color: "#6b7280" }}>{author}</span>
                  </div>
                  <h2
                    className="font-bold text-white mb-2 leading-snug transition-colors duration-200 group-hover:text-gray-300"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#6b7280" }}>
                    {description}
                  </p>
                  <div
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:text-white"
                    style={{ color: "#4b5563" }}
                  >
                    Read article
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      className="transition-transform duration-200 group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm" style={{ color: "#6b7280" }}>
              No articles found for &ldquo;{searchTerm}&rdquo;
            </p>
          </div>
        )}

        <p className="text-xs mt-8" style={{ color: "#374151" }}>
          {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>
    </div>
  );
}
