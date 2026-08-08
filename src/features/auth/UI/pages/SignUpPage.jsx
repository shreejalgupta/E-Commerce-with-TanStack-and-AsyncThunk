import React from "react";
import { useAuth } from "../../hooks/useAuth";

const SignUpPage = () => {
  let { navigate } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF7F2] font-sans py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 border border-[#f0ebe1]">
        
        {/* Title & Subtitle */}
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-2">
          Create account
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          This feature is not working Only for dummy page
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-[#fdfcfb] border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#D1E3FF] focus:border-[#9abdf9] focus:outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#fdfcfb] border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#D1E3FF] focus:border-[#9abdf9] focus:outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 bg-[#fdfcfb] border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#D1E3FF] focus:border-[#9abdf9] focus:outline-none transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full px-4 py-3 bg-[#fdfcfb] border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#D1E3FF] focus:border-[#9abdf9] focus:outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#8D5A36] text-white py-3 mt-4 rounded-full font-medium hover:bg-[#73472a] transition-colors shadow-sm"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 border-t border-gray-100"></div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span 
            onClick={() => navigate('/')} 
            className="cursor-pointer font-medium text-[#8D5A36] hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;