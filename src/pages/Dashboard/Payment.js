import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../../shared/Spinner";
import CheckoutForm from "./CheckoutForm";
import cardImg2 from "../../assests/imges/icons/card-3.png";

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
      
      <div className="h-screen bg-gray-800">
        <h1 className="text-primary  pt-10 font-koulen font-semibold text-4xl text-center uppercase py-5 ">
          Payment Method
        </h1>
        <div className="flex flex-col rounded-xl md:flex-row justify-center mt-8 md:mt-20  items-center mx-auto container w-full md:w-5/6 bg-accent py-3 ">
          <div class="card  h-full flex-1 bg-accent  ">
            <div class="card-body ml-0 pl-3 text-white">
              <h2 class="text-white font-koulen uppercase font-semibold text-2xl">
                {" "}
                Welcome <span className="text-white">{name}</span>{" "}
              </h2>
              <h2 class="uppercase font-semibold mt-5  text-white">
                Payment For :{" "}
                <span className="text-white font-bold font-koulen">
                  {toolsName}
                </span>
              </h2>
              <h2 className="mb-0 m">
                {" "}
                Order Quantity :{" "}
                <span className="text-white font-bold font-koulen">
                  {quantity}
                </span>
              </h2>
              <h2 className="mb-0 m">
                {" "}
                Order Price :{" "}
                <span className="text-white font-bold font-koulen">
                  {" "}
                  {price}
                </span>
              </h2>
              <h2 className="text-white">
                Total Payment:{" "}
                <span className="text-white font-bold font-koulen">
                  ${price}
                </span>
              </h2>

              <h2 className="mt-10 uppercase text-xl font-koulen">
                Your total payment :{" "}
                <span className="text-primary font-bold">${price}</span> 
              </h2>
            </div>
          </div>
          <div class="card   w-full h-full  flex-1 bg-white opacity-80  ">
            <div class="">
              <img className="w-72 " src={cardImg2} alt="" />
              <img src="" alt="" />
              <div className="m-3 mt-5 bg-white ">
                <Elements stripe={stripePromise}>
                  <CheckoutForm tool={tool} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
