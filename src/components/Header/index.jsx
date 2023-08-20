import React from "react";
import NavLink from "./NavLink";
import Icon from "./Icon";
import "../../styles/Header.css";

export default function index() {
  return (
    <div className="header">
      <Icon />
      <NavLink />
    </div>
  );
}
