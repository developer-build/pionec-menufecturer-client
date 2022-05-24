import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ tool }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, name, email } = tool;
  useEffect(() => {
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //   authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    // confrim card payment
    setSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransectionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is Successfull");
      toast.success("Congrats! Your payment is Successfull");
      const payment = {
        tools: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`http://localhost:4000/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <div>
      <form className="text-white relative" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#afdlrd",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        {success && (
          <>
            <p className="text-sm text-accent font-semibold mt-2 ">
              Transection Id :{" "}
              <span className="text-success font-bold font-koulen">{transectionId}</span>
            </p>
          </>
        )}
        {cardError && (
          <p className="text-sm text-error mb-0 mt-3 ">{cardError}</p>
        )}
        <button
          className={`btn btn-md ${cardError||success ? "mt-4" : "mt-12"} `}
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          make the payment
        </button>
      </form>
    </div>
  );
};
export default CheckoutForm;
