import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Theme from "../Theme";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggle = () => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <div className="flex w-full justify-center items-center text-center">
                <div class="logo-container">
                  <ul>
                    <li>
                      <div class="logo-holder logo-4">
                        <a href="">
                          <h3>PassOP</h3>
                          <p>Innovation</p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <div className="flex items-center lg:order-2"></div>
            <div className="lg:hidden">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                onClick={toggleMobileMenu}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                mobileMenuOpen ? "" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                              ${
                                isActive ? "text-orange-700" : "text-gray-700"
                              } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                              ${
                                isActive ? "text-orange-700" : "text-gray-700"
                              } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <div className="App">
                    <button
                      onClick={() => {
                        toggle();
                      }}
                    >
                      {theme ? (
                        <i class="fa-solid fa-sun"></i>
                      ) : (
                        <i class="fa-solid fa-moon"></i>
                      )}
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Theme theme={theme} />
    </div>
  );
};

export default Header;
