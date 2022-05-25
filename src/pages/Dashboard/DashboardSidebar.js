import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../shared/firebase.init";

const DashboardSidebar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile   bg-base-100">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu space-y-3 p-4 overflow-y-auto w-52 bg-accent text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/my-profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-reviews">Add Reviews</NavLink>
          </li>
          {admin && (
            <li>
              <NavLink to="/dashboard/all-users">All Users</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
