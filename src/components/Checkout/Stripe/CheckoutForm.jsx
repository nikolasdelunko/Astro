import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
// import { useSelector } from "react-redux";
import { PatchOrderPay } from "../../../utils/Api/orderApi";
import { postStickers } from "../../../utils/Api/stickerApi";
// import { useDispatch } from "react-redux";
// import { addPay } from "../../../store/story/storySlice";
// import {
//   setPaySticker,
//   setClient,
// } from "../../../store/stickers/stickersSlice";
import { url } from "../../../utils/Api/url";

const CheckoutForm = ({ sum }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const email = useSelector((state) => state.story.storyBook);
  // const page = useSelector((state) => state.helpers.page);
  // const listPhoto = useSelector((state) => state.stickers.listPhoto);
  // const dispatch = useDispatch();

	//! dispatch

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const fetchPay = async (data) => {
      try {
        if (page === "payCard") {
          await PatchOrderPay(email);
          // dispatch(addPay(true));
        } else if (page === "UploadImage") {
          const client = await postStickers(listPhoto);
          // dispatch(setClient(client.data));
          // dispatch(setPaySticker(true));
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchPay();
    const redirect = () => {
      if (page === "payCard") {
        return `${url}/payment-successfully`;
      } else if (page === "UploadImage") {
        return `${url}/stickers-payment-successfully`;
      }
    };
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        fetchPay,
        return_url: redirect(),
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      fetchPay();
      // dispatch()
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-[48px]">
      <PaymentElement onPaymentSuccess={handleSubmit} />
      <button
        className="btn mt-[48px] w-[100%] justify-center"
        disabled={!stripe}
      >
        Purchase ( £{page === "payCard" ? "49.99" : "4.99"})
      </button>
    </form>
  );
};

export default CheckoutForm;
