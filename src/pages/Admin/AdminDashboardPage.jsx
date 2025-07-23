import React from 'react';
import './AdminDashboardPage.css';

const AdminDashboardPage = () => {
  return (
    <div className="admin-dashboard">
      <header className="stats-cards">
        <div className="card">Total Verified Cases</div>
        <div className="card">Total Donations</div>
        <div className="card">Active Doctors</div>
        <div className="card">Total Donors</div>
        <div className="card">Flagged Cases</div>
        <div className="card">Open Channel Requests</div>
      </header>
      <section className="charts">
        <div className="line-chart">Weekly Donation Activity</div>
        <div className="bar-graph">Most Common Case Types</div>
        <div className="pie-chart">User Role Distribution</div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;
