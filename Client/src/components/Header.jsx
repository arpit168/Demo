import React from "react";
import { Link } from "react-router-dom";
import demo from "../assets/dmo.webp";

const Header = () => {
  return (
    <>
      <div className="sticky top-0">
        <div className="bg-gray-300 border-b border-gray-200
">
          <div className="flex justify-between px-20 items-center">
            <div>
             <Link to={"/"}> <img src={demo} className="w-25 h-20 rounded-full py-2 px-3" alt="" /></Link>
            </div>
            <div className="flex gap-6 text-md font-semibold">
              <Link
                to="/"
                className="px-4 py-2 rounded-md text-gray-800 
               hover:text-white hover:bg-blue-600
               transition-all duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="px-4 py-2 rounded-md text-gray-800 
               hover:text-white hover:bg-purple-600
               transition-all duration-300"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 rounded-md text-gray-800 
               hover:text-white hover:bg-emerald-600
               transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            <div className="flex gap-5 text-md font-bold">
              <Link
                to="/login"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white
               hover:bg-blue-700
               active:scale-95
               transition-all duration-300 shadow-md"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-6 py-2 rounded-lg bg-green-600 text-white
               hover:bg-green-700
               active:scale-95
               transition-all duration-300 shadow-md"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
