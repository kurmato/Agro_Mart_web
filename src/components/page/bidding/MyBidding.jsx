import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../BaseUrl';
import Navbar from '../../layout/Navbar';

const MyBidding = () => {
    const [commodities, setCommodities] = useState([]);

    // useEffect(() => {
    //     const token = localStorage.getItem('access_token'); 

    // if (token) {
    //     const config = {
    //         headers: {
    //           "ngrok-skip-browser-warning": "69420",
    //           Authorization: `Bearer ${token}`,
    //         }
    //       };
    //   axios.get(`${baseUrl}/`,config)
    //     .then((response) => {
    //       setCommodities(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    // }, []);
  return (
    <>
    <Navbar/>
   <div className="container mx-auto mt-10">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Commodity Name</th>
            <th className="border border-gray-300 px-4 py-2">Auction Type</th>
            <th className="border border-gray-300 px-4 py-2">Warehouse Name</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
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
    </>
  )
}

export default MyBidding
