import React from "react";
import "./Features.css";
import svg1 from "../../assets/svg1.svg";
import svg2 from "../../assets/svg2.svg";
import svg3 from "../../assets/svg3.svg";

export const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <img src={svg1} alt="" />
        <h3>No minimum Order</h3>
        <p>
          Order in for yourself or for the group, with no restrictions on order
          value
        </p>
      </div>
      <div className="feature">
        <img src={svg2} alt="" />
        <h3>Live Order Tracking</h3>
        <p>
          Know where your order is at all times, from the restaurant to your
          doorstep
        </p>
      </div>
      <div className="feature">
        <img src={svg3} alt="" />
        <h3>Lightning-Fast Delivery</h3>
        <p>
          Experience Swiggy's superfast delivery for food delivered fresh & on
          time
        </p>
      </div>
    </div>
  );
};
