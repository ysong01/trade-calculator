import React, { useState } from 'react';
import PlayerInput from './components/PlayerInput';
import MetricCard from './components/MetricCard';

function App() {
  // add trade analysis state here
  const [teamAPlayers, setTeamAPlayers] = useState(['']);
  const [teamBPlayers, setTeamBPlayers] = useState(['']);

  // implement trade analysis algorithm here
  const analyzeTrade = () => {

    console.log('Analyzing trade...');
  };

  //  any additional helper funcs
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm py-12 px-4">
      <h1 className="text-5xl font-bold text-navy text-center mb-12 drop-shadow-sm">
        Trade Calculator Tool
      </h1>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start mb-16 relative">
          <div className="p-8 border-2 border-navy/30 rounded-2xl bg-white/80 backdrop-blur-sm 
            shadow-lg hover:shadow-xl transition-all duration-300 hover:border-navy">
            <PlayerInput
              teamName="Team A"
              players={teamAPlayers}
              setPlayers={setTeamAPlayers}
            />
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={analyzeTrade}
              className="px-10 py-5 bg-navy text-white text-lg font-semibold rounded-xl
                hover:bg-navy-light active:bg-navy-dark
                transition-all transform hover:scale-105 shadow-lg
                hover:shadow-xl hover:shadow-navy/20"
            >
              Analyze Trade
            </button>

            <div className="w-64 p-4 border-2 border-navy/30 rounded-xl bg-white/80 
              backdrop-blur-sm shadow-md hover:border-navy transition-all duration-300">
              <p className="text-text-primary text-center">Trade Tool Info</p>
            </div>
          </div>

          <div className="p-8 border-2 border-navy/30 rounded-2xl bg-white/80 backdrop-blur-sm 
            shadow-lg hover:shadow-xl transition-all duration-300 hover:border-navy">
            <PlayerInput
              teamName="Team B"
              players={teamBPlayers}
              setPlayers={setTeamBPlayers}
            />
          </div>
        </div>

        {/* Metric Cards Container */}
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-3 gap-8">
            <MetricCard title="metric 1" />
            <MetricCard title="metric 2" />
            <MetricCard title="metric 3" />
          </div>

          <div className="grid grid-cols-3 gap-8">
            <MetricCard title="metric 4" />
            <MetricCard title="metric 5" />
            <MetricCard title="metric 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
