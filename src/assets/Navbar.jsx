import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
        <img class="w-full h-auto sm:w-56" src="logo.png" alt="" />

          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link class="mr-5 hover:text-gray-900" to="/">Home </Link>
            <Link class="mr-5 hover:text-gray-900" to="/about">About us </Link>

            <a class="mr-5 hover:text-gray-900" href="#cards">Components</a>

          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
