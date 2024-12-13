import React, { useState, useRef } from 'react';
import './css/Icon.css';

function Icon({ name, onDoubleClick, initialPosition = { x: 0, y: 0 } }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const iconRef = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const gridSize = 80;

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left click
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStartPos.current.x;
    const newY = e.clientY - dragStartPos.current.y;
    
    // Constrain to desktop bounds
    const boundedX = Math.max(0, Math.min(newX, window.innerWidth - gridSize));
    const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 48 - gridSize));
    
    setPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to grid
    setPosition(prev => ({
      x: Math.round(prev.x / gridSize) * gridSize,
      y: Math.round(prev.y / gridSize) * gridSize
    }));
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div 
      ref={iconRef}
      className="icon" 
      onDoubleClick={onDoubleClick}
      onMouseDown={handleMouseDown}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
    >
      <img src={`./icons/${name.toLowerCase()}.png`} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Icon;