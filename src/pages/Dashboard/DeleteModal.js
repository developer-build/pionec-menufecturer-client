import React, { useState } from "react";
import toast from "react-hot-toast";
import fetcher from "../../api";

const DeleteModal = ({ order, setDeleteOrder, refetch }) => {
  const { _id, toolsName } = order;
  const cancelOrder = () => {
    fetcher.delete(`/order/${_id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success(` ${toolsName} deleted successfully`);
        refetch();
        setDeleteOrder(null);
      }
    });
  };
  return (
    <div className=" text-secondary">
      <input type="checkbox" id="delete-order" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral">
          <h3 className="font-semibold text-gray-300 text-center font-koulen text-4xl capitalize ">
            Are you sure ?
          </h3>
          <p className="py-4 text-center text-gray-500 text-xl">
            You want to delete{" "}
            <span className="text-primary">{order.toolsName}</span> Orders!
          </p>
          <div className="flex justify-center modal-action">
            <label
              htmlFor="delete-order"
              className="btn bg-green-700 hover:bg-green-800 text-gray-300"
            >
              Close Action
            </label>
            <button
              onClick={cancelOrder}
              className="btn  btn-md text-gray-300  bg-rose-700 hover:bg-rose-800"
            >
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
