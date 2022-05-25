import React from "react";

const StayConnected = () => {
  return (
    <div className="bg-accent py-10">
      <div className="md:w-5/12 px-4 md:px-0  mx-auto  ">
        <h1 className="text-center text-[34px] pt-5 font-bold  uppercase text-primary">
          Stay connected with us
        </h1>

        <div className=" mt-10">
          <div className="grid grid-cols-1 font-koulen md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="input w-full py-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input w-full py-5"
            />

            <input
              type="text"
              placeholder="Email Address"
              className="input w-full py-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input w-full py-5"
            />
          </div>

          <textarea
            className="textarea font-koulen resize-none w-full pb-20 mt-6"
            placeholder="Your Message"
          ></textarea>
          <button className="px-8 mt-8 block mx-auto  rounded py-3 hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
