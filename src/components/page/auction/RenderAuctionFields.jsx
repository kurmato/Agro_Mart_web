import React from 'react'

const RenderAuctionFields = (selectedStatus, setSelectedStatus) => {
 
    // const [selectedStatus, setSelectedStatus] = useState("LIVE");
 
        switch (selectedStatus) {
        case "LIVE":
          return (
            <div>
              <div className="grid gap-6">
            {["Wheat", "Jawar", "Hari Moong"].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden flex "
              >
                {/* Image */}
                <div className="md:w-1/4">
                  <img
                    src={`https://via.placeholder.com/150?text=${item}`}
                    alt={item}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-3 w-full rounded-lg shadow-sm relative">
                  <div>
                    <h2 className="text-lg font-bold">{item}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Highest Bid: NA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Warehouse Name: Muzaffarnagar
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        State: Uttar Pradesh
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Start Price: 55 ₹/KG
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-3">
                    <button className="bg-[#255f2d] text-white px-4 py-2 text-sm rounded hover:bg-[#138222]"
                    onClick={openModal}
                    >
                      Bid Now
                    </button>
                  </div>
                  {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-6xl p-6 rounded-lg shadow-lg">
            
            <h3 className="text-lg font-bold mb-4">Place Your Bid</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
              <p className="text-sm text-gray-700">Wheat - 10 MT</p>
              <p className="text-sm text-gray-700">Time Left: 0 Day(s) 4 Hrs 15 Min 0 Sec</p>
              </div>
              <div className="flex">
              <img src={img} alt="" />
               <div>
               <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Highest Bid: NA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Warehouse Name: Muzaffarnagar
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        State: Uttar Pradesh
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Start Price: 55 ₹/KG
                      </p>
                    </div>
                  </div>
               </div>
              </div>
              <div className="flex justify-center">
              <input
                type="number"
                placeholder="Enter Bid Amount"
                className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
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
              <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
                Submit Bid
              </button>
            </div>
          </div>
        </div>
      )}
                </div>
              </div>
            ))}
          </div>
            </div>
          );
        case "UPCOMING":
          return (
            <div>
              <div className="grid gap-6">
            {["Wheat", "Jawar", "Hari Moong"].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden flex "
              >
                {/* Image */}
                <div className="md:w-1/4">
                  <img
                    src={`https://via.placeholder.com/150?text=${item}`}
                    alt={item}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-3 w-full rounded-lg shadow-sm relative">
                  <div>
                    <h2 className="text-lg font-bold">{item}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Highest Bid: NA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Warehouse Name: Muzaffarnagar
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        State: Uttar Pradesh
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Start Price: 55 ₹/KG
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-3">
                    <button className="bg-[#2bcf41] text-white px-4 py-2 text-sm rounded hover:bg-[#138222]"
                    onClick={openModal}
                    >
                      Bid Now
                    </button>
                  </div>
                  {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-6xl p-6 rounded-lg shadow-lg">
            
            <h3 className="text-lg font-bold mb-4">Place Your Bid</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
              <p className="text-sm text-gray-700">Wheat - 10 MT</p>
              <p className="text-sm text-gray-700">Time Left: 0 Day(s) 4 Hrs 15 Min 0 Sec</p>
              </div>
              <div className="flex">
              <img src={img} alt="" />
               <div>
               <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Highest Bid: NA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Warehouse Name: Muzaffarnagar
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        State: Uttar Pradesh
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Start Price: 55 ₹/KG
                      </p>
                    </div>
                  </div>
               </div>
              </div>
              <div className="flex justify-center">
              <input
                type="number"
                placeholder="Enter Bid Amount"
                className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
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
              <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
                Submit Bid
              </button>
            </div>
          </div>
        </div>
      )}
                </div>
              </div>
            ))}
          </div>
            </div>
          );
        case "CLOSED":
          return (
            <div>
             <div className="grid gap-6">
            {["Wheat", "Jawar", "Hari Moong"].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden flex "
              >
                {/* Image */}
                <div className="md:w-1/4">
                  <img
                    src={`https://via.placeholder.com/150?text=${item}`}
                    alt={item}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-3 w-full rounded-lg shadow-sm relative">
                  <div>
                    <h2 className="text-lg font-bold">{item}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Highest Bid: NA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Warehouse Name: Muzaffarnagar
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        State: Uttar Pradesh
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Start Price: 55 ₹/KG
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-3">
                    <button className="bg-[#2bcf41] text-white px-4 py-2 text-sm rounded hover:bg-[#138222]"
                    onClick={openModal}
                    >
                      Bid Now
                    </button>
                  </div>
                  {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-6xl p-6 rounded-lg shadow-lg">
            
            <h3 className="text-lg font-bold mb-4">Place Your Bid</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
              <p className="text-sm text-gray-700">Wheat - 10 MT</p>
              <p className="text-sm text-gray-700">Time Left: 0 Day(s) 4 Hrs 15 Min 0 Sec</p>
              </div>
              <div className="flex">
              <img src={img} alt="" />
               <div>
               <div className="grid md:grid-cols-2 gap-4 w-[80%] mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Highest Bid: NA</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Warehouse Name: Muzaffarnagar
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        State: Uttar Pradesh
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Start Price: 55 ₹/KG
                      </p>
                    </div>
                  </div>
               </div>
              </div>
              <div className="flex justify-center">
              <input
                type="number"
                placeholder="Enter Bid Amount"
                className=" border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
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
              <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
                Submit Bid
              </button>
              
            </div>
          </div>
        </div>
      )}
                </div>
              </div>
            ))}
          </div>
            </div>
          );
        default:
          return null;
      
        }

        return {selectedStatus,setSelectedStatus};
}

export default RenderAuctionFields
