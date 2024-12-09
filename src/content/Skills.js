import React from 'react';
// import '../css/Content.css';
import '../css/CodeEditor.css'
import CodeEditor from '../CodeEditor';

function Skills() {
  const skillsJson = `{
  "name": "Aymane Bahlouli",
  "title": "Full Stack Developer",
  "technicalSkills": {
    "frontEnd": {
      "languages": ["HTML5", "CSS3", "JavaScript"],
      "frameworks": ["React", "Tailwind CSS", "Bootstrap"],
      "tools": ["Webpack", "Babel"]
    },
    "backEnd": {
      "languages": ["PHP", "Node.js"],
      "frameworks": ["Laravel"],
      "databases": ["MySQL", "MongoDB"]
    },
    "devOps": {
      "versionControl": ["Git", "GitHub"],
      "environments": ["Nix", "Linux"],
      "tools": ["Docker"]
    },
    "softSkills": [
      "Problem Solving",
      "Team Collaboration",
      "Project Management",
      "Agile Methodology"
    ]
  },
  "currentlyLearning": [
    "Advanced React Patterns",
    "System Design",
    "Cloud Architecture"
  ]
}`;

  return (
    <div className="content-container code-editor-wrapper">
      <CodeEditor content={skillsJson} />
    </div>
  );
}

export default Skills;