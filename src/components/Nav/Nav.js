import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";

export const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    //If window scroll happens transitionNav function will work

    window.addEventListener("scroll", transitionNav);

    //clean up function to avoid errors
    return () => window.removeEventListener("scroll", transitionNav);
  });

  return (
    <div className={`nav ${show && "nav-show"}`}>
      <img src={logo} alt="" />
      <div className="nav__account">
        <p>Welcome</p>
        <div></div>
      </div>
    </div>
  );
};
