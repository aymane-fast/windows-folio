import { useState } from 'react';
import { IconPlayerPlay, IconPlayerPause, IconRotate } from '@tabler/icons-react';

function Debug() {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState([]);

  const runDemo = () => {
    setIsRunning(true);
    setOutput([]);
    
    const steps = [
      'Starting portfolio demo...',
      'Loading components...',
      'Initializing projects...',
      'Running animations...',
      'Portfolio demo running successfully!'
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setOutput(prev => [...prev, step]);
        if (i === steps.length - 1) {
          setIsRunning(false);
        }
      }, i * 1000);
    });
  };

  return (
    <div className="w-full h-full bg-[#252526] flex flex-col">
      {/* Debug Controls */}
      <div className="p-2 border-b border-[#3c3c3c] flex items-center gap-2">
        <button
          className={`p-2 rounded hover:bg-[#3c3c3c] ${isRunning ? 'text-[#75beff]' : ''}`}
          onClick={runDemo}
          disabled={isRunning}
        >
          {isRunning ? <IconPlayerPause size={16} /> : <IconPlayerPlay size={16} />}
        </button>
        <button
          className="p-2 rounded hover:bg-[#3c3c3c]"
          onClick={() => {
            setOutput([]);
            setIsRunning(false);
          }}
        >
          <IconRotate size={16} />
        </button>
        <span className="text-sm text-[#858585]">
          {isRunning ? 'Running demo...' : 'Ready'}
        </span>
      </div>

      {/* Debug Console */}
      <div className="flex-1 p-2 font-mono text-sm overflow-auto bg-[#1e1e1e]">
        {output.map((line, i) => (
          <div key={i} className="py-1">
            <span className="text-[#858585]">[{new Date().toLocaleTimeString()}]</span>
            <span className="ml-2">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Debug;