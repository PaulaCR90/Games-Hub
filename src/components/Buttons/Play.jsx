import React from "react";
import { NavLink } from "react-router-dom";
import "./Buttons.css";

const Play = ({ game }) => {
  return (
    <div className="button-wrapper">
      <button className="play-button">
        <NavLink to={`/${game.name}`}>Play {game.name}</NavLink>
      </button>
    </div>
  );
};

export default Play;
