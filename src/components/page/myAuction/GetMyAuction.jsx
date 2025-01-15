import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../BaseUrl';

const GetMyAuction = () => {
  const [auctionData, setAuctionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('access_token'); 

    if (token) {
        const config = {
            headers: {
              "ngrok-skip-browser-warning": "69420",
              Authorization: `Bearer ${token}`,
            }
          };
     
      axios.get(`${baseUrl}/customers/getMyAuctions`, config)
      .then((response) => {
        setAuctionData(response.data.auctions || []);
        console.log(response.data.auctions, "response.data.auctions--------------")
        setLoading(false);
        setError("Auctions retrieved successfully");
      })
      .catch((error) => {
        console.error('Error fetching auction data:', error);
        setError('Failed to fetch auctions. Please try again.');
        setLoading(false);
      });
    } else {
      console.log('No token found');
      setError('You must be logged in to view auctions.');
      setLoading(false);
    }
  }, []);

  

  return (
    <div className="container mx-auto py-10 overflow-auto ">
      {error && (
        <div className="text-green-500 mb-4">
          <p>{error}</p>
        </div>
      )}

   <div className='border-2 shadow-lg p-4 rounded-lg pb-20  overflow-y-auto max-h-screen mx-auto '>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {auctionData.map((auction) => (
          <div key={auction.customer_auction_id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Auction ID: {auction.customer_auction_id}</h3>
            <p><strong>Commodity:</strong> {auction.commodity_name}</p>
            <p><strong>Quantity:</strong> {auction.quantity} {auction.quantity_unit}</p>
            <p><strong>Base Price:</strong> {auction.base_price} {auction.base_price_unit}</p>
            <p><strong>Quality:</strong> {auction.quality_type}</p>
            <p><strong>Status:</strong> {auction.isApproved ? 'Approved' : 'Not Approved'}</p>
            <p>
              <strong>Video:</strong>{' '}
              <a href={auction.video_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Watch Video
              </a>
            </p>
            <div className="flex space-x-2 mt-4">
              {auction.images && auction.images.length > 0 ? (
                auction.images.map((image, index) => (
                  <img key={index} src={image} alt={`auction-image-${index}`} className="w-20 h-20 object-cover rounded" />
                ))
              ) : (
                <img src="https://via.placeholder.com/100" alt="Placeholder" className="w-20 h-20 object-cover rounded" />
              )}
            </div>
             
          </div>
        ))}
      </div>
   </div>
    </div>
  );
};

export default GetMyAuction;
