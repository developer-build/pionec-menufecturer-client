import React from "react";
import { useNavigate } from "react-router-dom";

const SingleTool = ({ tool }) => {
  const navigate = useNavigate();
  const {
    _id,
    img,
    name,
    orderQuantity,
    availableQuantity,
    perPartsPrice,
    description,
  } = tool;
  return (
    <div className="bg-white p-2 border-[1px] border-secondary rounded-xl">
      <div className="bg-white  text-neutral rounded-xl">
        <div className="p-2 rounded-lg border-[2px] border-secondary bg-white">
          <img className="w-full  h-72  mb-2 p-4 " src={img} alt="" />
        </div>
        <h2 className="text-2xl text-black my-3 font-semibold">{name}</h2>
        <div className="flex items-center justify-between ">
          <h2 className="text-black text-sm">
            Availabe Quantity:{" "}
            <span className="font-bold text-[16px] text-primary">
              {availableQuantity}
            </span>
          </h2>
          <h2 className="text-black text-sm">
            Unit Price:{" "}
            <span className="font-bold text-primary  text-[16px]">
              ${perPartsPrice}
            </span>
          </h2>
        </div>
        <div className="flex items-center justify-between ">
          <h2 className="text-black text-sm">
            Min-Order Quantity:{" "}
            <span className="font-bold text-primary  text-[16px]">
              {orderQuantity}
            </span>
          </h2>
          <h2 className="text-black text-sm">
            Ship Price:{" "}
            <span className="font-bold text-primary text-[16px]">$25</span>
          </h2>
        </div>
        <p className="text-gray-500 text-sm mt-3 ">
          {description.slice(0, 135)}
        </p>
        <button
          onClick={() => navigate(`/purchase/${_id}`)}
          className="btn bg-neutral w-full mt-4 text-white"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default SingleTool;
