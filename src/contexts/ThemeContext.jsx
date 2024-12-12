import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    type: 'dark', // 'dark', 'light', 'high-contrast'
    colors: {
      background: '#1e1e1e',
      foreground: '#cccccc',
      accent: '#007acc',
      sidebar: '#252526',
      activityBar: '#333333',
      titleBar: '#3c3c3c',
      statusBar: '#007acc',
    }
  })

  const toggleTheme = (themeType) => {
    const themes = {
      dark: {
        background: '#1e1e1e',
        foreground: '#cccccc',
        accent: '#007acc',
        sidebar: '#252526',
        activityBar: '#333333',
        titleBar: '#3c3c3c',
        statusBar: '#007acc',
      },
      light: {
        background: '#ffffff',
        foreground: '#000000',
        accent: '#007acc',
        sidebar: '#f3f3f3',
        activityBar: '#2c2c2c',
        titleBar: '#dddddd',
        statusBar: '#007acc',
      },
      'high-contrast': {
        background: '#000000',
        foreground: '#ffffff',
        accent: '#007acc',
        sidebar: '#000000',
        activityBar: '#000000',
        titleBar: '#000000',
        statusBar: '#007acc',
      }
    }

    setTheme({
      type: themeType,
      colors: themes[themeType]
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}