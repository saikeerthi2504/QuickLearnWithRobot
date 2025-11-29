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
      <SearchBar />
      <div className="body">
        {/* First row: logo + Home + search + AboutUs + ContactUs + toggle */}
        <div className="top-row">
          <div className="left">
            <h6 style={{ color: "white" }}>💻📔QUICK LEARN</h6>
            <Link to="/Home">Home</Link>
          </div>

          {/* Toggle Button */}
          <div className="dropdown">
            <button
              style={{ color: "white" }}
              className="toggle-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              ☰GetQuick
            </button>

            {/* Dropdown items */}
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/Python" onClick={() => setShowDropdown(false)}>Python</Link>
                <Link to="/Java" onClick={() => setShowDropdown(false)}>Java</Link>
                <Link to="/DotNet" onClick={() => setShowDropdown(false)}>DotNet</Link>
                <Link to="/C" onClick={() => setShowDropdown(false)}>C lang</Link>
                <Link to="/Oracle" onClick={() => setShowDropdown(false)}>Oracle</Link>
                <Link to="/ReactResource" onClick={() => setShowDropdown(false)}>React</Link>
                <Link to="/SpringResources" onClick={() => setShowDropdown(false)}>Spring</Link>
              </div>
            )}
          </div>

          <div className="right">
            <SearchBar /> {/* use the search component */}
            <Link to="/aboutus">AboutUs</Link>
            <Link to="/contactus">ContactUs</Link>
            <Link to="/">Login</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="content" style={{backgroundColor:'lightyellow'}}>
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
