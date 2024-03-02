import React, { useState } from "react";
import Navbar1 from "./Navbar1";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CNavbar from "./AdminPage/Home Page/ccomponents/CNavbar";
import Sidenav from "./AdminPage/Home Page/ccomponents/Sidenav";
import Box from "@mui/material/Box";

const Layout = () => {
  const [showLinks, setShowLinks] = React.useState(false);
  const navigate = useNavigate();
  const handleButton1Click = () => {
    navigate("/");
  };

  const handleButton2Click = () => {
    navigate("/login");
  };

  const handleButton3Click = () => {
    navigate("/signup");
  };

  const handleButton4Click = () => {
    navigate("/reset");
  };

  const handleButton5Click = () => {
    navigate("/devs");
  };
  const handleButton6Click = () => {
    navigate("/about");
  };

  const handleButton7Click = () => {
    navigate("/craftpen");
  };

  const handleButton8Click = () => {
    navigate("/blogs");
  };

  const handleButton9Click = () => {
    navigate("/home");
  };

  const handleButton10Click = () => {
    navigate("/courses/xMHCZl");
  };
  const handleButton11Click = () => {
    navigate("/cart");
  };
  const handleButton12Click = () => {
    navigate("/upload");
  };
  const handleButton13Click = () => {
    navigate("/problemset");
  };
  const handleButton14Click = () => {
    navigate("/fetch");
  };
  const handleButton15Click = () => {
    navigate("/profile");
  };
  const handleButton16Click = () => {
    navigate("/admin");
  };
  const handleButton17Click = () => {
    navigate("/usermanage");
  };
  const handleButton18Click = () => {
    navigate("/prbmanage");
  };
  const handleButton19Click = () => {
    navigate("/prbmanage");
  };
  const handleButton20Click = () => {
    navigate("/blogmanage");
  };
  const handleButton21Click = () => {
    navigate("/uploadedfile");
  };
  const handleButton22Click = () => {
    navigate("/aprofile");
  };
  const handleButton23Click = () => {
    navigate("/sdfgsdf");
  };
  

  return (
    <>
      <div style={{ marginLeft: "70px" }}></div>
      <CNavbar />
      <Box height={170} />
      <Box sx={{ display: "flex" }}></Box>
      <Sidenav />

      <LayoutSection>
        <div className="admin-page">
          <h1>All Operation</h1>
          <h2>No Authetication</h2>
          <div className="button-container">
            <button onClick={handleButton1Click}>Landing Page</button>
            <button onClick={handleButton2Click}>Login</button>
            <button onClick={handleButton3Click}>Signup</button>
            <button onClick={handleButton4Click}>Reset Password</button>
            <button onClick={handleButton5Click}>Developers</button>
            <button onClick={handleButton6Click}>About Project</button>
            <button onClick={handleButton7Click}>Craftpen</button>
            <button onClick={handleButton8Click}>Blogs</button>
            <button onClick={handleButton23Click}>Error Page</button>

            {/* Add more buttons here */}
          </div>

          <h1>AuthenTicated User Only</h1>

          <div className="button-container">
            <button onClick={handleButton9Click}>Homepage</button>
            <button onClick={handleButton10Click}>Individual Course</button>
            <button onClick={handleButton11Click}>Cart</button>
            <button onClick={handleButton12Click}>Assignments</button>
            <button onClick={handleButton13Click}>Problemset</button>
            <button onClick={handleButton14Click}>Code Editor</button>
            <button onClick={handleButton15Click}>UserProfile</button>
          </div>

          <h1>Admin Only</h1>

          <div className="button-container">
            <button onClick={handleButton16Click}>Overview</button>
            <button onClick={handleButton17Click}>User Management</button>
            <button onClick={handleButton18Click}>Problemset Management</button>
            <button onClick={handleButton19Click}>Course Management</button>
            <button onClick={handleButton20Click}>Blogs Management</button>
            <button onClick={handleButton21Click}>Assignment Check</button>
            <button onClick={handleButton22Click}>Admin Profile</button>
          </div>
        </div>
      </LayoutSection>
    </>
  );
};

const LayoutSection = styled.section`
  .admin-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    flex-direction: column;
    margin-top: 20px;
  }

  button {
    padding: 30px 40px;
    font-size: 16px;
    color: #fff;
    border: 1px solid #336cff;
    background-color: #336cff;
    cursor: pointer;
    border-radius: 10px;
  }

  button:hover {
    background-color: #4e4141;
    border: 1px solid #4e4141;
  }
`;

export default Layout;
