import React from 'react';
import './VerifiedCaseBrowserPage.css';

const VerifiedCaseBrowserPage = () => {
  return (
    <div className="case-browser">
      <header className="filter-bar">
        <select>
          <option>Case Type</option>
        </select>
        <select>
          <option>Urgency Level</option>
        </select>
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Search" />
      </header>
      <section className="case-grid">
        <div className="case-card">
          <h3>Patient Name</h3>
          <p>Case Title: Kidney Transplant</p>
          <p>Summary: Short summary</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
          <button className="primary-button">View Details</button>
        </div>
      </section>
    </div>
  );
};

export default VerifiedCaseBrowserPage;
