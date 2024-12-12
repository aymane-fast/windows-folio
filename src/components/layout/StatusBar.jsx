import { useTheme } from '../../contexts/ThemeContext';
import { useWindow } from '../../contexts/WindowContext';

function StatusBar() {
  const { theme } = useTheme();
  const { 
    windows, 
    activeWindow,
    cursorPosition,
    spaceSize
  } = useWindow();
  
  // Get active file info
  const activeFile = windows.find(w => w.id === activeWindow);
  const fileType = activeFile?.path.endsWith('.jsx') ? 'JavaScript React' : 'Plain Text';
  
  return (
    <div 
      className="h-6 flex items-center justify-between px-4 text-sm select-none" 
      style={{ backgroundColor: theme.colors.statusBar }}
    >
      <div className="flex items-center gap-3">
        <span>{activeFile ? 'Ready' : 'Welcome'}</span>
        <span>UTF-8</span>
        <span>{fileType}</span>
      </div>
      
      <div className="flex items-center gap-3">
        <span>
          Ln {cursorPosition?.line || 1}, Col {cursorPosition?.column || 1}
        </span>
        <span>Spaces: {spaceSize}</span>
        <span>{theme.type}</span>
      </div>
    </div>
  );
}

export default StatusBar;