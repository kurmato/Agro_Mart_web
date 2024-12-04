import Auction from '../../assets/images/Auction.png';
import ABCD from '../../assets/images/ABCD.png';
import Bhandar from '../../assets/images/Bhandar.png';
import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PlaceBanner from '../../assets/images/PlaceBanner.png';
import { useNavigate } from 'react-router-dom';

function MandiPlace() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header Section */}
      <Navbar />

      {/* Main Section */}
      <main className="bg-gray-100">
        {/* Place Banner Section */}
        <div
          className="relative w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${PlaceBanner})` }}
        >
       
        </div>
        <div className='min-h-[600px] relative'>
       
        
        {/* Cards Section */}
        <div className="flex justify-around w-full absolute -top-[100px] flex-wrap">
          {/* Card 1 */}
          <div
            className="relative w-[310px] h-[328px] bg-white shadow-md rounded-tl-[36px] rounded-tr-none rounded-br-none rounded-bl-none border-2 min-w-[500px]"
            
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-tl-[36px]"
              style={{ backgroundImage: `url(${Auction})` }}
            ></div>
            <div className="p-4 text-center">
              <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded"  onClick={() => navigate("/auction")}>Auction</button>
              <p className="text-base text-black  mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-[310px] h-auto bg-white shadow-md rounded-tl-[36px] rounded-tr-none rounded-br-none rounded-bl-none border-2 min-w-[500px]"
            
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-tl-[36px]"
              style={{ backgroundImage: `url(${Bhandar})` }}
            ></div>
            <div className="p-4 text-center">
              <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded">Kendriya Bhandar</button>
              <p className="text-base text-black mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
           
          </div>

          {/* Card 3 */}
          <div
            className="relative w-[310px] h-auto bg-white shadow-md rounded-tl-[36px] rounded-tr-none rounded-br-none rounded-bl-none border-2 min-w-[500px]"
           
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-tl-[36px]"
              style={{ backgroundImage: `url(${ABCD})` }}
            ></div>
             <div className="p-4 text-center">
              <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded">ABCD</button>
              <p className="text-base text-black mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
  
        </div>
       
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
      
    </div>
  );
}

export default MandiPlace;
