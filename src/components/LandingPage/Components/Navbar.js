/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/h1logo.png";
import styled from "styled-components";
const HomeNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
  ];
  return (
    <HomeNavbarSection>
      <div>
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(5px)",
            padding: "10px 100px",
          }}
        >
          {/* Your existing navigation content */}
          <div
            className="nav-logo-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="" style={{ width: "200px" }} />
          </div>

          <div className="navbar-links-container">
            <a href="/login">
              <button className="primary-button">Login</button>
            </a>
          </div>
        </nav>

        <div style={{ marginTop: "100px" }}>
          {/* Your content after the navbar */}
          {/* Add your page content here */}
        </div>
      </div>
    </HomeNavbarSection>
  );
};

const HomeNavbarSection = styled.section`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90px;
  }

  .navbar-menu-container {
    display: none;
  }

  .navbar-links-container a {
    margin-right: 3rem;
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .primary-button {
    padding: 0.9rem 1.75rem;
    background-color: #336cff;
    color: white;
    outline: none;
    border: none;
    border-radius: 5rem;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s;
  }

  .navbar-cart-icon {
    font-size: 1.15rem;
  }

  .primary-button:hover {
    background-color: rgb(234, 234, 234);
    color: #000;
  }

  .navbar-menu-container svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default HomeNavbar;
