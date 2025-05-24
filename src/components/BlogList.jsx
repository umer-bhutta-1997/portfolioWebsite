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


import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../blogs_posts/blogs.json";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Reverse blogs array for LIFO (last in, first out) display
  const sortedBlogs = [...blogs].reverse();

  // Filter blogs based on search input (title, description, or author)
  const filteredBlogs = sortedBlogs.filter(({ title, description, author }) => {
    const term = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(term) ||
      description.toLowerCase().includes(term) ||
      author.toLowerCase().includes(term)
    );
  });

  return (
    <section className="mx-auto px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-lg py-[100px]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-white">Blogs</h1>
        <p className="text-gray-600 text-center mb-8"></p>

        {/* Search Bar */}
        <div className="relative mb-12 w-full max-w-md mx-auto">
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search articles"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Blog Tiles */}
        {filteredBlogs.length > 0 ? (
          <div className="flex flex-col gap-8">
            {filteredBlogs.map(({ title, slug, description, image, author, date }) => (
              <Link
                to={`/blogs/${slug}`}
                key={slug}
                className="flex flex-col bg-indigo-50 border-l-4 border-indigo-500 shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                {image && (
                  <img
                    src={image}
                    alt={`Cover for ${title}`}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                      {title}
                    </h2>
                    <p className="text-sm text-indigo-500 mb-4">
                      By {author} on {date}
                    </p>
                    <p className="text-gray-700 break-words">
                      {description}
                    </p>
                  </div>
                  <span className="mt-4 text-indigo-600 font-medium hover:underline">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12">
            No articles found for "{searchTerm}".
          </p>
        )}
      </div>
    </section>
  );
}
