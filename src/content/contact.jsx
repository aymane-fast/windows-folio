export const contactContent = `
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = {
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: {contactInfo.email}</li>
          <li>Phone: {contactInfo.phone}</li>
          <li>Location: {contactInfo.location}</li>
        </ul>
        
        <div className="social-links">
          <h3>Connect with me:</h3>
          <a href={contactInfo.social.github}>GitHub</a>
          <a href={contactInfo.social.linkedin}>LinkedIn</a>
          <a href={contactInfo.social.twitter}>Twitter</a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
`;