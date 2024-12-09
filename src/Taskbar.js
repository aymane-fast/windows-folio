import React from 'react';
import './css/Taskbar.css';

function Taskbar({ openWindows }) {
  return (
    <div className="taskbar">
      <div className="taskbar-start">
        <img src="./icons/windows.png" alt="Start" className="start-icon" />
      </div>
      <div className="taskbar-apps">
        {openWindows.map((window, index) => (
          <div key={index} className="taskbar-icon">
            <img src={`./icons/${window.toLowerCase()}.png`} alt={window} />
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