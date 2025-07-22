'use client';

import { useState } from 'react';

const ComingSoon = ({ role, onBack }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roleInfo = {
    doctor: {
      title: 'Healthcare Provider',
      icon: '👨‍⚕️',
      color: '#10B981',
    },
    donor: {
      title: 'Donor',
      icon: '🤝',
      color: '#F59E0B',
    },
  };

  const info = roleInfo[role] || {
    title: 'Role',
    icon: '👤',
    color: '#3B82F6',
  };

  const handleBackClick = () => {
    console.log('Back to role selection clicked');
    if (onBack) {
      onBack();
    }
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    console.log('Email notification requested:', email);
    setIsSubmitted(true);
    // Here you would typically send the email to your backend
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-container">
        <button className="back-button" onClick={handleBackClick}>
          ← Back to Role Selection
        </button>

        <div className="coming-soon-content">
          <div
            className="coming-soon-icon"
            style={{ backgroundColor: `${info.color}20` }}
          >
            <span style={{ color: info.color }}>{info.icon}</span>
          </div>

          <h1>Coming Soon!</h1>
          <h2 style={{ color: info.color }}>{info.title} Registration</h2>

          <p>
            We're working hard to bring you the {info.title.toLowerCase()}{' '}
            registration experience. This feature will be available soon!
          </p>

          <div className="notify-section">
            <h3>Get Notified</h3>
            <p>
              Enter your email to be notified when {info.title.toLowerCase()}{' '}
              registration is available:
            </p>

            {isSubmitted ? (
              <div className="success-message" style={{ color: info.color }}>
                ✓ Thank you! We'll notify you when {info.title.toLowerCase()}{' '}
                registration is available.
              </div>
            ) : (
              <form className="notify-form" onSubmit={handleNotifySubmit}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" style={{ backgroundColor: info.color }}>
                  Notify Me
                </button>
              </form>
            )}
          </div>

          <div className="alternative-section">
            <p>In the meantime, you can:</p>
            <ul>
              <li>
                Explore our <a href="#about">About page</a> to learn more
              </li>
              <li>
                Contact us at{' '}
                <a href="mailto:support@meditrust.org">support@meditrust.org</a>
              </li>
              <li>Follow us on social media for updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
