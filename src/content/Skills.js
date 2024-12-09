import React from 'react';
import './Content.css';

function Skills() {
  return (
    <div className="content-container">
      <h2>Technical Skills</h2>
      
      <section>
        <h3>Web Development</h3>
        <ul>
          <li>HTML, CSS, Tailwind CSS, Bootstrap</li>
          <li>JavaScript, React, Laravel</li>
        </ul>
      </section>

      <section>
        <h3>Backend Development</h3>
        <ul>
          <li>PHP, Node.js</li>
          <li>API Development</li>
          <li>MySQL and SQL principles</li>
        </ul>
      </section>

      <section>
        <h3>Tools & Platforms</h3>
        <ul>
          <li>Git/GitHub</li>
          <li>Nix environment</li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;