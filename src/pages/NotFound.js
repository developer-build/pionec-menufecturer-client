import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import errorImg from "../assests/imges/error.png";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
const NotFound = () => {
  return (
    <div className="bg-neutral ">
      <Navber />
      <dir className="bg-accent pt-10 pb-20 pl-0 m-0 ">
        <div className="h-full  container  flex flex-col-reverse lg:flex-row items-center justify-center ">
          <div className="text-2xl mt-5 md:mt-0  md:text-4xl flex-1">
            <h1 className="text-white mb-3 font-bold font-koulen uppercase text-center lg:text-left">Opps Page <span className="text-primary">Not Found</span> !</h1>
            <button className="bg-primary mx-auto lg:mx-0 text-lg font-semibold px-5 py-2 rounded-lg text-accent hover:bg-orange-700 flex items-center"> <ArrowLeftIcon className="w-6 h-6 mr-2"></ArrowLeftIcon> Back To Home Page </button>
          </div>
          <img className="w-full md:w-[550px] bg-accent " src={errorImg} alt="" />
        </div>
      </dir>
      <Footer />
    </div>
  );
};

export default NotFound;
