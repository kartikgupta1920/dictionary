import React, { useState } from "react";
import './Dictionary.css';

function Dictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
        setResult('Word not found in the dictionary.');
        return;
    }

    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());

    if (foundWord) {
        setResult(foundWord.meaning);
    } else {
        setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />
      <button onClick={handleSearch} className="button">
        Search
      </button>
      <div className="result">
        <h3>Definition:</h3>
        <p>{result || "No definition found."}</p>
      </div>
    </div>
  );
}

export default Dictionary;
