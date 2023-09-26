import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe.jsx";
import Home from "./pages/Home.jsx";
import Hangman from "./pages/Hangman.jsx";
import Sudoku from "./pages/Sudoku.jsx";
import Login from "./pages/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/TicTacToe" element={<TicTacToe />} />
            <Route path="/Hangman" element={<Hangman />} />
            <Route path="/Sudoku" element={<Sudoku />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
