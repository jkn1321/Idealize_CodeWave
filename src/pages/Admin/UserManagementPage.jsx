import React from 'react';
import './UserManagementPage.css';

const UserManagementPage = () => {
  return (
    <div className="user-management">
      <header className="tabs">
        <button>Patients</button>
        <button>Doctors</button>
        <button>Donors</button>
      </header>
      <section className="user-table">
        <table>
          <thead>
            <tr>
              <th>Name / Email</th>
              <th>Registration Date</th>
              <th>Verified Status</th>
              <th>Active / Deactivated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>2025-07-20</td>
              <td>Verified</td>
              <td><button>Toggle</button></td>
              <td><button>View Profile</button> <button>Deactivate</button> <button>Send Message</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserManagementPage;
