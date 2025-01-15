// 

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from "../../BaseUrl";

const PrevArrow = ({ onClick }) => (
    <button className="Prev-icon" onClick={onClick}>
        <FaChevronLeft />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button className="Next-icon" onClick={onClick}>
        <FaChevronRight />
    </button>
);

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
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        
    };

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                {banners.length > 0 ? (
                    <Slider {...settings}>
                        {banners.map((banner) => (
                            <div key={banner.banner_id} className="relative">
                                <img
                                    src={banner.banner_image}
                                    alt={banner.title}
                                    className="w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
                                    <h2 className="text-white text-xl font-bold">{banner.title}</h2>
                                    <p className="text-white text-sm mt-2">{banner.description}</p>
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
    );
};

export default Carousel;
