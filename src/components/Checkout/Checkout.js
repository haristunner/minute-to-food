import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { Input } from "../Input/Input";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const [popUp, setPopUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (popUp) {
      setTimeout(() => {
        setPopUp(false);
        navigate("/home");
      }, [4000]);
    }
  }, [popUp]);

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h3 className="heading-3">Credit card checkout</h3>
        <Input label="Cardholder's Name" type="text" name="name" />
        <Input
          label="Card Number"
          type="number"
          name="card_number"
          imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
        />
        <div className="row">
          <div className="col">
            <Input label="Expiration Date" type="month" name="exp_date" />
          </div>
          <div className="col">
            <Input label="CVV" type="number" name="cvv" />
          </div>
        </div>
        <button
          className="checkout-btn"
          onClick={() => {
            setPopUp(true);
          }}
        >
          Place Order
        </button>
      </div>
      {popUp ? (
        <div className="checkout-popUp">
          <p>Order placed</p>
          <CheckCircleOutlineRoundedIcon style={{ color: "#6cff47" }} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
