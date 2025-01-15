import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../BaseUrl";

const Picture = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const apiUrl = `${baseUrl}/customers/getProfilePicCustomer`;
  const uploadUrl = `${baseUrl}/customers/uploadProfilePicCustomer`;

  useEffect(() => {
    const fetchProfilePicture = async () => {
      const token = localStorage.getItem("access_token");
      console.log("Base URL:", baseUrl);
      console.log("Fetching profile picture from:", apiUrl);
      
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "ngrok-skip-browser-warning": "69420",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("API Response:", response.data);
        
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
      setImageFile(file);
    }
  };

  const handleImageUpload = async () => {
    const token = localStorage.getItem("access_token");
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", imageFile);

    try {
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Upload Response:", response.data);
      
      if (response.data?.profileImage) {
        setProfileImage(response.data.profileImage);
        alert("Profile picture uploaded successfully!");
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
          <div className="border-2 rounded-full h-80 w-80">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full h-80 w-80 object-cover"
            />
          </div>
        ) : (
          <div className="h-80 w-80 flex items-center justify-center bg-gray-200 rounded-full">
            <p>Loading...</p>
          </div>
        )}
      </div>

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
        Upload Profile Picture
      </button>
    </div>
  );
};

export default Picture;
