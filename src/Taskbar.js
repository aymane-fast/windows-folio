import React from 'react';
import './css/Taskbar.css';

function Taskbar({ windows, onTaskbarClick }) {
  return (
    <div className="taskbar">
      <div className="taskbar-start">
        <img src="./icons/windows.png" alt="Start" className="start-icon" />
      </div>
      <div className="taskbar-apps">
        {windows.map((window) => (
          <div 
            key={window.id} 
            className={`taskbar-icon ${!window.isMinimized ? 'active' : ''}`}
            onClick={() => onTaskbarClick(window.id)}
          >
            <img src={`./icons/${window.id.toLowerCase()}.png`} alt={window.id} />
          </div>
        ))}
      </div>
      <div className="taskbar-tray">
        <span className="time">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}

export default Taskbar;