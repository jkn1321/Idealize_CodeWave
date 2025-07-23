import React, { useState } from 'react';
import './DoctorLoginRegistrationPage.css';

const DoctorLoginRegistrationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="doctor-auth-container">
      <div className="auth-toggle">
        <button
          className={isLogin ? 'active' : ''}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? 'active' : ''}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
      {isLogin ? (
        <div className="login-panel">
          <h2>Doctor Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="primary-button">Login</button>
            <a href="#" className="reset-password">Forgot Password?</a>
          </form>
        </div>
      ) : (
        <div className="signup-panel">
          <h2>Doctor Registration</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Medical License Number" required />
            <select required>
              <option value="">Specialization</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
            </select>
            <input type="text" placeholder="Hospital Affiliation" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="file" accept=".pdf,.jpg,.png" required />
            <label>
              <input type="checkbox" required /> Agree to Terms
            </label>
            <button type="submit" className="primary-button">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DoctorLoginRegistrationPage;
