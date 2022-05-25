import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import img2 from "../../assests/imges/cartoon.png";

const Testimonials = () => {
  const [allReviews, setAllReviews] = useState([]);
  const sortedReview = [...allReviews].reverse();
  useEffect(() => {
    fetch("https://tranquil-earth-82270.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div className="bg-secondary py-10 px-4">
      <div className="flex items-center justify-center  pb-4 ">
        <h1 className="text-3xl text-center uppercase text-base-100 font-semibold">
          {" "}
          Customer Feedback
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2 mb-16">
        <span className=" h-1 bg-gray-600 rounded-full w-16"></span>
        <progress className="progress progress-primary  w-24 h-1"></progress>
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
          className="mySwiper h-72"
        >
          {sortedReview.map((r) => (
            <SwiperSlide key={r._id}>
              <div className="p-5 rounded-xl h-52 md:w-[370px] mx-auto bg-white relative">
                <div className="flex items-center  gap-5">
                  <img src={img2} className="w-14 h-14" alt="" />
                  <div className="h">
                    <h2 className="text-lg font-semibold capitalize text-gray-700">
                      {r.name}
                    </h2>
                    <p className="text-gray-600 font-semibold text-sm">
                      Ratings:{" "}
                      <span className="font-bold font-koulen text-primary">
                        {r.rating}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500 font-koulen text-sm">
                  {r.review.length < 110
                    ? r.review
                    : r.review.slice(0, 108) + "..."}
                </p>
                <div className="rating absolute bottom-4 left-5">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 w-4 bg-orange-400"
                  />

                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 w-4 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 w-4 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 w-4 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 w-4 bg-orange-400"
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
