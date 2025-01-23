import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../BaseUrl";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Picture from "./Picture";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    city: "",
    state: "",
    pin_code: "",
    address: "",
    district: "",
    taluka: "",
    email: "",
    pan_card: "",
    gst_no: "",
    bank_name: "",
    bank_branch: "",
    ifsc_code: "",
    bank_account_number: "",
    introduction_code: "",
    aadhar_card: "",
    land_number: "",
    corporate: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customerId, setCustomerId] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem("access_token");
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}/customers/getProfileDetailsCustomer`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setProfileData(response.data.customer);
          setCustomerId(response.data.customer.customer_id);
          console.log("Customer ID:", response.data.customer.customer_id);
        } else {
          setError("Failed to fetch profile data. Please check the API route.");
        }
      } catch (err) {
        console.error("Error fetching profile data:", err.message);
        setError("Failed to fetch profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

   

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-green-50 min-h-screen">
      <div className="flex justify-center items-center py-10 px-4">
        <div className="container mx-auto p-6 bg-white border-2 max-w-5xl rounded-xl shadow-xl">
          <div className="flex justify-center items-center pb-8">
            <Picture />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            Profile Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(profileData).map((key) => (
              <div key={key}>
                <label className="font-semibold capitalize">
                  {key.replace(/_/g, " ")}:
                </label>
                <input
                  type="text"
                  name={key}
                  value={profileData[key] || ""}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <Link to={"/MandiPlace"}>
              <button type="button" className="bg-red-500 text-white p-2 rounded">
                Cancel
              </button>
            </Link>
             
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
