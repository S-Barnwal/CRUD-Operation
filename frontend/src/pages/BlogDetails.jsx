// pages/BlogDetails.jsx

import { useParams, Link } from "react-router";

import { motion } from "framer-motion";

import blogs from "../data/blogData";

import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaHeart,
  FaComment,
  FaShareAlt,
  FaArrowRight,
} from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  const relatedBlogs = blogs.filter((item) => item.id !== blog.id);

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-5 md:px-12 py-16 overflow-hidden relative">
      
      {/* FLOATING BLOBS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-[140px] rounded-full"></div>

      {/* BACK BUTTON */}
      <Link
        to="/"
        className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-full hover:bg-orange-500 duration-300 mb-10"
      >
        <FaArrowLeft />
        Back To Home
      </Link>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* CATEGORY */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-block bg-gradient-to-r ${blog.color} px-5 py-2 rounded-full font-semibold shadow-xl mb-6`}
        >
          {blog.category}
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-8"
        >
          {blog.title}
        </motion.h1>

        {/* AUTHOR INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-8 mb-10"
        >
          
          <div className="flex items-center gap-3">
            <div
              className={`bg-gradient-to-r ${blog.color} p-4 rounded-full`}
            >
              <FaUser />
            </div>

            <div>
              <p className="font-semibold">{blog.author}</p>
              <p className="text-sm text-gray-400">Author</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`bg-gradient-to-r ${blog.color} p-4 rounded-full`}
            >
              <FaCalendarAlt />
            </div>

            <div>
              <p className="font-semibold">{blog.date}</p>
              <p className="text-sm text-gray-400">Published</p>
            </div>
          </div>

          <div className="flex items-center gap-6 ml-auto text-xl">
            <FaHeart className="cursor-pointer hover:text-red-500 duration-300" />

            <FaComment className="cursor-pointer hover:text-yellow-400 duration-300" />

            <FaShareAlt className="cursor-pointer hover:text-orange-400 duration-300" />
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group mb-14"
        >
          
          {/* GLOW */}
          <div
            className={`absolute -inset-2 bg-gradient-to-r ${blog.color} blur-3xl opacity-30 group-hover:opacity-50 duration-500 rounded-[40px]`}
          ></div>

          <img
            src={blog.image}
            alt={blog.title}
            className="relative w-full h-[300px] md:h-[650px] object-cover rounded-[40px] shadow-2xl"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-12 leading-10 text-gray-300 text-lg shadow-[0_8px_32px_rgba(255,90,0,0.12)] mb-20"
        >
          <p className="mb-8">
            {blog.fullDescription}
          </p>

          <p className="mb-8">
            Modern blogging is no longer only about writing articles. Today it
            combines storytelling, premium visuals, animations and interactive
            user experiences to engage readers more effectively.
          </p>

          <p>
            Creative layouts, responsive design, motion animations and modern
            aesthetics make blog websites feel premium and visually immersive.
          </p>
        </motion.div>

        {/* RELATED BLOGS */}
        <div className="mb-10">
          
          <h2 className="text-4xl font-bold mb-12">
            Related{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {relatedBlogs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[30px] overflow-hidden bg-white/10 border border-white/10 backdrop-blur-2xl shadow-xl"
              >
                
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-2xl duration-500`}
                ></div>

                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[260px] object-cover group-hover:scale-110 duration-700"
                  />

                  <div
                    className={`absolute top-5 left-5 bg-gradient-to-r ${item.color} px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    {item.category}
                  </div>
                </div>

                <div className="p-7 relative z-10">
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mb-6">
                    {item.description}
                  </p>

                  <Link
                    to={`/blog/${item.id}`}
                    className={`w-full bg-gradient-to-r ${item.color} py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 duration-300 shadow-xl`}
                  >
                    Read Full Blog
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;