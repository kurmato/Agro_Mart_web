import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useEffect, useState } from "react";

const data = [
  {
    commodity: "Banana",
    marketCentre: "Damnagar - Gujarat",
    variety: "Banana - Green",
    modalPrice: 4000,
    minPrice: 3000,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Banana",
    marketCentre: "Damnagar - Gujarat",
    variety: "Banana - Green",
    modalPrice: 4000,
    minPrice: 3000,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },

  {
    commodity: "Banana",
    marketCentre: "Damnagar - Gujarat",
    variety: "Banana - Green",
    modalPrice: 4000,
    minPrice: 3000,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Banana",
    marketCentre: "Damnagar - Gujarat",
    variety: "Banana - Green",
    modalPrice: 4000,
    minPrice: 3000,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Banana",
    marketCentre: "Damnagar - Gujarat",
    variety: "Banana - Green",
    modalPrice: 4000,
    minPrice: 3000,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },


  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },
  {
    commodity: "Apple",
    marketCentre: "Chidambaram (Uzhavar Sandhai) - Tamil Nadu",
    variety: "Gourd",
    modalPrice: 2000,
    minPrice: 1500,
    arrivalDate: "25/11/2024",
  },

  
];
function MandiPrice() {



  return (
    <><div >
      <Navbar />



      <div className="bg-gradient-to-b from-[#2bcf41]   to-[#b3f4bf] p-10 rounded-md flex flex-col md:flex-row gap-4 justify-center items-center">
        <select className="border border-black p-4 rounded-md w-64">
          <option value="">Select State</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>
        <select className="border border-black p-4  rounded-md w-64">
          <option value="">Select Market Centre</option>
          <option value="Damnagar">Damnagar</option>
          <option value="Gurgaon">Gurgaon</option>
        </select>
        <button className="bg-[#1d5d35] hover:bg-green-600 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </div>

      {/* Table with Animation and Scrollable on Small Devices */}
      <div className="overflow-x-auto animate-fadeIn  px-10 py-10">
        <table className="w-full min-w-[700px] border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#22586d] text-white">
              <th className="border border-gray-300 px-4 py-2">Commodity</th>
              <th className="border border-gray-300 px-4 py-2">Market Centre</th>
              <th className="border border-gray-300 px-4 py-2">Variety</th>
              <th className="border border-gray-300 px-4 py-2">Modal Price</th>
              <th className="border border-gray-300 px-4 py-2">Min Price</th>
              <th className="border border-gray-300 px-4 py-2">Arrival Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                <td className="border border-gray-300 px-4 py-2">{row.commodity}</td>
                <td className="border border-gray-300 px-4 py-2">{row.marketCentre}</td>
                <td className="border border-gray-300 px-4 py-2">{row.variety}</td>
                <td className="border border-gray-300 px-4 py-2">{row.modalPrice}</td>
                <td className="border border-gray-300 px-4 py-2">{row.minPrice}</td>
                <td className="border border-gray-300 px-4 py-2">{row.arrivalDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
      <Footer />
    </>
  );
}

export default MandiPrice;
