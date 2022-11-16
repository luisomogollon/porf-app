import React from "react";
import imagenes from "../../assets/imagenes";
const Hero0 = () => {
  return (
    <div>
      <section
        id="About"
        className="text-gray-600 bg-slate-200 dark:bg-slate-800   shadow-inner    body-font"
      >
        <div className="container mx-auto flex px-11 py-14  lg:py-2 lg:px-14 2xl:px-2 2xl:py-7  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl dark:text-white text-3xl lg:text-3xl mb-10 lg:mb-5 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />
            </h1>

            <span className="mb-8 text-normal dark:text-gray-200  text-start text-black  ">
              I am a fairly reserved person, I like the challenges of each
              project as a developer, as well as the experience that life
              imposes on me, it makes me feel good to keep focus and drain my
              energies creatively and productively.
              <ul className="space-y-7 lg:space-y-4">
                <li className="flex items-center mt-7">
                  <svg
                    className="h-6 w-6 flex-none dark:fill-sky-900  fill-sky-200 stroke-sky-600 stroke-4"
                    strokelinecap-="round"
                    trokelinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4 font-base dark:text-gray-100 text-black  ">
                    I have solid foundations in javascript, React and CSS
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none  dark:fill-sky-900   fill-sky-200 stroke-sky-600  stroke-4"
                    strokelinecap-="round"
                    trokelinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4 font-base dark:text-gray-100 text-black  ">
                    I can build minimalist layout, quite clean and intuitive.
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-200 stroke-sky-600 dark:fill-sky-900 stroke-4"
                    strokelinecap-="round"
                    trokelinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4 font-base dark:text-gray-100 text-black  ">
                    I always try to organize, optimize, simplify My code.
                  </p>
                </li>
              </ul>
            </span>

            <div className="flex justify-center mt-4 space-x-7  container lg:space-x-5 ">
              <a
                type="button"
                className=" px-2 py-2 border-2 flex border-indigo-500 text-gray-700 dark:text-gray-100  font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-400  dark:hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
                href="./docu.pdf "
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="w-3 mr-2 text-indigo-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-6/6">
            <img
              className="object-cover  bg-slate-200object-center rounded"
              alt="hero"
              src={imagenes.img1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero0;
