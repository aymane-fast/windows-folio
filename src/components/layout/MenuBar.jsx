import { useTheme } from '../../contexts/ThemeContext'

export default function MenuBar({ activeMenu, setActiveMenu }) {
  const { toggleTheme } = useTheme()

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  const handleMenuClick = (menuKey) => {
    setActiveMenu(activeMenu === menuKey ? null : menuKey)
  }

  const menuItems = {
    file: {
      label: 'File',
      items: [
        { label: 'New File', shortcut: 'Ctrl+N' },
        { label: 'Open File...', shortcut: 'Ctrl+O' },
        { type: 'separator' },
        { label: 'Save', shortcut: 'Ctrl+S' },
        { label: 'Save As...', shortcut: 'Ctrl+Shift+S' },
      ]
    },
    edit: {
      label: 'Edit',
      items: [
        { label: 'Undo', shortcut: 'Ctrl+Z' },
        { label: 'Redo', shortcut: 'Ctrl+Y' },
        { type: 'separator' },
        { label: 'Cut', shortcut: 'Ctrl+X' },
        { label: 'Copy', shortcut: 'Ctrl+C' },
        { label: 'Paste', shortcut: 'Ctrl+V' }
      ]
    },
    view: {
      label: 'View',
      items: [
        { 
          label: 'Appearance',
          submenu: [
            { 
              label: 'Theme',
              submenu: [
                { 
                  label: 'Dark (Default)',
                  onClick: () => toggleTheme('dark')
                },
                { 
                  label: 'Light',
                  onClick: () => toggleTheme('light')
                },
                { 
                  label: 'High Contrast',
                  onClick: () => toggleTheme('high-contrast')
                }
              ]
            }
          ]
        }
      ]
    }
  }

  return (
    <div className="h-8 bg-[#3c3c3c] flex items-center px-2 select-none">
      <div className="flex items-center gap-2 relative">
        {Object.entries(menuItems).map(([key, menu]) => (
          <div key={key} className="relative">
            <button
              className={`px-3 py-1 hover:bg-[#505050] rounded ${
                activeMenu === key ? 'bg-[#505050]' : ''
              }`}
              onClick={() => handleMenuClick(key)}
            >
              {menu.label}
            </button>
            {activeMenu === key && (
              <div 
                className="absolute top-full left-0 mt-1 bg-[#252526] rounded shadow-lg z-50 min-w-[200px]"
                onMouseLeave={handleMouseLeave}
              >
                {menu.items.map((item, i) => (
                  <MenuItemRenderer key={i} item={item} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MenuItemRenderer({ item }) {
  if (item.type === 'separator') {
    return <div className="h-px bg-[#3c3c3c] my-1" />
  }

  const hasSubmenu = item.submenu?.length > 0

  return (
    <div className="relative group">
      <button
        className="w-full px-2 py-1 text-left hover:bg-[#505050] flex justify-between items-center"
        onClick={item.onClick}
      >
        <span>{item.label}</span>
        {item.shortcut && <span className="text-[#808080] text-xs">{item.shortcut}</span>}
        {hasSubmenu && <span className="ml-2">▶</span>}
      </button>
      {hasSubmenu && (
        <div className="absolute left-full top-0 bg-[#252526] rounded shadow-lg hidden group-hover:block min-w-[200px]">
          {item.submenu.map((subItem, i) => (
            <MenuItemRenderer key={i} item={subItem} />
          ))}
        </div>
      )}
    </div>
  )
}