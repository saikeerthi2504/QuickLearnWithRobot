import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "./Menubar.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Python from "./Python";
import Java from "./Java";
import DotNet from "./DotNet";
import SearchBar from "./SearchBar";
import C from "./C";
import Oracle from "./Oracle";
import ReactResource from "./ReactResource";
import SpringResources from "./Spring";
import VoiceAssistant from "./VoiceAssistant";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <BrowserRouter>
  <div className="navbar">

    {/* LEFT */}
    <div className="nav-left">
      <h3 className="logo">💻 QuickLearn</h3>
      <Link to="/Home">Home</Link>
    </div>

    {/* CENTER */}
    <div className="nav-center">
      <SearchBar />
    </div>

    {/* RIGHT */}
    <div className="nav-right">

      <Link to="/aboutus">About</Link>
      <Link to="/contactus">Contact</Link>

      {/* Dropdown */}
      <div className="dropdown">
        <button
          className="toggle-btn"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          ☰ Explore
        </button>

        {showDropdown && (
          <div className="dropdown-content">
            <Link to="/Python" onClick={() => setShowDropdown(false)}>Python</Link>
            <Link to="/Java" onClick={() => setShowDropdown(false)}>Java</Link>
            <Link to="/DotNet" onClick={() => setShowDropdown(false)}>DotNet</Link>
            <Link to="/C" onClick={() => setShowDropdown(false)}>C</Link>
            <Link to="/Oracle" onClick={() => setShowDropdown(false)}>Oracle</Link>
            <Link to="/ReactResource" onClick={() => setShowDropdown(false)}>React</Link>
            <Link to="/SpringResources" onClick={() => setShowDropdown(false)}>Spring</Link>
          </div>
        )}
      </div>

      <Link to="/">Login</Link>
      <Link to="/signup" className="signup-btn">Sign Up</Link>
    </div>

  </div>

  {/* CONTENT */}
  <div className="content">
    <VoiceAssistant />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Python" element={<Python />} />
      <Route path="/Java" element={<Java />} />
      <Route path="/DotNet" element={<DotNet />} />
      <Route path="/C" element={<C />} />
      <Route path="/Oracle" element={<Oracle />} />
      <Route path="/ReactResource" element={<ReactResource />} />
      <Route path="/SpringResources" element={<SpringResources />} />
    </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;
