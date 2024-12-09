import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { baseUrl } from "../../BaseUrl";
import axios from "axios";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    panNumber: "",
    aadharCard: "",
    address: "",
    district: "",
    taluka: "",
    pinCode: "",
    bankName: "",
    bankBranch: "",
    ifscCode: "",
    bankAccountNumber: "",
    preferredProducts: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedProducts = checked
        ? [...prev.preferredProducts, value]
        : prev.preferredProducts.filter((product) => product !== value);
      return { ...prev, preferredProducts: updatedProducts };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setIsLoading(true);

    const apiUrl = `${baseUrl}/customers/completeProfileDetails`;

    try {
      const response = await axios.put(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Profile completed successfully!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error completing profile:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const productOptions = [
    "Cereals",
    "Pulses",
    "Spices",
    "Nuts",
    "Vegetables",
    "Fruits",
    "Processed Foods",
    "Others",
    "Grains",
    "Sapling",
    "Oils",
  ];

  return (
    <><Navbar />
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf]">

    <form
          className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
          onSubmit={handleSubmit}
      >
          <h2 className="text-2xl font-bold mb-4">Customer Form</h2>

          {/* Email, PAN, Aadhar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                  <label className="block text-sm font-medium">Email ID</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded"
                      required />
              </div>
              <div>
                  <label className="block text-sm font-medium">PAN Number</label>
                  <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
              <div>
                  <label className="block text-sm font-medium">Aadhar Card</label>
                  <input
                      type="text"
                      name="aadharCard"
                      value={formData.aadharCard}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
          </div>

          {/* Address Details */}
          <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  rows="3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                  <label className="block text-sm font-medium">District</label>
                  <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
              <div>
                  <label className="block text-sm font-medium">Taluka</label>
                  <input
                      type="text"
                      name="taluka"
                      value={formData.taluka}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
              <div>
                  <label className="block text-sm font-medium">Pin Code</label>
                  <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded"
                      required />
              </div>
          </div>

          {/* Bank Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-medium">Bank Name</label>
                  <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
              <div>
                  <label className="block text-sm font-medium">Bank Branch</label>
                  <input
                      type="text"
                      name="bankBranch"
                      value={formData.bankBranch}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-medium">IFSC Code</label>
                  <input
                      type="text"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
              <div>
                  <label className="block text-sm font-medium">Bank Account Number</label>
                  <input
                      type="text"
                      name="bankAccountNumber"
                      value={formData.bankAccountNumber}
                      onChange={handleInputChange}
                      className="w-full border p-2 rounded" />
              </div>
          </div>

          {/* Preferred Products */}
          <div>
              <label className="block text-sm font-medium mb-2">
                  Preferred Product(s)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {productOptions.map((product) => (
                      <label key={product} className="flex items-center">
                          <input
                              type="checkbox"
                              value={product}
                              onChange={handleCheckboxChange}
                              className="mr-2" />
                          {product}
                      </label>
                  ))}
              </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Complete Profile"}
          </button>
      </form>
   </div>
      <Footer/>
      </>
  );
};

export default CustomerForm;
