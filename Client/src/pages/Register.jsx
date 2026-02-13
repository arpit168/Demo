import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [Loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ------------------clearform---------------------

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  // -------------------error validation---------------

  const validate = () => {
    let Error = {};

    // fullname
    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters!";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space!";
      }
    }
    // email
    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    ) {
      Error.email = "Use Proper Email Format!";
    }

    // mobile number
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed!";
    }

    setValidationError(Error);
    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Fill the form correctly");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Registration Successful!");
      setLoading(false);
      handleClearForm();
    }, 1000);
  };

  return (
    <div className="min-h-screen  bg-[url('/nature.jpg')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="bg-white/70 w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Account 🚀
        </h2>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
          onReset={handleClearForm}
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              disabled={Loading}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
            {validationError.fullName && (
              <span className="text-xs text-red-500 float-end">
                {validationError.fullName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={Loading}
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
            {validationError.email && (
              <span className="text-xs text-red-500 float-end">
                {validationError.email}
              </span>
            )}
          </div>
          {/* phone */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Phone</label>
            <input
              required
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              maxLength="10"
              value={formData.mobileNumber}
              onChange={handleChange}
              disabled={Loading}
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
            {validationError.mobileNumber && (
              <span className="text-xs text-red-500 float-end">
                {validationError.mobileNumber}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Create Password"
              minLength="5"
              value={formData.password}
              onChange={handleChange}
              disabled={Loading}
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
            {validationError.password && (
              <span className="text-xs text-red-500 float-end">
                {validationError.password}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              minLength="5"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={Loading}
              className="px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500 transition duration-300"
            />
            {validationError.confirmPassword && (
              <span className="text-xs text-red-500 float-end">
                {validationError.confirmPassword}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
            <button
              disabled={Loading}
              type="reset"
              className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-100  disabled:cursor-not-allowed disabled:scale-100 disabled:bg-gray-300 cursor-pointer "
            >
              Clear Form
            </button>
            <button
              disabled={Loading}
              type="submit"
              className="flex-1 bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:scale-100 disabled:bg-gray-300"
            >
              {Loading ? "Submitting..." : " Submit"}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?
          <Link to={"/login"}>
            {" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
