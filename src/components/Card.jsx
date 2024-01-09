import React from "react";
import Food from "../assets/grilled.png";
export function Card() {
  return (
    <div className="max-w-[300px] p-4 rounded-xl border">
      <img
        src={Food}
        alt="Laptop"
        className=" w-full rounded-xl object-cover"
      />
      <div className="p-3">
        <h3 className="text-xl font-bold md:tracking-tight text-primary">
          Snacks for Travel
        </h3>
        <p className="my-2 text-sm text-gray-700">
          PLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard...
        </p>
        <button
          type="button"
          className="rounded-full my-4 px-5 py-1.5 text-sm font-semibold text-gray-600 border border-black hover:text-secondary/80 hover:border-secondary transition-all transform duration-300 ease-in-out "
        >
          Read More
        </button>
      </div>
    </div>
  );
}
