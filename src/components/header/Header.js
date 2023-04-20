import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import biriyani from "../../assets/biriyani.jpg";
// import { Register } from "../Register/Register";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="header">
      <header>
        <div className="header__head">
          <img src={logo} alt="" />
          <div className="header__btn">
            <Button
              variant="contained"
              endIcon={<GoogleIcon />}
              style={{ backgroundColor: "#fc8019", borderColor: "#fc8019" }}
              onClick={signIn}
            >
              Sign In With
            </Button>
          </div>
        </div>

        <h1></h1>
        <h4>Order food from your favourite restaurants near you.</h4>
        <div className="header__form">
          <input type="text" placeholder="Enter your current location" />
          <button>FIND FOOD</button>
        </div>
        <div className="header__place">
          <h5>POPULAR CITIES IN INDIA</h5>
          <p>
            Ahmedabad <span>Bengaluru</span> Chennai <span>Delhi</span> Gurgaon{" "}
            <span>Hyderabad</span> Kolkata <span>Mumbai</span> Pune{" "}
            <span>&more.</span>
          </p>
        </div>
      </header>
    </div>
  );
};
