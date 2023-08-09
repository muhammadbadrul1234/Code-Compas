import React from "react";

import AdminNav from "../components/AdminNav";
import AdminMiniNav from "../components/AdminMiniNav";
import AdminUserManageComp from "../components/AdminUserManageComp";

const AdminUserManage = () => {
  return (
    <>
      <AdminNav />
      <AdminMiniNav />
      <AdminUserManageComp />
    </>
  );
};

export default AdminUserManage;
