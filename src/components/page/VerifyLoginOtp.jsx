import React, { useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { baseUrl } from "../../BaseUrl";
import { useNavigate } from "react-router-dom";



const VerifyLoginOtp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddEmail = async () => {
     
  
    setIsLoading(true);
  
  
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios.post(
        `${baseUrl}/customers/verifyCustomerPin`,
        { phoneNumber },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        alert("Email added successfully. Please check your email for the OTP.");
        setIsEmailSent(true);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error adding email:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  

 
  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
  
    const token = localStorage.getItem("token");
  
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/customers/verifyEmailOTP`,
        { otp }, 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        alert("Email verified successfully!");
        console.log("Response:", response.data);
        navigate("/UserDetail")
      } else {
        alert("Failed to verify OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
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
          <h1 className="text-2xl font-bold text-center mb-6">Verify Email</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email Input */}
            {!isEmailSent && (
              <div className="mb-4">
                <label
                  htmlFor=" Phone Number"
                  className="block text-gray-700 font-semibold mb-2"
                >
                 Phone Number
                </label>
                <input
                  type=" Phone Number"
                  id=" Phone Number"
                  className="w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAddEmail}
                  className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </button>
              </div>
            )}

            {/* OTP Input */}
            {isEmailSent && (
              <div>
                <label
                  htmlFor="otp"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Enter OTP*
                </label>
                <input
                  type="text"
                  id="otp"
                  className="w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="w-full bg-green-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
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

export default VerifyLoginOtp
