import React, { useState, useEffect } from 'react';
import './css/StartMenu.css';

function StartMenu({ isOpen, onClose, onAppClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const apps = [
    { id: 'projects', name: 'Projects', icon: './icons/projects.png' },
    { id: 'cv', name: 'CV', icon: './icons/cv.png' },
    { id: 'skills', name: 'Skills', icon: './icons/skills.png' },
    { id: 'education', name: 'Education', icon: './icons/education.png' }
  ];

  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAppClick = (appId) => {
    onAppClick(appId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="start-menu-overlay" onClick={onClose} />
      <div className={`start-menu ${isMobile ? 'mobile' : ''}`}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="pinned-apps">
          <h3>Pinned</h3>
          <div className="apps-grid">
            {filteredApps.map(app => (
              <div
                key={app.id}
                className="app-item"
                onClick={() => handleAppClick(app.id)}
              >
                <img src={app.icon} alt={app.name} />
                <span>{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StartMenu;
