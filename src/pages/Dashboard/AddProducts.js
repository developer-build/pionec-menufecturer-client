import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Spinner from "../../shared/Spinner";
const AddProducts = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [formLoading, setFormLoading] = useState(false);
  const imgbbAPIkey = "2b5ad21bbf83d99dd03a79f73a3176ba";
  const onSubmit = (data) => {
    setFormLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const doctorImg = result.data.image.url;
          const doctor = {
            name: data.name,
            availableQuantity: parseInt(data.availableQuantity),
            orderQuantity: parseInt(data.orderQuantity),
            perPartsPrice: parseInt(data.perPartsPrice),
            description: data.description,
            img: doctorImg,
          };

          fetch("http://localhost:4000/tool", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearar ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setFormLoading(false);
                reset();
                toast.success("Doctor added successfully");
              } else {
                toast.error("Failed to add doctor");
              }
            });
        }
      });
  };
  if (formLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-secondary  py-8 h-full">
      <div>
        <div className="w-5/12  mx-auto bg-accent p-4  rounded-lg">
          <h1 className="text-center text-2xl font-semibold uppercase font-koulen  pt-2 pb-5 text-primary">
            Add a Product
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full "
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                />
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600 mt-1 pl-1">
                    {errors.name?.message}
                  </span>
                )}
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full "
                  {...register("availableQuantity", {
                    required: {
                      value: true,
                      message: "Max-Qauntity is required!",
                    },
                  })}
                />
                {errors.availableQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-600 mt-1 pl-1">
                    {errors.availableQuantity?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control flex-1 ">
                <label className="label">
                  <span className="label-text">Min-Quantity</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full "
                  {...register("orderQuantity", {
                    required: {
                      value: true,
                      message: "Min-Qauntity is required!",
                    },
                  })}
                />
                {errors.orderQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-600 mt-1 pl-1">
                    {errors.orderQuantity?.message}
                  </span>
                )}
              </div>
              <div className="form-control flex-1 ">
                <label className="label">
                  <span className="label-text">Per Unit Price</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full "
                  {...register("perPartsPrice", {
                    required: {
                      value: true,
                      message: "Min-Qauntity is required!",
                    },
                  })}
                />
                {errors.perPartsPrice?.type === "required" && (
                  <span className="label-text-alt text-red-600 mt-1 pl-1">
                    {errors.perPartsPrice?.message}
                  </span>
                )}
              </div>
            </div>
            <textarea
              name="description"
              class="textarea block mx-auto resize-none bg-white text-accent h-32 w-full  mt-5 textarea-primary focus:outline-none  font-koulen"
              placeholder="Add product description"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required!",
                },
              })}
            ></textarea>
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-600 mt-1 pl-1">
                {errors.description?.message}
              </span>
            )}

            <div className="mt-5 ">
              <input
                type="file"
                className=" text-md file:text-accent file:mr-10  file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-gray-300 hover:file:bg-gray-400 text-gray-500"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required!",
                  },
                })}
              />
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-600 mt-1  pl-1">
                  {errors.image?.message}
                </span>
              )}
            </div>

            <input
              type="submit"
              value="Add Product"
              className="btn  btn-primary w-full mt-5 text-white uppercase"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
