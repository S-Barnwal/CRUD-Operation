import React from 'react'
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-5 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            BlogSphere
          </h1>

          <p className="text-gray-400 max-w-sm">
            Modern blogging platform with premium UI, responsive layouts and
            stunning animations.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>Blogs</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-5 text-2xl">
            <FaInstagram className="hover:text-pink-500 hover:scale-125 duration-300 cursor-pointer" />
            <FaGithub className="hover:text-orange-500 hover:scale-125 duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 hover:scale-125 duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 hover:scale-125 duration-300 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-white/10 pt-6">
        © 2026 BlogSphere. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
