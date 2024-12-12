export const bioContent = `
import React from 'react';

function Bio() {
  const personalInfo = {
    name: "Aymane Bahlouli",
    role: "Full Stack Developer",
    location: "Kénitra, Morocco",
    about: \`
      Dedicated and detail-oriented developer with hands-on experience in
      building dynamic web applications and intuitive user interfaces.
      Specializing in React, Laravel, and crafting efficient solutions
      for businesses.
    \`,
    interests: [
      "Web Development",
      "Digital Marketing",
      "UI/UX Design",
      "Open Source Projects"
    ]
  };

  const skills = {
    frontend: ["React", "JavaScript", "Bootstrap", "Tailwind CSS"],
    backend: ["Laravel", "PHP", "MySQL"],
    tools: ["Git", "Figma", "Photoshop"]
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
