import React from 'react';
import '../styles/ChannelRequestsViewerPage.css';

const ChannelRequestsViewerPage = () => {
  return (
    <div className="channel-requests-viewer">
      <h2>Channel Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Requested Doctor</th>
            <th>Specialization</th>
            <th>Request Status</th>
            <th>Timestamp</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Dr. Smith</td>
            <td>Cardiology</td>
            <td>Pending</td>
            <td>2025-07-20</td>
            <td><button>View Details</button> <button>Cancel</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChannelRequestsViewerPage;
