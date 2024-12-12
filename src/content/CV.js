import React from 'react';
import '../css/cv.css';

function CV() {
  return (
    <div className="cv-container">
      <object
        data="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>It appears you don't have a PDF plugin for this browser. You can 
          <a href="/resume.pdf"> click here to download the PDF file.</a>
        </p>
      </object>
    </div>
  );
}

export default CV;