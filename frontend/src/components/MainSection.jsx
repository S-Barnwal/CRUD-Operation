// components/MainSection.jsx
import { Link } from "react-router";
import { motion } from "framer-motion";
import blogs from "../data/blogData";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaLeaf,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";


const MainSection = () => {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white py-14 px-5 md:px-12 overflow-hidden relative">

      {/* FLOATING BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover Amazing{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Stories
          </span>
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-lg">
          Read trending blogs, explore creative articles and stay updated with
          modern tech, lifestyle and design world.
        </p>
      </div>

      {/* BLOGS */}
      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">

        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-3xl overflow-hidden 
            bg-white/10 
            border border-white/10 
            backdrop-blur-2xl 
            shadow-[0_8px_32px_rgba(255,90,0,0.2)] 
            hover:shadow-orange-500/30 
            duration-500 
            flex flex-col lg:flex-row"
          >

            {/* GLOW */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${blog.color} opacity-20 blur-2xl group-hover:opacity-40 duration-500`}
            ></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden lg:w-[45%]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[280px] lg:h-full object-cover group-hover:scale-110 duration-700"
              />

              {/* CATEGORY */}
              <div
                className={`absolute top-5 left-5 bg-gradient-to-r ${blog.color} px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2`}
              >
                {blog.icon}
                {blog.category}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 lg:w-[55%] flex flex-col justify-center relative z-10">

              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 group-hover:text-orange-400 duration-300">
                {blog.title}
              </h2>

              <p className="text-gray-400 leading-7 mb-6">
                {blog.description}
              </p>

              {/* AUTHOR */}
              <div className="flex items-center justify-between flex-wrap gap-5 mb-8">

                <div className="flex items-center gap-3">
                  <div
                    className={`bg-gradient-to-r ${blog.color} p-3 rounded-full`}
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
                    className={`bg-gradient-to-r ${blog.color} p-3 rounded-full`}
                  >
                    <FaCalendarAlt />
                  </div>

                  <div>
                    <p className="font-semibold">{blog.date}</p>
                    <p className="text-sm text-gray-400">Published</p>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <Link
                to={`/blog/${blog.id}`}
                className={`w-full bg-gradient-to-r ${blog.color} py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 duration-300 shadow-xl`}
              >
                Read Full Blog
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;