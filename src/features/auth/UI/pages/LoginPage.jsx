import React from "react";
import { useAuth } from "../../hooks/useAuth";


const LoginPage = () => {
  let {navigate, handleSubmit, errors, register, loginClicked} = useAuth();


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
      
        {/* Form */}
        <form onSubmit={handleSubmit(loginClicked)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
            {...register('email', {
              required: 'email is required'
            })}
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-600">Email is required</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
            {...register('password', {
              required: 'Password is Required'
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && <p className="text-red-600">Email is required</p>}
          </div>

          {/* Remember + Forgot */}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span onClick={() => navigate('/signUp')} href="#" className="cursor-pointer text-blue-600 hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

