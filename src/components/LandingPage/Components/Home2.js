import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/html.png";
import HomeNavbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div className="home-container">
      <HomeNavbar />
      <HomeSection>
        <div style={{ height: "100px" }}></div>
        <div className="home-banner-container">
          {/* <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div> */}
          <div className="home-text-section">
            <p className="primary-subheading">Craft Pen</p>
            <h1 className="primary-heading">A Seamless Coding Playground</h1>
            <p className="primary-text">
              Dive into the world of coding with CodeCraftPen, your ultimate
              coding sanctuary. Experiment, collaborate, and bring your ideas to
              life effortlessly. A feature-rich coding playground that empowers
              both beginners and experts to craft, share, and learn in
              real-time. Let your code speak volumes with CodeCraftPen - where
              innovation meets simplicity.
            </p>
            <Link to="/craftpen">
              <button className="secondary-button">
                Play <FiArrowRight />
              </button>
            </Link>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </HomeSection>
    </div>
  );
};

const HomeSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

:root{
    --base-font: 'Poppins', sans-serif;
    --clr-white: #fff;
    --clr-black: #000;
    --clr-orange: #fd9644;
    --clr-dark: #1C1D1F;
    --clr-purple: #A435F0;
    --clr-pink: #E91E63;
    --clr-alice-blue: #F8F9FB;
    --spacing : 0.1rem;
    --transition: all 300ms linear;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif !important;
}
img {
  max-width: 100%;
  height: auto;
}
.App {
  min-height: 100vh;
  width: 85vw;
  max-width: 1900px;
  margin: 0rem auto;
}
body {
  max-width: 100%;
  overflow-x: hidden;
}

body {
  background-color: #f6f6f6;
}


  .home-banner-container {
    position: relative;
    display: flex;
    padding-top: 3rem;
  }

  }
  .home-bannerImage-container {
  position: absolute;
  top: -100px;
  right: -170px;
  z-index: -2;
  max-width: 700px;
}

  .home-image-section {
    width: 100%;
    max-width: 500px;
    flex: 1;
  }

  .home-text-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .primary-subheading {
    font-weight: 700;
    color: #336cff;
    font-size: 1.5rem;
  }

  .primary-heading {
    font-size: clamp(2rem, 5vw, 4rem);
    color: #4c4c4c;
    max-width: 600px;
  }

  .primary-text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    max-width: 500px;
    color: #6a6a6a;
    margin: 1.5rem 0rem;
  }

  .secondary-button {
    padding: 1rem 2.5rem;
    background-color: #336cff;
    outline: none;
    border: none;
    border-radius: 5rem;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: 600;
    color: white;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .secondary-button svg {
    margin-left: 0.75rem;
    font-size: 1.5rem;
  }

  .secondary-button:hover {
    background-color: rgb(234, 234, 234);
    color: #000;
  }
  @media (max-width: 1000px) {
  .navbar-links-container a {
    margin-right: 1rem;
    font-size: 1rem;
  }
  .primary-button {
    font-size: 1rem;
  }
  .home-bannerImage-container {
    max-width: 600px;
  }
}
@media (max-width: 800px) {
  .nav-logo-container {
    max-width: 140px;
  }
  .navbar-links-container {
    display: none;
  }
  .navbar-menu-container {
    display: flex;
  }
  .home-bannerImage-container {
    max-width: 450px;
  }
  .home-banner-container,
  .about-section-container {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
  .about-section-container {
    flex-direction: column;
  }
  .home-image-section,
  .about-section-image-container {
    width: 100%;
    max-width: 400px;
  }
  .primary-heading {
    text-align: center;
    max-width: 90%;
  }
  .primary-text {
    text-align: center;
    max-width: 80%;
  }
  .home-text-section,
  .about-section-text-container {
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
  .secondary-button {
    font-size: 1rem;
    padding: 0.8rem 2rem;
    cursor: pointer;
  }
  .about-section-container {
    margin-top: 5rem !important;
  }
  .about-buttons-container {
    justify-content: center;
    flex-direction: column;
  }
  .primary-subheading {
    text-align: center;
  }
  .watch-video-button {
    margin-left: 0rem !important;
    margin-top: 1rem;
    font-size: 1rem !important;
  }
  .watch-video-button svg {
    margin-right: 0.5rem !important;
  }
  .about-section-image-container {
    margin-right: 0rem !important;
  }
  .work-section-wrapper {
    margin-top: 5rem !important;
  }
  .work-section-bottom {
    margin-top: 1rem !important;
  }
  .contact-form-container {
    padding: 0.5rem !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem !important;
  }
  .contact-form-container input {
    font-size: 1rem !important;
    max-width: 100%;
    padding: 0.5rem 1rem !important;
    margin-bottom: 0.8rem !important;
    text-align: center;
  }
  .footer-wrapper {
    flex-direction: column;
  }
  .footer-section-two {
    flex-direction: column;
    margin-top: 2rem;
  }
  .footer-section-columns {
    margin: 1rem 0rem;
  }
  .App {
    max-width: 95vw;
  }
}
@media (max-width: 600px) {
  .home-bannerImage-container,
  .about-background-image-container {
    display: none;
  }
}
`;

export default Home2;
