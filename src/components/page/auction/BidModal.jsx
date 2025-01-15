import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../BaseUrl';

const BidModal = ({ auction, setSelectedAuction }) => {
  const [bidAmount, setBidAmount] = useState('');
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

  const handleSubmit = async () => {
    const token=localStorage.getItem("access_token")
    const currentHighestBid = auction.customerAuction.highest_bid || auction.customerAuction.base_price;

    if (!bidAmount || parseFloat(bidAmount) <= currentHighestBid) {
      alert(`Please enter a bid amount higher than ${currentHighestBid}.`);
      return;
    }
   
    setIsSubmitting(true);
console.log(auction.customer_auction_id,"auction.customer_auction_idiu09876657890o")
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
      alert('Failed to place the bid. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-6xl p-6 rounded-lg shadow-lg px-32">
        <h3 className="text-lg font-bold mb-4">Place Your Bid</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-gray-700">
              {auction.customerAuction.commodity_name} -{" "}
              {auction.customerAuction.quantity}{" "}
              {auction.customerAuction.quantity_unit}
            </p>
            <p className="text-sm text-gray-700">
              Time Left: {getTimeRemaining(auction.time_slot_end)}
            </p>
          </div>

          <div className="grid grid-cols-2">
            <img
              src={auction.customerAuction.images[0] || '/placeholder.png'}
              alt={auction.customerAuction.commodity_name}
              className="w-full h-auto"
            />
            <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
              <div>
                <p className="text-sm text-gray-500">
                  Grade: {auction.customerAuction.grade}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Start Price: {auction.customerAuction.base_price}{" "}
                  {auction.customerAuction.currency}/
                  {auction.customerAuction.base_price_unit}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  State: {auction.customerAuction.customer.state}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Highest Bid: {auction.customerAuction.highest_bid || 'NA'}
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
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              min={auction.customerAuction.highest_bid || auction.customerAuction.base_price + 1}
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
            className={`px-4 py-2 text-white rounded ${isSubmitting ? 'bg-gray-400' : 'bg-blue-400 hover:bg-blue-500'}`}
            disabled={isSubmitting || !bidAmount}
            onClick={handleSubmit}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Bid'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidModal;
