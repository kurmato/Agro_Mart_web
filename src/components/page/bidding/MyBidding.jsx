import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../BaseUrl';
import Navbar from '../../layout/Navbar';
import AuctionBanner from "../../../assets/images/AuctionBanner.png";
const MyBidding = () => {
    const [commodities, setCommodities] = useState([]);

 
  return (
    <>
    <Navbar/>
     <div className="relative shadow text-center">
            <div
              className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(13, 175, 240, 0.7) 0%, rgba(179, 213, 225, 0.5) 100%), url(${AuctionBanner})`,
              }}
            >
              <h1 className="text-6xl font-bold   z-10">My Bids</h1>
            </div>
          </div>
   <div className="container mx-auto mt-10  ">
       <div className='overflow-x-auto'>
       <table className="w-full     border-gray-300">
        <thead>
          <tr className="bg-gray-200  ">
            <th className="border border-gray-300 text-sm px-4 py-2">Commodity Name</th>
            <th className="border border-gray-300 text-sm px-4 py-2">Auction Type</th>
            <th className="border border-gray-300 text-sm px-4 py-2">Warehouse Name</th>
            <th className="border border-gray-300 text-sm px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {commodities.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.commodity_name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.auction_type}</td>
              <td className="border border-gray-300 px-4 py-2">{item.warehouse_name}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  View History
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       </div>
    </div>
    </>
  )
}

export default MyBidding
