import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container bg-cover grid grid-cols-3 md:grid-cols-2 md:pt-10 pb-10 md:pb-40">
      <div className="md:pt-28 pt-10 col-span-2 md:col-span-1">
        <h1 className="md:text-6xl text-rose-600 lg:text-8xl text-4xl  font-sans font-bold">
          TRY A WEEK{" "}
        </h1>
        <h2 className="md:text-6xl text-white mb-5 md:mb-10 lg:text-8xl text-4xl text-white font-sans font-bold title">
          WITH ME !
        </h2>
        <Link
          to="/about"
          class="relative px-3 py-1 md:px-7 md:py-3  text-white group"
        >
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-700 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>

          <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
          <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
          <span class="relative">About me</span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
