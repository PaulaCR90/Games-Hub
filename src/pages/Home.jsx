import React from "react";
import { Games } from "../sources/Games";
import "./Home.css";
import Play from "../components/Buttons/Play";

//! Acceso protegido mediante autenticación.
//! Se puede almacenar en localStorage.

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
          <Play game={game} />
        </section>
      ))}
    </article>
  );
};

export default Home;
