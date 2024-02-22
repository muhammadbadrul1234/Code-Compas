import React, { useState } from "react";

import h1logo from "../assets/h1logo.png";
import styled from "styled-components";

const Navbar1 = () => {
  const [showLinks, setShowLinks] = React.useState(false);

  return (
    <>
      <NavbarSection1>
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
              </ul>
            </div>
          </div>
        </nav>
      </NavbarSection1>
      {/* hero section */}
    </>
  );
};

const NavbarSection1 = styled.div`
  a {
    text-decoration: none;

    color: #000;
  }
  li {
    list-style: none;
  }

  .main-nav {
    background-color: #f9f9f9;
    width: 100%;
    height: 10rem;
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 200px;
    height: 80px;
    object-fit: cover;
    object-position: center;
    margin-left: 10rem;
  }

  .logo {
    display: flex;
    grid-column: 1/2;
    align-items: center;
    justify-content: center;
    margin-left: 3rem;
  }
  .menu {
    width: 400px;
    grid-column: 3/3;
    margin-right: 3rem;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    align-items: center;
  }

  .menu ul {
    align-items: right;
    display: flex;
    justify-content: space-around;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  .menu ul :hover {
    color: #336cff;
  }

  .hamburger-menu {
    display: none;
  }

  @media (max-width: 998px) {
    .hamburger-menu {
      grid-column: 2/3;
      display: flex;
      justify-content: flex-end;
      align-items: right;
      height: 45px;
    }
    .menu ul {
      display: none;
    }
  }
`;

export default Navbar1;
