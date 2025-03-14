import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Homepage = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsGuestDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="homepage-logo">Villa Thus</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Property</li>
          <li>Reviews</li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h2 className="hero-title">Discover Your Perfect Getaway</h2>
        <p className="hero-subtitle">Discover Your Home Away from Home</p>
      </div>

      {/* Search Filters */}
      <div className="search-filters">
        <select>
          <option>Select Villa</option>
          <option>Galle</option>
          <option>Kandy</option>
        </select>
        <select>
          <option>Booking Type</option>
          <option>Room Booking</option>
          <option>Villa Booking</option>
          <option>Event Booking</option>
        </select>

        {/* Guest Dropdown */}
        <div className="guest-dropdown" ref={dropdownRef}>
          <button className="guest-dropdown-btn" onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}>
            {adults} Adults · {children} Children 
          </button>
          {isGuestDropdownOpen && (
            <div className="guest-menu">
              {/* Adults Selection */}
              <div className="guest-item">
                <div>
                  <p className="guest-title">Adults</p>
                  <p className="guest-subtitle">Age 12+</p>
                </div>
                <div className="guest-counter">
                  <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>

              {/* Children Selection */}
              <div className="guest-item">
                <div>
                  <p className="guest-title">Children</p>
                  <p className="guest-subtitle">Age 2-12</p>
                </div>
                <div className="guest-counter">
                  <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                  <span>{children}</span>
                  <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <input type="date" />
        <input type="date" />
        <button className="search-btn">Search</button>
      </div>

      {/* Register/Login Buttons */}
      <div className="auth-buttons">
        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>

      {/* Image Gallery */}
      <div className="gallery">
        {["Room", "Pool", "Bathroom", "Bedroom", "Dining"].map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={`/img${index + 1}.jpg`} alt={item} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
