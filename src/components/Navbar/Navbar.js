/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "./Assets/h1logo.png";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
const UserNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const ishomePage = location.pathname === "/";
  const isDevPage = location.pathname === "/devs";
  const isaboutPage = location.pathname === "/about";
  const menuOptions = [];
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

          <div className="menu">
            <ul>
              {!ishomePage && (
                <li>
                  <Link to="/">Home</Link>
                </li>
              )}
              {!isDevPage && (
                <li>
                  <Link to="/devs">Developers</Link>
                </li>
              )}
              {!isaboutPage && (
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              )}
              {!isLoginPage && (
                <li>
                  <Link to="/login">
                    <button className="primary-button">Login</button>
                  </Link>
                </li>
              )}
            </ul>
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
    display: flex;
  }

  .navbar-links-container a {
    margin-right: 2rem;
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .menu {
    width: 600px;
    grid-column: 6/6;
    margin-right: 1rem;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    align-items: center;
  }

  .menu ul {
    align-items: center;
    display: flex;
    justify-content: space-around;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    margin-right: 10px;
  }
  .menu li {
    margin-right: 10;
  }

  .menu ul :hover {
    color: #336cff;
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

export default UserNavbar;
