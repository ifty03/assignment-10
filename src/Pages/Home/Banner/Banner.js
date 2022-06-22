import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
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
            <strong class="font-extrabold text-rose-700 sm:block">
              TRY A WEEK WITH ME !
            </strong>
          </h1>

          <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Fitness means the condition of being physically and mentally fit
            with good health.and with ample energy to enjoy life.
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
