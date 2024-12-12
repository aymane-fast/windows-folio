import { useState, useRef, useEffect } from 'react';
import { useWindow } from '../contexts/WindowContext'
import { IconFolder, IconFile, IconChevronRight, IconChevronDown, IconGripVertical } from '@tabler/icons-react'

function Sidebar({ view }) {
  const { createWindow } = useWindow();
  const [width, setWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState(['src', 'components']);
  const sidebarRef = useRef(null);


  const handleMouseDown = (e) => {
    setIsResizing(true);
    document.body.classList.add('resizing');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      
      const newWidth = e.clientX;
      if (newWidth > 160 && newWidth < 600) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.classList.remove('resizing');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);


  const fileStructure = {
    name: 'portfolio-project',
    type: 'folder',
    children: [
      {
        name: 'node_modules',
        type: 'folder',
        children: []
      },
      {
        name: 'public',
        type: 'folder',
        children: [
          { name: 'vite.svg', type: 'file' }
        ]
      },
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'components',
            type: 'folder',
            children: [
              { name: 'bio.jsx', type: 'file', id: 'bio' },
              { name: 'resume.jsx', type: 'file', id: 'resume' },
              { name: 'blog.jsx', type: 'file', id: 'blog' },
              { name: 'projects.jsx', type: 'file', id: 'projects' },
              { name: 'contact.jsx', type: 'file', id: 'contact' }
            ]
          },
          { name: 'App.jsx', type: 'file' },
          { name: 'main.jsx', type: 'file' },
          { name: 'index.css', type: 'file' }
        ]
      },
      { name: 'package.json', type: 'file' },
      { name: 'vite.config.js', type: 'file' }
    ]
  }

  const toggleFolder = (path) => {
    setExpandedFolders(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    )
  }

  const renderTreeItem = (item, path = '') => {
    const currentPath = path ? `${path}/${item.name}` : item.name
    const isExpanded = expandedFolders.includes(currentPath)
    const isFolder = item.type === 'folder'

    return (
      <div key={currentPath}>
        <button
          className="w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-[#2a2d2e] rounded-sm"
          onClick={() => {
            if (isFolder) {
              toggleFolder(currentPath)
            } else if (item.id) {
              createWindow({
                id: item.id,
                title: item.name,
                path: `/${currentPath}`
              })
            }
          }}
        >
          <span className="w-4">
            {isFolder && (isExpanded ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />)}
          </span>
          {isFolder ? (
            <IconFolder size={16} className="text-[#e7c17a]" />
          ) : (
            <IconFile size={16} className="text-[#519aba]" />
          )}
          <span>{item.name}</span>
        </button>
        
        {isFolder && isExpanded && (
          <div className="ml-4">
            {item.children.map(child => renderTreeItem(child, currentPath))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div 
      ref={sidebarRef}
      className="h-full flex"
      style={{ width: `${width}px` }}
    >
      <div className="flex-1 overflow-y-auto bg-[#252526]">
        {view === 'explorer' && (
          <div className="p-2">
            <div className="text-xs uppercase tracking-wider text-[#6f7070] mb-2">
              Explorer
            </div>
            {renderTreeItem(fileStructure)}
          </div>
        )}
      </div>
      
      {/* Resize Handle */}
      <div
        className="w-1 h-full cursor-col-resize hover:bg-[#007acc]"
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
  );
}

export default Sidebar;