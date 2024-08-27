import React from "react";
import Link from "next/link";

const MyService = () => {
  return (
    <section className="relative pb-12 py-12 " data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      {/* image bg */}
      <div className="absolute inset-0 bg-service_bg bg-cover bg-center filter blur-sm "></div>
      {/* content */}
      <div className="container mx-auto relative z-10">
        <div className="justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize text-black justify-center flex flex-wrap text-center">
            Let see my
            <span className="text-pink-600 ml-2 md:ml-4">Projects</span>
          </h2>
        </div>
        <div className="text-center my-12 ">
          <button className="btn btn-active bg-pink-500 active:bg-pink-400 hover:bg-pink-400 text-white transition delay-100  hover:scale-110">
            <Link href="/projects">See All My Projects</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyService;
