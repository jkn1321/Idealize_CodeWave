import React from 'react';
import './DoctorProfilePage.css';

const DoctorProfilePage = () => {
  return (
    <div className="profile-page">
      <section className="personal-info">
        <h2>Personal Info</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Specialization" required />
          <input type="text" placeholder="Hospital" required />
        </form>
      </section>
      <section className="credentials">
        <h2>Credentials</h2>
        <form>
          <input type="text" placeholder="License Number" required />
          <input type="file" accept=".pdf,.jpg,.png" required />
        </form>
      </section>
      <section className="password-change">
        <h2>Password</h2>
        <form>
          <input type="password" placeholder="Current Password" required />
          <input type="password" placeholder="New Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className="primary-button">Save Changes</button>
        </form>
      </section>
      <section className="delete-account">
        <button className="delete-button">Delete Account</button>
      </section>
    </div>
  );
};

export default DoctorProfilePage;
