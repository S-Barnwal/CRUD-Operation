import React from "react";

import { Link } from "react-router";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import blogs from "../data/blogData";

const BlogCarousel = () => {
  return (
    <section className="py-20 px-5 bg-[#111] text-white">
      
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Trending Blogs
      </h1>

      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
          perPage: 3,
          gap: "1rem",

          breakpoints: {
            1024: {
              perPage: 2,
            },

            768: {
              perPage: 1,
            },
          },
        }}
      >
        {blogs.map((blog, index) => (
          <SplideSlide key={index}>
            
            <Link
              to={`/blog/${blog.id}`}
              className="block rounded-3xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl shadow-xl hover:scale-105 duration-500"
            >
              
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[300px] w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {blog.title}
                </h2>

                <p className="text-gray-400 mt-3 leading-7">
                  {blog.description}
                </p>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default BlogCarousel;