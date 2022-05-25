import React, { useState } from "react";


const AddProducts = () => {

 

  return (
    <div className="bg-secondary  h-[120vh]">
      <h1 className="text-3xl font-koulen text-center font-semibold  text-primary pt-10 ">
        Add a Product
      </h1>
      {/*//! form area  */}
      <div className="w-3/6 mx-auto mt-3 md:mt-10 bg-accent px-5 pt-3 pb-5 rounded-lg ">
        <form >
          <div className="flex space-x-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text t">Product Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered text-white w-full "
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                name="availableQuantity"
                type="number"
                className="input input-bordered text-white w-full "
              />
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Minimun Quantity</span>
              </label>
              <input
                name="minQuantity"
                type="number"
                className="input input-bordered text-white w-full "
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Per Unit Price</span>
              </label>
              <input
                name="unitPrice"
                type="number"
                className="input input-bordered text-white w-full "
              />
            </div>
          </div>
          <textarea
            name="description"
            class="textarea block mx-auto resize-none bg-white text-accent h-32 w-full  mt-5 textarea-primary focus:outline-none  font-koulen"
            placeholder="Add product description"
          ></textarea>

          <div className="mt-7 ">
            <input
              type="file"
              className=" text-md file:text-accent file:mr-10  file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-gray-300 hover:file:bg-gray-400 text-gray-500"
            />
          </div>

          <input
            type="submit"
            value="Add Product"
            className="btn  btn-primary w-full mt-8 text-white uppercase"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
