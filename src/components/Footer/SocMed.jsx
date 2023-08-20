import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
} from "react-icons/fa";

export default function SocMed() {
  return (
    <div className="socmed-container">
      <FaFacebookSquare className="socmed-icon" />
      <FaTwitterSquare className="socmed-icon" />
      <FaRedditSquare className="socmed-icon" />
    </div>
  );
}
