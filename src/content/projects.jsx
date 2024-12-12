export const projectsContent = `
import React from 'react';

function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description: \`
        Full-stack e-commerce solution with React, Node.js, and MongoDB.
        Features include real-time inventory, payment processing, and 
        admin dashboard.
      \`,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      role: "Lead Developer",
      github: "https://github.com/johndoe/ecommerce"
    },
    {
      name: "AI Task Manager",
      description: \`
        Smart task management app using machine learning for task
        prioritization and scheduling suggestions.
      \`,
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      role: "Full Stack Developer",
      github: "https://github.com/johndoe/ai-tasks"
    },
    {
      name: "Cloud File System",
      description: \`
        Distributed file system with end-to-end encryption and 
        real-time collaboration features.
      \`,
      technologies: ["AWS", "React", "Node.js", "Socket.io"],
      role: "Backend Developer",
      github: "https://github.com/johndoe/cloud-fs"
    }
  ];

  return (
    <div className="projects-container">
      <h1>Portfolio Projects</h1>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <h2>{project.name}</h2>
            <p className="role">{project.role}</p>
            <p className="description">{project.description}</p>
            
            <div className="tech-stack">
              <h3>Technologies:</h3>
              <ul>
                {project.technologies.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
`;