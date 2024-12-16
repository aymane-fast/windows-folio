import React, { useState } from 'react';
import '../css/Desktop.css';
import Icon from './Icon';
import Window from './Window';
import Taskbar from './Taskbar';

function Desktop() {
  const [windows, setWindows] = useState([]);
  
  const icons = [
    { id: 'projects', name: 'Projects', initialPos: { x: 0, y: 0 } },
    { id: 'cv', name: 'CV', initialPos: { x: 0, y: 80 } },
    { id: 'skills', name: 'Skills', initialPos: { x: 0, y: 160 } },
    { id: 'education', name: 'Education', initialPos: { x: 0, y: 240 } }
  ];

  const handleIconDoubleClick = (type) => {
    if (!windows.find(w => w.id === type)) {
      setWindows([...windows, { 
        id: type,
        isMinimized: false,
        isMaximized: false
      }]);
    } else {
      setWindows(windows.map(w => 
        w.id === type ? { ...w, isMinimized: false } : w
      ));
    }
  };

  const handleAppClick = (type) => {
    handleIconDoubleClick(type);
  };

  const handleClose = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const handleMinimize = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const handleMaximize = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  };

  const handleRestore = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMaximized: false } : w
    ));
  };

  const handleTaskbarClick = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ));
  };

  return (
    <div className="desktop">
      {icons.map(icon => (
        <Icon 
          key={icon.id}
          name={icon.name}
          initialPosition={icon.initialPos}
          onDoubleClick={() => handleIconDoubleClick(icon.id)}
        />
      ))}

      {windows.map(({ id, isMinimized, isMaximized }) => (
        <Window
          key={id}
          id={id}
          title={id}
          isMinimized={isMinimized}
          isMaximized={isMaximized}
          onClose={() => handleClose(id)}
          onMinimize={() => handleMinimize(id)}
          onMaximize={() => handleMaximize(id)}
          onRestore={() => handleRestore(id)}
        />
      ))}
      
      <Taskbar 
        windows={windows}
        onTaskbarClick={handleTaskbarClick}
        onAppClick={handleAppClick}
      />
    </div>
  );
}

export default Desktop;