import React, { useState } from 'react';
import './css/Desktop.css';
import Icon from './Icon';
import Window from './Window';
import Taskbar from './Taskbar';

function Desktop() {
  const [windows, setWindows] = useState([]);

  const handleIconDoubleClick = (type) => {
    if (!windows.find(w => w.id === type)) {
      setWindows([...windows, { 
        id: type,
        isMinimized: false,
        isMaximized: false
      }]);
    } else {
      // If window exists, unminimize it
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
      w.id === id ? { ...w, isMaximized: true } : w
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
      <Icon name="Projects" onDoubleClick={() => handleIconDoubleClick('projects')} />
      <Icon name="CV" onDoubleClick={() => handleIconDoubleClick('cv')} />
      <Icon name="Skills" onDoubleClick={() => handleIconDoubleClick('skills')} />
      <Icon name="Education" onDoubleClick={() => handleIconDoubleClick('education')} />

      {windows.map(({ id, isMinimized, isMaximized }) => (
        <Window
          key={id}
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