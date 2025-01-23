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
   
        setLoading(false);

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
    <div className="container mx-auto mt-10  h-screen overflow-auto   ">
      {error && (
        <div className="text-green-500 mb-4">
          <p>{error}</p>
        </div>
      )}

   <div className='border-2 shadow-lg p-2 rounded-lg pb-20  overflow-y-auto max-h-screen mx-auto '>
    <h3 className="text-3xl font-bold  py-6">Auction Details</h3>
   <div className="    space-y-4 gap-6">
        {auctionData.map((auction) => (
          <div key={auction.customer_auction_id} className="border p-2 rounded-lg shadow-lg">
             <div className='grid grid-cols-2 gap-2 md:gap-10'>
             <div className="flex space-x-2  md:w-[50%]">
              {auction.images && auction.images.length > 0 ? (
                auction.images.map((image, index) => (
                  <img key={index} src={image} alt={`auction-image-${index}`} className="w-full h-44 object-cover rounded" />
                ))
              ) : (
                <img src="https://via.placeholder.com/100" alt="Placeholder" className="w-20 h-20 object-cover rounded" />
              )}
             
            </div>
             
             <div className='grid md:grid-cols-2  md:gap-6 '>
          <div className='space-y-4'>
          <p><strong>Commodity:</strong> {auction.commodity_name}</p>
            <p><strong>Quantity:</strong> {auction.quantity} {auction.quantity_unit}</p>
            <p><strong>Base Price:</strong> {auction.base_price} {auction.base_price_unit}</p>
          </div>
             <div className='space-y-4'>
             <p><strong>Quality:</strong> {auction.quality_type}</p>
            <p><strong>Status:</strong> {auction.isApproved ? 'Approved' : 'Not Approved'}</p>
            <p>
              <strong>Video:</strong>{' '}
              <a href={auction.video_url} target="_blank" rel="noopener noreferrer" className="text-[#315896]">
                Watch Video
              </a>
            </p>
             </div>
            
             </div>
             </div>
          </div>
        ))}
      </div>
   </div>
    </div>
  );
};

export default GetMyAuction;
