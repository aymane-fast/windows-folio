import React, { useState, useRef } from 'react';
import './css/Window.css';
import CV from './content/CV';
import Skills from './content/Skills';

function Window({ title, onClose, isMinimized, onMinimize, onMaximize, onRestore, isMaximized }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [prevPosition, setPrevPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 800, height: 500 });
  const [prevSize, setPrevSize] = useState(null);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-header') && !e.target.closest('.window-controls')) {
      setIsDragging(true);
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMaximize = () => {
    if (!isMaximized) {
      setPrevPosition(position);
      setPrevSize(size);
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 48 });
      onMaximize();
    } else {
      setPosition(prevPosition);
      setSize(prevSize);
      onRestore();
    }
  };

  const handleMinimizeClick = () => {
    setIsMinimizing(true);
    setTimeout(() => {
      setIsMinimizing(false);
      onMinimize();
    }, 300);
  };

  const renderContent = () => {
    switch (title.toLowerCase()) {
      case 'cv':
        return <CV />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <div>Projects content coming soon...</div>;
      case 'education':
        return <div>Education content coming soon...</div>;
      default:
        return <div>Content not found</div>;
    }
  };

  const windowStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: isMaximized ? '100%' : `${size.width}px`,
    height: isMaximized ? `calc(100vh - 48px)` : `${size.height}px`,
    display: isMinimized ? 'none' : 'block'
  };

  return (
    <div
      ref={windowRef}
      className={`window ${isMaximized ? 'maximized' : ''} ${isMinimizing ? 'minimizing' : ''}`}
      style={windowStyle}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="window-header">
        <span>{title}</span>
        <div className="window-controls">
          <button className="minimize" onClick={handleMinimizeClick}>─</button>
          <button className="maximize" onClick={handleMaximize}>
            {isMaximized ? '❐' : '□'}
          </button>
          <button className="close" onClick={onClose}>×</button>
        </div>
      </div>
      <div className="window-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Window;