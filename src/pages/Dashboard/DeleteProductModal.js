import React from "react";
import toast from "react-hot-toast";

const DeleteProductModal = ({ product, setDeleteProduct, refetch }) => {
  const { _id, name } = product;
  const deleteProduct = () => {
    fetch(`https://tranquil-earth-82270.herokuapp.com/delete-tool/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(` ${name} deleted successfully`);
          refetch();
          setDeleteProduct(null);
        }
      });
  };
  return (
    <div className=" text-secondary">
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral">
          <h3 className="font-semibold text-gray-300 text-center font-koulen text-4xl capitalize ">
            Are you sure ?
          </h3>
          <p className="py-4 text-center text-gray-500 text-xl">
            You want to delete <span className="text-primary">{name}</span>{" "}
            Orders!
          </p>
          <div className="flex justify-center modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn bg-green-700 hover:bg-green-800 text-gray-300"
            >
              Close Action
            </label>
            <button
              onClick={deleteProduct}
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

export default DeleteProductModal;
