import React from "react";

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
    <div className="footer-wrapper">
      <div className="footer-section-one">
        
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        
        <div className="footer-section-columns">
          <span>badrulalomtawsyat@gmail.com</span>
          <span>nafisatasmiya388@gmail.com</span>
          <span>badrul.netlify.app</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f8f9fb;
  }

  .footer-section-one {
    /* Add styles if needed */
  }

  .footer-icons {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    color: #585858;
  }

  .footer-section-two {
    display: flex;
    gap: 2rem;
  }

  .footer-section-columns {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .footer-section-columns span {
    font-weight: 600;
    color: #4c4c4c;
    cursor: pointer;
  }
`;


export default Footer;
