import React, { useEffect, useState } from "react";
import "./Keyboard.css";
import {
  KEYBOARD_TOP,
  KEYBOARD_MID,
  KEYBOARD_BOTTOM,
} from "../../sources/constants";

const Keyboard = () => {
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
    if (!clickedButtons.has(letter)) {
        setClickedButtons((prevClickedButtons) => 
        new Set(prevClickedButtons.add(letter)))
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
              backgroundColor: clickedButtons.has(letter) ? "gray" : "white", // Cambia los colores como desees
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
              backgroundColor: clickedButtons.has(letter) ? "gray" : "white", // Cambia los colores como desees
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
              backgroundColor: clickedButtons.has(letter) ? "gray" : "white", // Cambia los colores como desees
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
