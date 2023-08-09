// AdminPage.js
import React from "react";
import "../css/AdminPage.css";

const AdminComp = () => {
  const handleButton1Click = () => {
    // Implement the functionality for button 1 here
    console.log("Button 1 clicked!");
  };

  const handleButton2Click = () => {
    // Implement the functionality for button 2 here
    console.log("Button 2 clicked!");
  };

  const handleButton3Click = () => {
    // Implement the functionality for button 3 here
    console.log("Button 3 clicked!");
  };

  // Add more button handlers for additional buttons as needed

  return (
    <div className="admin-page">
      <h1>Admin Operation</h1>
      <div className="button-container">
        <button onClick={handleButton1Click}>User Management </button>
        <button onClick={handleButton2Click}>ProblemSet Management </button>
        <button onClick={handleButton3Click}>Course Management </button>
        {/* Add more buttons here */}
      </div>
    </div>
  );
};

export default AdminComp;

