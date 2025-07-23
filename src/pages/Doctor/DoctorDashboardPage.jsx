import React from 'react';
import './DoctorDashboardPage.css';

const DoctorDashboardPage = () => {
  return (
    <div className="doctor-dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Reviews</li>
            <li>Recognition & Points</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Pending Case Reviews</h1>
        </header>
        <section className="case-list">
          <div className="case-card">
            <h2>Patient Name</h2>
            <p>Case Title: Kidney Transplant</p>
            <p>Summary: AI Preprocessing Summary</p>
            <p>Flagged Issues: <span className="flagged">Highlighted Issues</span></p>
            <p>Document Consistency Score: 85%</p>
            <p>Status: Pending</p>
            <button className="primary-button">Review Now</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboardPage;
