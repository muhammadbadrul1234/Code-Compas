import React from "react";
import AdminProfilePage from "./Profile";
import Box from "@mui/material/Box";
import styled from "styled-components";
import CNavbar from "../Home Page/ccomponents/CNavbar";
import Sidenav from "../Home Page/ccomponents/Sidenav";

const AdminProfile = () => {
  return (
    <>
      <CNavbar />
      <Box height={170} />
      <Box sx={{ display: "flex" }}></Box>
      <Sidenav />
      <AdminProfilePage />
    </>
  );
};

export default AdminProfile;
