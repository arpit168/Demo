import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[url('/nature.jpg')] bg-cover bg-center flex items-center justify-center px-4">
      <div className=" w-full bg-white/70  max-w-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-green-500 
                         focus:border-green-500 transition duration-300"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-green-500 
                         focus:border-green-500 transition duration-300"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg 
                       font-semibold hover:bg-green-700 
                       transition duration-300 shadow-md 
                       active:scale-95"
          >
            Login
          </button>
        </form>

        {/* Extra */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?
          <Link to={"/register"} >
            <span className="text-green-600 font-medium cursor-pointer hover:underline">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
