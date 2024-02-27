// ErrorPage.js
import React from "react";
import styled from "styled-components";
import ErrorNav from "./ErrorNav";
import { NavLink } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  
`;


const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
  font-weight: bold;
  font-size: 16px;
`;
const ErrorPage = () => {
    return (
      <>
        <ErrorNav />
        <ErrorContainer>
          <h1> The page does not exist</h1>
          <p>Sorry, something went wrong. Please try again later.</p>
          <StyledNavLink to="/">Go to Homepage</StyledNavLink>
        </ErrorContainer>
      </>
    );
};

export default ErrorPage;
