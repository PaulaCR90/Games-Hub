import React, { createContext, useState } from 'react'

export const CorrectLettersContext = createContext({
    correctLetters: {},
    setCorrectLetters: () => new Set(),
  });
  

export const CorrectLettersContextProvider = ({ children }) => {
    const [correctLetters, setCorrectLetters] = useState(new Set());

  return (
    <CorrectLettersContext.Provider value={{ correctLetters, setCorrectLetters }}>
      {children}
    </CorrectLettersContext.Provider>
  );
};