import {  DesktopComputerIcon, DuplicateIcon,  MapIcon,UserGroupIcon } from "@heroicons/react/solid";
import React from "react";


const BusinessSummury = () => {
  return (
    <div className="bg-neutral py-24">
      <div className="container ">
        <h1 className="uppercase text-center text-primary font-bold text-4xl pb-8">
          {" "}
          Summary of bussiness
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
          <div className="flex flex-col bg-neutral justify-center  w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <MapIcon className="w-16 text-white"></MapIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">72 </h1>
            <p className="text-xl text-secondary">Total Countries</p>
          </div>
          <div className="flex flex-col justify-center bg-neutral w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <DesktopComputerIcon className="w-16 text-white"></DesktopComputerIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">52+ </h1>
            <p className="text-xl text-secondary">Product Menufecture</p>
          </div>
          <div className="flex flex-col justify-center bg-neutral w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <UserGroupIcon className="w-16 text-white"></UserGroupIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">300+ </h1>
            <p className="text-xl text-seconary">Happy Clients</p>
          </div>
          <div className="flex flex-col justify-center bg-neutral w-full py-6 rounded-lg items-center ">
            {/* <img src={img1} className="w-16" alt="" /> */}
            <DuplicateIcon className="w-16 text-white"></DuplicateIcon>
            <h1 className="text-5xl font-bold text-primary mt-8 mb-1">500+ </h1>
            <p className="text-xl text-seconary">Clients Feedbacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummury;
