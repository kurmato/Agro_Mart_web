import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { baseUrl } from "../../BaseUrl";

function UserDetail() {
  const [formData, setFormData] = useState({
    role: [1],
    aggregator_code: "",
    first_name: "",
    last_name: "",
    gender: "",
    city: "",
    state: "",
    pin: "",
    confirmpin: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First Name is required";
    if (!formData.last_name) newErrors.last_name = "Last Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.city) newErrors.city = "City/Town/Village is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.pin) newErrors.pin = "Enter Pin";
    if (!formData.confirmpin) newErrors.confirmpin = "Enter Confirm Pin";
    if (formData.pin && formData.pin !== formData.confirmpin) {
      newErrors.confirmpin = "Pins do not match";
    }
    return newErrors;
  };

  const handleSubmit = async (action) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const token = localStorage.getItem("token");
    setIsLoading(true);

    try {
      const response = await axios.put(`${baseUrl}/customers/addCustomerDetails`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert(`Successfully ${action}!`);
        if (action === "Profile Completed") {
          navigate("/CustomerForm"); 
        }
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf]">
        <div className="max-w-4xl w-full mx-auto p-6 md:p-10 bg-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Registration</h1>
          <form className="space-y-6">
            {/* Customer Type */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Select Customer Type *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Farmer", "Individual Trader", "Company", "Retailer"].map((type, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={type.toLowerCase()}
                      name="customerType"
                      value={type}
                      className="mr-2"
                      onChange={handleChange}
                    />
                    <label htmlFor={type.toLowerCase()} className="text-gray-600">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { label: "Aggregator Code", name: "aggregator_code", placeholder: "Aggregator Code" },
                { label: "First Name *", name: "first_name", placeholder: "First Name", error: errors.first_name },
                { label: "Last Name *", name: "last_name", placeholder: "Last Name", error: errors.last_name },
                { label: "City/Town/Village *", name: "city", placeholder: "City/Town/Village", error: errors.city },
                { label: "State *", name: "state", placeholder: "State", error: errors.state },
                { label: "Land Number", name: "land_number", placeholder: "Land Number" },
                { label: "Pin *", name: "pin", placeholder: "Enter Pin", error: errors.pin },
                { label: "Confirm Pin *", name: "confirmpin", placeholder: "Enter Confirm Pin", error: errors.confirmpin },
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-base font-medium text-gray-700 mb-2">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 focus:ring-2 ${
                      field.error ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
                    } outline-none`}
                    placeholder={field.placeholder}
                  />
                  {field.error && <p className="text-red-500 text-sm">{field.error}</p>}
                </div>
              ))}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:ring-2 ${
                  errors.gender ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
                } outline-none`}
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>
            {/* Submit Buttons */}
            <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-6">
              <button
                type="button"
                onClick={() => handleSubmit("Profile Completed")}
                className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Complete Your Profile"}
              </button>
              <button
                type="button"
                onClick={() => handleSubmit("Registered")}
                className="w-full md:w-auto px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserDetail;
