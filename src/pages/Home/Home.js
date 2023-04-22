import React from "react";
import { Nav } from "../../components/Nav/Nav";
import { Food } from "../../components/Food/Food";

export const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Nav />
      <Food />
    </div>
  );
};
