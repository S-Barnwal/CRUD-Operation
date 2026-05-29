// components/Navbar.jsx

import { Link } from "react-router";
import {
  FaFire,
  FaHome,
  FaBlog,
  FaUserAlt,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className="w-full sticky top-0 z-[999] backdrop-blur-2xl bg-[#140b05]/80 border-b border-orange-500/20 shadow-[0_8px_32px_rgba(255,90,0,0.12)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl shadow-md group-hover:scale-110 duration-300">
            <FaFire className="text-white text-xl" />
          </div>

          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent tracking-wide">
            BlogSphere
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-orange-100 hover:text-orange-400 duration-300 font-medium"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/blogs"
            className="flex items-center gap-2 text-orange-100 hover:text-red-400 duration-300 font-medium"
          >
            <FaBlog />
            Blogs
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 text-orange-100 hover:text-yellow-400 duration-300 font-medium"
          >
            <FaUserAlt />
            About
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="hidden sm:flex items-center bg-white/10 border border-orange-400/20 rounded-full px-4 py-2 backdrop-blur-md">
            <input
              type="text"
              placeholder="Search blogs..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-orange-200 w-36 md:w-48"
            />

            <FaSearch className="text-orange-400 cursor-pointer hover:text-red-400 duration-300" />
          </div>

          {/* BUTTON */}
          <Link
            to="/explore"
            className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-red-500/40 duration-300"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden flex justify-center gap-6 py-3 border-t border-orange-500/20 bg-[#1a0d08]">
        <Link
          to="/"
          className="flex flex-col items-center text-orange-200 hover:text-orange-400 text-sm"
        >
          <FaHome />
          Home
        </Link>

        <Link
          to="/blogs"
          className="flex flex-col items-center text-orange-200 hover:text-red-400 text-sm"
        >
          <FaBlog />
          Blogs
        </Link>

        <Link
          to="/about"
          className="flex flex-col items-center text-orange-200 hover:text-yellow-400 text-sm"
        >
          <FaUserAlt />
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;