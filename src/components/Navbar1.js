import React, { useState } from "react";
import "../css/Navbar.css";
import h1logo from "../assets/images/h1logo.png";


const Navbar1 = () => {
  const [showLinks, setShowLinks] = React.useState(false);

  return (
    <>
      <nav>
        <div className="main-nav">
          {/* Logo Part */}
          <div className="logo">
            <img src={h1logo} alt="Code Compass" />
          </div>
          {/* Menu Part */}
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/layout">Layout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* hero section */}
    </>
  );
};

export default Navbar1;
