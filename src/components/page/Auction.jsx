import React from "react";
import Navbar from "../layout/Navbar";
import AuctionBanner from '../../assets/images/AuctionBanner.png';
import Footer from "../layout/Footer";

function Auction() {
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
                    <h1 className="text-6xl font-bold text-white z-10">Auctions</h1>
                </div>
            </div>

            {/* Main Content Section */}
            <section className="flex px-8 py-6 gap-6">
                {/* Left: Filter Section */}
                <div className="w-1/4  p-2 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-center mb-4">FILTER</h2>
                    <button className="bg-blue-400 text-white w-full px-4 py-2 mb-3  rounded hover:bg-blue-500 font-bold">
                        States
                    </button>
                    <button className="bg-blue-400 text-white w-full px-4 py-2 mb-3 rounded hover:bg-blue-500 font-bold">
                        Commodity
                    </button>
                    <button className="bg-blue-400 text-white w-full px-4 py-2 rounded hover:bg-blue-500 font-bold">
                        Warehouse
                    </button>
                </div>

                {/* Right: Auction List Section */}
                <div className="w-3/4 p-2">
                    {/* LIVE, UPCOMING, CLOSED */}
                    <div className="flex justify-between gap-6 mb-4 text-lg font-semibold px-28">
                        <span className="cursor-pointer hover:underline">LIVE</span>
                        <span className="cursor-pointer hover:underline">UPCOMING</span>
                        <span className="cursor-pointer hover:underline">CLOSED</span>
                    </div>

                    {/* Auction Cards */}
                    <div className="grid gap-6">
                        {["Wheat", "Jawar", "Hari Moong"].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg overflow-hidden flex items-center"
                            >
                                {/* Image */}
                                <div className="w-1/3">
                                    <img
                                        src={`https://via.placeholder.com/150?text=${item}`}
                                        alt={item}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4 w-2/3">
                                    <h2 className="text-lg font-bold">{item}</h2>
                                    <p className="text-sm text-gray-500">Highest Bid: NA</p>
                                    <p className="text-sm text-gray-500">Warehouse Name: Muzaffarnagar</p>
                                    <p className="text-sm text-gray-500">State: Uttar Pradesh</p>
                                    <p className="text-sm text-gray-500">Start Price: 55 ₹/KG</p>

                                    <div className="mt-4 text-right">
                                        <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
                                            Bid Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Auction;
