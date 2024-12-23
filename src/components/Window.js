import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import '../css/Window.css';
import CV from '../content/CV';
import VSCodeWindow from '../vscomponenets/VSCodeWindow';

function Window({ title, onClose, isMinimized, onMinimize, onMaximize, onRestore, isMaximized }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const windowRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const handleDrag = (e, data) => {
    if (!isMaximized && !isMobile) {
      setPosition({ x: data.x, y: data.y });
    }
  };

  const windowStyle = isMobile ? {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: `calc(100vh - 48px)`,
    display: isMinimized ? 'none' : 'block',
  } : isMaximized ? {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: `calc(100vh - 48px)`,
    display: isMinimized ? 'none' : 'block',
  } : {
    position: 'absolute',
    width: '800px',
    height: '600px',
    display: isMinimized ? 'none' : 'block',
  };

  const renderContent = () => {
    switch (title.toLowerCase()) {
      case 'cv':
        return <CV />;
      case 'skills':
        return <VSCodeWindow />;
      case 'projects':
        return <div>Projects content coming soon...</div>;
      case 'education':
        return <div>Education content coming soon...</div>;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <Draggable
      nodeRef={windowRef}
      handle=".window-header"
      disabled={isMaximized || isMobile}
      position={isMaximized || isMobile ? { x: 0, y: 0 } : position}
      onDrag={handleDrag}
      bounds="parent"
      defaultPosition={{ x: 50, y: 50 }}
    >
      <div
        ref={windowRef}
        className={`window ${isMaximized ? 'maximized' : ''}`}
        style={windowStyle}
      >
        <div className="window-header">
          <span>{title}</span>
          <div className="window-controls">
            <button onClick={onMinimize}>─</button>
            <button onClick={onMaximize}>
              {isMaximized ? '❐' : '□'}
            </button>
            <button onClick={onClose}>×</button>
          </div>
        </div>
        <div className="window-content">
          {renderContent()}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;