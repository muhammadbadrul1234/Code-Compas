import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactSection>
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">
  <a href="mailto:your-email@example.com">Submit</a>
</button>
      </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  .contact-page-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6rem 0rem;
  }

  .primary-heading {
    font-size: clamp(2rem, 5vw, 4rem);
    color: #4c4c4c;
    margin-bottom: 1rem;
  }

  .contact-form-container {
    display: flex;
    margin-top: 1rem;
  }

  .contact-form-container input {
    flex: 1;
    height: 100%;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 5px 0 0 5px;
  }

  .secondary-button {
    padding: 0.9rem 1.75rem;
    background-color: #336cff;
    outline: none;
    border: none;
    border-radius: 0 5px 5px 0;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: 600;
    color: white;
    transition: 0.2s;
  }

  .secondary-button:hover {
    background-color: rgb(234, 234, 234);
    color: #000;
  }
`;

export default Contact;
