import React from 'react';
import { heroContent } from '../content/heroContent';
import { FaMicrophone } from "react-icons/fa";
// Import search icon from react-icons

function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center text-center w-full h-screen"
      style={{
        backgroundImage: `url(${heroContent.backgroundImage})`,
      }}
    >
      {/* Search Box and Category Dropdown */}
      <div className="absolute top-8 w-full flex justify-center px-4">
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
          {/* Dropdown */}
          <select className="bg-gray-100 text-gray-700 px-4 py-2 border-r outline-none">
            <option value="all">Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </select>

          {/* Search Box */}
          <div className="flex-grow flex items-center px-4 p-2  bg-green-500">
            <input
              type="text"
              className="w-full py-2 text-center outline-none bg-green-500 placeholder-white"
              placeholder="Search products.."
            />
            <FaMicrophone className="text-white w-6 h-6 ml-2 cursor-pointer" />
          </div>

        </div>
      </div>

      {/* Hero Content */}
      <div className="text-white max-w-4xl px-2 text-left">
        <h1 className="text-6xl font-bold">{heroContent.title}</h1>
        <button className="mt-6 bg-green-500 text-white font-bold px-8 py-3 rounded hover:bg-green-600 shadow-md shadow-black ">
  {heroContent.buttonText}
</button>

      </div>
    </div>
  );
}

export default HeroSection;
