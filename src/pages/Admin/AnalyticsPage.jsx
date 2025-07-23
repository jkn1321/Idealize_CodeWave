import React from 'react';
import '../styles/AnalyticsPage.css';

const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <h2>Analytics</h2>
      <div className="widgets">
        <div className="heatmap">Donation Heatmap</div>
        <div className="map">Active Users by Region</div>
        <div className="bar-graph">Doctor Response Time</div>
        <div className="funnel">Case Approval Pipeline</div>
        <div className="growth-trend">Growth Trend</div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
