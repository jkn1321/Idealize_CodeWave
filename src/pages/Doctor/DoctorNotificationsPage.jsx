import React from 'react';
import './DoctorNotificationsPage.css';

const DoctorNotificationsPage = () => {
  return (
    <div className="notifications-page">
      <header>
        <h2>Notifications</h2>
      </header>
      <section className="notifications-list">
        <div className="notification-item">
          <span className="icon">🔔</span>
          <p>New review request received</p>
          <span className="time">2 hours ago</span>
        </div>
        <div className="notification-item">
          <span className="icon">🏆</span>
          <p>Recognition earned: Trusted Doctor</p>
          <span className="time">1 day ago</span>
        </div>
        <div className="notification-item">
          <span className="icon">📩</span>
          <p>Admin message: Update your profile</p>
          <span className="time">3 days ago</span>
        </div>
      </section>
    </div>
  );
};

export default DoctorNotificationsPage;
