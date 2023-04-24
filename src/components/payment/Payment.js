import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

export default function Payment() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51N06PKSDEY5l14DM9qmy7cdVwYilSqpZ4nyp5IED3E6sIWd7MiQtEUTevAriJE7XNlMWasmenyPqqGDgjZvtC1u100qD48rbRi",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {/* <CheckoutForm /> */}
    </Elements>
  );
}
