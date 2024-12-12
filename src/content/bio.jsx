export const bioContent = `
import React from 'react';

function Bio() {
  const personalInfo = {
    name: "John Doe",
    role: "Full Stack Developer",
    location: "San Francisco, CA",
    about: \`
      Passionate developer with 5 years of experience in building
      modern web applications. Specializing in React, Node.js,
      and cloud architecture.
    \`,
    interests: [
      "Open Source Development",
      "UI/UX Design",
      "Cloud Computing",
      "Machine Learning"
    ]
  };

  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS"]
  };

  return (
    <div className="bio-container">
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.role}</h2>
      <p>{personalInfo.about}</p>
      
      <section>
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4>{category}</h4>
              <ul>
                {items.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Bio;
`;