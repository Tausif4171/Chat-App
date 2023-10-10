import React, { useState } from 'react';
import './App.css';
import DarkModeToggle from './DarkModeToggle';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${mode} h-[100vh]`}>
      <DarkModeToggle darkMode={mode} toggleDarkMode={toggleMode} />
      <button onClick={toggleMode}>Toggle Mode</button>
      <h1>Chat App!</h1>
    </div>
  );
}

export default App;