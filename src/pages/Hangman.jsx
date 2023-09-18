import React, { useEffect, useState } from "react";
import { WORDS } from "../sources/constants";
import "./Hangman.css";
import Keyboard from "../components/Keyboard/Keyboard";

const Hangman = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [inputElements, setInputElements] = useState([]);

  const handleClick = () => {
    let randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setInputNumber(randomWord.length);
  };

  useEffect(() => {
    handleClick();
    if (inputNumber !== null) {
      const inputs = [];
      for (let i = 0; i < inputNumber; i++) {
        inputs.push(
          <p className="letter" key={i}>
            _
          </p>
        );
      }
      setInputElements(inputs);
    }
  }, [inputNumber]);

  return (
    <article className="board">
      <h1>Hangman</h1>
      <div className="button-wrapper">
        <button onClick={handleClick}>Start game!</button>
      </div>
      <section className="game hangman-game">
        <div className="hangman">{inputElements}</div>
        <Keyboard />
      </section>
    </article>
  );
};

export default Hangman;
