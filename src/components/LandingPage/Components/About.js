import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CourseAbout = () => {
  return (
    <CourseAboutSection>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">Courses</p>
          <h1 className="primary-heading">
            Unlock Your Potential with Online Courses
          </h1>
          <p className="primary-text">
            Dive into a world of knowledge with Codecompass! Explore a diverse
            range of online courses designed to enhance your skills, advance
            your career, and fuel your passion for learning. Start your
            educational journey with expert-led courses and interactive learning
            experiences.
          </p>

          <div className="about-buttons-container">
            <Link to="/login">
              <button className="secondary-button">
                <BsFillPlayCircleFill style={{ marginRight: "8px" }} />
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </div>
    </CourseAboutSection>
  );
};

const CourseAboutSection = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

  :root {
    --base-font: "Poppins", sans-serif;
    --clr-white: #fff;
    --clr-black: #000;
    --clr-orange: #fd9644;
    --clr-dark: #1c1d1f;
    --clr-purple: #a435f0;
    --clr-pink: #e91e63;
    --clr-alice-blue: #f8f9fb;
    --spacing: 0.1rem;
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
  .about-section-container {
    margin-top: 20rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .about-background-image-container {
    position: absolute;
    left: -150px;
    z-index: -2;
  }

  .about-section-image-container {
    max-width: 500px;
    flex: 0.9;
    margin-right: 1rem;
  }

  .about-section-text-container {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .primary-subheading {
    font-weight: 700;
    color: #336cff;
    font-size: 1.15rem;
  }

  .primary-heading {
    font-weight: 600;
    color: #4c4c4c;
    font-size: clamp(2rem, 5vw, 4rem);
    max-width: 600px;
  }

  .primary-text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    max-width: 500px;
    color: #6a6a6a;
    margin: 1.5rem 0rem;
  }

  .about-buttons-container {
    margin-top: 2rem;
    display: flex;
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
`;

export default CourseAbout;
