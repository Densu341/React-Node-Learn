import React from "react";

// Komponen Tombol
const Button = ({ variant, children, onClick }) => {
  let color;
  switch (variant) {
    case "delete":
      color = "red";
      break;
    case "archive":
      color = "blue";
      break;
    case "add":
      color = "green";
      break;
    default:
      color = "gray";
  }

  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
