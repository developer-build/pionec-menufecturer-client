import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import bg from "../../assests/imges/img1.png";
import Navber from "../../shared/Navber";

const Banner = () => {

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className={`bg-center bg-cover bg-no-repeat h-[105vh] bg-blend-darken overflow-x-hidden overflow-y-hidden `}
    >
      <Navber />
      <div className="h-[68vh] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center font-semibold text-gray-300 font-koulen uppercase">
          Best online Wooden <br /> furniture menufecturer
        </h1>
        <button className="text-gray-900 uppercase bg-orange-600 py-2 px-8  rounded-md font-bold flex justify-between items-center">
          Explore Our Company
          <ArrowRightIcon className="h-6 w-6 ml-3 "></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Banner;
