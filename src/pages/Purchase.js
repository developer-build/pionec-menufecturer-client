import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../shared/firebase.init";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
const Purchase = () => {
  const [tool, setTool] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    axios.get(url).then((res) => setTool(res.data));
  }, [id]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  console.log(quantity);
  const onSubmit = async (data) => {
    setQuantity(data.quantity);
    reset();
  };
  const [user] = useAuthState(auth);

  return (
    <div>
      <Navber></Navber>
      <div>
        <div className="bg-secondary ">
          <div className=" container pt-10 pb-20 ">
            <h1 className="text-center text-4xl font-koulen font-semibold uppercase pb-16 text-accent">
              Purchase <span className="text-primary">tools</span>
            </h1>
            <div className="w-full gap-5  flex justify-between items-start ">
              <div className="w-4/6">
                <div className="flex items-center bg-white py-10 px-5 rounded-xl h-full justify-center gap-5">
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
              <div className="w-96  px-5 bg-accent pb-5  rounded-xl ">
                <h1 className="text-center text-4xl font-semibold  py-5  text-white">
                  Fill UP
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      placeholder="Name"
                      class="input w-full placeholder:text-[15px] py-5 mb-3 "
                      defaultValue={user.displayName}
                      disabled
                      {...register("name", { value: user.displayName })}
                    />

                    <input
                      type="text"
                      placeholder="Email"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                      defaultValue={user.email}
                      disabled
                      {...register("email", { value: user.email })}
                    />
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      class="input w-full placeholder:text-[15px] py-5 my-3"
                      {...register("phone", { required: true })}
                    />

                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Where to Ship"
                        class="input  placeholder:text-[15px] w-4/6 py-5 my-3"
                        {...register("address", { required: true })}
                      />
                      <input
                        type="number"
                        placeholder="Quantity"
                        class="input w-2/6 placeholder:text-[15px] py-5 my-3"
                        {...register("quantity", { required: true })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-8 mt-5 text-lg w-full  rounded py-2 font-semibold font-koulen hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-gray-900"
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
