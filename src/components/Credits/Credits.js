import React from "react";
import "./Credits.css";

export const Credits = () => {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="credits">
      <button onClick={top}>^</button>
      <div className="credits__line"></div>
      <p>© 2023 - Hari Prasath</p>
    </div>
  );
};
