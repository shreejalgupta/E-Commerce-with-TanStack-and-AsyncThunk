import React from "react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  let { navigate, handleSubmit, errors, register, loginClicked } = useAuth();

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-[#FAF7F2] font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 border border-[#f0ebe1]">
        
        {/* Title - Changed to font-serif to match "Beauty, unboxed." */}
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-2">
          Welcome back
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Please enter <br /> username = eemilys <br />  password = emilyspass <br /> to sign in.
        </p>
      
        {/* Form */}
        <form onSubmit={handleSubmit(loginClicked)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Username
            </label>
            <input
              {...register('email', {
                required: 'username is required'
              })}
              type="text"
              placeholder="Enter your email"
              
              className="w-full px-4 py-3 bg-[#fdfcfb] border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#D1E3FF] focus:border-[#9abdf9] focus:outline-none transition-all"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5">Email is required</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <input
              {...register('password', {
                required: 'Password is Required'
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-[#fdfcfb] border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#D1E3FF] focus:border-[#9abdf9] focus:outline-none transition-all"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1.5">Password is required</p>}
          </div>

          {/* Remember + Forgot */}

          {/* Button - Color updated to earthy brown and shape updated to pill (rounded-full) */}
          <button
            type="submit"
            className="w-full bg-[#8D5A36] text-white py-3 mt-2 rounded-full font-medium hover:bg-[#73472a] transition-colors shadow-sm cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 border-t border-gray-100"></div>

        {/* Signup link - Text color updated to match brand accent */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span 
            onClick={() => navigate('/signUp')} 
            className="cursor-pointer font-medium text-[#8D5A36] hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;