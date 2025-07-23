import React from 'react';
import '../styles/FlaggedCasesPage.css';

const FlaggedCasesPage = () => {
  return (
    <div className="flagged-cases">
      <h2>Flagged Cases</h2>
      <table>
        <thead>
          <tr>
            <th>Case ID / Title</th>
            <th>Flag Reason</th>
            <th>Flagged By</th>
            <th>Date Flagged</th>
            <th>Current Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Case 123</td>
            <td>Document Mismatch</td>
            <td>System</td>
            <td>2025-07-20</td>
            <td>Pending Review</td>
            <td><button>View Full Case</button> <button>Add Notes</button> <button>Approve</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlaggedCasesPage;
