import React, { useState } from "react";
import "../css/Navbar.css";
import h1logo from "../assets/images/h1logo.png";

const Navbar2 = () => {
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
                <a href="/home">Courses</a>
              </li>
              <li>
                <a href="/problemset">ProblemSet</a>
              </li>
              <li>
                <a href="/login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* hero section */}
    </>
  );
};

export default Navbar2;
