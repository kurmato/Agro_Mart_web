import React, { useEffect, useState } from "react";
import Logo from "../../../src/assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("access_token");
    if (userToken) setIsLoggedIn(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAuction = () => setIsAuctionOpen(!isAuctionOpen);

  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "MANDI PRICE", link: "/MandiPrice" },
    { name: "MARKET PLACE", link: "/MandiPlace" },
    { name: "ABOUT US", link: "/AboutUs" },
    { name: "REGISTER", link: "/Register" },
    { name: "LOGIN", link: "/Login" },
  ];

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,ta,te,gu,mr,kn,ml,pa",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-[100px] w-auto cursor-pointer" />
        </Link>

        <button className="lg:hidden text-gray-700" onClick={toggleMenu}>
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          
        </button>

        <div className="hidden lg:flex gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="text-gray-500 hover:text-green-500 font-medium text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {isLoggedIn && (
          <div className="relative hidden lg:block">
            <button
              onClick={toggleAuction}
              className="bg-[#24604e] text-white px-6 py-2 rounded-lg shadow"
            >
              AUCTION
            </button>
            {isAuctionOpen && (
              <div className="absolute right-0 w-48 bg-white shadow-lg mt-2 rounded-lg">
                <Link to="/myBidding" className="block px-4 py-2 hover:bg-gray-100">
                  Bidding
                </Link>
                <Link to="/myAuction" className="block px-4 py-2 hover:bg-gray-100">
                  My Auction
                </Link>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              </div>
            )}
          </div>
        )}

        <div className="hidden lg:flex items-center gap-4">
          <button
            className="text-white bg-[#1a6636] px-8 hover:bg-green-700   py-2 rounded-lg"
            onClick={() => navigate("/Register")}
          >
            REGISTER
          </button>
          <button
            className="bg-[#2a5584] text-white hover:bg-blue-900 px-10 py-2 rounded-lg"
            onClick={() => navigate("/Login")}
          >
            LOGIN
          </button>
          <div className="border border-green-700 rounded">
            <div id="google_translate_element" className="google-translate-container"></div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-green-50 z-40">
          <div onClick={toggleMenu} className="flex justify-end right-4 p-6">
          <RxCross2 />
          </div>
          <div className="flex flex-col items-start gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="text-gray-500 hover:text-green-500 hover:bg-slate-200 w-full p-2 text-lg"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
