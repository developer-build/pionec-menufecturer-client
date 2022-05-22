import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        {/* <!-- Page content here --> */}
        {children}
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-52 bg-neutral space-y-2 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="" to="/dashboard/my-profile">My Profile</Link>
          </li>
          <li>
            <Link className="btn btn-primary btn-outline text-white" to="/dashboard/my-reviews">Add Review</Link>
          </li>
          <li>
            <Link className="=" to="/dashboard/my-orders">My Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
