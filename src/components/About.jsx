import React from "react";
import Drug from "../assets/drug.png";

const About = () => {
  return (
    <section className="w-full bg-accent px-4 max-md:py-24 mt-6 md:mt-28">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12">
        <img
          className="hidden md:block mx-auto object-contain"
          src={Drug}
          alt="/"
        />
        <div className=" max-md:text-center justify-self-center md:self-center max-w-[450px]">
          <h2 className="text-4xl font-bold md:tracking-tight text-primary md:text-4xl">
            About Us
          </h2>
          <p className="my-8 text-lg text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button
            type="button"
            className="rounded-full bg-secondary px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-secondary/80 transition-all transform duration-300 ease-in-out"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
