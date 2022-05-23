import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../../shared/Spinner";
import CheckoutForm from "./CheckoutForm";
import cardImg from "../../assests/imges/icons/card-2.png";
import cardImg2 from "../../assests/imges/icons/card-3.png";
import cardImg3 from "../../assests/imges/icons/card-4.png";
const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51L0iOtAL8nuA0IetlYxU63Bvia0gn5ZwGjcHEvpDwrsePOe7zINq2mtp7k4ZkFoSX1GHkxKnsuNu2fnLpJqI5GNP00FYxhFiAA"
  );
  const { data: tool, isLoading } = useQuery(["toolsOrder", id], () =>
    fetch(`http://localhost:4000/order/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const { name, toolsName, quantity, price } = tool;
  return (
    <div className="bg-accent">
      {/* <Navber /> */}
      <div className="h-screen bg-secondary">
        <h1 className="text-primary pt-10 font-koulen font-semibold text-4xl text-center py-5 ">
          Payment Method
        </h1>
        <div className="flex flex-col px-10 md:flex-row justify-center mt-10 h-[50vh] items-center container  gap-5">
          <div class="card w-full h-full flex-1 bg-white shadow-xl ">
            <div class="card-body text-accent">
              <h2 class="text-accent font-semibold text-2xl">
                {" "}
                Welcome {name}{" "}
              </h2>
              <h2 class="card-title text-accent">
                Pay For <span className="text-accent">{toolsName}</span>
              </h2>
              <p> Order Quantity : {quantity}</p>
              <p> Order Price : {price}</p>

              <p className="text-accent">
                You have to Pay :{" "}
                <span className="font-semibold">${price}</span>
              </p>
            </div>
          </div>
          <div class="card p-3 h-full w-full flex-1 bg-neutral shadow-xl">
            <div class="">
              {/* <div className="flex justify-center items-center"> */}
              <img className="w-52" src={cardImg2} alt="" />
              <img className="w-52" src={cardImg3} alt="" />
             {/* </div> */}
              <img src="" alt="" />
              <div className=" mt-7">
                <Elements stripe={stripePromise}>
                  <CheckoutForm tool={tool} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Payment;
