import React from "react";
import { NavLink } from "react-router-dom";

const Play = ({ game }) => {
  return (
    <div className="button-wrapper">
      <button>
        <NavLink to={`/${game.name}`}>Play {game.name}</NavLink>
      </button>
    </div>
  );
};

export default Play;
