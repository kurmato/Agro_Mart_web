import React, { useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { baseUrl } from "../../BaseUrl";

function Register() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async () => {
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);

    try {
        const response = await axios.post(
            `https://cors-anywhere.herokuapp.com/${baseUrl}/customers/send-otp`,
            {
              phoneNumber: mobileNumber,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

      if (response.status === 200 || response.status === 201) {
        alert("OTP sent successfully!");
        console.log("Response:", response.data);
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf]">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-6">SIGN UP</h1>
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
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Sending OTP..." : "Next"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
