import { useState } from "react";

export default function SearchBar({onSearch}) {
  const [character, setCharacter] = useState('');
  const [usedIds, setUsedIds] = useState([]);

  const handleChange = (e) => {
    setCharacter(e.target.value);
  }

  const handleRandom = () => {
    let random = Math.floor(Math.random()*825);
    while(usedIds.includes(random)){
        random = Math.floor(Math.random()*825);
    }
    setUsedIds([...usedIds, random]);
    onSearch(random);
  }

  const handleKeyPress = (e) => {
   if (e.key === 'Enter') {
     onSearch(character);
   }
 }

  return (
    <div>
      <input type='search' onChange={handleChange} value={character} onKeyPress={handleKeyPress} />
      <button onClick={() => onSearch(character)}>Agregar</button>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}