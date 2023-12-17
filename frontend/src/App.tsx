import React, { useState } from 'react';
import './App.css';
import DarkModeToggle from './DarkModeToggle';
import { Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatsPage';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      {/* <div className={`App ${mode} h-[100vh]`}>
        <DarkModeToggle darkMode={mode} toggleDarkMode={toggleMode} />
        <button onClick={toggleMode}>Toggle Mode</button>
        <h1>Chat App!</h1>
      </div> */}

      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/chats' element={<ChatPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;