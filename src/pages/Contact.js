import React from "react";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";

const Contact = () => {
  return (
    <div className="bg-accent">
      <Navber />
      <div className="bg-base-100">
        <div className="bg-base-100 h-[90vh] flex justify-center items-center container">
          <h1 className="text-4xl font-bold font-koulen text-primary">Welcome To Contact Page</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
