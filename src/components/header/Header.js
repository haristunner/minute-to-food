import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import biriyani from "../../assets/biriyani.jpg";
// import { Register } from "../Register/Register";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  set_location,
  set_profile,
  set_username,
} from "../../features/User/userSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [disable, setDisable] = useState(true);

  const signIn = (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("user", auth.currentUser.displayName);
        window.localStorage.setItem("profile", auth.currentUser.photoURL);
        window.localStorage.setItem("location", location);

        //dispatch the data to userSlice
        dispatch(set_username(auth.currentUser.displayName));
        dispatch(set_profile(auth.currentUser.photoURL));
        dispatch(set_location(location));
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("user", auth.currentUser.displayName);
        window.localStorage.setItem("profile", auth.currentUser.photoURL);
        window.localStorage.setItem("location", location);

        //dispatch the data to userSlice
        dispatch(set_username(auth.currentUser.displayName));
        dispatch(set_profile(auth.currentUser.photoURL));
        dispatch(set_location(location));
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (location === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [location]);

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
              disabled={disable}
            >
              Sign In With
            </Button>
          </div>
        </div>

        <h1></h1>
        <h4>Order food from your favourite restaurants near you.</h4>
        <div className="header__form">
          <input
            type="text"
            placeholder="Enter your current location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            autoFocus
          />
          <button onClick={login}>FIND FOOD</button>
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
