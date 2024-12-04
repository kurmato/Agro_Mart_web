import React, { useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

function Login() {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleLogin = () => {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    console.log("Mobile Number for Login:", mobileNumber);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf]">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
              <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                  {/* Mobile Number Input */}
                  <div className="mb-4">
                      <label
                          htmlFor="mobileNumber"
                          className="block text-gray-700 font-semibold mb-2"
                      >
                          Mobile No*
                      </label>
                      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg">
                          {/* Country Code */}
                          <div className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-l-lg">
                              IN +91
                          </div>
                          {/* Input Field */}
                          <input
                              type="text"
                              id="mobileNumber"
                              className="flex-1 bg-gray-100 px-3 py-2 focus:outline-none rounded-r-lg"
                              placeholder="Enter Mobile Number"
                              value={mobileNumber}
                              onChange={(e) => setMobileNumber(e.target.value)} />
                      </div>
                  </div>

                  {/* Login Button */}
                  <button
                      type="button"
                      onClick={handleLogin}
                      className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                      Submit
                  </button>
              </form>
          </div>
      </div><Footer /></>
  );
}

export default Login;
