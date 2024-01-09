import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Custom from "./Custom";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current + 1),
  };
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="w-full bg-white px-8 py-12">
      <div className="py-8 m-auto max-w-[1240px]">
        <h2 className=" m-12 mt-6 text-center md:text-left text-4xl font-semibold text-primary md:text-4xl">
          Latest Articles
        </h2>
        <Slider {...settings} ref={sliderRef}>
          <Custom />
          <Custom />
        </Slider>
      </div>
      <div className="flex justify-center items-center gap-3 mt-6 text-center text-gray-600">
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
          onClick={previous}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 hover:scale-105 hover:h-5 transition-all transform duration-300 ease-in-out"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <p className="text-base text-gray-900">
          {currentSlide}
          <span className="mx-0.25">/</span>2
        </p>

        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 "
          onClick={next}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 hover:scale-105 hover:h-5 transition-all transform duration-300 ease-in-out"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default Carousel;
