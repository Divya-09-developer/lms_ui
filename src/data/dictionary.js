import React, { useState } from "react";
import { letters, alphabetItems } from "./data"; // Assuming data.js contains the arrays

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const filteredItems = selectedLetter
    ? alphabetItems.filter((item) => item.key === selectedLetter)
    : alphabetItems;

  return (
    <div className="app-container">
      <header>
        <h1>Alphabet Learning Tool</h1>
      </header>
      <div className="content-container">
        <nav className="alphabet-nav">
          <ul>
            {letters.map((letter) => (
              <li
                key={letter}
                className={`alphabet-item ${
                  selectedLetter === letter ? "selected" : ""
                }`}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </li>
            ))}
          </ul>
        </nav>

        <main className="definitions-container">
          {filteredItems.map((item) => (
            <div key={item.id} className="definition-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
