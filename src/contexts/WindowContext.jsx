// src/contexts/WindowContext.jsx
import { createContext, useContext, useState , useEffect } from 'react'

const WindowContext = createContext()

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 })
  const [spaceSize, setSpaceSize] = useState(2)


  const updateCursorPosition = (line, column) => {
    setCursorPosition({ 
      line: Math.max(1, line), 
      column: Math.max(1, column)
    })
  }

  useEffect(() => {
    updateCursorPosition(1, 1)
  }, [activeWindow])



  const createWindow = (window) => {
    // Check if window already exists
    const existingWindow = windows.find(w => w.id === window.id)
    
    if (existingWindow) {
      // Focus existing window instead of creating new one
      setActiveWindow(existingWindow.id)
      return
    }

    // Create new window if it doesn't exist
    const newWindow = {
      ...window,
      id: window.id || Date.now(),
      zIndex: windows.length,
      minimized: false,
      maximized: false
    }

    setWindows([...windows, newWindow])
    setActiveWindow(newWindow.id)
  }

  const pinWindow = (id) => {
    setWindows(prevWindows => {
      const windowIndex = prevWindows.findIndex(w => w.id === id)
      const window = prevWindows[windowIndex]
      
      // Remove the window from its current position
      const remainingWindows = prevWindows.filter(w => w.id !== id)
      
      // Toggle pin state
      const updatedWindow = { 
        ...window, 
        pinned: !window.pinned 
      }
      
      if (updatedWindow.pinned) {
        // If pinning, find the position after the last pinned window
        const lastPinnedIndex = remainingWindows.findIndex(w => !w.pinned)
        if (lastPinnedIndex === -1) {
          // No pinned windows yet, add to start
          return [updatedWindow, ...remainingWindows]
        } else {
          // Insert after last pinned window
          return [
            ...remainingWindows.slice(0, lastPinnedIndex),
            updatedWindow,
            ...remainingWindows.slice(lastPinnedIndex)
          ]
        }
      } else {
        // If unpinning, move to first unpinned position
        const firstUnpinnedIndex = remainingWindows.findIndex(w => !w.pinned)
        if (firstUnpinnedIndex === -1) {
          // No unpinned windows, add to end
          return [...remainingWindows, updatedWindow]
        } else {
          return [
            ...remainingWindows.slice(0, firstUnpinnedIndex),
            updatedWindow,
            ...remainingWindows.slice(firstUnpinnedIndex)
          ]
        }
      }
    })
  }

  const focusWindow = (id) => {
    setActiveWindow(id)
  }

  const closeAllWindows = () => {
    setWindows([])
    setActiveWindow(null)
  }

  const closeOtherWindows = (id) => {
    const window = windows.find(w => w.id === id)
    if (window) {
      setWindows([window])
      setActiveWindow(id)
    }
  }

  const closeWindowsToRight = (id) => {
    const index = windows.findIndex(w => w.id === id)
    setWindows(windows.slice(0, index + 1))
  }

  const closeWindowsToLeft = (id) => {
    const index = windows.findIndex(w => w.id === id)
    setWindows(windows.slice(index))
  }

  const closeWindow = (id) => {
    setWindows(prevWindows => {
      const filteredWindows = prevWindows.filter(w => w.id !== id)
      if (activeWindow === id && filteredWindows.length > 0) {
        setActiveWindow(filteredWindows[filteredWindows.length - 1].id)
      } else if (filteredWindows.length === 0) {
        setActiveWindow(null)
      }
      return filteredWindows
    })
  }

  const getWindowPosition = (id) => {
    const index = windows.findIndex(w => w.id === id)
    return {
      hasLeft: index > 0,
      hasRight: index < windows.length - 1,
      isOnly: windows.length === 1
    }
  }

  return (
    <WindowContext.Provider value={{
      windows,
      activeWindow,
      createWindow,
      closeWindow,
      pinWindow,
      focusWindow,
      closeAllWindows,
      closeOtherWindows,
      closeWindowsToRight,
      closeWindowsToLeft,
      getWindowPosition,
      updateCursorPosition
    }}>
      {children}
    </WindowContext.Provider>
  )
}

export function useWindow() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindow must be used within a WindowProvider')
  }
  return context
}