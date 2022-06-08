import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    // <div className="banner-container bg-cover grid grid-cols-3 md:grid-cols-2 md:pt-10 pb-10 md:pb-40">
    //   <div className="md:pt-28 pt-10 col-span-2  lg:col-span-1">
    //     <h2 className=" text-rose-600 text-xl md:text-7xl font-bold title">
    //       Try a Week with me
    //     </h2>
    //     <h2 className=" text-white mb-5 text-xl lg:mb-20 md:mb-10 md:text-7xl text-white  font-bold title">
    //       and change your life style
    //     </h2>
    //     <Link
    //       to="/about"
    //       className="relative px-3 py-1 md:px-7 md:py-3   text-white group"
    //     >
    //       <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
    //       <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-700 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>

    //       <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
    //       <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
    //       <span className="relative">About me</span>
    //     </Link>
    //   </div>
    // </div>
    <section class="relative bg-white">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://i.ibb.co/VtwDRzt/pexels-cesar-gale-o-3253501.png"
        alt="Couple on a bed with a dog"
      />

      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div class="relative max-w-screen-xl pl-16 px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Try a Week with me
            <strong class="font-extrabold text-rose-700 sm:block">
              and change your life style
            </strong>
          </h1>

          <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="flex flex-wrap  md:-ml-3 gap-4 mt-8 text-center">
            <a class="" href="/get-started"></a>

            <Link
              to="/about"
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
            >
              Get Started
            </Link>

            <a
              class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
