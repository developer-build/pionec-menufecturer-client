import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import img1 from "../../assests/imges/Ellipse 90.png";
import img2 from "../../assests/imges/Ellipse 91.png";
import img3 from "../../assests/imges/Ellipse 92.png";
const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Nash Patrik", address: "CEO, Manpol", img: img1 },
    { id: 2, name: "Miriam Barron", address: "CEO, Manpol", img: img2 },
    { id: 3, name: "Bria Malone", address: "CEO, Manpol", img: img3 },
    { id: 4, name: "Nash Patrik", address: "CEO, Manpol", img: img2 },
    { id: 5, name: "Miriam Barron", address: "CEO, Manpol", img: img1 },
    { id: 6, name: "Nash Patrik", address: "CEO, Manpol", img: img3 },
    { id: 7, name: "Miriam Barron", address: "CEO, Manpol", img: img1 },
    { id: 8, name: "Bria Malone", address: "CEO, Manpol", img: img2 },
    { id: 9, name: "Nash Patrik", address: "CEO, Manpol", img: img3 },
  ];
  return (
    <div className="bg-secondary py-16 px-4">
      <div className="flex items-center justify-center  pb-4 ">
        <h1 className="text-3xl text-center uppercase text-base-100 font-semibold">
          {" "}
          Customer Feedback
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2 mb-16">
        <span className=" h-1 bg-gray-600 rounded-full w-16"></span>
        <progress class="progress progress-primary  w-24 h-1"></progress>
        <span className="h-1 bg-gray-600 rounded-full w-16"></span>
      </div>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper h-[340px]"
        >
         
          {reviews.map((r) => (
            <SwiperSlide>
              <div className="p-5 rounded-xl md:w-[370px] mx-auto bg-white">
                <div className="flex items-center gap-5">
                  <img src={r.img} className="w-16 h-16" alt="" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      Nash Patrik
                    </h2>
                    <p className="text-gray-600 text-sm">CEO, Manpol</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Purus commodo ipsum <br /> duis laoreet maecenas.
                  Feugiat{" "}
                </p>
                <div class="rating mt-6">
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
