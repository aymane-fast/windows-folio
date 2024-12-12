export const resumeContent = `
import React from 'react';

function Resume() {
  const experience = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Frontend Developer",
      period: "2021 - Present",
      achievements: [
        "Led team of 5 developers in rebuilding company's main product",
        "Improved application performance by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2019 - 2021",
      achievements: [
        "Built scalable backend services using Node.js and MongoDB",
        "Developed responsive frontend using React and Redux",
        "Mentored junior developers"
      ]
    }
  ];

  const education = {
    degree: "B.S. Computer Science",
    school: "Tech University",
    year: "2019",
    gpa: "3.8/4.0",
    courses: [
      "Advanced Web Development",
      "Cloud Computing",
      "Data Structures",
      "Algorithms"
    ]
  };

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      name: "Professional React Developer",
      issuer: "Meta",
      year: "2021"
    }
  ];

  return (
    <div className="resume-container">
      <header>
        <h1>Professional Experience</h1>
      </header>

      <section className="experience">
        {experience.map(job => (
          <div key={job.company} className="job">
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <p>{job.period}</p>
            <ul>
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="education">
        <h2>Education</h2>
        <div>
          <h3>{education.degree}</h3>
          <p>{education.school} - {education.year}</p>
          <p>GPA: {education.gpa}</p>
          <h4>Relevant Coursework:</h4>
          <ul>
            {education.courses.map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        {certifications.map(cert => (
          <div key={cert.name}>
            <h3>{cert.name}</h3>
            <p>{cert.issuer} - {cert.year}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Resume;
`;