import React, { useState } from "react";
import "../css/AdminMiniNav.css";

const AdminMiniNav = () => {
  const [showLinks, setShowLinks] = React.useState(false);

  return (
    <>
      
      <div className="mini-navbar">
        <ul>
          <li>User Management</li>
          <li>Problemset Management</li>
          <li>Course Management</li>
        </ul>
      </div>
    </>
  );
};

export default AdminMiniNav;
