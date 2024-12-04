import React, { useEffect, useState } from "react";
import Logo from "../../../src/assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  const handleMandi = () => {
    navigate("/MandiPrice")
  }
  const handleMandiPlace = () => {
    navigate("/MandiPlace")
  }

  const handleAboutUs = () => {
    navigate("/AboutUs")
  }
  const handleRegister = () => {
    navigate("/Register")
  }
  const handleLogin = () => {
    navigate("/Login")
  }

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      // script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        console.log("Google Translate initialized");
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,ta,te,gu,mr,kn,ml,pa,ur,as,or,ma,sa,sd,bo,ne,ka",
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
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-36 w-auto cursor-pointer" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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

        {/* Navbar Links */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } lg:flex gap-8 items-center`}
        >
          {/* Home Link */}
          <div className="relative group">
            <button className="text-black hover:text-green-500 font-medium flex items-center gap-2">
              HOME
            </button>
          </div>

          {/* Mandi Price Dropdown */}
          <div className="relative group">
            <button className="text-gray-500 hover:text-green-500 font-medium flex items-center gap-2" onClick={handleMandi}>
              MANDI PRICE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </button>
            {/* <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40">
              <a
                href="/mandiprice"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Price 1
              </a>
              <a
                href="#price2"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Price 2
              </a>
              <a
                href="#price3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Price 3
              </a>
            </div> */}
          </div>

          {/* Other Links */}
          <div className="relative group">
            <button className="text-gray-500 hover:text-green-500 font-medium flex items-center gap-2" onClick={handleMandiPlace}>
              MARKET PLACE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </button>
            {/* <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40">
              <a
                href="#price1"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Price 1
              </a>
              <a
                href="#price2"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Price 2
              </a>
              <a
                href="#price3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Price 3
              </a>
            </div> */}
          </div>
          <div className="relative group">
            <button className="text-gray-500 hover:text-green-500 font-medium flex items-center gap-2" onClick={handleAboutUs} >
              ABOUT US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </button>
            {/* <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40">
              <a
                href="/AboutUs"
                className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
              >
                Price 1
              </a>
              <a
                href="#price2"
                className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
              >
                Price 2
              </a>
              <a
                href="#price3"
                className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
              >
                Price 3
              </a>
            </div> */}
          </div>
        </nav>

        {/* Buttons and Language Selector */}
        <div className="hidden lg:flex items-center gap-4 ">
          {/* Register Button */}
          <button className="text-black bg-green-500 border border-green-500  px-8 py-2 rounded-lg shadow-[0px_-4px_6px_rgba(0,0,0,0.5)]" onClick={handleRegister}>
            REGISTER
          </button>

          {/* Login Button */}
          <button className="bg-[#0DAFF0] text-black px-10 py-2 rounded-lg shadow-[0px_-4px_6px_rgba(0,0,0,0.5)]" onClick={handleLogin}>
            LOGIN
          </button>
          <div className="text-green-700 bg-white border border-green-700 rounded ">
            <div id="google_translate_element" className="bg-white border border-green-700 rounded google-translate-container"  ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
