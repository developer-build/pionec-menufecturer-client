import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  return (
    <div className={pathname.indexOf("/") && "bg-red-600"}>
      <nav className="container ">
        <div className="flex items-center  py-4 ">
          <div className="flex-1 text-white font-bold text-2xl">POINEC</div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></XIcon>
            ) : (
              <MenuAlt1Icon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></MenuAlt1Icon>
            )}
          </div>
          <div
            className={`flex-1 flex flex-col p-4 md:p-0 rounded-b-lg  md:flex-row justify-end  transition-all duration-500 ease-in-out  absolute md:static   md:z-auto z-[2] right-0 md:w-full  space-y-2 md:space-y-0 ${
              open
                ? "top-16 opacity-100 bg-white transition-all ease-out"
                : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
            }`}
          >
            <Link
              to="/"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white "
            >
              Home
            </Link>
            <Link
              to="/dashboard/my-profile"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white"
            >
              Dashboard
            </Link>
            <Link
              to="/contact"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white "
            >
              Contact
            </Link>
            <Link
              to="/about"
              className=" px-5 font-semibold rounded py-1 text-black md:text-white "
            >
              About
            </Link>
            {user ? (
              <button
                className=" px-4 font-semibold rounded py-1  bg-orange-600 text-gray-900"
                onClick={() => signOut(auth)}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className=" px-5 font-semibold rounded py-1  bg-orange-600 text-gray-900"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
