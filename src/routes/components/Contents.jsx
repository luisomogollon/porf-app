import React from "react";
import imagenes from "../../assets/imagenes";
import { RiMailAddLine } from "react-icons/ri";
const contents = () => {
  return (
    <div>
      <section
        id="Proyect"
        className="text-gray-600 bg-slate-200 shadow-inner dark:bg-slate-800    body-font"
      >
        <div className="container px-5 lg:px-14  2xl:px-2 py-20 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-500 dark:bg-gray-400 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-600  dark:bg-indigo-100"></div>
            </div>

            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 dark:text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                Some of My Projects
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4  -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 dark:hover:bg-slate-700 hover:bg-slate-300 ">
              <div className="rounded-lg h-64 overflow-hidden  ">
                <img
                  alt="content"
                  className="object-cover  object-center h-full w-full"
                  src={imagenes.img6}
                />
              </div>

              <h2 className="text-xl font-medium dark:text-white  title-font  text-gray-900 mt-5">
                Art Shop Page
              </h2>

              <p className="text-base leading-relaxed mt-2 dark:text-gray-300">
                This is a digital art store based app, nice layout built with
                Tailwind Css and React Router, own design clean and simple.
              </p>

              <a
                href="https://art-shop-page.netlify.app/"
                className="text-indigo-700 dark:text-indigo-500 inline-flex items-center mt-3 dark:hover:text-indigo-100  hover:text-indigo-500"
              >
                Live Demo
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap-="round"
                  trokelinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 dark:hover:bg-slate-700 hover:bg-slate-300   ">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={imagenes.img10}
                />
              </div>

              <h2 className="text-xl font-medium  dark:text-white  title-font text-gray-900 mt-5">
                Movie Context
              </h2>

              <p className="text-base leading-relaxed mt-2  dark:text-gray-300 ">
                It's a practice app to learn how to use react context along with
                a little movie api, again a pretty nice and light design.
              </p>

              <a
                href="https://cozy-beijinho-e15475.netlify.app/"
                className="text-indigo-700 dark:text-indigo-500 inline-flex items-center mt-3 dark:hover:text-indigo-100  hover:text-indigo-500"
              >
                Live Demo
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap-="round"
                  trokelinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 dark:hover:bg-slate-700 hover:bg-slate-300   ">
              <div className="rounded-lg h-64 overflow-hidden ">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={imagenes.img9}
                />
              </div>

              <h2 className="text-xl font-medium title-font dark:text-white  text-gray-900 mt-5">
                Thronerou
              </h2>

              <p className="text-base leading-relaxed mt-2 dark:text-gray-300">
                A practice app, to handle the functionalities of axios, in this
                I use an api based on game of thrones, my favorite series.
              </p>

              <a
                href="https://got-router-app.netlify.app/"
                className="text-indigo-700 dark:text-indigo-500 inline-flex dark:hover:text-indigo-100  hover:text-indigo-500 items-center mt-3"
              >
                Live Demo
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap-="round"
                  trokelinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          id="Contact"
          className="border-t border-gray-300 dark:bg-slate-700"
        >
          <div className="container px-4  lg:px-8 py-9 flex flex-wrap  items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 font-bold text-sm dark:text-white text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap-="round"
                  trokelinejoin="round"
                  strokeWidth="2"
                  className="w-9 h-6 "
                  viewBox="0 0 16 16"
                >
                  <RiMailAddLine />
                </svg>
              </button>
              <p className="text-gray-900 dark:text-gray-100 text-sm font-semibold md:ml-7 md:mt-0 mt-6 px-4 lg:px-0 lg:mt-2 sm:text-left text-center">
                Contact Me
                <br className="lg:block" />
                Michinaux77@gmail.com
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contents;
