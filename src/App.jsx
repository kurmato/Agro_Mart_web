import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MandiPrice from "./components/page/MandiPrice";
import Home from "./components/page/Home";
import MandiPlace from "./components/page/MandiPlace";
import AboutUs from "./components/page/AboutUs";
import Register from "./components/page/ Register";
import Login from "./components/page/Login";
import Auction from "./components/page/Auction";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="p-4 bg-green-200 flex gap-4">
          <Link to="/Home" className="text-gray-600 hover:text-green-600">Home</Link>
          <Link to="/mandiprice" className="text-gray-600 hover:text-green-600">Mandi Price</Link>
        </nav> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mandiprice" element={<MandiPrice />} />
          <Route path="/MandiPlace" element={<MandiPlace />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/auction" element={<Auction />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
