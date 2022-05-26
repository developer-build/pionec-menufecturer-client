import React, { useState } from "react";
import { MenuAlt1Icon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "./CustomLink";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={pathname.indexOf("/") && "bg-red-600"}>
      <nav className="container ">
        <div className="flex items-center py-3  ">
          <div className=" flex items-center text-white font-bold text-2xl">
            {pathname.includes("/dashboard") && (
              <label
                htmlFor="my-drawer-2"
                tabIndex="0"
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <MenuAlt3Icon className="w-8 h-8"></MenuAlt3Icon>
              </label>
            )}
            <span onClick={()=>navigate('/')} className='cursor-pointer'>POINEC</span>
          </div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></XIcon>
            ) : (
              <MenuAlt1Icon
                className={`w-10 h-10 absolute right-3 top-2  cursor-pointer md:hidden`}
              ></MenuAlt1Icon>
            )}
          </div>
          <div
            className={`flex-1 flex flex-col  md:items-center  p-4 md:p-0 rounded-b-lg  md:flex-row justify-end  transition-all duration-500 ease-in-out  absolute md:static   md:z-auto z-[2] right-0 md:w-full  space-y-2 md:space-y-0 ${
              open
                ? "top-16 opacity-100 bg-white md:bg-neutral transition-all ease-out"
                : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
            }`}
          >
            <CustomLink
              to="/"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white "
            >
              Home
            </CustomLink>
            {user && (
              <CustomLink
                to="/dashboard/my-profile"
                className=" px-5 font-semibold rounded py-1 text-black md:text-white"
              >
                Dashboard
              </CustomLink>
            )}

            <CustomLink
              to="/blogs"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white "
            >
              Blogs
            </CustomLink>
            <CustomLink
              to="/contact"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white "
            >
              Contact
            </CustomLink>

            <CustomLink
              to="/my-portfolio"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white "
            >
              Portfolio
            </CustomLink>
            {user ? (
              <div className="dropdown self-center dropdown-end  ">
                <label
                  tabIndex="0"
                  className="  px-4 font-semibold rounded py-2  bg-orange-600 text-gray-900"
                >
                  Profile
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu space-y-2 rounded-lg top-8  px-2 py-4 shadow bg-base-100  w-44 "
                >
                  <li>
                    <CustomLink
                      to="/dashboard/my-profile"
                      className="bg-secondary rounded-lg text-accent flex items-center justify-center "
                    >
                      {user.displayName}
                    </CustomLink>
                  </li>
                  <li>
                    <button
                      className="px-5 font-semibold rounded py-2 flex items-center justify-center  bg-orange-600 text-gray-900"
                      onClick={() => {
                        signOut(auth);
                        navigate("/");
                      }}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <CustomLink
                to="/login"
                className=" px-5 font-semibold rounded py-2  bg-orange-600 text-gray-900"
              >
                Login
              </CustomLink>
            )}
            {/* <button
              className=" px-4 font-semibold rounded py-1  bg-orange-600 text-gray-900"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
