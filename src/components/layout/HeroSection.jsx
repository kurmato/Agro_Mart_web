// 

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from "../../BaseUrl";

 
const Carousel = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchBanners = async () => {
          const token = localStorage.getItem("access_token")
            try {
                const response = await axios.get(`${baseUrl}/admin/getAllBanners`,
                  {
                    headers: {
                      "ngrok-skip-browser-warning": "69420",
                      Authorization: `Bearer ${token}`,
                    }
                  }
                );
                console.log("API Response:", response.data);  
               
                setBanners(Array.isArray(response.data) ? response.data : response.data.banners || []);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };
        fetchBanners();
    }, []);

    const settings = {
         
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        
    };

    return (
        <div className=" w-full">
            <div className=" ">
            <div className="overflow-hidden">
                {banners.length > 0 ? (
                    <Slider {...settings}>
                        {banners.map((banner) => (
                            <div key={banner.banner_id} className="relative h-3/2 ">
                                <img
                                    src={banner.banner_image}
                                    alt={banner.title}
                                    className="w-full  h-2/3 lg:h-screen opacity-80 object-cover "
                                />
                               <div className="absolute inset-0 flex items-center container mx-auto   p-6">
                               <div  >
                                    <h2 className="text-white  text-2xl  ">{banner.title}</h2>
                                    <p className="text-[#862c2c]  mt-2 md:w-[60%]  lg:text-5xl text-2xl font-bold">{banner.description}</p>
                                </div>
                               </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="text-center py-10">
                        <p>Loading banners...</p>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Carousel;
