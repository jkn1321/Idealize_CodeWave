import React from 'react';
import './CaseDetailsDonatePage.css';

const CaseDetailsDonatePage = () => {
  return (
    <div className="case-details">
      <section className="left-column">
        <h2>Patient Info</h2>
        <p>Diagnosis Summary</p>
        <div className="documents">
          <a href="#">Document 1</a>
        </div>
        <p>Doctor's Verification Notes</p>
      </section>
      <section className="right-column">
        <h2>Funding Progress</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: '75%' }}></div>
        </div>
        <input type="number" placeholder="Donate Amount" />
        <label>
          <input type="checkbox" /> Donate Anonymously
        </label>
        <select>
          <option>Card</option>
          <option>Wallet</option>
          <option>Bank Transfer</option>
        </select>
        <button className="primary-button">Donate Securely</button>
      </section>
    </div>
  );
};

export default CaseDetailsDonatePage;
