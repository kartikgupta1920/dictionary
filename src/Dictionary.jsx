import React, { useState } from "react";

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
      setResult('Please enter a word to search.');
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
    <div style={{ padding: '20px' }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleSearch} style={{ padding: '5px 10px' }}>
        Search
      </button>
      <div style={{ marginTop: '20px', fontSize: '16px' }}>
        <h2>Defination</h2>{result}
      </div>
    </div>
  );
}

export default Dictionary;
