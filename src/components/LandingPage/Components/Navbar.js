/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/h1logo.png";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../../Courses/context/cart_context";
const HomeNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const ishomePage = location.pathname === "/";
  const isDevPage = location.pathname === "/devs";
  const isaboutPage = location.pathname === "/about";


  const isCoursePage = location.pathname === "/home";
  const isProblemSetPage = location.pathname === "/problemset";
  const isAssignmentPage = location.pathname === "/upload";
  const isBlogsPage = location.pathname === "/blogs";
  const isEditorPage = location.pathname === "/craftpen";
  const isProfilePage = location.pathname === "/profile";

  const { total_items } = useCartContext();


  

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
            zIndex: 10,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(5px)",
            padding: "10px 30px",
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
              {!isCoursePage && (
                <li>
                  <Link to="/home">Courses</Link>
                </li>
              )}
              {!isProblemSetPage && (
                <li>
                  <Link to="/problemset">Problemset</Link>
                </li>
              )}

              {!isAssignmentPage && (
                <li>
                  <Link to="/upload">Assignment</Link>
                </li>
              )}
              {/* <Link to="/cart" className="cart-btn">
                <MdShoppingCart />
                <span className="item-count-badge">{total_items}</span>
              </Link> */}
              {!isProfilePage && (
                <li>
                  <Link to="/home">
                    <Link to="/profile">Profile</Link>
                  </Link>
                </li>
              )}

              <li>
          
                  <Link to="/cart" className="cart-btn">
                    <MdShoppingCart />
                    <span className="item-count-badge">{total_items}</span>
                  </Link>
       
              </li>
            </ul>
          </div>

          {/* <button
              type="button"
              className="sidebar-open-btn"
              onClick={() => openSidebar()}
            >
              <MdMenu />
            </button> */}
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
    margin-right: 3rem;
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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

export default HomeNavbar;
