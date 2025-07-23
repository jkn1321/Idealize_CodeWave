import React from 'react';
import '../styles/DonorMessagesViewerPage.css';

const DonorMessagesViewerPage = () => {
  return (
    <div className="donor-messages-viewer">
      <aside className="sidebar">
        <input type="text" placeholder="Search Donors" />
        <ul>
          <li>Donor 1</li>
          <li>Donor 2</li>
        </ul>
      </aside>
      <main className="message-thread">
        <div className="message patient">Patient: Hello</div>
        <div className="message donor">Donor: Hi</div>
      </main>
    </div>
  );
};

export default DonorMessagesViewerPage;
