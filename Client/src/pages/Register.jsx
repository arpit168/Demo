import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen  bg-[url('/nature.jpg')] bg-cover bg-center flex items-center justify-center px-4">
      
      <div className="bg-white/70 w-full max-w-md rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Account 🚀
        </h2>

        <form className="space-y-5">

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
          </div>
           {/* phone */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter your Phone number"
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg
                       font-semibold hover:bg-blue-700
                       transition duration-300 shadow-md
                       active:scale-95"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
         <Link to={"/login"} > <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Login
          </span></Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
