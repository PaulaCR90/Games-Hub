import React from "react";
import { NavLink } from "react-router-dom";

const Back = () => {
  return (
    <div className="button-wrapper back-div">
      <NavLink to="/Home">
        <button className="back">Back home</button>
      </NavLink>
    </div>
  );
};

export default Back;
