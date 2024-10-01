import { useState } from 'react';
import './App.css';
import allChars from './components/AllChars';
import CharacterCard from './components/CharacterCard';

function App() {
  const [selectedChars, setSelectedChars] = useState([]);
  const [randomChar, setRandomChar] = useState("Ramattra");



  const getRandomCharacter = () => {
    if(selectedChars.length > 0){
      const randomIndex = Math.floor(Math.random () * selectedChars.length);
      setRandomChar(selectedChars[randomIndex]);
    }
    else {
      const randomIndex = Math.floor(Math.random () * allChars.length);
      setRandomChar(allChars[randomIndex]);
    }
  } 

  

  return (
    <div className='App'>
      <div className="title">
        <h1>Overwatch Character Selector</h1>
        <p>By Default All Character Are Considered</p>
      </div>
      
      <div className='CharacterSelector'>
        <button className='SelectBTN' onClick={getRandomCharacter}>GENERATE</button>
        <label className='SelectLabel'>{randomChar}</label>
      </div>
      <div className="CharacterLabels">
        <CharacterCard selectedChars={selectedChars} setSelectedChars={setSelectedChars}/>
      </div>
    </div>
  );
}

export default App;
