import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../../shared/Navber";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="bg-base-100">
      <Navber></Navber>
      <DashboardSidebar>
        <Outlet />
      </DashboardSidebar>
    </div>
  );
};

export default Dashboard;
