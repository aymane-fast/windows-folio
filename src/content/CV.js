import React from 'react';
import '../css/cv.css';

function CV() {
  return (
    <div className="cv-container">
      <div className="cv-header-section">
        <div className="cv-profile">
          <div className="profile-image">AB</div>
          <div className="profile-info">
            <h1>Aymane Bahlouli</h1>
            <h2>Full Stack Developer</h2>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>aymanebahlouli@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+212 650075294</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Sidi Yahya, Kenitra, Morocco</span>
          </div>
        </div>
      </div>

      <div className="cv-main">
        <div className="cv-section">
          <h3>Profile Summary</h3>
          <p>Motivated full-stack developer passionate about web technologies, interactive applications, and innovative digital solutions. Continuously seeking opportunities to enhance skills and contribute to impactful projects.</p>
        </div>

        <div className="cv-section">
          <h3>Professional Experience</h3>
          <div className="experience-card">
            <div className="experience-header">
              <h4>Université Ibn Tofail, Kénitra</h4>
              <span>March-April 2024</span>
            </div>
            <ul>
              <li>Developed a room reservation management system</li>
              <li>Focused on intuitive user interfaces, action logging, and admin dashboards</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h4>Zoom In Media</h4>
              <span>Internship</span>
            </div>
            <ul>
              <li>Worked on a Hajj and Umrah App</li>
              <li>Assisted in designing and developing the application for managing trips</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;