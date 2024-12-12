import Draggable from 'react-draggable'
import { IconX, IconMaximize, IconMinus, IconCode } from '@tabler/icons-react'

function Window({ window, onClose, onMaximize, isActive }) {
  const windowClass = `
    absolute bg-gray-800 rounded-lg shadow-lg overflow-hidden
    ${window.maximized ? 'w-full h-full inset-0' : 'w-[800px] h-[500px]'}
    ${isActive ? 'z-10' : 'z-0'}
  `

  return (
    <Draggable disabled={window.maximized}>
      <div className={windowClass}>
        {/* Title Bar */}
        <div className="bg-gray-700 p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconCode size={16} />
            <span className="text-sm">{window.path}</span>
          </div>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-600 rounded">
              <IconMinus size={16} />
            </button>
            <button 
              className="p-1 hover:bg-gray-600 rounded"
              onClick={() => onMaximize(window.id)}
            >
              <IconMaximize size={16} />
            </button>
            <button 
              className="p-1 hover:bg-red-500 rounded"
              onClick={() => onClose(window.id)}
            >
              <IconX size={16} />
            </button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex h-[calc(100%-2.5rem)]">
          {/* Line Numbers */}
          <div className="bg-gray-900 text-gray-500 p-4 text-right select-none">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i + 1}>{i + 1}</div>
            ))}
          </div>

          {/* Content */}
          <div className="p-4 font-mono flex-1">
            {window.component}
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default Window