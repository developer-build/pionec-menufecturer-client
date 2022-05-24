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
      {/* <Navber /> */}
      <div className="h-screen bg-gray-100">
        <h1 className="text-primary pt-10 font-koulen font-semibold text-4xl text-center py-5 ">
          Payment Method
        </h1>
        <div className="flex flex-col px-10 md:flex-row justify-center mt-10 h-[50vh] items-center container  gap-5">
          <div class="card  h-full flex-1 bg-gray-100 shadow-md ">
            <div class="card-body text-accent">
              <h2 class="text-accent font-koulen uppercase font-semibold text-2xl">
                {" "}
                Welcome <span className="text-accent">{name}</span>{" "}
              </h2>
              <h2 class="uppercase font-semibold mt-5  text-accent">
                Payment For :{" "}
                <span className="text-accent font-bold font-koulen">
                  {toolsName}
                </span>
              </h2>
              <h2 className="mb-0 m">
                {" "}
                Order Quantity :{" "}
                <span className="text-accent font-bold font-koulen">
                  {quantity}
                </span>
              </h2>
              <h2 className="mb-0 m">
                {" "}
                Order Price :{" "}
                <span className="text-accent font-bold font-koulen">
                  {" "}
                  {price}
                </span>
              </h2>
              <h2 className="text-accent">
                Total Payment:{" "}
                <span className="text-accent font-bold font-koulen">
                  ${price}
                </span>
              </h2>

              <h2 className="mt-5 uppercase">
                Your total payment :{" "}
                <span className="text-primary font-bold">{price}</span>
              </h2>
            </div>
          </div>
          <div class="card  h-full w-full flex-1 bg-gray-100 ">
            <div class="">
              {/* <div className="flex justify-center items-center"> */}
              {/* <div className="flex h-36">
                <img className="w-1/2" src={cardImg4} alt="" />
                <img className="w-1/2 h-full" src={cardImg} alt="" />
              </div> */}
              <img className="w-72 " src={cardImg2} alt="" />
              {/* </div> */}
              <img src="" alt="" />
              <div className="m-3 mt-4">
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
