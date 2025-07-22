'use client';

import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import PatientSignupPage from './pages/PatientSignupPage';
import RoleSelection from './pages/RoleSelection';
import ComingSoon from './components/patient/signup/ComingSoon';
import './App.css';
import './styles/RoleSelection.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedRole, setSelectedRole] = useState(null);

  const handleNavigate = (page) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
  };

  const handleRoleSelect = (role) => {
    console.log('Role selected:', role);
    setSelectedRole(role);
    if (role === 'patient') {
      setCurrentPage('patient-signup');
    } else {
      setCurrentPage('coming-soon');
    }
  };

  const handleBackToLanding = () => {
    console.log('Back to landing');
    setCurrentPage('landing');
    setSelectedRole(null);
  };

  const handleBackToRoleSelection = () => {
    console.log('Back to role selection');
    setCurrentPage('role-selection');
  };

  const renderCurrentPage = () => {
    console.log('Rendering page:', currentPage);
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'role-selection':
        return (
          <RoleSelection
            onRoleSelect={handleRoleSelect}
            onBack={handleBackToLanding}
          />
        );
      case 'patient-signup':
        return <PatientSignupPage onBack={handleBackToRoleSelection} />;
      case 'coming-soon':
        return (
          <ComingSoon role={selectedRole} onBack={handleBackToRoleSelection} />
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return <div className="App">{renderCurrentPage()}</div>;
}

export default App;
