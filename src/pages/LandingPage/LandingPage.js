import React from "react";
import "./LandingPage.css";
import { Header } from "../../components/header/Header";
import { Features } from "../../components/Features/Features";

export const LandingPage = () => {
  return <div className="landingPage">
    <Header />
    <Features />
  </div>;
};
