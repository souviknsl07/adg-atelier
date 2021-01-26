import React from "react";
import "./Hamburger.css";

function Hamburger({ click }) {
  return (
    <button className="hamburger" onClick={click}>
      <div className="hamburger__line" />
      <div className="hamburger__line" />
      <div className="hamburger__line" />
    </button>
  );
}

export default Hamburger;
