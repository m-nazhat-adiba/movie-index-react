import React from "react";
import ReactButton from "../common/ReactButton";

export default function NavLink() {
  return (
    <div className="nav-link">
      <div className="nav-link-sub">
        <ReactButton variant="text" color="primary" size="md">
          Home
        </ReactButton>
        <ReactButton variant="text" color="primary" size="md">
          Featured
        </ReactButton>
      </div>
      <ReactButton variant="fill" color="primary" size="md">
        Login
      </ReactButton>
    </div>
  );
}
