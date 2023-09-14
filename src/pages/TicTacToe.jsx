import React, { useState } from "react";
import "./TicTacToe.css";
import confetti from "canvas-confetti";
import Square from "../components/Square/Square";
import { TURNS } from "../sources/constants";
import { checkWinnerFrom, checkEndGame } from "../sources/board";
import WinnerModal from "../components/WinnerModal/WinnerModal";
import { NavLink } from "react-router-dom";

function Tictactoe() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    // no actualizar la posición si ya tiene algo
    if (board[index] || winner) return;
    // actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // guardar partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // empate
    }
  };

  return (
    <article className="board">
      <h1>Tictactoe</h1>
      <div className="button-wrapper">
        <button onClick={resetGame}>Start game!</button>
      </div>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <div className="turn">
        <Square isSelected={turn === TURNS.X}>Turno de {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>Turno de {TURNS.O}</Square>
      </div>
      <WinnerModal resetGame={resetGame} winner={winner} />
      <div className="button-wrapper">
        <NavLink to="/">
          <button className="back">Back home</button>
        </NavLink>
      </div>
    </article>
  );
}

export default Tictactoe;
