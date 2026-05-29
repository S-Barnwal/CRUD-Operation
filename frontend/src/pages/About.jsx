// pages/About.jsx

import { motion } from "framer-motion";
import { Link } from "react-router";


import Footer from "../components/Footer";

import {
  FaLaptopCode,
  FaPaintBrush,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <>
     
      <section className="min-h-screen bg-[#0f0f0f] text-white px-5 md:px-12 py-20 relative overflow-hidden">

        {/* BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-[140px] rounded-full"></div>

        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-5">
              About BlogSphere
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Building Creative{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                Digital Stories
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-9 mb-8">
              BlogSphere is a premium blogging platform designed for modern
              creators, developers and digital storytellers. Our mission is to
              combine creative content with immersive frontend experiences,
              futuristic animations and visually stunning layouts.
            </p>

            <Link
              to="/blogs"
              className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 duration-300"
            >
              Explore Blogs
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >

            {/* GLOW */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 blur-3xl opacity-30 group-hover:opacity-50 duration-500 rounded-[40px]"></div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="about"
              className="relative rounded-[40px] shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>
        </div>

        {/* FEATURES */}
        <div className="max-w-7xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 relative z-10">

          {[
            {
              icon: <FaLaptopCode />,
              title: "Modern Development",
              desc: "Built with React, Tailwind CSS and modern frontend technologies.",
              color: "from-cyan-500 to-blue-500",
            },

            {
              icon: <FaPaintBrush />,
              title: "Creative Design",
              desc: "Premium UI aesthetics with glassmorphism and smooth animations.",
              color: "from-pink-500 to-red-500",
            },

            {
              icon: <FaRocket />,
              title: "Fast Performance",
              desc: "Optimized layouts and responsive experiences across all devices.",
              color: "from-orange-500 to-yellow-500",
            },

            {
              icon: <FaUsers />,
              title: "Creative Community",
              desc: "Connecting creators, developers and readers worldwide.",
              color: "from-green-500 to-emerald-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[35px] overflow-hidden 
              bg-white/10 
              border border-white/10 
              backdrop-blur-2xl 
              shadow-[0_8px_32px_rgba(255,90,0,0.12)] 
              hover:shadow-orange-500/20 
              duration-500 p-8"
            >

              {/* GLOW */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-2xl duration-500`}
              ></div>

              <div
                className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl shadow-xl mb-6`}
              >
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* JOURNEY SECTION */}
        <div className="max-w-7xl mx-auto mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >

            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 blur-3xl opacity-30 rounded-[40px]"></div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="journey"
              className="relative rounded-[40px] h-[500px] w-full object-cover shadow-2xl"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-5">
              Our Journey
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
              Creating Modern Experiences For The{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Digital Generation
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-9 mb-8">
              BlogSphere started with a vision to redefine blogging through
              immersive storytelling, creative UI and visually appealing digital
              experiences.
            </p>

            <p className="text-gray-400 text-lg leading-9">
              Every section is carefully crafted with animations, glassmorphism,
              gradients and responsive layouts to create a next-generation
              blogging platform.
            </p>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="max-w-7xl mx-auto mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">

          {[
            {
              number: "25K+",
              title: "Readers",
            },

            {
              number: "1K+",
              title: "Blogs",
            },

            {
              number: "500+",
              title: "Creators",
            },

            {
              number: "50+",
              title: "Categories",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-[30px] bg-white/10 border border-white/10 backdrop-blur-2xl p-10 text-center shadow-xl"
            >

              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                {item.number}
              </h1>

              <p className="text-gray-400 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-32 relative z-10"
        >

          <div className="rounded-[40px] bg-white/10 border border-white/10 backdrop-blur-2xl p-10 md:p-16 text-center shadow-[0_8px_32px_rgba(255,90,0,0.12)]">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
              Ready To Explore Premium{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Creative Blogs?
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mb-10">
              Discover technology insights, creative storytelling, fashion
              inspiration, modern UI trends and immersive digital experiences
              crafted with premium frontend aesthetics.
            </p>

            <Link
              to="/blogs"
              className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 px-10 py-5 rounded-full font-semibold shadow-xl hover:scale-105 duration-300"
            >
              Explore All Blogs
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default About;