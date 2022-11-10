import React from "react";
import { DiJavascript } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
const Hero = () => {
  return (
    <div>
      <section id="Skill" className="py-5 sm:py-10 2xl:py-10  2xl:px-2 bg-hero-pattern bg-cover dark:bg-hero-two dark:bg-cover  bg-fixed   bg-slate-100 ">
        <div className="max-w-7xl px-10 mx-auto sm:text-center">
          <p className="text-blue-500 dark:text-blue-400 font-medium uppercase">
          My Skill
          </p>

          <h2 className="font-bold text-3xl sm:text-4xl dark:text-white lg:text-4xl 2xl:text-5xl mt-3">
          Development Tool
          </h2>

          <p className="mt-4 text-gray-500  dark:text-gray-400 text-base sm:text-xl lg:text-2xl">
          These are some of my skills, of course I am willing to learn many on my way
          </p>

          <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 gap-10 my-12 sm:my-16">
          <div className="rounded-lg  py-10 flex flex-col transition ease-in-out delay-150 bg-slate-300 dark:bg-slate-500 opacity-90 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-slate-200 items-center justify-center dark:hover:bg-slate-600 shadow-lg ">
              <svg
                className="w-20 h-auto text-yellow-500"
                viewBox="0 0 15 15 "
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <DiJavascript />
                </g>
              </svg>
              <p className="font-bold mt-6">JavaScript</p>
              <p className="mt-2 text-sm text-gray-500 "></p>
            </div>

            <div className="rounded-lg py-10 flex flex-col  transition ease-in-out delay-150 cursor-pointer bg-slate-300 dark:bg-slate-500 opacity-90 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-slate-200  items-center dark:hover:bg-slate-600 justify-center shadow-lg ">
              <svg
                className="w-20 h-auto text-indigo-700"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <RiReactjsFill />
                </g>
              </svg>
              <p className="font-bold mt-6">React.JS</p>
              <p className="mt-2 text-sm text-gray-500 "></p>
            </div>
            
            <div className="rounded-lg py-10 flex flex-col transition ease-in-out delay-150 cursor-pointer bg-slate-300 dark:bg-slate-500 opacity-90 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-slate-200 dark:hover:bg-slate-600  items-center justify-center shadow-lg" >
              <svg
                className="w-20 h-auto text-blue-700"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <DiCss3/>
                </g>
              </svg>
              <p className="font-bold mt-6">Css3</p>
              <p className="mt-2 text-sm text-gray-500 "></p>
            </div>

            <div className="rounded-lg py-10 flex flex-col transition ease-in-out delay-150 cursor-pointer bg-slate-300 dark:bg-slate-500 opacity-90 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 items-center dark:hover:bg-slate-600 justify-center shadow-lg ">
              <svg
                className="w-20 h-auto text-sky-400"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <TbBrandTailwind />
                </g>
              </svg>
              <p className="font-bold mt-6">Tailwind</p>
              <p className="mt-2 text-sm text-gray-500 "></p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
