// pages/Blogs.jsx

import Footer from "../components/Footer";
import { Link } from "react-router";

import { motion } from "framer-motion";

import blogs from "../data/blogData";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";


const Blogs = () => {
  return (
    <>
    

      <section className="min-h-screen bg-[#0f0f0f] text-white px-5 md:px-12 py-16 relative overflow-hidden">

        {/* BLOBS */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-[120px] rounded-full"></div>

        {/* HEADING */}
        <div className="text-center mb-20 relative z-10">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Explore Premium{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Discover trending articles, creative stories, technology insights,
            fashion inspirations, modern UI ideas and lifestyle content crafted
            with premium aesthetics.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">

          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[35px] overflow-hidden 
              bg-white/10 
              border border-white/10 
              backdrop-blur-2xl 
              shadow-[0_8px_32px_rgba(255,90,0,0.12)] 
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

                <h2 className="text-2xl font-bold leading-snug mb-4 group-hover:text-orange-400 duration-300">
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

                      <p className="text-sm text-gray-400">
                        Author
                      </p>
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

                      <p className="text-sm text-gray-400">
                        Published
                      </p>
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

      <Footer />
    </>
  );
};

export default Blogs;