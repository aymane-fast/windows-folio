import React from 'react';
import './Content.css';

function CV() {
  return (
    <div className="content-container">
      <div className="cv-header">
        <div>
          <h1>Aymane Bahlouli</h1>
          <div className="cv-title">Full Stack Developer</div>
        </div>
      </div>

      <div className="contact-info">
        <p>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          Morocco
        </p>
        <p>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>
          aymanefast@gmail.com
        </p>
        <p>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          0650075294
        </p>
      </div>
      
      <section>
        <h2>Profile Summary</h2>
        <div className="experience-item">
          <p>Innovative web developer with expertise in Laravel, JavaScript, and modern front-end frameworks. 
             Skilled at creating user-friendly applications with intuitive interfaces. Passionate about clean code
             and modern development practices.</p>
        </div>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Internship Project – Université Ibn Toufail</h3>
          <ul>
            <li>Developed a comprehensive room reservation management system from concept to deployment</li>
            <li>Implemented full traceability features and an intuitive admin dashboard</li>
            <li>Created a streamlined online booking system with real-time availability updates</li>
            <li>Utilized Laravel, Tailwind CSS, and JavaScript to build a modern tech stack</li>
            <li>Achieved significant improvement in room booking efficiency and user satisfaction</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Languages</h2>
        <div className="languages-grid">
          <div className="language-item">
            <h4>Arabic</h4>
            <p>Native</p>
          </div>
          <div className="language-item">
            <h4>French</h4>
            <p>Fluent</p>
          </div>
          <div className="language-item">
            <h4>English</h4>
            <p>Fluent</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CV;