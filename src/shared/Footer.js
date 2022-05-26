import React from "react";
import mapIcon from "../assests/imges/icons/map-pin-2-fill.png";
import img1 from "../assests/imges/icons/Vector-1.png";
import img2 from "../assests/imges/icons/Vector-2.png";
import img3 from "../assests/imges/icons/Vector-3.png";
import img4 from "../assests/imges/icons/Vector-1.png";

const Footer = () => {
  return (
    <div className="bg-neutral text-white">
      <footer className="footer pt-10 pb-16  md:pt-14 md:pb-20  container">
        <div className="flex items-start ">
          <img className="w-6 h-6 mt-1" src={mapIcon} alt="" />
          <p>
            #000 (0th Floor), Road #00,
            <br /> New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <span className=" text-lg md:mb-3 font-semibold">Company</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Our Tems</a>
          <a className="link link-hover">Terms condition</a>
          <a className="link link-hover">Submit listing</a>
        </div>
        <div>
          <span className=" text-lg md:mb-3 font-semibold">Quick Links</span>
          <a className="link link-hover">Floor</a>
          <a className="link link-hover">Rentals</a>
          <a className="link link-hover">Salse</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Blogs</a>
        </div>
        <div>
          <span className=" text-lg md:mb-3 font-semibold">About Us</span>
          <p className="w-full lg:w-80">
            We are best in the city . we know what we Menufectures and we want you to you also know. and then buy from us. we are loyal and se customer feedbacks.
          </p>
          <div className="flex gap-6 mt-2 ">
            <img className="w-6 h-6" src={img1} alt="" />
            <img className="w-6 h-6" src={img2} alt="" />
            <img className="w-6 h-6" src={img3} alt="" />
            <img className="w-6 h-6" src={img4} alt="" />
          </div>
        </div>
      </footer>
      <p className="text-center text-white text-sm pb-10">
        Allrights reseved by{" "}
        <span className="text-primary"> &copy; PIONEC PAINT HOUSE</span>
      </p>
    </div>
  );
};

export default Footer;
