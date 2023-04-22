import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";

export const Nav = () => {
  const [show, setShow] = useState(false);
  const username = useSelector((state) => state.user.username);
  const profileURL = useSelector((state) => state.user.profile);

  const transitionNav = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    //If window scroll happens transitionNav function will work

    window.addEventListener("scroll", transitionNav);

    //clean up function to avoid errors
    return () => window.removeEventListener("scroll", transitionNav);
  });

  return (
    <div className={`nav ${show && "nav-show"}`}>
      <img src={logo} alt="" onClick={top} />
      <div className="nav__account">
        <p>
          Welcome <br /> <span>{username}</span>
        </p>
        <img src={profileURL} alt="" />
      </div>
    </div>
  );
};
