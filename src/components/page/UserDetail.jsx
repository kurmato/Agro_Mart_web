import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { baseUrl } from "../../BaseUrl";

function UserDetail() {
 
  const ROLES = {
    FARMER: [1],
    INDIVIDUAL_TRADER: [2],
    COMPANY: [3],
    RETAILER: [4]
  };

   
  const [formData, setFormData] = useState({
    aggregator_code: "",
    first_name: "",
    last_name: "",
    gender: "",
    company_name: "",
    city: "",
    town_village: "",
    state: "",
    land_number: "",
    pin: "",
    confirmpin: ""
  });

  const [selectedRole, setSelectedRole] = useState(ROLES.FARMER);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First Name is required";
    if (!formData.last_name) newErrors.last_name = "Last Name is required";
    if (!formData.city) newErrors.city = "City/Town/Village is required";
    if (!formData.state) newErrors.state = "State is required";

    
    if (!formData.pin) newErrors.pin = "Password is required";
    if (!formData.confirmpin) newErrors.confirmpin = "Confirm Password is required";
    if (formData.pin !== formData.confirmpin) {
      newErrors.confirmpin = "Passwords do not match";
    }

   
    switch (selectedRole.toString()) {
      case ROLES.FARMER.toString():
        if (!formData.gender) newErrors.gender = "Gender is required";
        break;
      case ROLES.INDIVIDUAL_TRADER.toString():
        if (!formData.gender) newErrors.gender = "Gender is required";
        break;
      case ROLES.COMPANY.toString():
        if (!formData.company_name) newErrors.company_name = "Company Name is required";
        break;
      case ROLES.RETAILER.toString():
        if (!formData.company_name) newErrors.company_name = "Company Name is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        break;
    }

    return newErrors;
  };

 
  const preparePayload = () => {
    const basePayload = {
      role: selectedRole,
      aggregator_code: formData.aggregator_code,
      first_name: formData.first_name,
      last_name: formData.last_name,
      city: formData.city,
      state: formData.state,
      pin: formData.pin
    };

    switch (selectedRole.toString()) {
      case ROLES.FARMER.toString():
        return { 
          ...basePayload, 
          gender: formData.gender,
          land_number: formData.land_number 
        };
      case ROLES.INDIVIDUAL_TRADER.toString():
        return { 
          ...basePayload, 
          gender: formData.gender 
        };
      case ROLES.COMPANY.toString():
        return { 
          ...basePayload, 
          company_name: formData.company_name 
        };
      case ROLES.RETAILER.toString():
        return { 
          ...basePayload, 
          company_name: formData.company_name,
          gender: formData.gender 
        };
      default:
        return basePayload;
    }
  };

  
  const handleSubmit = async (action) => {
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const payload = preparePayload();

       

      const response = await axios.put(
        `${baseUrl}/customers/addCustomerDetails`, 
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert(`Successfully ${action}!`);
        console.log(response.data)
        if (action === "Profile Completed") {
          const role = response.data.roleName;
          console.log(role)
          localStorage.setItem('role', role)
          navigate("/CustomerForm");
        }
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      alert(
        `An error occurred: ${
          error.response?.data?.message || error.message || "Please try again later."
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

 
  const renderConditionalFields = () => {
    switch (selectedRole.toString()) {
      case ROLES.FARMER.toString():
        return (
          <>
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
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Land Number</label>
              <input
                type="text"
                name="land_number"
                value={formData.land_number}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Land Number"
              />
            </div>
          </>
        );
      case ROLES.INDIVIDUAL_TRADER.toString():
        return (
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
        );
      case ROLES.COMPANY.toString():
        return (
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Company Name *</label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 focus:ring-2 ${
                errors.company_name ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
              } outline-none`}
              placeholder="Company Name"
            />
            {errors.company_name && <p className="text-red-500 text-sm">{errors.company_name}</p>}
          </div>
        );
      case ROLES.RETAILER.toString():
        return (
          <>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Company Name *</label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:ring-2 ${
                  errors.company_name ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
                } outline-none`}
                placeholder="Company Name"
              />
              {errors.company_name && <p className="text-red-500 text-sm">{errors.company_name}</p>}
            </div>
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
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2bcf41] to-[#b3f4bf]">
        <div className="max-w-4xl w-full mx-auto p-6 md:p-10 bg-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Registration</h1>
          <form className="space-y-6">
            {/* Customer Type Selection */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Select Customer Type *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(ROLES).map(([name, role]) => (
                  <div key={role} className="flex items-center">
                    <input
                      type="radio"
                      id={name.toLowerCase()}
                      name="customerType"
                      value={role}
                      checked={selectedRole.toString() === role.toString()}
                      onChange={() => setSelectedRole(role)}
                      className="mr-2"
                    />
                    <label htmlFor={name.toLowerCase()} className="text-gray-600">
                      {name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { label: "Aggregator Code", name: "aggregator_code", placeholder: "Aggregator Code" },
                { label: "First Name *", name: "first_name", placeholder: "First Name", error: errors.first_name },
                { label: "Last Name *", name: "last_name", placeholder: "Last Name", error: errors.last_name },
                { label: "City/Town/Village *", name: "city", placeholder: "City/Town/Village", error: errors.city },
                { label: "State *", name: "state", placeholder: "State", error: errors.state },
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

            {/* Conditional Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {renderConditionalFields()}
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">PIN *</label>
                <input
                  type="password"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2 focus:ring-2 ${
                    errors.pin ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
                  } outline-none`}
                  placeholder="Enter Password"
                />
                {errors.pin && <p className="text-red-500 text-sm">{errors.pin}</p>}
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Confirm PIN *</label>
                <input
                  type="password"
                  name="confirmpin"
                  value={formData.confirmpin}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-2 focus:ring-2 ${
                    errors.confirmpin ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
                  } outline-none`}
                  placeholder="Confirm Password"
                />
                {errors.confirmpin && <p className="text-red-500 text-sm">{errors.confirmpin}</p>}
              </div>
            </div>

       
            <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-6">
              <button
                type="button"
                onClick={() => handleSubmit("Profile Completed")}
                className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Complete Your Profile"}
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