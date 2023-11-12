import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import PayAPI from "../../../utils/Api/paymantApi";
import { $page } from "../../../store/helpersStore";
import { useStore } from "@nanostores/react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_YXhgLEwTTJdW2AfHsgJJNfAN");

// const data = { total: 50 };

export default function Payment({ data = { total: 4999 } }) {
  const [clientSecret, setClientSecret] = useState("");
  const page = useStore($page);

  const getSeecret = async () => {
    const response =
      page === "payCard"
        ? await PayAPI.makePay(data)
        : await PayAPI.payStickers({ total: 499 });

    return setClientSecret(response.data.clientSecret);
  };

  useEffect(() => {
    getSeecret();
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#433E3E",
      gap: "55px",
      fontSize: "14px",
      colorText: "#433E3E",
      fontFamily: "Roboto",
      spacingUnit: "5px",
      borderRadius: "8px",
      border: "1px solid #C5C3C3",
    },
    rules: {
      ".Label": {
        fontSize: "14px",
        colorText: "#C5C3C3",
      },
    },
  };

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm sum={data} />
        </Elements>
      )}
    </div>
  );
}
