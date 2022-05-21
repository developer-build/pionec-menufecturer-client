import React from "react";
import Navber from "../shared/Navber";
import googleImg from "../assests/imges/icons/google-logo-png-29546.png";
import { Link } from "react-router-dom";
const Login = () => {
  
  return (
    <div className="bg-base-100">
      <Navber></Navber>
      <div className="h-full md:h-screen   my-10 lg:my-0 container flex justify-center items-center">
        <div className="w-full  md:w-[50%] lg:w-[33%]">
          {/* <img className="h-[60px] mx-auto w-40" src={""} alt="" /> */}
          <div className="  pb-8 px-4 md:px-10  bg-accent rounded-xl mt-10">
            <h1 className="text-center text-3xl font-semibold pt-8 pb-10 uppercase text-secondary">
              Welcome <span className="text-primary">Back</span>
            </h1>
            <form>
              <div className="flex flex-col space-y-6">
                <input
                  type="text"
                  placeholder="Email"
                  class="input w-full placeholder:text-lg py-6 "
                />
                <input
                  type="text"
                  placeholder="Password"
                  class="input w-full placeholder:text-lg py-6 "
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex pl-1 items-center ">
                  <input
                    type="checkbox"
                    name=""
                    className="checkbox checkbox-sm checkbox-primary  mr-3"
                    id=""
                  />
                  <span className="text-sm  text-gray-500 ">Remember me</span>
                </div>
                <p className="text-sm  text-gray-500 ">Forget Password?</p>
              </div>
              <button
                type="submit"
                className="px-8 mt-7 text-lg w-full  rounded py-2 font-semibold font-koulen hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-gray-900"
              >
                Login
              </button>
              <p className="text-sm mt-3 text-center text-gray-500">
                Don't have and account ?{" "}
                <Link to='/signup' className="text-orange-600">Create Account</Link>
              </p>
              <div className="divider my-5 ">Or</div>
              <div className="ring-2 ring-secondary rounded-full shadow-sm py-2 text-accent text-center relative">
                <span className="text-secondary capitalize font-semibold">
                  Continue With Google
                </span>
                <img
                  className="h-10 absolute top-0 left-0 w-10"
                  src={googleImg}
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
