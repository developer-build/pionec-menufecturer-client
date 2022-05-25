import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../shared/firebase.init";

const DashboardSidebar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile   bg-base-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu space-y-3 p-4 overflow-y-auto w-52 bg-accent text-base-content font-koulen">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/my-profile">My Profile</NavLink>
          </li>
          {!admin && (
            <li>
              <NavLink to="/dashboard/my-orders">My Orders</NavLink>
            </li>
          )}
          {!admin && (
            <li>
              <NavLink to="/dashboard/my-reviews">Add Reviews</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/add-products">Add Products</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/manage-products">Mange Products</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/all-orders">Total Orders</NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/all-users">Make Admin</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
