import React from 'react';
import './DoctorRecognitionPage.css';

const DoctorRecognitionPage = () => {
  return (
    <div className="recognition-page">
      <section className="points-summary">
        <h2>Total Points</h2>
        <p className="big-number">1200</p>
        <p>Weekly Reviews Completed: 10</p>
        <p>Bonus Points Earned: 200</p>
      </section>
      <section className="badges-grid">
        <h2>Badges</h2>
        <div className="badge">Bronze Reviewer</div>
        <div className="badge">Trusted Doctor</div>
        <div className="badge">Top 1%</div>
        <div className="badge">Consistency Streak</div>
      </section>
      <section className="leaderboard">
        <h2>Leaderboard</h2>
        <p>Top 10 doctors this month</p>
      </section>
      <section className="progress-tracker">
        <p>You are 2 reviews away from 'Trusted Doctor' badge</p>
      </section>
    </div>
  );
};

export default DoctorRecognitionPage;
