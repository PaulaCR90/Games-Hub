import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div className="button-wrapper">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
