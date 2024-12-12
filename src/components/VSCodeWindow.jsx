import { useState } from 'react';
import { useSidebarWidth } from '../hooks/useSidebarWidth';
import ActivityBar from './layout/ActivityBar';
import WindowManager from './windows/WindowManager';
import StatusBar from './layout/StatusBar';
import MenuBar from './layout/MenuBar';
import { ThemeProvider } from '../contexts/ThemeContext';
import { WindowProvider } from '../contexts/WindowContext';

function VSCodeWindow() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarView, setSidebarView] = useState(null);
  const [sidebarWidths, updateSidebarWidth] = useSidebarWidth(300);
  
  const handleViewChange = (view) => {
    setSidebarView(currentView => currentView === view ? null : view);
  };
  
  return (
    <ThemeProvider>
      <WindowProvider>
        <div className="h-full flex flex-col bg-[#1e1e1e] text-[#cccccc]">
          <MenuBar 
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          
          <div className="flex-1 flex overflow-hidden">
            <ActivityBar 
              activeView={sidebarView}
              onViewChange={handleViewChange}
              sidebarWidth={sidebarWidths[sidebarView]}
              onWidthChange={(width) => updateSidebarWidth(sidebarView, width)}
            />
            <div className="flex-1">
              <WindowManager />
            </div>
          </div>
          
          <StatusBar />
        </div>
      </WindowProvider>
    </ThemeProvider>
  );
}

export default VSCodeWindow; 