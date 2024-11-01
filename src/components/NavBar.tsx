import { useState } from "react";
import Logo from "../assets/Logo.jpeg";
import { Link, useLocation } from "react-router-dom";

type prop = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

const NavBar = ({ isMenuOpen, setIsMenuOpen }: prop) => {
  const location = useLocation();
  const currentUrl = `${location.pathname}${location.search}`;
  const extractedUrl = currentUrl.match(/^\/user\/\d+/)?.[0]; // /user/id
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              aria-controls="logo-sidebar"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <img src={Logo} className="h-8 me-3" alt="Logo" />
              <span className="self-center text-xl  sm:text-2xl whitespace-nowrap dark:text-white text-blue-950 font-bold">
                Network Data System
              </span>
            </a>
          </div>
          {/* User Menu */}
          <div className="flex items-center ms-3 relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
            {isDropdownOpen && (
              <div className="z-50 mt-2 absolute right-0 top-full bg-white dark:bg-gray-700 divide-gray-100 dark:divide-gray-600 shadow rounded">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900 dark:text-white">
                    User name
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    user@email.com
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <Link
                      to={`${extractedUrl}`}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      Mes Projets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      Déconnexion
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
