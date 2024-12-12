import React, { useState, useRef } from 'react';
import './css/Window.css';
import CV from './content/CV';
import Skills from './content/Skills';
import VSCodeWindow from './components/VSCodeWindow';

function Window({ title, onClose, isMinimized, onMinimize, onMaximize, onRestore, isMaximized }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMinimizing, setIsMinimizing] = useState(false);
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMaximized) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    setPosition({
      x: Math.max(0, newX),
      y: Math.max(0, newY)
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMinimizeClick = () => {
    setIsMinimizing(true);
    setTimeout(() => {
      setIsMinimizing(false);
      onMinimize();
    }, 300);
  };

  const handleMaximize = () => {
    if (isMaximized) {
      onRestore();
    } else {
      onMaximize();
    }
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

  const windowStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: isMaximized ? '100%' : `${size.width}px`,
    height: isMaximized ? `calc(100vh - 48px)` : `${size.height}px`,
    display: isMinimized ? 'none' : 'block',
  };

  const isVSCode = title.toLowerCase() === 'skills';
  const finalWindowStyle = isVSCode ? {
    ...windowStyle,
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 0,
    padding: 0,
    overflow: 'hidden'
  } : windowStyle;

  return (
    <div
      ref={windowRef}
      className={`window ${isMaximized ? 'maximized' : ''} ${isMinimizing ? 'minimizing' : ''} ${isVSCode ? 'vs-code-override' : ''}`}
      style={finalWindowStyle}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {!isVSCode && (
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
      )}
      <div className={isVSCode ? '' : 'window-content'}>
        {renderContent()}
      </div>
    </div>
  );
}

export default Window;