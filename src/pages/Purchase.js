import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import fetcher from "../api";
import auth from "../shared/firebase.init";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
import Spinner from "../shared/Spinner";
const Purchase = () => {
  const [tool, setTool] = useState({});
  const [quantity, setQuantity] = useState();
  const [loading, setLoading] = useState(false);

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
  const [user] = useAuthState(auth);
  const getQuantity = (event) => {
    const quantityNumber = event.target.value;
    if (quantityNumber < tool.orderQuantity) {
      toast.error("Order minimum Quality", {
        id: 12,
        position: "bottom-right",
      });
    }
    setQuantity(quantityNumber);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const phoneNumber = event.target.phone.value;
    const address = event.target.address.value;
    if (phoneNumber && address && quantity) {
      if (quantity < tool.orderQuantity) {
        toast.error("You have to order minimun quantiy", {
          id: 1,
          position: "bottom-right",
        });
      } else if (quantity > tool.availableQuantity) {
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
                      units
                    </h1>
                    <h1 className=" text-zinc-700 font-semibold mb-1">
                      Min-Order Quantity :{" "}
                      <span className="font-bold text-accent text-xl">
                        {tool.orderQuantity}{" "}
                      </span>{" "}
                      units
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
                    />

                    <input
                      type="text"
                      placeholder="Email"
                      class="input w-full placeholder:text-[15px] py-5 mb-3"
                      defaultValue={user.email}
                      readOnly
                      name="email"
                    />
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      class="input w-full placeholder:text-[15px] py-5 mb-3"
                      name="phone"
                    />

                    <div className="flex mb-4 items-center justify-between gap-3">
                      <input
                        onChange={getQuantity}
                        type="number"
                        placeholder="Quantity"
                        class="input  placeholder:text-[15px] py-5 w-full "
                        name="quantity"
                       
                      />

                      <input
                        type="text"
                        placeholder="Where to Ship"
                        class="input  placeholder:text-[15px] py-5 w-full"
                        name="address"
                      />
                    </div>
                  </div>

                  <button
                    // disabled={quantity<tool.orderQuantity}
                    type="submit"
                    className={`btn btn-md w-full ${
                      quantity < tool.orderQuantity||
                      quantity > tool.availableQuantity
                        ? "btn-disabled bg-zinc-500"
                        : "btn-primary"
                    }`}
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
