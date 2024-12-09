import React from 'react';
import './Content.css';

function CV() {
  return (
    <div className="content-container">
      <h1>Aymane Bahlouli</h1>
      <section className="contact-info">
        <p>Location: Morocco</p>
        <p>Email: aymanefast@gmail.com</p>
        <p>Phone: 0650075294</p>
      </section>
      
      <section>
        <h2>Profile Summary</h2>
        <p>Innovative web developer with expertise in Laravel, JavaScript, and modern front-end frameworks. 
           Skilled at creating user-friendly applications with intuitive interfaces.</p>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Internship Project – Université Ibn Toufail</h3>
          <ul>
            <li>Developed a room reservation management system</li>
            <li>Key features: full traceability, admin dashboard, online booking</li>
            <li>Technologies: Laravel, Tailwind CSS, JavaScript</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          <li>Arabic (Native)</li>
          <li>French (Fluent)</li>
          <li>English (Fluent)</li>
        </ul>
      </section>
    </div>
  );
}

export default CV;