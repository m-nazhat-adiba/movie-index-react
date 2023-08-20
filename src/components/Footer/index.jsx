import React from "react";
import "../../styles/Footer.css";
import SocMed from "./SocMed";

export default function index() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-text">
          Our Platform is trusted by millions & features best updated movies all
          around the world.
        </h1>
      </div>
      <div className="footer-right">
        <img className="footer-icon" src="/src/assets/icon.png" />
        <SocMed />
      </div>
    </div>
  );
}
