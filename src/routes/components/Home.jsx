import React from "react";
import Hero from "./Hero";
import Hero0 from "./Hero0";
import { Link } from "react-scroll";
import Contents from "./Contents";

const Home = () => {
  return (
    <div>
      <section
        id="Home"
        className="w-full px-3 antialiased  bg-hero-pattern dark:bg-hero-two bg-cover  bg-fixed bg-slate-100 lg:px-6"
        data-tails-scripts="//unpkg.com/alpinejs"
      >
        <div className="mx-auto max-w-7xl ">
          <div className="container py-28 lg:py-32 mx-auto text-center mt-16 sm:px-4">
            <h1 className="text-3xl font-extrabold  tracking-tight  text-white sm:text-5xl lg:tracking-normal  md:text-6xl xl:text-7xl">
              <span className="block text-black dark:text-indigo-100 ">
                Luis Michinaux
              </span>{" "}
              <span className="relative text-transparent bg-clip-text inline-block mt-3 dark:text-blue-400 bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
                Front End Developer
              </span>
            </h1>

            <div className="max-w-lg mx-auto mt-6 text-sm text-center text-gray-700 md:mt-12 lg:text-lg ">
              Frontend developer, focused on simplifying the creation of app
              pages and passionate about interface design.
            </div>

            <Link
              href="#_"
              to="Contact"
              smooth={true}
              duration={1000}
              type="button"
              className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 mt-14 focus:outline-none focus:ring-blue-300 font-medium  rounded-full text-sm px-6 py-3   text-center inline-flex items-center dark:bg-blue-600 cursor-pointer dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Me
              <svg
                aria-hidden="true"
                className=" w-4 h-4 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <Hero0 />
      <section>
        <Hero />
      </section>
      <section>
        <Contents />
      </section>
    </div>
  );
};

export default Home;
