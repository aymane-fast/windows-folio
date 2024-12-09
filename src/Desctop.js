import React, { useState } from 'react';
import './css/Desktop.css';
import Icon from './Icon';
import Window from './Window';

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);

  const handleIconDoubleClick = (type) => {
    setOpenWindows([...openWindows, type]);
  };

  const handleCloseWindow = (type) => {
    setOpenWindows(openWindows.filter(window => window !== type));
  };

  return (
    <div className="desktop">
      <Icon name="Projects" onDoubleClick={() => handleIconDoubleClick('projects')} />
      <Icon name="CV" onDoubleClick={() => handleIconDoubleClick('cv')} />
      <Icon name="Technical Skills" onDoubleClick={() => handleIconDoubleClick('skills')} />
      <Icon name="Education" onDoubleClick={() => handleIconDoubleClick('education')} />

      {openWindows.includes('cv') && <Window title="CV" onClose={() => handleCloseWindow('cv')} />}
      {openWindows.includes('projects') && <Window title="Projects" onClose={() => handleCloseWindow('projects')} />}
      {openWindows.includes('education') && <Window title="Education" onClose={() => handleCloseWindow('education')} />}
      {openWindows.includes('skills') && <Window title="Technical Skills" onClose={() => handleCloseWindow('skills')} />}
    </div>
  );
}

export default Desktop;