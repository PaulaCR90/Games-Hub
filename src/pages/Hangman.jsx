import React, { useEffect, useState } from "react";
import {
  WORDS,
  KEYBOARD_TOP,
  KEYBOARD_MID,
  KEYBOARD_BOTTOM,
} from "../sources/constants";
import "./Hangman.css";
import confetti from "canvas-confetti";
import HangmanModal from "../components/HangmanModal/HangmanModal";
import Back from "../components/Buttons/Back";
import Button from "../components/Buttons/Button";

const Hangman = () => {
  const [letterQuantity, setLetterQuantity] = useState(0);
  const [displayWord, setDisplayWord] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState(new Set());
  const [clickedButtons, setClickedButtons] = useState(new Set());
  const [tries, setTries] = useState(6);
  const [winner, setWinner] = useState(false);

  const handleClickLetter = (letter) => {
    if (randomWord.includes(letter)) {
      setCorrectLetters(
        (prevCorrectLetters) => new Set(prevCorrectLetters.add(letter))
      );
      updateDisplayWord(letter);
    } else {
      setTries(tries - 1);
      setClickedButtons(
        (prevClickedButtons) => new Set(prevClickedButtons.add(letter))
      );
      // Handle incorrect guess here
    }
  };

  const updateDisplayWord = (letter) => {
    const updatedDisplayWord = [...displayWord];
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        updatedDisplayWord[i] = letter;
      }
    }
    setDisplayWord(updatedDisplayWord);

    if (updatedDisplayWord.join("") === randomWord) {
      setWinner(true);
    }
  };

  const handleClick = () => {
    let getRandomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setLetterQuantity(getRandomWord.length);
    setRandomWord(getRandomWord);
    setCorrectLetters(new Set());
    setClickedButtons(new Set());
    setDisplayWord(new Array(getRandomWord.length).fill("_"));
    setTries(6);
    setWinner(false);
  };

  useEffect(() => {
    handleClick();
  }, []);

  const basePath = "./assets/";
  let imageToShow;
  switch (tries) {
    case 0:
      imageToShow = "image0.png";
      break;
    case 1:
      imageToShow = "image1.png";
      break;
    case 2:
      imageToShow = "image2.png";
      break;
    case 3:
      imageToShow = "image3.png";
      break;
    case 4:
      imageToShow = "image4.png";
      break;
    case 5:
      imageToShow = "image5.png";
      break;
    case 6:
      imageToShow = "image6.png";
      break;
  }
  const imageUrl = basePath + imageToShow;

  return (
    <article className="board">
      <h1 className="hangman-title">Hangman</h1>
      <Button text={"Start new game!"} onClick={handleClick} />
      <section className="game hangman-game">
        <img className="imageToShow" src={imageUrl} alt={`Imagen para tries = ${tries}`} />
        <div className="hangman">
          {displayWord.map((letter, index) => (
            <p className="letter" key={index}>
              {letter}
            </p>
          ))}
        </div>
        <div className="keyboard">
          <div className="keyboard-top">
            {KEYBOARD_TOP.map((letter, index) => (
              <button
                onClick={() => handleClickLetter(letter)}
                style={{
                  backgroundColor: correctLetters.has(letter)
                    ? "green"
                    : "white",
                }}
                disabled={clickedButtons.has(letter)}
                key={index}
                className="button"
              >
                {letter}
              </button>
            ))}
          </div>
          <div className="keyboard-mid">
            {KEYBOARD_MID.map((letter, index) => (
              <button
                onClick={() => handleClickLetter(letter)}
                style={{
                  backgroundColor: correctLetters.has(letter)
                    ? "green"
                    : "white",
                }}
                disabled={clickedButtons.has(letter)}
                key={index}
                className="button"
              >
                {letter}
              </button>
            ))}
          </div>
          <div className="keyboard-bottom">
            {KEYBOARD_BOTTOM.map((letter, index) => (
              <button
                onClick={() => handleClickLetter(letter)}
                style={{
                  backgroundColor: correctLetters.has(letter)
                    ? "green"
                    : "white",
                }}
                disabled={clickedButtons.has(letter)}
                key={index}
                className="button"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
        {winner || tries === 0 ? (
          <HangmanModal winner={winner} randomWord={randomWord} handleClick={handleClick} />
        ) : (
          <h3 className="tries">{tries} tries remaining!</h3>
        )}
      </section>
      <Back />
    </article>
  );
};
export default Hangman;
