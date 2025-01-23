import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../BaseUrl";
import { FaRegEdit } from "react-icons/fa";
const Picture = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [image, setImage] = useState(null);
  const apiUrl = `${baseUrl}/customers/getProfilePicCustomer`;
  const uploadUrl = `${baseUrl}/customers/uploadProfilePicCustomer`;

  useEffect(() => {
    const fetchProfilePicture = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.error("Access token is missing.");
        return;
      }

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "ngrok-skip-browser-warning": "69420",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data?.profileImage) {
          setProfileImage(response.data.profileImage);
        } else {
          console.warn("No profile image found in the response.");
        }
      } catch (error) {
        console.error("Error fetching profile picture:", error.response || error.message);
      }
    };

    fetchProfilePicture();
  }, [apiUrl]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Please select an image file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("File size exceeds the limit of 5MB.");
        return;
      }
      setImage(file);
    }
  };

  const handleImageUpload = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("User not authenticated. Please log in.");
      return;
    }
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    

    try {
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data?.profileImage) {
        setProfileImage(response.data.profileImage);
        console.log(response.data.profileImage,"98786556rfuehbyuegj")
        alert("Profile picture uploaded successfully!");
      } else {
        alert("Unexpected response format from server.");
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error.response || error.message);
      alert("Failed to upload profile picture.");
    }
  };

  return (
    <div>
      <div>
        {profileImage ? (
           <div className=" flex justify-center">
            <div className="border-2 h-[50%] w-[50%] md:h-52 md:w-52 rounded-full">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
         
          </div>
           </div>
        ) : (
          <div className="h-52 w-52 flex items-center justify-center bg-gray-200 rounded-full">
            <p>Loading...</p>
          </div>
        )}
      </div>

     <div className="md:flex justify-center">
     <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-4"
      />
      <button
        onClick={handleImageUpload}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Upload Picture
      </button>
     </div>
    </div>
  );
};

export default Picture;
