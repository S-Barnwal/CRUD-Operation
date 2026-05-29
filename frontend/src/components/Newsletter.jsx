import React from 'react'

function Newsletter() {
  return (
    <div>
       <section className="py-20 px-5 bg-[#0f0f0f] text-white">
      <div className="max-w-5xl mx-auto rounded-[40px] p-10 bg-white/10 border border-white/10 backdrop-blur-2xl text-center shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Subscribe To Our Newsletter
        </h1>

        <p className="text-gray-400 mb-8">
          Get premium blogs, latest updates and trending stories directly in
          your inbox.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full bg-black/30 border border-white/10 outline-none w-full md:w-[400px]"
          />

          <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Newsletter
