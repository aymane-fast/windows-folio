import React, { useState } from 'react';
import '../css/Taskbar.css';
import StartMenu from './StartMenu';

function Taskbar({ windows, onTaskbarClick, onAppClick }) {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const handleStartClick = () => {
    setIsStartMenuOpen(prevState => !prevState);
  };

  const handleAppClick = (appId) => {
    if (onAppClick) {
      onAppClick(appId);
      setIsStartMenuOpen(false);
    }
  };

  return (
    <>
      <div className="taskbar">
        <div className="taskbar-start">
          <button 
            className={`start-button ${isStartMenuOpen ? 'active' : ''}`}
            onClick={handleStartClick}
          >
            <img 
              src="./icons/windows.png" 
              alt="Start" 
              className="start-icon"
            />
          </button>
        </div>
        <div className="taskbar-apps">
          {windows.map((window) => (
            <div 
              key={window.id}
              className={`taskbar-icon ${!window.isMinimized ? 'active' : ''}`}
              onClick={() => onTaskbarClick(window.id)}
            >
              <img src={`./icons/${window.id}.png`} alt={window.id} />
            </div>
          ))}
        </div>
      </div>
      <StartMenu 
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onAppClick={handleAppClick}
      />
    </>
  );
}

export default Taskbar;