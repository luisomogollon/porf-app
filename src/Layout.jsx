import { Outlet } from "react-router-dom";
import imagenes from "./assets/imagenes";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { GiNinjaHead } from "react-icons/gi";
import { GoMarkGithub } from "react-icons/go";
import useTheme from "./routes/components/useTheme";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-scroll";
export function Layout() {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <main>
      <section className="w-full px-3 text-gray-700 bg-slate-500 dark:bg-slate-800 top-0 drop-shadow-lg z-50 fixed ">
        <div className="container flex  flex-wrap items-center justify-between py-3 lg:py-3 max-h-full max-w-full md:flex-row lg:max-w-10xl ">
          <div className="relative flex flex-col md:flex-row">
            <button
              href="#_"
              className="flex items-center mb-0 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-lg font-black leading-none text-gray-900 dark:text-gray-100 select-none">
                Luiso<span className="text-indigo-600">Dev</span>
              </span>
            </button>

            <nav className=" flex-wrap lg:flex hidden items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link
                href="#_"
                to="Home"
                smooth={true}
                duration={1000}
                className="mr-5   font-medium leading-6 text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400"
              >
                Home
              </Link>

              <Link
                href="#_"
                to="About"
                smooth={true}
                duration={1000}
                className="mr-5 font-medium leading-6  text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400"
              >
                About
              </Link>

              <Link
                to="Skill"
                smooth={true}
                duration={1000}
                href="#_"
                className="mr-5 font-medium leading-6  text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400"
              >
                Skill
              </Link>

              <Link
                to="Proyect"
                smooth={true}
                duration={1000}
                href="#_"
                className="mr-5 font-medium leading-6  text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400"
              >
                Project
              </Link>
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-2 lg:justify-end">
            <button
              href="#"
              className="text-base font-medium leading-6  text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900  "
              onClick={handleThemeSwitch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokelinecap--="round"
                trokelinejoin="round"
                strokeWidth="2"
                className="w-8 h-8 text-slate-800  dark:text-slate-500 hover:text-gray-200 dark:hover:text-white     rounded-full"
                viewBox="0 0 15 15"
              >
                <WiMoonAltFirstQuarter />
              </svg>
            </button>
            <button
              type="button"
              className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only ">Open user menu</span>
              <img
                className="h-10 w-10 rounded-full"
                src={imagenes.img8}
                alt="a"
              />
            </button>
          </div>
        </div>
      </section>

      <section>
        <Outlet />
      </section>

      <footer className="text-gray-600 body-font dark:bg-slate-800 bg-slate-500">
        <div className="container px-3 py-3 mx-auto flex items-center sm:flex-row flex-col max-h-full max-w-full md:flex-row lg:max-w-10xl">
          <button className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokelinecap-="round"
              trokelinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-slate-800 p-2 dark:text-slate-50  bg-slate-300 dark:bg-slate-600  rounded-full"
              viewBox="0 0 16 15"
            >
              <GiNinjaHead />
            </svg>

            <span className="ml-3 text-xl text-gray-800 dark:text-gray-300">
              Luiso
            </span>
          </button>
          <p className="text-ms text-gray-800 dark:text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Todo Los Derechos Reservados
            <button
              href=""
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            ></button>
          </p>
          <span className="inline-flex sm:ml-auto  sm:mt-0 mt-4 justify-center sm:justify-start">
            <button className="text-gray-800 dark:text-gray-300"></button>
            <a
              href="https://www.facebook.com/luis.michinaux/"
              className="ml-3 text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400"
            >
              <svg
                fill="currentColor"
                strokelinecap-="round"
                trokelinejoin="round"
                strokeWidth="2"
                className="w-8 h-7"
                viewBox="0 0 15 15"
              >
                <AiFillFacebook />
              </svg>
            </a>
            <a href="https://www.instagram.com/luiso1990/" className="ml-3 text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokelinecap- ="round"
                trokelinejoin="round"
                strokeWidth="2"
                className="w-8 h-7"
                viewBox="0 0 15 15"
              >
                <AiOutlineInstagram />
              </svg>
            </a>
            <a
              href="https://github.com/luisomogollon/Chat-lou.git"
              className="ml-3 text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokelinecap-="round"
                trokelinejoin="round"
                strokeWidth="0"
                className="w-8 h-7"
                viewBox="0 0 15 15"
              >
                <GoMarkGithub />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-michinaux/"
              className="ml-3 text-gray-800 dark:text-gray-300 dark:hover:text-white hover:text-gray-400"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokelinecap-="round"
                trokelinejoin="round"
                strokeWidth="0"
                className="w-8 h-7"
                viewBox="0 0 15 15"
              >
                <AiOutlineLinkedin />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
