
const stats = [
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
];

const Stats = () => {
  return (
    <section className="py-20 px-5 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 hover:-translate-y-3 duration-500"
          >
            <h1 className="text-5xl font-bold text-orange-400 mb-3">
              {item.number}
            </h1>

            <p className="text-gray-300">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;