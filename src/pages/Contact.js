import React from "react";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";

const Contact = () => {
  return (
    <div className="bg-accent">
      <Navber />
      <div className="bg-base-100">
        <div className="bg-base-100 h-[90vh] flex justify-center items-center container">
          <h1 className="text-2xl md:text-4xl text-center  capitalize font-semibold font-koulen text-primary">
            Connect me to see the admin control system of this website
          </h1>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
