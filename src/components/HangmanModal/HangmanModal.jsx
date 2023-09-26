import React from 'react'

const HangmanModal = ({ winner, handleClick, randomWord }) => {
    const winnerText = winner === false ? `Oops! The word was: ${randomWord}` : "You won!";
    return (
      <section className="winner">
        <div className="text">
          <p className="win">{winnerText}!</p>
          <div className="button-wrapper">
            <button onClick={handleClick}>Start again!</button>
          </div>
        </div>
      </section>
    );
  };

export default HangmanModal;