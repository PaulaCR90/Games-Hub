import React from "react";

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const winnerText = winner === false ? "Draw" : "Won";
  return (
    <section className="winner">
      <div className="text">
        <p className="win">{winner} {winnerText}!</p>
        <div className="button-wrapper">
          <button onClick={resetGame}>Start again!</button>
        </div>
      </div>
    </section>
  );
};

export default WinnerModal;
