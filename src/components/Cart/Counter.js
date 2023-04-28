import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { counter_reducer, set_total } from "../../features/User/userSlice";

export const Counter = (props) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  const cost = props.cost * counter;

  return (
    <div className="counter">
      <h6 style={{ marginBottom: "1vh", fontSize: "18px" }}>
        INR <span>{cost}</span>
      </h6>
      <div
        className="counter__container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "7px",
        }}
      >
        <button
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            } else return;
          }}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <RemoveIcon style={{ fontSize: "18px", color: "#e50914" }} />
        </button>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "3px",
            padding: "0 5px",
          }}
        >
          {counter}
        </p>

        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <AddIcon style={{ fontSize: "18px", color: "#0f8a65" }} />
        </button>
      </div>
    </div>
  );
};
