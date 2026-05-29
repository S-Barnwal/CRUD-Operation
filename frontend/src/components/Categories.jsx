// components/Categories.jsx

import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaLeaf,
  FaMobileAlt,
  FaPaintBrush,
  FaCamera,
  FaGamepad,
  FaUtensils,
  FaShoppingBag,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Technology",
    icon: <FaLaptopCode />,
    blogs: "120+ Blogs",
    color: "from-orange-500 to-red-500",
  },

  {
    id: 2,
    title: "Ayurveda",
    icon: <FaLeaf />,
    blogs: "80+ Blogs",
    color: "from-green-500 to-lime-400",
  },

  {
    id: 3,
    title: "Mobiles",
    icon: <FaMobileAlt />,
    blogs: "95+ Blogs",
    color: "from-pink-500 to-red-500",
  },

  {
    id: 4,
    title: "Design",
    icon: <FaPaintBrush />,
    blogs: "60+ Blogs",
    color: "from-yellow-500 to-orange-500",
  },

  {
    id: 5,
    title: "Photography",
    icon: <FaCamera />,
    blogs: "45+ Blogs",
    color: "from-cyan-500 to-blue-500",
  },

  {
    id: 6,
    title: "Gaming",
    icon: <FaGamepad />,
    blogs: "70+ Blogs",
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    id: 7,
    title: "Food",
    icon: <FaUtensils />,
    blogs: "50+ Blogs",
    color: "from-red-500 to-orange-400",
  },

  {
    id: 8,
    title: "Fashion",
    icon: <FaShoppingBag />,
    blogs: "110+ Blogs",
    color: "from-rose-500 to-pink-500",
  },
];

function Categories() {
  return (
    <section className="py-24 px-5 md:px-12 bg-[#0f0f0f] text-white relative overflow-hidden">
      
      {/* BLOBS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">
        
        <p className="text-orange-400 uppercase tracking-[3px] font-semibold mb-4">
          Blog Categories
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Explore Popular{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            Categories
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm md:text-lg leading-8">
          Browse trending blog categories with premium articles, modern stories
          and creative inspirations from different industries.
        </p>
      </div>

      {/* CATEGORY GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-[30px] overflow-hidden 
            bg-white/10 
            border border-white/10 
            backdrop-blur-2xl 
            shadow-[0_8px_32px_rgba(255,90,0,0.12)] 
            hover:shadow-orange-500/20 
            duration-500 p-8 text-center"
          >
            
            {/* GLOW */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-2xl duration-500`}
            ></div>

            {/* ICON */}
            <div
              className={`relative z-10 mx-auto w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-3xl shadow-xl mb-6 group-hover:rotate-6 duration-500`}
            >
              {category.icon}
            </div>

            {/* CONTENT */}
            <div className="relative z-10">
              
              <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-400 duration-300">
                {category.title}
              </h2>

              <p className="text-gray-400 mb-6">
                {category.blogs}
              </p>

              <button
                className={`bg-gradient-to-r ${category.color} px-6 py-3 rounded-full font-semibold hover:scale-105 duration-300 shadow-lg`}
              >
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Categories;