import React from "react";
import Over from "../assets/Vector 1.png";
import Bg from "../assets/Rectangle 400.png";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <main className="relative min-h-full bg-white">
      <div className=" grid md:grid-cols-2 items-center ">
        <div className=" md:col-span-1 md:gap-x-6 md:px-6 lg:max-ml-28 text-center md:text-left max-md:my-20  max-w-96 m-auto lg:transform lg:-translate-x-20">
          <h1 className="text-5xl font-bold md:tracking-tight text-primary md:text-6xl">
            Discover the <span className="text-secondary">Best</span> Food and
            Drinks
          </h1>
          <p className="my-8 text-lg text-gray-700">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button
            type="button"
            className="rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-secondary/80 transition-all transform duration-300 ease-in-out"
          >
            Explore Now!
          </button>
        </div>
        <div className="relative md:col-span-1 h-full justify-self-end order-first md:order-none">
          <img
            src={Over}
            alt=""
            className="h-auto relative z-20 object-contain"
          />
          <img
            src={Bg}
            alt=""
            className="h-auto absolute right-0 top-0 z-10 object-contain"
          />
        </div>
      </div>
    </main>
  );
};
export default Hero;
