import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MandiPrice from "./components/page/MandiPrice";
import Home from "./components/page/Home";
import MandiPlace from "./components/page/MandiPlace";
import AboutUs from "./components/page/AboutUs";
import Register from "./components/page/ Register";
import Login from "./components/page/Login";
 
import UserDetail from "./components/page/UserDetail";
import EmailVerify from "./components/page/EmailVerify";
import CustomerForm from "./components/page/CustomerForm";
import Auction from "./components/page/auction/Auction";
import MyAuction from "./components/page/myAuction/MyAuction";
import MyBidding from "./components/page/bidding/MyBidding";
import Profile from "./components/page/myAuction/Profile";
import TermsAndConditions from "./components/page/Terms&Conditions";
import ShippingPolicy from "./components/page/Shipping";
import PrivacyPolicy from "./components/page/Privacy";
import Conditions from "./components/page/Condition";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/myBidding" element={<MyBidding />} />
          <Route path="/myAuction" element={<MyAuction />} />
          <Route path="/UserDetail" element={<UserDetail />} />
          <Route path="/EmailVerify" element={<EmailVerify />} />
          <Route path="/CustomerForm" element={<CustomerForm />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/conditions" element={<Conditions />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
