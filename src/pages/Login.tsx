import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("submited");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 max-w-md w-full">
        {/* Gradient Heading */}
        <h1 className="text-3xl md:text-4xl py-1 font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 placeholder-gray-400 placeholder:text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 placeholder-gray-400 placeholder:text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Forgot password */}
            <div className="text-left mt-1">
              <button
                type="button"
                className="text-indigo-400 font-medium text-xs hover:underline cursor-pointer"
              >
                Forget password
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="group w-full bg-indigo-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center cursor-pointer"
          >
            Login
            <span className="ml-2 transform transition-transform duration-300 ease-in-out -rotate-[25deg] group-hover:rotate-0">
              <FaArrowRight />
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6 pt-6 flex items-center gap-1 text-sm text-gray-400">
          <p>Create an Account?</p>
          <Link
            to="/signup"
            className="text-indigo-400 font-medium hover:underline hover:text-indigo-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Terms */}
        <p className="text-center text-gray-500 text-xs mt-6">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
