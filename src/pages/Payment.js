import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
import Spinner from "../shared/Spinner";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51L0iOtAL8nuA0IetlYxU63Bvia0gn5ZwGjcHEvpDwrsePOe7zINq2mtp7k4ZkFoSX1GHkxKnsuNu2fnLpJqI5GNP00FYxhFiAA"
  );
  const {
    data: tool,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:4000/order/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const { _id, name, toolsName, quantity, price } = tool;
  return (
    <div className="bg-accent">
      <Navber />
      <div className="h-screen bg-secondary">
        <h1 className="text-primary pt-10 font-koulen font-semibold text-4xl text-center py-5 ">
          Payment Method
        </h1>
        <div className="flex flex-col md:flex-row justify-center h-[60vh] items-center  gap-5">
          <div class="card w-full md:w-96 bg-white shadow-xl">
            <div class="card-body">
              <h2 class="text-accent text-2xl"> Hello {name} </h2>
              <h2 class="card-title text-accent">
                Pay For <span className="text-secondary">{toolsName}</span>
              </h2>
              <p>
                Your Appointment Date :{" "}
                <span className="text-secondary">{quantity}</span>
                <br /> Time : <span className="text-secondary ">{price}</span>
              </p>
              <p className="text-accent">
                You have to Pay :{" "}
                <span className="font-semibold">${toolsName}</span>
              </p>
            </div>
          </div>
          <div class="card w-full md:w-96 bg-white shadow-xl">
            <div class="card-body">
              <Elements stripe={stripePromise}>
              <CheckoutForm tool={tool} />
            </Elements>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
