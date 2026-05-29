// components/FeaturedBlogs.jsx
import { Link } from "react-router";
import { motion } from "framer-motion";
import blogs from "../data/blogData";

import {
  FaArrowRight,
  FaClock,
  FaHeart,
  FaComment,
} from "react-icons/fa";



function FeaturedBlogs() {
  return (
    <section className="py-24 px-5 md:px-12 bg-[#111111] text-white relative overflow-hidden">

      {/* FLOATING BLOBS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-orange-400 font-semibold tracking-[3px] uppercase mb-4">
          Featured Articles
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Trending{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Featured Blogs
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm md:text-lg leading-8">
          Discover premium articles, trending categories and modern stories
          crafted with stunning visuals and creative writing.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">

        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-[30px] overflow-hidden 
            bg-white/10 
            border border-white/10 
            backdrop-blur-2xl 
            shadow-[0_8px_32px_rgba(255,90,0,0.15)] 
            hover:shadow-orange-500/20 
            duration-500"
          >

            {/* GLOW */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${blog.color} opacity-0 group-hover:opacity-20 blur-2xl duration-500`}
            ></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[280px] object-cover group-hover:scale-110 duration-700"
              />

              {/* CATEGORY */}
              <div
                className={`absolute top-5 left-5 bg-gradient-to-r ${blog.color} px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
              >
                {blog.category}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 relative z-10">

              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 group-hover:text-orange-400 duration-300">
                {blog.title}
              </h2>

              <p className="text-gray-400 leading-7 mb-6">
                {blog.desc}
              </p>

              {/* INFO */}
              <div className="flex flex-wrap items-center gap-5 mb-8 text-sm text-gray-300">

                <div className="flex items-center gap-2">
                  <FaClock className="text-orange-400" />
                  {blog.time}
                </div>

                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  {blog.likes}
                </div>

                <div className="flex items-center gap-2">
                  <FaComment className="text-yellow-400" />
                  {blog.comments}
                </div>
              </div>

              {/* BUTTON */}
              <Link
                to={`/blog/${blog.id}`}
                className={`w-full bg-gradient-to-r ${blog.color} py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 duration-300 shadow-xl`}
              >
                Read Article
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedBlogs;