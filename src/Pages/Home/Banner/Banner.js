import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container bg-cover grid grid-cols-3 md:grid-cols-2 md:pt-10 pb-10 md:pb-40">
      <div className="md:pt-28 pt-10 col-span-2  lg:col-span-1">
        <h2 className=" text-rose-600 text-xl md:text-7xl font-bold title">
          Try a Week with me
        </h2>
        <h2 className=" text-white mb-5 text-xl lg:mb-20 md:mb-10 md:text-7xl text-white  font-bold title">
          and change your life style
        </h2>
        <Link
          to="/about"
          className="relative px-3 py-1 md:px-7 md:py-3   text-white group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-700 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>

          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
          <span className="relative">About me</span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
