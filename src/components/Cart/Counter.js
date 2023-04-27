import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { counter_reducer } from "../../features/User/userSlice";

export const Counter = (props) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  if (counter !== 0) {
    dispatch(counter_reducer(counter));
  }

  return (
    <div className="counter">
      <h6>
        INR <span>{props.cost * counter}</span>
      </h6>
      <div
        className="counter__container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <button
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            } else return;
          }}
        >
          <RemoveIcon />
        </button>

        <p>{counter}</p>

        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};
