import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import Navber from "../../shared/Navber";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="bg-neutral">
      <Navber></Navber>
      <DashboardSidebar>
        <Outlet />
      </DashboardSidebar>
      <Footer/>
    </div>
  );
};

export default Dashboard;
