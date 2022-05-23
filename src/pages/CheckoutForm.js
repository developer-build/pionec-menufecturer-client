import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ tool }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");

  const [transectionId, setTransectionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, name, email } = tool;
  console.log(tool);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    //   const fetching = async () => {
    //       const res = axios.post('http://localhost:4000/create-payment-intent')
    //   }
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
        const payment = {
          tools: _id,
          transactionId: paymentIntent.id,
        };
      //   fetch(`https://shrouded-retreat-40682.herokuapp.com/booking/${_id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "content-type": "application/json",
      //     //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //     },
      //     body: JSON.stringify(payment),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {});
      }
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-success mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-sm text-error pt-3">{cardError}</p>}
      {success && (
        <>
          <p className="text-sm text-success pt-3">{success}</p>
          <p className="text-sm text-success ">
            Transection Id :{" "}
            <span className="text-accent">{transectionId}</span>
          </p>
        </>
      )}
    </div>
  );
};
export default CheckoutForm;
