import React from "react";
import Navber from "../shared/Navber";
import Footer from "../shared/Footer";

const Blogs = () => {
  return (
    <div className="bg-accent ">
      <Navber></Navber>
      <div className="bg-secondary py-10 h-screen text-accent">
        <div className="container">
          <h1 >Welcome to Blogs</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
