import React from "react";
import mapIcon from "../assests/imges/icons/map-pin-2-fill.png";
import img1 from "../assests/imges/icons/Vector-1.png";
import img2 from "../assests/imges/icons/Vector-2.png";
import img3 from "../assests/imges/icons/Vector-3.png";
import img4 from "../assests/imges/icons/Vector-1.png";

const Footer = () => {
  return (
    <div className="bg-neutral text-white">
      <footer class="footer pt-10 pb-16  md:pt-14 md:pb-20  container">
        <div className="flex items-start ">
          <img className="w-6 h-6 mt-1" src={mapIcon} alt="" />
          <p>
            #000 (0th Floor), Road #00,
            <br /> New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <span class=" text-lg md:mb-3 font-semibold">Company</span>
          <a class="link link-hover">About</a>
          <a class="link link-hover">Projects</a>
          <a class="link link-hover">Our Tems</a>
          <a class="link link-hover">Terms condition</a>
          <a class="link link-hover">Submit listing</a>
        </div>
        <div>
          <span class=" text-lg md:mb-3 font-semibold">Quick Links</span>
          <a class="link link-hover">Floor</a>
          <a class="link link-hover">Rentals</a>
          <a class="link link-hover">Salse</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Our Blogs</a>
        </div>
        <div>
          <span class=" text-lg md:mb-3 font-semibold">About Us</span>
          <p className="w-full lg:w-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium natus, maiores asperiores obcaecati numquam soluta
            dicta? Harum doloremque
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
