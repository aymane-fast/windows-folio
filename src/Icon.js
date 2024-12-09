import React from 'react';
import './css/Icon.css';

function Icon({ name, onDoubleClick }) {
  return (
    <div className="icon" onDoubleClick={onDoubleClick}>
      <img src={`./icons/${name.toLowerCase()}.png`} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Icon;