import React, { useState } from 'react';
import './App.css';
import TeamMate from './components/teamMate'

function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Form />
      {teamMembers.map((teamMate) => {
        return <TeamMate key={teamMate.id} details={teamMate} />
      })}
    </div>
  );
}

export default App;
