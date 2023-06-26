import React from "react";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center px-6 h-screen">
      <img className="w-48 mb-4" src="https://www.gstatic.com/meet/google_meet_primary_horizontal_2020q4_logo_be3f8c43950bd1e313525ada2ce0df44.svg" alt="logo" />
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-stone-900">Sign in to your account</h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="text-sm block mb-2">
                Your email
              </label>
              <input type="email" name="email" id="email" className="sm:text-sm  border border-stone-300 text-stone-900  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="name@company.com" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm block mb-2">
                Password
              </label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember">Remember me</label>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:underline">Forgot password?</button>
            </div>
            <button type="submit" className="w-full text-sm text-white px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 rounded-lg">
              Sign in
            </button>
            <p className="text-sm">
              Don’t have an account yet? <span className="text-blue-600 hover:underline">Sign up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
