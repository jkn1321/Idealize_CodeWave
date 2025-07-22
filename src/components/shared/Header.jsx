'use client';

const Header = ({ onNavigate }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h2>MediTrust</h2>
          <span className="tagline">Making Healthcare Accessible</span>
        </div>
        <nav className="nav-links">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About Us
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('how-it-works');
            }}
          >
            How It Works
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact Us
          </a>
        </nav>
        <div className="auth-buttons">
          <button className="btn-signin">Sign In</button>
          <button
            className="btn-signup"
            onClick={(e) => {
              e.preventDefault();

              // 1️⃣ Prefer the callback passed down from App.jsx
              if (typeof onNavigate === 'function') {
                onNavigate('role-selection');
                return;
              }

              // 2️⃣ Fallback – check if the global helper set by App.jsx exists
              if (
                typeof window !== 'undefined' &&
                typeof window.setCurrentPage === 'function'
              ) {
                window.setCurrentPage('role-selection');
                return;
              }

              // 3️⃣ Last-resort fallback – use hash navigation
              window.location.hash = '#role-selection';
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
