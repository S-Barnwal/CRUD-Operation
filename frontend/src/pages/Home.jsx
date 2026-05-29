import React from 'react'
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';
import ThemeToggle from '../components/ThemeToggle';
import MainSection from '../components/MainSection';
import FeaturedBlogs from '../components/FeaturedBlogs';
import Categories from '../components/Categories';
import Stats from '../components/Stats';
import BlogCarousel from '../components/BigCarousel';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-[#0f0f0f] overflow-hidden min-h-screen relative text-white">
      
      {/* SCROLL BAR */}
      <ScrollProgress />

      {/* CURSOR GLOW */}
      <CursorGlow />

      {/* THEME TOGGLE */}
      <ThemeToggle />

      {/* GLOBAL FLOATING BLOBS */}
      <div className="fixed top-0 left-0 w-[350px] h-[350px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="fixed bottom-0 right-0 w-[350px] h-[350px] bg-red-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="fixed top-[40%] left-[40%] w-[250px] h-[250px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
       

        <MainSection />

        <FeaturedBlogs />

        <Categories />

        <Stats />

        <BlogCarousel />

        <Newsletter />

        <Footer />
      </div>
    </div>
  );
};


export default Home
