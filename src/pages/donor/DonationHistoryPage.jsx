import React from 'react';
import './DonationHistoryPage.css';

const DonationHistoryPage = () => {
  return (
    <div className="donation-history">
      <h2>Donation History</h2>
      <table>
        <thead>
          <tr>
            <th>Case Title</th>
            <th>Amount</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kidney Transplant</td>
            <td>₹5000</td>
            <td>2025-07-20</td>
            <td className="confirmed">Confirmed</td>
            <td><button className="receipt-button">Download</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DonationHistoryPage;
