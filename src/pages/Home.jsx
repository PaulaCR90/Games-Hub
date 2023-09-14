import React from "react";
import { Games } from "../sources/Games";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <article>
      {Games.map((game) => (
        <section key={game.name}>
          <h4>{game.name}</h4>
          <div className="each-game-div">
            <img src={game.image} alt={game.name} />
            <p>{game.description}</p>
          </div>
          <div className="button-wrapper">
            <button>
              <NavLink to={`/${game.name}`}>Play {game.name}</NavLink>
            </button>
          </div>
        </section>
      ))}
    </article>
  );
};

export default Home;
