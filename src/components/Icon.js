import React, { useState, useRef } from 'react';
import '../css/Icon.css';

function Icon({ name, onDoubleClick, initialPosition = { x: 0, y: 0 } }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const iconRef = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const gridSize = {
    x: 100,  // Wider horizontal grid
    y: 80    // Keep vertical grid as is
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
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
    
    const boundedX = Math.max(0, Math.min(newX, window.innerWidth - gridSize.x));
    const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 48 - gridSize.y));
    
    setPosition({ x: boundedX, y: boundedY });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap to different grid sizes for x and y
    setPosition(prev => ({
      x: Math.round(prev.x / gridSize.x) * gridSize.x,
      y: Math.round(prev.y / gridSize.y) * gridSize.y
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