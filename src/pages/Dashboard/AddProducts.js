import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../shared/Spinner";

const AddProducts = () => {
  //   const { data: services, isLoading } = useQuery("services", () =>
  //     fetch("https://shrouded-retreat-40682.herokuapp.com/service").then((res) =>
  //       res.json()
  //     )
  //   );

  const [formLoading, setFormLoading] = useState(false);
  const imgbbAPIkey = "2b5ad21bbf83d99dd03a79f73a3176ba";
    const handleSubmit = (event) => {
        const name = event.target.name.value;
    //   setFormLoading(true);
    //   const image = data.image[0];
    //   const formData = new FormData();
    //   formData.append("image", image);
    //   const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`;
    //   fetch(url, {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       if (result.success) {
    //         const productImg = result.data.image.url;
    //         const doctor = {
    //           name: data.name,
    //           orderQuantity: data.email,
    //           availableQuantity: data.speaciality,
    //           perPartsPrice: doctorImg,
    //           img: productImg,
    //         };

    //         fetch("https://shrouded-retreat-40682.herokuapp.com/doctor", {
    //           method: "POST",
    //           headers: {
    //             "content-type": "application/json",
    //             authorization: `Bearar ${localStorage.getItem("accessToken")}`,
    //           },
    //           body: JSON.stringify(doctor),
    //         })
    //           .then((res) => res.json())
    //           .then((data) => {
    //             if (data.insertedId) {
    //               setFormLoading(false);
    //               toast.success("Product added successfully");
    //             } else {
    //               toast.error("Failed to add Product");
    //             }
    //           });
    //       }
    //     });
    };
    // if (isLoading || formLoading) {
    //   return <Spinner></Spinner>;
    // }
    
    
    
  return (
    <div className="bg-secondary  h-[120vh]">
      <h1 className="text-3xl font-koulen text-center font-semibold  text-primary pt-10 ">
        Add a Product
      </h1>
      {/*//! form area  */}
      <div className="w-3/6 mx-auto mt-3 md:mt-10 bg-accent px-5 pt-3 pb-5 rounded-lg ">
        <form>
          <div className="flex space-x-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text t">Product Name</span>
              </label>
              <input
                name=""
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
              name="image"
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
