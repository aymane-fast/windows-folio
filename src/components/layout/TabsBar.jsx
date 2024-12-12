import { useState , useEffect } from 'react'
import { useWindow } from '../../contexts/WindowContext'
import { IconX, IconPin, IconPinnedOff } from '@tabler/icons-react'

function TabsBar() {
    const { 
      windows, 
      activeWindow, 
      closeWindow, 
      pinWindow, 
      focusWindow,
      closeAllWindows,
      closeOtherWindows,
      closeWindowsToRight,
      closeWindowsToLeft,
      getWindowPosition
    } = useWindow()
  
  const [contextMenu, setContextMenu] = useState({
    show: false,
    x: 0,
    y: 0,
    window: null
  })

  const handleContextMenu = (e, window) => {
    e.preventDefault()
    setContextMenu({
      show: true,
      x: e.pageX,
      y: e.pageY,
      window
    })
  }

  const handleCloseContextMenu = () => {
    setContextMenu({ show: false, x: 0, y: 0, window: null })
  }

  const handleMenuAction = (action) => {
    const window = contextMenu.window
    if (!window) return

    switch (action) {
      case 'pin':
        pinWindow(window.id)
        break
      case 'close':
        closeWindow(window.id)
        break
      case 'closeOthers':
        closeOtherWindows(window.id)
        break
      case 'closeRight':
        closeWindowsToRight(window.id)
        break
      case 'closeLeft':
        closeWindowsToLeft(window.id)
        break
      case 'closeAll':
        closeAllWindows()
        break
    }
    handleCloseContextMenu()
  }

   useEffect(() => {
    const handleWindowClick = (e) => {
      if (contextMenu.show) {
        // Check if click is outside the context menu
        const contextMenuElement = document.querySelector('.context-menu')
        if (contextMenuElement && !contextMenuElement.contains(e.target)) {
          handleCloseContextMenu()
        }
      }
    }

    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [contextMenu.show])

  const renderContextMenuItem = (label, action, disabled = false) => (
    <button 
      className={`w-full px-3 py-1 text-left flex items-center ${
        disabled 
          ? 'text-gray-500 cursor-not-allowed' 
          : 'hover:bg-[#2d2d2d]'
      }`}
      onClick={() => !disabled && handleMenuAction(action)}
      disabled={disabled}
    >
      {label}
    </button>
  )

  return (
    <>
      <div className="h-9 bg-[#252526] flex items-center overflow-x-auto">
  {windows.map((window, index) => (
    <div
      key={window.id}
      className={`
        group relative flex items-center h-8 px-3 
        min-w-[120px] max-w-[200px]
        ${window.id === activeWindow 
          ? 'bg-[#1e1e1e] border-t-2 border-[#007acc] shadow-md z-10' 
          : 'bg-[#2d2d2d] hover:bg-[#383838] border-t border-transparent'}
        ${index === 0 ? 'ml-0' : '-ml-1'} // Overlap tabs
        ${window.pinned ? 'border-t-2 border-blue-500' : ''}
        transition-all duration-150 ease-in-out
      `}
      onClick={() => focusWindow(window.id)}
      onContextMenu={(e) => handleContextMenu(e, window)}
    >
      {/* Left Tab Edge */}
      <div className={`
        absolute left-0 top-0 bottom-0 w-[1px]
        ${window.id === activeWindow 
          ? 'bg-[#1e1e1e]' 
          : 'bg-[#252526] group-hover:bg-[#383838]'}
        transition-colors duration-150
      `} />

      {/* Tab Content */}
      <div className="flex items-center flex-1 relative">
        {window.pinned && (
          <IconPin size={14} className="mr-2 text-blue-500" />
        )}
        <span className="truncate flex-1 text-sm">
          {window.title}
        </span>
        <button
          className={`
            ml-2 p-1 rounded 
            ${window.id === activeWindow 
              ? 'opacity-100 hover:bg-[#404040]' 
              : 'opacity-0 group-hover:opacity-100 hover:bg-[#404040]'}
            transition-all duration-150
          `}
          onClick={(e) => {
            e.stopPropagation()
            closeWindow(window.id)
          }}
        >
          <IconX size={14} />
        </button>
      </div>

      {/* Right Tab Edge */}
      <div className={`
        absolute right-0 top-0 bottom-0 w-[1px]
        ${window.id === activeWindow 
          ? 'bg-[#1e1e1e]' 
          : 'bg-[#252526] group-hover:bg-[#383838]'}
        transition-colors duration-150
      `} />
    </div>
  ))}
</div>

      {/* Context Menu */}
      {contextMenu.show && (
        <div 
          className="context-menu fixed bg-[#252526] shadow-lg rounded-md py-1 z-50 min-w-[200px]"
          style={{ 
            left: `${contextMenu.x}px`, 
            top: `${contextMenu.y}px` 
          }}
        >
          {renderContextMenuItem(
            contextMenu.window?.pinned ? 'Unpin' : 'Pin',
            'pin'
          )}
          
          <div className="h-px bg-[#3c3c3c] my-1" />
          
          {renderContextMenuItem('Close', 'close')}
          
          {contextMenu.window && (() => {
            const { hasLeft, hasRight, isOnly } = getWindowPosition(contextMenu.window.id)
            return (
              <>
                {renderContextMenuItem(
                  'Close Others',
                  'closeOthers',
                  isOnly
                )}
                {renderContextMenuItem(
                  'Close to the Left',
                  'closeLeft',
                  !hasLeft
                )}
                {renderContextMenuItem(
                  'Close to the Right',
                  'closeRight',
                  !hasRight
                )}
              </>
            )
          })()}
          
          <div className="h-px bg-[#3c3c3c] my-1" />
          
          {renderContextMenuItem(
            'Close All',
            'closeAll',
            windows.length === 0
          )}
        </div>
      )}
    </>
  )
}

export default TabsBar