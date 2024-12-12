export const resumeContent = `
import React from 'react';

function Resume() {
  const experience = [
    {
      company: "Université Ibn Tofail",
      role: "Web Development Intern",
      period: "March - April 2024",
      achievements: [
        "Developed a Room Reservation Management System with a user-friendly interface.",
        "Implemented complete traceability for bookings, modifications, and deletions.",
        "Created an administrative dashboard for efficient management of users and reservations."
      ]
    },
    {
    company: "Zoom In Media",
    role: "Web Development Intern",
    period: "October - Novembre 2024",
    achievements: [
      "Designed the initial UI/UX for a Hajj and Umrah booking app.",
      "Transitioned to the backend team to develop various API endpoints using Laravel.",
      "Worked on functionalities for managing clients, hotels, destinations, and transports.",
      "Gained hands-on experience in API development and backend architecture."
  ]
}

  ];

  const education = {
    degree: "Technicien Spécialisé en Développement Digital",
    school: "ISTA Maamora Kénitra",
    year: "2022 - 2024",
    courses: [
      "Web Development",
      "Database Management",
      "Software Engineering",
      "UI/UX Design"
    ]
  };

  const certifications = [
    {
      name: "PCAP: Programming Essentials in Python",
      issuer: "Python Institute",
      year: "2023"
    },
    {
      name: "French Language Certification (B1)",
      issuer: "Alliance Française",
      year: "2023"
    },
    {
      name: "English Language Certification (C1)",
      issuer: "British Council",
      year: "2023"
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
