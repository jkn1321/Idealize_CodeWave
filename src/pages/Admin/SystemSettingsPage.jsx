import React from 'react';
import '../styles/SystemSettingsPage.css';

const SystemSettingsPage = () => {
  return (
    <div className="system-settings">
      <h2>System Settings</h2>
      <section className="settings-section">
        <h3>User Access Roles & Permissions</h3>
        <p>Configure roles and permissions here.</p>
      </section>
      <section className="settings-section">
        <h3>Case Review Workflow</h3>
        <p>Toggle workflows here.</p>
      </section>
      <section className="settings-section">
        <h3>Document Size Limits</h3>
        <p>Set document size limits here.</p>
      </section>
      <section className="danger-zone">
        <h3>Danger Zone</h3>
        <button>Reset System Flags</button>
        <button>Wipe Dummy Data</button>
      </section>
    </div>
  );
};

export default SystemSettingsPage;
