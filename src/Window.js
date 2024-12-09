import React from 'react';
import './css/Window.css';

function Window({ title, onClose }) {
  return (
    <div className="window">
      <div className="window-header">
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="window-content">
        {/* Content based on the window type */}
      </div>
    </div>
  );
}

export default Window;