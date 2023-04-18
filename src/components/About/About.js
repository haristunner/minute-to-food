import React from "react";
import "./About.css";
import food from "../../assets/food.jpg";

export const About = () => {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about">
      <span>
        <h2>Restaurants in your Hand</h2>
        <p>Order from your favorite restaurants & track on.</p>
        <button onClick={top}>Order now</button>
      </span>
      <img src={food} alt="" />
    </div>
  );
};
