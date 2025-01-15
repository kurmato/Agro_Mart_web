import React, { useState } from "react";
import axios from "axios";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { baseUrl } from "../../BaseUrl";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleCheckPhoneNumber = async () => {
    if (phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(
        `${baseUrl}/customers/logInCustomer`,
        { phoneNumber },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 || response.status === 201) {
        const authToken = response.data.temp_token;
        localStorage.setItem("authToken", authToken);
        alert("Number is registered. Please proceed to enter your PIN.");
        setIsVerified(true);
      } else {
        setErrorMessage("Failed to check phone number. Please try again.");
      }
    } catch (error) {
      console.error("Error checking phone number:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitPin = async () => {
    if (pin.length !== 4) {
      alert("Please enter a 4-digit PIN.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(
        `${baseUrl}/customers/verifyCustomerPin`,
        { phoneNumber, pin },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.data.access_token) {
        localStorage.removeItem("authToken");
        localStorage.removeItem('token')
        localStorage.setItem("access_token", response.data.access_token);
        alert("Login successful!");
        navigate("/");
      } else {
        setErrorMessage("Failed to verify PIN. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying PIN:", error);
      setErrorMessage(
        "An error occurred while verifying PIN. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf]">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {!isVerified && (
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
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
                    id="phoneNumber"
                    className="flex-1 bg-gray-100 px-3 py-2 focus:outline-none rounded-r-lg"
                    placeholder="Enter Mobile Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleCheckPhoneNumber}
                  className="w-full mt-4 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600"
                  disabled={loading}
                >
                  {loading ? "Checking..." : "Check Number"}
                </button>
              </div>
            )}

            {isVerified && (
              <div>
                <label
                  htmlFor="otp"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Enter the Pin*
                </label>
                <div className="flex space-x-2">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-center bg-gray-100 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="-"
                      value={pin[index] || ""}
                      onChange={(e) => {
                        const newPin = pin.split("");
                        newPin[index] = e.target.value;
                        setPin(newPin.join(""));
                        if (e.target.value && index < 3) {
                          document.getElementById(`otp${index + 1}`).focus();
                        }
                      }}
                      id={`otp${index}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleSubmitPin}
                  className="w-full bg-green-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify PIN"}
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

export default Login;
