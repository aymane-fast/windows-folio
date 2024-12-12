export const menuItems = {
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
        { label: 'Command Palette...', shortcut: 'Ctrl+Shift+P' },
        { type: 'separator' },
        { label: 'Appearance', submenu: [
          { label: 'Theme', submenu: [
            { label: 'Dark (Default)' },
            { label: 'Light' },
            { label: 'High Contrast' }
          ]},
          { label: 'Zoom In', shortcut: 'Ctrl++' },
          { label: 'Zoom Out', shortcut: 'Ctrl+-' }
        ]}
      ]
    }
  }