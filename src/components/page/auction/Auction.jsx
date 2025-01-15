import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../layout/Navbar";
import AuctionBanner from "../../../assets/images/AuctionBanner.png";
import Footer from "../../layout/Footer";
import StatesDropdown from "./StatesDropdown";
import img from "../../../assets/images/ABCD.png";
import { baseUrl } from "../../../BaseUrl";
import BidModal from "./BidModal";

function Auction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("LIVE");
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAuctions();
  }, [selectedStatus]);
 
  const fetchAuctions = async () => {
    const token = localStorage.getItem("access_token");
    try {
      setLoading(true);
      const response = await axios.get(
        `${baseUrl}/admin/getAllListedAuctions`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = response.data;
      const currentTime = new Date().getTime();

      
      const filteredAuctions = result.data.auctions.filter((auction) => {
        const startTime = new Date(auction.time_slot_start).getTime();
        const endTime = new Date(auction.time_slot_end).getTime();

        switch (selectedStatus) {
          case "LIVE":
            return (
              currentTime >= startTime &&
              currentTime <= endTime &&
              auction.isLive
            );
          case "UPCOMING":
            return startTime > currentTime && !auction.isCompleted;
          case "CLOSED":
            return endTime < currentTime || auction.isCompleted;
          default:
            return false;
        }
      });

      setAuctions(filteredAuctions);
      console.log(filteredAuctions, "filteredAuctions--------------");
    } catch (err) {
      console.error("Error fetching auctions:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (auction) => {
    setSelectedAuction(auction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAuction(null);
    setIsModalOpen(false);
  };

  const AuctionCard = ({ auction }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
      <div className="md:w-1/4">
        <img
          src={
            auction.customerAuction.images[0] ||
            `/api/placeholder/150?text=${auction.customerAuction.commodity_name}`
          }
          alt={auction.customerAuction.commodity_name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-3 w-full rounded-lg shadow-sm relative">
        <div>
          <h2 className="text-lg font-bold">
            {auction.customerAuction.commodity_name}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
          <div>
            <p className="text-sm text-gray-500">Highest Bid: NA</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Grade: {auction.customerAuction.grade}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              State: {auction.customerAuction.customer.state}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Start Price: {auction.customerAuction.base_price}{" "}
              {auction.customerAuction.currency}/
              {auction.customerAuction.base_price_unit}
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 right-3">
          <button
            className={`px-4 py-2 text-sm rounded
              ${
                selectedStatus === "CLOSED"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1e6628] hover:bg-[#138222]"
              } text-white`}
            onClick={() => openModal(auction)}
            disabled={selectedStatus === "CLOSED"}
          >
            {selectedStatus === "CLOSED" ? "Auction Ended" : "Bid Now"}
          </button>
        </div>
      </div>
    </div>
  );

  // const BidModal = ({ auction }) => (
  //   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  //     <div className="bg-white w-full max-w-6xl p-6 rounded-lg shadow-lg px-32">
  //       <h3 className="text-lg font-bold mb-4">Place Your Bid</h3>
  //       <div className="space-y-2">
  //         <div className="flex justify-between">
  //           <p className="text-sm text-gray-700">
  //             {auction.customerAuction.commodity_name} -{" "}
  //             {auction.customerAuction.quantity}{" "}
  //             {auction.customerAuction.quantity_unit}
  //           </p>
  //           <p className="text-sm text-gray-700">
  //             Time Left: {getTimeRemaining(auction.time_slot_end)}
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-2">
  //           <img
  //             src={auction.customerAuction.images[0] || img}
  //             alt={auction.customerAuction.commodity_name}
  //             className="w-full h-auto"
  //           />
  //           <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
  //             <div>
  //               <p className="text-sm text-gray-500">
  //                 Grade: {auction.customerAuction.grade}
  //               </p>
  //             </div>
  //             <div>
  //               <p className="text-sm text-gray-500">
  //                 Start Price: {auction.customerAuction.base_price}{" "}
  //                 {auction.customerAuction.currency}/
  //                 {auction.customerAuction.base_price_unit}
  //               </p>
  //             </div>
  //             <div>
  //               <p className="text-sm text-gray-500">
  //                 State: {auction.customerAuction.customer.state}
  //               </p>
  //             </div>
  //             <div>
  //               <p className="text-sm text-gray-500">Highest Bid: NA</p>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="flex justify-center">
  //           <input
  //             type="number"
  //             placeholder="Enter Bid Amount"
  //             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
  //           />
  //         </div>
  //       </div>

  //       <div className="flex justify-center mt-4 space-x-2">
  //         <button
  //           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
  //           onClick={closeModal}
  //         >
  //           Cancel
  //         </button>
  //         <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
  //           Submit Bid
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const getTimeRemaining = (endTime) => {
  //   const total = new Date(endTime) - new Date();
  //   const days = Math.floor(total / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const seconds = Math.floor((total / 1000) % 60);
  //   return `${days} Day(s) ${hours} Hrs ${minutes} Min ${seconds} Sec`;
  // };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative shadow text-center">
        <div
          className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(13, 175, 240, 0.7) 0%, rgba(179, 213, 225, 0.5) 100%), url(${AuctionBanner})`,
          }}
        >
          <h1 className="text-6xl font-bold   z-10">Auctions</h1>
        </div>
      </div>

      <section className="md:flex px-4 py-6 gap-6">
        <div className="md:w-1/4 h-full py-4 p-2 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4">FILTER</h2>
          <button className="bg-[#09d725] text-white w-full px-4 py-2 mb-3 rounded hover:bg-[#10711d] font-bold">
            <StatesDropdown />
          </button>
          <button className="bg-[#1e6628] text-white w-full px-4 py-2 mb-3 rounded hover:bg-[#118721] font-bold">
            Commodity
          </button>
          <button className="bg-[#1e6628] text-white w-full px-4 py-2 rounded hover:bg-[#148423] font-bold">
            Warehouse
          </button>
        </div>

        <div className="md:w-3/4 p-2 mt-4">
          <div className="flex justify-between gap-6 mb-4 text-lg font-semibold">
            {["LIVE", "UPCOMING", "CLOSED"].map((status) => (
              <span
                key={status}
                className={`cursor-pointer hover:underline ${
                  selectedStatus === status ? "text-blue-600" : "text-gray-800"
                }`}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </span>
            ))}
          </div>

          <div className="grid gap-4">
            {loading ? (
              <div className="text-center text-xl text-gray-600">
                Loading...
              </div>
            ) : auctions.length > 0 ? (
              auctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))
            ) : (
              <div className="text-center text-gray-600">
                No auctions available.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      {isModalOpen && selectedAuction && <BidModal auction={selectedAuction} setSelectedAuction={setSelectedAuction}/>}
    </div>
  );
}

export default Auction;
