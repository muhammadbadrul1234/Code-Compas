import React, { useState } from "react";
import "../css/Layout.css";
import Navbar1 from "./Navbar1";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [showLinks, setShowLinks] = React.useState(false);
  const navigate = useNavigate();
  const handleButton1Click = () => {
    navigate("/login");
  };

  const handleButton2Click = () => {
    navigate("/signup");
  };

  const handleButton3Click = () => {
    navigate("/fetch");
  };

    const handleButton4Click = () => {
    navigate("/problemset");
  };

    const handleButton5Click = () => {
    navigate("/admin");
  };
    const handleButton6Click = () => {
    navigate("/adminusermanage");
   
  };

    const handleButton7Click = () => {
      navigate("/home");
    
  };

    const handleButton8Click = () => {
      navigate("/cart");
    
  };

    const handleButton9Click = () => {
      
    
  };

    const handleButton10Click = () => {
      navigate("courses/1");
    
  };
  const handleButton11Click = () => {
    
  };

  return (
    <>
      <Navbar1 />

      <div className="admin-page">
        <h1>All Operation</h1>
        <div className="button-container">
          <button onClick={handleButton1Click}>Login </button>
          <button onClick={handleButton2Click}>Signup </button>
          <button onClick={handleButton3Click}>Compiler main</button>
          <button onClick={handleButton4Click}>Data fetch</button>
          <button onClick={handleButton5Click}>Admin Page</button>
          <button onClick={handleButton6Click}>User Management </button>
          <button onClick={handleButton7Click}>Course</button>
          <button onClick={handleButton8Click}>Cart</button>
          <button onClick={handleButton10Click}>Details</button>
          {/* Add more buttons here */}
        </div>
      </div>
    </>
  );
};

export default Layout;
