import React from "react";

import styled from "styled-components";

const Work = () => {
  
  return (
    <WorkSection>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How Our Website Work</h1>
        <p className="primary-text" style={{ textAlign: "justify" }}>
          A compiler functions as a crucial tool in software development,
          transforming high-level source code into machine-readable instructions
          through lexical and syntax analysis, semantic validation, and
          optimization processes. On the other hand, a course website serves as
          a dynamic educational platform, allowing learners to access, engage
          with, and complete courses online. Educators create and deliver
          content, users register, and interactions occur through various
          mediums. The website facilitates assessments, provides feedback, and
          awards certifications upon course completion. Both compilers and
          course websites streamline complex processes, making programming and
          education accessible and efficient for users worldwide.
        </p>
      </div>
      </div>
    </WorkSection>
  );
};

const WorkSection = styled.section`
  .work-section-wrapper {
    margin-top: 15rem;
  }

  .work-section-top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .work-section-top p {
    text-align: center;
    max-width: 600px !important;
  }

  .work-section-top h1 {
    max-width: 700px !important;
  }

  .work-section-info {
    width: 290px;
    min-height: 350px;
    background-color: white;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 1rem;
    color: #505050;
    margin: 1rem 2rem;
  }

  .work-section-info h2 {
    margin: 1rem 0rem;
  }

  .work-section-bottom {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .work-section-info p {
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: 600;
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

export default Work;
