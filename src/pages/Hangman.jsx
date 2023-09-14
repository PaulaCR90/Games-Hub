import React from "react";
import { WORDS } from "../sources/constants";

const Hangman = () => {
  const handleClick = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.lenght)];
  }

  return (
    <article className="board">
      <h1>Hangman</h1>
      <div className="button-wrapper">
        <button onClick={handleClick}>Start game!</button>
        <section className="game"></section>
      </div>
      <section className="game">
        
      </section>
    </article>
  );
};

export default Hangman;
