import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "./CustomLink";

const Navber = ({ children }) => {

  return (
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar   container">
          <div class="flex-1 ">Navbar Title</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal space-x-2">
              {/* <!-- Navbar menu content here -->  */}
              <li>
                <CustomLink className="" to="/">
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink className="" to="/blogs">
                  Blogs
                </CustomLink>
              </li>
              <li>
                <CustomLink className="" to="/contact">
                  Contact
                </CustomLink>
              </li>
              <li>
                <CustomLink className="" to="/about">
                  About
                </CustomLink>
              </li>
              <li>
                <CustomLink className="" to="/login">
                  Login
                </CustomLink>
              </li>
              <li>
                <CustomLink className="" to="/signup">
                  SignUp
                </CustomLink>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        Content
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto  w-52 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
