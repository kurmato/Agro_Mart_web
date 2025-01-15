import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { baseUrl } from "../../BaseUrl";
import axios from "axios";
import {   useNavigate } from "react-router-dom";

const CustomerForm = () => {
  const navigate =useNavigate()
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
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
    gst: "",
  });

   
  const productOptions = [
    "Cereals", "Pulses", "Spices", "Nuts", "Vegetables", 
    "Fruits", "Processed Foods", "Others", "Grains", "Sapling", "Oils"
  ];

  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      preferredProducts: checked
        ? [...prev.preferredProducts, value]
        : prev.preferredProducts.filter((product) => product !== value),
    }));
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
        
        localStorage.removeItem('role');
        localStorage.removeItem('customerId');
        navigate("/Login");
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
  
  const renderInputField = (name, label, type = "text", required = false) => {
    return (
      <div>
        <label className="block text-sm font-medium">{label}</label>
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required={required}
        />
      </div>
    );
  };

  const renderFormFields = () => {
    switch (userRole) {
      case "Farmer":
      case "Individual Trader":
        return (
          <>
            {renderInputField("aadharCard", "Aadhar Card", "text", true)}
            {renderInputField("panNumber", "PAN Number", "text", true)}
            
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                rows="3"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {renderInputField("district", "District", "text", true)}
              {renderInputField("taluka", "Taluka", "text", true)}
              {renderInputField("pinCode", "Pin Code", "text", true)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInputField("bankName", "Bank Name", "text", true)}
              {renderInputField("bankBranch", "Bank Branch", "text", true)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInputField("ifscCode", "IFSC Code", "text", true)}
              {renderInputField("bankAccountNumber", "Bank Account Number", "text", true)}
            </div>
          </>
        );
      
      case "Company":
        return (
          <>
            {renderInputField("gst", "GST Number", "text", true)}
            {renderInputField("aadharCard", "Aadhar Card", "text", true)}
            {renderInputField("panNumber", "PAN Number", "text", true)}
            
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                rows="3"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {renderInputField("district", "District", "text", true)}
              {renderInputField("taluka", "Taluka", "text", true)}
              {renderInputField("pinCode", "Pin Code", "text", true)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInputField("bankName", "Bank Name", "text", true)}
              {renderInputField("bankBranch", "Bank Branch", "text", true)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInputField("ifscCode", "IFSC Code", "text", true)}
              {renderInputField("bankAccountNumber", "Bank Account Number", "text", true)}
            </div>
          </>
        );
      
      case "Retailer":
        return (
          <>
            {renderInputField("gst", "GST Number", "text", true)}
            {renderInputField("panNumber", "PAN Number", "text", true)}
            
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                rows="3"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {renderInputField("district", "District", "text", true)}
              {renderInputField("taluka", "Taluka", "text", true)}
              {renderInputField("pinCode", "Pin Code", "text", true)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInputField("bankName", "Bank Name", "text", true)}
              {renderInputField("bankBranch", "Bank Branch", "text", true)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInputField("ifscCode", "IFSC Code", "text", true)}
              {renderInputField("bankAccountNumber", "Bank Account Number", "text", true)}
            </div>
          </>
        );
      
      default:
        return <div>No form fields available for this role</div>;
    }
  };

  // Render nothing if no role is set
  if (!userRole) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf]">
        <form
          className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">{userRole} Profile</h2>

          {renderFormFields()}

          {/* Preferred Products Section */}
          <div>
            <label className="block text-sm font-medium mb-2">Preferred Product(s)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {productOptions.map((product) => (
                <label key={product} className="flex items-center">
                  <input
                    type="checkbox"
                    value={product}
                    onChange={handleCheckboxChange}
                    checked={formData.preferredProducts.includes(product)}
                    className="mr-2"
                  />
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
      <Footer />
    </>
  );
};

export default CustomerForm;