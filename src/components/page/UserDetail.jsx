import React, { useState } from "react";
import axios from "axios";

function UserDetail() {
  const [formData, setFormData] = useState({
    role: [1], // default role
    aggregator_code: "",
    first_name: "",
    last_name: "",
    gender: "",
    city: "",
    state: "",
    pin: "",
  });

  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = "YOUR_AGROMART_URL"; // Replace with your API base URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (action) => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.put(`${baseUrl}/customers/addCustomerDetails`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert(`Successfully ${action}!`);
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
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Registration</h1>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Aggregator Code</label>
            <input
              type="text"
              name="aggregator_code"
              value={formData.aggregator_code}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Aggregator Code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">City/Town/Village</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="City/Town/Village"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="State"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Pin</label>
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Pin"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the <a href="#" className="text-blue-500 underline">terms and conditions</a>
          </label>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => handleSubmit("Profile Completed")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Complete Your Profile"}
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("Registered")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserDetail;
