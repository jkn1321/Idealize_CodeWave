'use client';

import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'support@meditrust.org',
      description: 'Get in touch with our support team',
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our team',
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Healthcare Ave, Medical District',
      description: 'San Francisco, CA 94102',
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM PST',
      description: 'Weekend support available',
    },
  ];

  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p className="contact-subtitle">
            Have questions? We're here to help. Reach out to our team and we'll
            get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p className="contact-main">{info.details}</p>
                    <p className="contact-desc">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
