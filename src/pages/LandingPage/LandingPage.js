import React from "react";
import "./LandingPage.css";
import { Header } from "../../components/header/Header";
import { Features } from "../../components/Features/Features";
import { Credits } from "../../components/Credits/Credits";
import { About } from "../../components/About/About";

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <Features />
      <About />
      <Credits />
    </div>
  );
};
