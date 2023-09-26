import React, { useContext, useEffect, useState } from "react";
import "./Keyboard.css";
import {
  KEYBOARD_TOP,
  KEYBOARD_MID,
  KEYBOARD_BOTTOM,
} from "../../sources/constants";
import { CorrectLettersContext } from "../../context/CorrectLetterContext";

const Keyboard = ({ randomWord }) => {
  const { correctLetters, setCorrectLetters } = useContext(CorrectLettersContext);
  const [clickedButtons, setClickedButtons] = useState(new Set());
  // new crea una instancia de un objeto
  // Set() representa una colección de valores únicos.
  // Por lo que estamos inicializando clickedButtons con una simulación de objeto en el que
  // no puede haber dos cosas iguales.

  const handleClickLetter = (letter) => {
    // Si clickedButtons no contiene la letra pulsada, seteamos a partir de la anterior clickedButtons
    // creando una nueva instancia de objeto con valores únicos que contentgan los anteriores y la
    // nueva letra
    //* Para cambiar de color la propia letra para marcar que ya ha sido usada
    if (randomWord.includes(letter)) {
      setCorrectLetters((prevCorrectLetters) =>
        new Set(prevCorrectLetters.add(letter))
      );
    } else {
      setClickedButtons(
        (prevClickedButtons) => new Set(prevClickedButtons.add(letter))
      );
    }

    //* coger la palabra aleatoria y recorrerla comprobando que la letra clickada esté
    //* en la palabra.

    

    //! Si está. Rellenar hueco
    //! Si no está. Restar un intento
    //? Animación en la resta de intentos
  };

  return (
    <div className="keyboard">
      <div className="keyboard-top">
        {KEYBOARD_TOP.map((letter, index) => (
          <button
            onClick={() => handleClickLetter(letter)}
            style={{
              backgroundColor: correctLetters.has(letter) ? "green" : "white",
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
              backgroundColor: correctLetters.has(letter) ? "green" : "white",
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
              backgroundColor: correctLetters.has(letter) ? "green" : "white",
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
  );
};

export default Keyboard;
