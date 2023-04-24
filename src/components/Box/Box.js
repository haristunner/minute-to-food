import React from "react";
//Box css is in Food.css

export const Box = (props) => {
  return (
    <div className="box">
      <img src={props.img} alt="" />
      <h3>{props.h3}</h3>
      <p>{props.p} </p>
      <h6>
        INR
        <span> {props.span}</span>
      </h6>
    </div>
  );
};
