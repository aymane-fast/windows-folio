import React from 'react';
import './App.css';
import Desktop from './Desctop';
import { ThemeProvider } from './contexts/ThemeContext';
import { WindowProvider } from './contexts/WindowContext';

function App() {
  return (
    <ThemeProvider>
      <WindowProvider>
        <div className="App">
          <Desktop />
        </div>
      </WindowProvider>
    </ThemeProvider>
  );
}

export default App;