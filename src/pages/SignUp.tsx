import { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 max-w-md w-full">
        {/* Gradient Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 placeholder:text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 placeholder:text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Anis"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 placeholder:text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="anis@gmail.com"
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 placeholder:text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="Create a password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="mb-8 relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-xl bg-gray-900 text-gray-200 placeholder:text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-200"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl font-medium flex items-center justify-center transition-all cursor-pointer"
          >
            Sign Up
            <span className="ml-2 transform transition-transform duration-300 ease-in-out -rotate-[25deg] group-hover:rotate-0">
              <FaArrowRight />
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6 pt-6 flex items-center gap-1 text-sm text-gray-400">
          <p>Already have an Account?</p>
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
          >
            Login
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

export default SignUp;
