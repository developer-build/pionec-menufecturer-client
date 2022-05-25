import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../shared/firebase.init";

const AddAReview = () => {
  const [rating, setRating] = useState(0);

  const [user] = useAuthState(auth);
  const increase = () => {
    if (rating < 5) {
      setRating(rating + 1);
    }
  };
  const decrease = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }
  };
  const postReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    if (rating && review) {
      const data = {
        rating,
        review,
        name: user.displayName,
        address: "CEO, Manpol",
      };
      fetch("https://tranquil-earth-82270.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {});

      toast.success("Thank's For Reviews!");
      event.target.reset();
    } else if (!rating && !review) {
      toast.error("Please add Ratings & Reviews!", { id: 8 });
    } else if (!rating) {
      toast.error("Please add Ratings!", { id: 9 });
    } else if (!review) {
      toast.error("Please add Review!", { id: 10 });
    }
  };

  return (
    <div className="bg-base-100 h-full  text-accent ">
      <div className="w-11/12 md:w-4/6 xl:w-3/6 mx-4 md:mx-8  lg:mx-20">
        <h1 className="text-4xl uppercase  font-koulen font-bold pt-10 text-secondary">
          feedback
        </h1>
        <h1 className=" mt-8 mb-1  text-white  text-xl font-koulen">
          Hey{" "}
          <span className="text-primary font-semibold">
            {user?.displayName}
          </span>
        </h1>
        <p className="text-gray-400 font-koulen text-[14px]">
          Hope you are setisfy to get service form us.We want you to share your
          experience to us. That will helping us and also help others who are
          wanted getting service form us.Thank you
        </p>
        <div className=" flex items-center gap-5 text mt-3 ">
          <span className="text-gray-400 font-bold font-koulen">
            Your Ratings :
          </span>
          <div className="flex space-x-1 h-8 bg-secondary rounded-full items-center  ">
            <button onClick={decrease} className="">
              {" "}
              <MinusCircleIcon className="h-8 w-8"></MinusCircleIcon>
            </button>
            <input
              className="text-lg bg-secondary text-center w-10 text-primary font-bold font-koulen focus:outline-none"
              value={rating}
              readOnly
            />
            <button onClick={increase} className="">
              {" "}
              <PlusCircleIcon className="h-8 w-8"></PlusCircleIcon>
            </button>
          </div>
        </div>
        <form onSubmit={postReview}>
          <textarea
            name="review"
            className="textarea block mx-auto resize-none bg-white h-36 w-full  mt-5 textarea-primary focus:outline-none  font-koulen"
            placeholder="Please Give A Review"
          ></textarea>
          <button className="btn btn-accent text-white btn-md mt-5">
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAReview;
