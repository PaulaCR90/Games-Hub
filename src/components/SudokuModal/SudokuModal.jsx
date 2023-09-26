import React from "react";
import Button from "../Buttons/Button";

const SudokuModal = ({ winner, handleResetGame, handleOutModal, isModalOpen }) => {
  const winnerText =
    winner === false ? "Oops! It's not solved correctly" : "Congratulations!";
  return (
    <section className={`winner ${isModalOpen ? "show" : "hide"}`}>
      <div className="text">
        <p className="win">{winnerText}!</p>

        {winner ? (
          <Button text={"Start again"} onClick={handleResetGame} />
        ) : (
          <>
            <Button text={"Continue solving"} onClick={handleOutModal} />
            <Button text={"Start again"} onClick={handleResetGame} />
          </>
        )}
      </div>
    </section>
  );
};

export default SudokuModal;
