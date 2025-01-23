import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../BaseUrl";

const BidModal = ({ auction, setSelectedAuction }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getTimeRemaining = (endTime) => {
    const total = new Date(endTime) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return `${days} Day(s) ${hours} Hrs ${minutes} Min ${seconds} Sec`;
  };

  const closeModal = () => {
    setSelectedAuction(null);
  };

  const handleBidChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setBidAmount(value);
    }
  };
  const token = localStorage.getItem("access_token");
  const handleSubmit = async () => {
    const currentHighestBid =
      auction.customerAuction.highest_bid || auction.customerAuction.base_price;

    if (!bidAmount || parseFloat(bidAmount) <= currentHighestBid) {
      alert(`Please enter a bid amount higher than ${currentHighestBid}.`);
      return;
    }

    setIsSubmitting(true);
    console.log(
      auction.customer_auction_id,
      "auction.customer_auction_idiu09876657890o"
    );
    try {
      const response = await axios.post(
        `${baseUrl}/customers/makeABid/${auction.customer_auction_id}`,
        { bid_amount: parseFloat(bidAmount) },
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setSelectedAuction(null);
    } catch (error) {
      alert("Failed to place the bid. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg  ">
        <h3 className="text-lg font-bold mb-4">Place Your Bid</h3>
        <div className="space-y-2">
          <div className="flex justify-between gap-4">
            <p className="text-sm text-gray-700">
            <span className="text-sm font-bold"> {auction.customerAuction.commodity_name} -</span> 
              {auction.customerAuction.commodity_name} -{" "}
              {auction.customerAuction.quantity}{" "}
              {auction.customerAuction.quantity_unit}
            </p>
            <p className="text-sm text-gray-700">
            <span className="text-sm text-red-600  font-bold"> Time Left : </span>    {getTimeRemaining(auction.time_slot_end)}
            </p>
          </div>

          <div className="grid grid-cols-2 ">
            <div className="">
              <img
                src={auction.customerAuction.images[0] || "/placeholder.png"}
                alt={auction.customerAuction.commodity_name}
                className="w-2/3 h-16/9 rounded-lg"
              />
            </div>
            <div className="    w-full space-y-3">
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-sm font-bold">Grade :</span>{" "}
                  {auction.customerAuction.grade}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 ">
                  <span className="text-sm font-bold"> Start Price :</span>{" "}
                  {auction.customerAuction.base_price}{" "}
                  {auction.customerAuction.currency}/
                  {auction.customerAuction.base_price_unit}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-sm font-bold"> State :</span>{" "}
                  {auction.customerAuction.customer.state}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  <span className="text-sm font-bold"> Highest Bid :</span>{" "}
                  {auction.customerAuction.highest_bid || "NA"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <input
              type="number"
              value={bidAmount}
              onChange={handleBidChange}
              placeholder="Enter Bid Amount"
              className="border border-gray-300 w-28 rounded px-1 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              min={
                auction.customerAuction.highest_bid ||
                auction.customerAuction.base_price + 1
              }
            />
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 text-white rounded ${
              isSubmitting ? "bg-gray-400" : "bg-[#2a5584]  hover:bg-blue-500"
            }`}
            disabled={isSubmitting || !bidAmount}
            onClick={handleSubmit}
          >
            {isSubmitting ? "Submitting..." : "Submit Bid"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidModal;
