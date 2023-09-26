import React, { useState, useEffect } from "react";
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import confetti from "canvas-confetti";
import "./Sudoku.css";
import { NUMBERS } from "../sources/constants";
import SudokuModal from "../components/SudokuModal/SudokuModal";
import Back from "../components/Buttons/Back";
import Button from "../components/Buttons/Button";

const Sudoku = () => {
  const puzzle = makepuzzle();
  const [solution, setSolution] = useState(solvepuzzle(puzzle));

  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const initialBoard = puzzle.map((number) =>
      number !== null ? number + 1 : null
    );

    setSudokuBoard(initialBoard);
    setIsGameComplete(false);
    setSelectedCell(null);
    setSelectedNumber(null);
    setWinner(null);
  };

  const isBoardComplete = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        return false;
      }
    }
    return true;
  };

  const handleResetGame = () => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
    setIsGameComplete(false);
    setWinner(false);
  };

  const handleSolve = () => {
    if (solution) {
      const adjustedSolution = solution.map((number) =>
        number !== null ? number + 1 : null
      );
      setSudokuBoard(adjustedSolution);
      setIsGameComplete(true);
    }
  };

  const areBoardsEqual = (board1, board2) => {
    if (board1.length !== board2.length) {
      return false;
    }

    for (let i = 0; i < board1.length; i++) {
      if (board1[i] !== board2[i]) {
        return false;
      }
    }

    return true;
  };

  const handleShowSolution = () => {
    if (sudokuBoard.length > 0) {
      const solvedSolution = solvepuzzle(
        sudokuBoard.map((number) => (number !== null ? number - 1 : null))
      );
      const isSolutionCorrect = areBoardsEqual(solvedSolution, sudokuBoard);
      setWinner(isSolutionCorrect);
      setIsModalOpen(true);
    }
  };

  const handleNumber = (number) => {
    setSelectedNumber(number);
  };

  const handleCell = (index) => {
    if (selectedNumber !== null) {
      const newBoard = [...sudokuBoard];
      newBoard[index] = selectedNumber;
      setSudokuBoard(newBoard);
      setSelectedCell(index);
    }
  };

  const isHighlighted = (number) => {
    return number === selectedNumber;
  };

  const handleOutModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="board">
      <h1 className="sudoku-title">Sudoku</h1>
      <Button text={"Start new game!"} onClick={resetGame} />
      <section className="game sudoku-game">
        <div className="sudoku-div">
          {sudokuBoard.map((item, index) => (
            <input
              key={index}
              min={1}
              max={9}
              value={item !== null ? item : ""}
              readOnly
              type="number"
              name="cell"
              id="cell"
              onClick={() => handleCell(index)}
              className={isHighlighted(item) ? "highlighted" : ""}
            />
          ))}
        </div>
        <div className="numbers">
          {NUMBERS.map((number) => (
            <button
              key={number}
              onClick={() => handleNumber(number)}
              className={isHighlighted(number) ? "highlighted" : ""}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="Buttons-wrapper">
          <Button
            text={"Give up"}
            onClick={handleSolve}
            disabled={!isGameComplete}
          />
          <Button
            text={"It's solved"}
            onClick={handleShowSolution}
            disabled={isGameComplete}
          />
        </div>
      </section>
      {winner !== null && (
        <SudokuModal
          winner={winner}
          handleResetGame={resetGame}
          handleOutModal={handleOutModal}
          isModalOpen={isModalOpen}
        />
      )}

      <Back />
    </article>
  );
};

export default Sudoku;
