import React from 'react';

function Skills() {
  const skillsJson = {
    name: "Aymane Bahlouli",
    title: "Full Stack Developer",
    technicalSkills: {
      frontEnd: {
        languages: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Bootstrap"],
        tools: ["Webpack", "Babel"]
      },
      backEnd: {
        languages: ["PHP", "Laravel", "Python"],
        databases: ["MySQL", "NoSQL"]
      },
      cms: ["WordPress", "Drupal", "Shopify"],
      designTools: ["Canva", "Figma", "Photoshop", "Illustrator"],
      versionControl: ["Git", "Jira"]
    }
  };

  return (
    <div className="h-full bg-[#1e1e1e] text-white font-mono">
      {/* VS Code-like header */}
      <div className="h-9 bg-[#252526] flex items-center px-4 border-b border-[#333]">
        <div className="flex items-center bg-[#1e1e1e] h-full px-3">
          <span className="text-[#519aba] mr-2">{'{}'}</span>
          <span className="text-sm">skills.json</span>
        </div>
      </div>

      {/* Code content with line numbers */}
      <div className="flex">
        {/* Line numbers */}
        <div className="p-4 text-right text-[#858585] select-none bg-[#1e1e1e] border-r border-[#333] pr-4">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i + 1} className="leading-6">{i + 1}</div>
          ))}
        </div>

        {/* JSON content */}
        <pre className="p-4 flex-1 overflow-auto">
          <code>
            <span className="text-[#d4d4d4]">{'{'}</span>
            <br />
            <span className="text-[#9cdcfe]">"name"</span>
            <span className="text-[#d4d4d4]">: </span>
            <span className="text-[#ce9178]">"{skillsJson.name}"</span>
            <span className="text-[#d4d4d4]">,</span>
            <br />
            <span className="text-[#9cdcfe]">"title"</span>
            <span className="text-[#d4d4d4]">: </span>
            <span className="text-[#ce9178]">"{skillsJson.title}"</span>
            <span className="text-[#d4d4d4]">,</span>
            <br />
            <span className="text-[#9cdcfe]">"technicalSkills"</span>
            <span className="text-[#d4d4d4]">: {JSON.stringify(skillsJson.technicalSkills, null, 4)
              .split('\n')
              .map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  <span className={
                    line.includes('"') 
                      ? line.includes(':') 
                        ? 'text-[#9cdcfe]' // keys
                        : 'text-[#ce9178]' // string values
                      : 'text-[#d4d4d4]' // brackets and commas
                  }>{line}</span>
                </React.Fragment>
              ))}</span>
            <br />
            <span className="text-[#d4d4d4]">{'}'}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Skills;