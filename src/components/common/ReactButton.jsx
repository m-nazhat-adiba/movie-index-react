import React from "react";

const VARIANTS = {
  fill: "btn-fill",
  text: "btn-text",
  outline: "btn-outline",
};
const COLOR = {
  primary: "btn-color-primary",
  secondary: "btn-color-secondary",
  success: "btn-color-success",
  danger: "btn-color-danger",
};
const SIZE = {
  lg: "btn-lg",
  md: "btn-md",
  sm: "btn-sm",
};

export default function ReactButton({ children, variant, color, size }) {
  const btnStyle = `${VARIANTS[variant]} ${COLOR[color]} ${SIZE[size]}`;
  return (
    <div>
      <button className={btnStyle}>{children}</button>
    </div>
  );
}
