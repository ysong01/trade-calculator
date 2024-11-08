import React, { useState } from 'react';

const PlayerInput = ({ teamName, players, setPlayers }) => {
  const [removingIndex, setRemovingIndex] = useState(null);

  const addPlayer = () => {
    if (players.length < 5) {
      setPlayers([...players, '']);
    }
  };

  const removePlayer = async (index) => {
    setRemovingIndex(index);
    await new Promise(resolve => setTimeout(resolve, 300));
    const newPlayers = players.filter((_, i) => i !== index);
    setPlayers(newPlayers);
    setRemovingIndex(null);
  };

  const updatePlayer = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  return (
    <div className="w-80">
      <h2 className="text-navy font-semibold text-xl mb-6">{teamName}</h2>
      <div className="space-y-3">
        {players.map((player, index) => (
          <div 
            key={index} 
            className={`flex items-center space-x-2 animate-slide-in
              ${removingIndex === index ? 'animate-slide-out' : ''}`}
          >
            <input
              type="text"
              value={player}
              onChange={(e) => updatePlayer(index, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent
                text-text-primary placeholder-text-secondary transition-all duration-300
                bg-gray-50 hover:bg-white focus:bg-white focus:shadow-lg
                focus:translate-y-[-2px]"
              placeholder="Enter player name"
            />
            <button
              onClick={() => removePlayer(index)}
              className="p-2 text-red-500 hover:text-red-700 
                transition-colors transform hover:scale-110
                hover:bg-red-50 rounded-full"
            >
              ×
            </button>
          </div>
        ))}
        {players.length < 5 && (
          <button
            onClick={addPlayer}
            className="w-full py-3 border-2 border-dashed border-navy/50 
              text-navy rounded-lg hover:bg-navy hover:text-white 
              transition-all transform hover:scale-105 hover:border-navy
              hover:shadow-md"
          >
            + Add Player
          </button>
        )}
      </div>
    </div>
  );
};

export default PlayerInput; 