import React, { useState } from 'react';
import './DonorLoginSignupPage.css';

const DonorLoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="donor-auth-container">
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
          Signup
        </button>
      </div>
      {isLogin ? (
        <div className="login-panel">
          <h2>Donor Login</h2>
          <form>
            <input type="email" placeholder="Email or Phone" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="primary-button">Login</button>
            <a href="#" className="reset-password">Forgot Password?</a>
          </form>
        </div>
      ) : (
        <div className="signup-panel">
          <h2>Donor Signup</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <label>
              <input type="checkbox" /> Donate Anonymously
            </label>
            <button type="submit" className="primary-button">Create Account</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DonorLoginSignupPage;
