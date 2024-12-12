import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useWindow } from '../contexts/WindowContext';

function CodeDisplay({ content }) {
  const { updateCursorPosition } = useWindow();

  const handleMouseUp = (e) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    
    const range = selection.getRangeAt(0);
    const preContent = range.startContainer.textContent;
    
    // Calculate line and column
    const textUntilCursor = preContent?.substring(0, range.startOffset) || '';
    const lines = textUntilCursor.split('\n');
    const line = lines.length;
    const column = lines[lines.length - 1].length + 1;

    updateCursorPosition(line, column);
  };

  return (
    // Make sure parent takes full height and allows overflow
    <div className="h-full w-full"> 
      {/* Add overflow container with specific height */}
      <div className="h-full overflow-y-auto">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: '#1e1e1e',
            fontSize: '14px',
            lineHeight: '1.6rem',
            height: 'auto', // Allow content to determine height
            minHeight: '100%',
            maxHeight: 'none'
          }}
          showLineNumbers={true}
          wrapLines={true}
          lineProps={lineNumber => ({
            style: { 
              display: 'block', 
              cursor: 'text',
              userSelect: 'text',
              pointerEvents: 'auto'
            },
            onClick: () => updateCursorPosition(lineNumber, 1),
            onMouseUp: handleMouseUp
          })}
        >
          {content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeDisplay;