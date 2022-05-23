import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import fetcher from "../api";
import auth from "../shared/firebase.init";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
import Spinner from "../shared/Spinner";
const Purchase = () => {
  const [tool, setTool] = useState({});
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const url = `/tool/${id}`;
    const fetching = async () => {
      const res = await fetcher.get(url);
      setTool(res.data);
      setLoading(false);
    };
    fetching();
  }, [id]);

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   reset,
  // } = useForm();
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const phoneNumber = event.target.phone.value;
    const address = event.target.address.value;
    const quantity = event.target.quantity.value;
    if (phoneNumber && address && quantity) {
      if (quantity < tool.orderQuantity) {
        setError(true);
        toast.error("You have to order minimun quantiy", {
          id: 1,
          position: "bottom-right",
        });
      } else if (quantity > tool.availableQuantity) {
        setError(true);
        toast.error("We don't have that much stock", {
          id: 2,
          position: "bottom-right",
        });
      } else {
        // const data = { };
        const price = quantity * tool.perPartsPrice;
        fetcher
          .post("/order", {
            toolsId: tool._id,
            toolsName: tool.name,
            name,
            email,
            phoneNumber,
            address,
            quantity,
            price,
          })
          .then((res) => {
            if (res.data) {
              toast.success("Order Successfull");

              event.target.reset();
              navigate("/dashboard/my-orders");
            }
          });
      }
    } else {
      toast.error("Plese Fill Up this Form", {
        id: 4,
        position: "bottom-right",
      });
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navber></Navber>
      <div>
        <div className="bg-secondary ">
          <div className=" container pt-10 pb-20 ">
            <h1 className="text-center text-4xl font-koulen font-semibold uppercase pb-16 text-accent">
              Purchase <span className="text-primary">tools</span>
            </h1>
            <div className="w-full gap-5   flex justify-between items-start ">
              <div className="w-4/6 h-full">
                <div className="flex items-center bg-white py-10 px-5 rounded-xl  justify-center gap-5">
                  <img src={tool.img} className="w-80 h-80" alt="" />
                  <div className="text-accent">
                    <h1 className="font-semibold text-3xl mb-5">
                      <span className="">{tool.name}</span>
                    </h1>
                    <h1 className=" text-zinc-700 font-semibold mb-1">
                      Availabe Quantiny :{" "}
                      <span className="font-bold text-accent text-xl">
                        {tool.availableQuantity}
                      </span>{" "}
                      /u
                    </h1>
                    <h1 className=" text-zinc-700 font-semibold mb-1">
                      Min-Order Quantity :{" "}
                      <span className="font-bold text-accent text-xl">
                        {tool.orderQuantity}{" "}
                      </span>{" "}
                      /u
                    </h1>
                    <h1 className=" text-zinc-700 font-semibold mb-1">
                      Unit Price :{" "}
                      <span className="font-bold text-accent text-xl">
                        ${tool.perPartsPrice}
                      </span>
                    </h1>

                    <p className="">
                      {" "}
                      <span className="font-semibold text-zinc-700">
                        Details: <br />{" "}
                      </span>{" "}
                      <span className="text-zinc-500">{tool.description}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-96  px-4 bg-accent pb-3  rounded-xl ">
                <h1 className="text-center text-4xl font-semibold  py-5  text-white">
                  Order Info
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      placeholder="Name"
                      class="input w-full placeholder:text-[15px] py-5 mb-3 "
                      defaultValue={user.displayName}
                      readOnly
                      name="name"
                      // {...register("name", { value: user.displayName })}
                    />

                    <input
                      type="text"
                      placeholder="Email"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                      defaultValue={user.email}
                      readOnly
                      name="email"
                      // {...register("email", { value: user.email })}
                    />
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                      // {...register("phone", {
                      //   required: {
                      //     value: true,
                      //     message: "Phone Number is required!",
                      //   },
                      // })}
                      name="phone"
                    />
                    {/* {errors.phone?.type === "required" && (
                      <span className="label-text-alt text-red-600  pl-1">
                        {errors.phone.message}
                      </span>
                    )} */}

                    <div className="flex items-center gap-3 justify-between">
                      
                    <input
                        type="number"
                        placeholder="Quantity"
                        class="input w-2/6 placeholder:text-[15px] py-5 my-3"
                        // onChange={increaseQuantity}
                        // {...register("quantity", {
                        //   required: {
                        //     value: true,
                        //     message: "Quantity is required!",
                        //   },
                        //   pattern: {

                        //   }
                        // })}
                        name="quantity"
                      />
                      
                      
                      <input
                        type="text"
                        placeholder="Where to Ship"
                        class="input w-4/6 placeholder:text-[15px] py-5 my-3"
                        name="address"
                        // {...register("address", {
                        //   required: {
                        //     value: true,
                        //     message: "Ship Address is required!",
                        //   },
                        // })}
                      />
                      {/* {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-600  pl-1">
                        {errors.address.message}
                      </span>
                    )} */}
                
                      {/* {errors.quantity?.type === "required" && (
                      <span className="label-text-alt text-red-600  pl-1">
                        {errors.quantity.message}
                      </span>
                    )} */}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`px-8 mt-5 text-lg w-full  rounded py-2 font-semibold font-koulen hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-gray-900`}
                  >
                    Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
