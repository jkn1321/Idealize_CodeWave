import React from 'react';
import './ImpactReportPage.css';

const ImpactReportPage = () => {
  return (
    <div className="impact-report">
      <h2>Impact Report</h2>
      <div className="charts">
        <div className="pie-chart">Pie Chart Placeholder</div>
        <div className="timeline">Timeline Placeholder</div>
      </div>
      <div className="badges">
        <div className="badge">Compassionate Giver</div>
        <div className="badge">Monthly Supporter</div>
      </div>
      <button className="primary-button">Set Up Monthly Giving</button>
    </div>
  );
};

export default ImpactReportPage;
