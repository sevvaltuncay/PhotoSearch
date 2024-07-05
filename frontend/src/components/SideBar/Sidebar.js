import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaCompass, FaBell, FaUser } from "react-icons/fa";
import logo from "../../img/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="LOGO" className="logo" />
      <nav className="nav-links">
        <Link to="/Home">
          <FaHome className="icon" />
          Home
        </Link>
        <Link to="/Search">
          <FaSearch className="icon" />
          Search
        </Link>
        <Link to="/Explore">
          <FaCompass className="icon" />
          Explore
        </Link>
        <Link to="/Notifications">
          <FaBell className="icon" />
          Notifications
        </Link>
        <Link to="/Profile">
          <FaUser className="icon" />
          Profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
