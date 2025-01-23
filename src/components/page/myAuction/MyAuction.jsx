import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../layout/Navbar";
// import Footer from "../../layout/Footer";
import { baseUrl } from "../../../BaseUrl";
import GetMyAuction from "./GetMyAuction";
import Footer from "../../layout/Footer";
import AuctionBanner from "../../../assets/images/AuctionBanner.png";
const AuctionForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    drop_down_value: "",
    quantity: "",
    quantity_unit: "",
    base_price: "",
    base_price_unit: "",
    currency: "",
    grade: "",
    quality_type: "",
    video_url: "",
    images: [],
  });

  const [commodities, setCommodities] = useState([]);
  const [quantityUnits] = useState(["KG", "MT", "LBS"]);
  const basePriceUnits = ["Per Item", "Per Box", "Per Kg"];
  const [currencies] = useState(["INR", "USD", "EUR"]);

  const fetchCommodities = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(`${baseUrl}/admin/getAllCommodityName`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "ngrok-skip-browser-warning": "69420",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(".......,,,,,,kkk", response.data.data);
      setCommodities(response.data.data || []);
    } catch (error) {
      console.error("Error fetching commodities:", error);
      setCommodities([]);
    }
  };

  useEffect(() => {
    fetchCommodities();
  }, []);

  const handleClick = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.drop_down_value ||
      !formData.quantity ||
      !formData.base_price
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Authentication required. Please log in.");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        Array.from(formData.images).forEach((file) => {
          formDataToSend.append("images", file);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        `${baseUrl}/customers/addAuctionByCustomer`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "69420",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Form Data Submitted Successfully:", response.data);
      setShowPopup(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative shadow text-center">
        <div
          className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(13, 175, 240, 0.7) 0%, rgba(179, 213, 225, 0.5) 100%), url(${AuctionBanner})`,
          }}
        >
          <h1 className="text-6xl font-bold   z-10">My Auctions</h1>
        </div>
      </div>
      <div className=" min-h-screen container mx-auto p-6 py-6">
        <button
          onClick={handleClick}
          className="bg-[#2c4f87] text-white p-2 rounded"
        >
          Add Auctions
        </button>

        <div className="max-h-screen">
          <GetMyAuction />
        </div>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-3 rounded-lg max-w-4xl mt-32 w-full">
              <h2 className="text-xl font-semibold mb-4">Create Auction</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label>
                      Commodity Name <span className="text-[#913030]">*</span>:
                    </label>
                    <select
                      name="drop_down_value"
                      value={formData.drop_down_value}
                      onChange={handleChange}
                      required
                      className="border p-2 w-full"
                    >
                      <option value="">Select Commodity</option>
                      {commodities.map((commodity, index) => (
                        <option key={index} value={commodity.drop_down_value}>
                          {commodity.drop_down_value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>
                      Quantity <span className="text-[#913030]">*</span>:
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="border p-2 w-full"
                    />
                  </div>

                  <div>
                    <label>Quantity Unit:</label>
                    <select
                      name="quantity_unit"
                      value={formData.quantity_unit}
                      onChange={handleChange}
                      className="border p-2 w-full"
                    >
                      <option value="">Select Unit</option>
                      {quantityUnits.map((unit, index) => (
                        <option key={index} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>
                      Base Price <span className="text-[#913030]">*</span>:
                    </label>
                    <input
                      type="number"
                      name="base_price"
                      value={formData.base_price}
                      onChange={handleChange}
                      required
                      className="border p-2 w-full"
                    />
                  </div>

                  <div>
                    <label>Base Price Unit:</label>
                    <select
                      name="base_price_unit"
                      value={formData.base_price_unit}
                      onChange={handleChange}
                      className="border p-2 w-full"
                    >
                      <option value="">Select Unit</option>
                      {basePriceUnits.map((unit, index) => (
                        <option key={index} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Currency:</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="border p-2 w-full"
                    >
                      <option value="">Select Unit</option>
                      {currencies.map((unit, index) => (
                        <option key={index} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Grade:</label>
                    <input
                      type="text"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="border p-2 w-full"
                    />
                  </div>

                  <div>
                    <label>Video URL:</label>
                    <input
                      type="text"
                      name="video_url"
                      value={formData.video_url}
                      onChange={handleChange}
                      className="border p-2 w-full"
                    />
                  </div>

                  <div>
                    <label>Quality Type:</label>
                    <input
                      type="text"
                      name="quality_type"
                      value={formData.quality_type}
                      onChange={handleChange}
                      className="border p-2 w-full"
                    />
                  </div>

                  <div>
                    <label>Upload Images:</label>
                    <input
                      type="file"
                      name="images"
                      multiple
                      onChange={handleFileChange}
                      className="border p-2 w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="bg-[#225d38] text-white p-2 rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-[#8f3232] text-white p-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default AuctionForm;
