import React from "react";
import { Outlet } from "react-router-dom";

const DashBoardPage = () => {
  return (
    <div>
      <h1>DashboardPage</h1>
      <Outlet />
    </div>
  );
};

export default DashBoardPage;
