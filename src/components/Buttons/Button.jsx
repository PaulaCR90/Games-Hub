import React from "react";
import "../../pages/Home.css"

const Button = ({ text, onClick }) => {
  return (
    <div className="button-wrapper">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
