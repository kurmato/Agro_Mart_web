import React, { useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { baseUrl } from "../../BaseUrl";
import { useNavigate } from "react-router-dom";

function Register() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [isOtpFieldVisible, setIsOtpFieldVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async () => {
 
    setError("");

    
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${baseUrl}/customers/send-otp`,
        { phoneNumber: mobileNumber },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 || response.status === 201) {
        const customerId = response.data.customer_id;
        localStorage.setItem("customerId", customerId);
        setError("");
        setIsOtpFieldVisible(true);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError("");

    if (otp.length !== 6 || isNaN(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsLoading(true);

    try {
      const customerId = localStorage.getItem("customerId");
      const response = await axios.post(
        `${baseUrl}/customers/verify-otp/${customerId}`,
        {
          phoneNumber: mobileNumber,
          otp,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 || response.status === 201) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/EmailVerify");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
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
                <div className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-l-lg">
                  IN +91
                </div>
                <input
                  type="text"
                  id="mobileNumber"
                  className="flex-1 bg-gray-100 px-3 py-2 focus:outline-none rounded-r-lg"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  disabled={isOtpFieldVisible}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            {/* Send OTP Button */}
            {!isOtpFieldVisible && (
              <button
                type="button"
                onClick={handleSendOtp}
                className="w-full bg-[#2b456e] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </button>
            )}

            {/* OTP Input Field */}
            {isOtpFieldVisible && (
              <div>
                <div className="mb-4 mt-4">
                  <label
                    htmlFor="otp"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Enter OTP*
                  </label>
                  <input
                    type="text"
                    id="otp"
                    className="w-full bg-gray-100 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying OTP..." : "Verify OTP"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
