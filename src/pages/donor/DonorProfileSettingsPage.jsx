import React from 'react';
import './DonorProfileSettingsPage.css';

const DonorProfileSettingsPage = () => {
  return (
    <div className="profile-settings">
      <h2>Profile Settings</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Current Password" required />
        <input type="password" placeholder="New Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <label>
          <input type="checkbox" /> Default to Anonymous Donations
        </label>
        <button className="primary-button">Save Changes</button>
      </form>
      <button className="delete-button">Delete Account</button>
    </div>
  );
};

export default DonorProfileSettingsPage;
