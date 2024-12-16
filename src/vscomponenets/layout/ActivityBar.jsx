import { useRef, useEffect } from 'react';
import { 
  IconFolder,
  IconSearch,
  IconBrandGithub,
  IconBug,
  IconGripVertical
} from '@tabler/icons-react';
import SearchBar from './SearchBar';
import SourceControl from './SourceControl';
import Debug from './Debug';
import Sidebar from '../Sidebar';
export default function ActivityBar({ activeView, onViewChange, sidebarWidth, onWidthChange }) {
  const sidebarRef = useRef(null);
  const isDragging = useRef(false);

  const items = [
    {
      id: 'explorer',
      icon: <IconFolder size={24} />,
      tooltip: 'Explorer',
      component: <Sidebar view="explorer" /> 
    },
    {
      id: 'search',
      icon: <IconSearch size={24} />,
      tooltip: 'Search',
      component: <SearchBar />
    },
    {
      id: 'git',
      icon: <IconBrandGithub size={24} />,
      tooltip: 'Source Control',
      component: <SourceControl />
    },
    {
      id: 'debug',
      icon: <IconBug size={24} />,
      tooltip: 'Run and Debug',
      component: <Debug />
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      
      const newWidth = e.clientX - 48; // Subtract ActivityBar width
      if (newWidth >= 160 && newWidth <= 600) {
        onWidthChange(newWidth);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.classList.remove('resizing');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onWidthChange]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.classList.add('resizing');
  };

  return (
    <div className="flex h-full">
      {/* Activity Bar Icons */}
      <div className="w-12 bg-[#333333] flex flex-col items-center py-2 flex-shrink-0">
        {items.map(item => (
          <button
            key={item.id}
            className={`p-3 hover:bg-[#505050] rounded-lg mb-2 ${
              activeView === item.id ? 'bg-[#505050]' : ''
            }`}
            onClick={() => onViewChange(item.id)}
            title={item.tooltip}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* View Content with Resize Handle */}
      {activeView && (
        <div 
          ref={sidebarRef}
          className="relative"
          style={{ width: `${sidebarWidth}px` }}
        >
          <div className="h-full overflow-hidden">
            {items.find(item => item.id === activeView)?.component}
          </div>

          {/* Resize Handle */}
          <div
            className="absolute right-0 top-0 w-1 h-full cursor-col-resize hover:bg-[#007acc] z-10"
            onMouseDown={handleMouseDown}
          >
            <div className="h-full flex items-center justify-center">
              <IconGripVertical 
                size={16}
                className="text-[#6f7070] opacity-0 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}