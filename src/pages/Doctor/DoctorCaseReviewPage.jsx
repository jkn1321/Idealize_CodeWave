import React from 'react';
import './DoctorCaseReviewPage.css';

const DoctorCaseReviewPage = () => {
  return (
    <div className="case-review-page">
      <section className="case-overview">
        <h2>Case Overview</h2>
        <p>Patient Name: John Doe</p>
        <p>Case Title: Kidney Transplant</p>
        <p>Diagnosis Summary: AI-generated summary</p>
        <div className="uploaded-documents">
          <h3>Uploaded Documents</h3>
          <a href="#">Document 1</a>
          <a href="#">Document 2</a>
        </div>
      </section>
      <section className="ai-summary">
        <h2>AI Preprocessing Summary</h2>
        <p>Flags: Inconsistencies, missing docs</p>
        <p>Confidence Score: 85% Genuine</p>
        <p>Notes: AI engine notes</p>
      </section>
      <section className="doctor-review">
        <h2>Doctor Review</h2>
        <textarea placeholder="Add review notes or remarks"></textarea>
        <div className="decision-buttons">
          <button className="approve">Approve</button>
          <button className="reject">Reject</button>
          <button className="request-more">Request More Documents</button>
        </div>
      </section>
    </div>
  );
};

export default DoctorCaseReviewPage;
