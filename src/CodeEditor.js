import React from 'react';
import './css/CodeEditor.css';

function CodeEditor({ content }) {
  return (
    <div className="code-editor">
      <div className="editor-tabs">
        <div className="tab active">
          <span>skills.json</span>
          <button className="close-tab">×</button>
        </div>
      </div>
      <div className="editor-content">
        <div className="line-numbers">
          {content.split('\n').map((_, i) => (
            <div key={i + 1}>{i + 1}</div>
          ))}
        </div>
        <pre className="code-content">
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeEditor;
