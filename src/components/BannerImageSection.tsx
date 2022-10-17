import React from "react";

const BannerImageSection = () => {
  return (
    <section className="md:relative container mx-auto">
      <img src="/nike-just-do-it.jpg" alt="Nike Just Do It" />
      <div className="md:absolute bottom-8 left-12 md:text-white flex flex-col justify-center items-center md:justify-start md:items-start">
        <p className="text-xl">Join Forces pack</p>
        <h2 className="text-5xl font-semibold">
          40 YEARS OF <br /> FORCE
        </h2>
        <div className="space-x-3 mt-4">
          <a
            href="#"
            className="px-4 py-2 bg-black text-white md:bg-white md:hover:bg-gray-300 md:text-black rounded-full"
          >
            Shop AF1
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-black text-white md:bg-white md:hover:bg-gray-300 md:text-black rounded-full"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerImageSection;
