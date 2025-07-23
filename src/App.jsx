import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import PatientSignupPage from './pages/patient/PatientSignupPage';
import RoleSelection from './pages/RoleSelection';
import ComingSoon from './components/ComingSoon';
import DoctorSignUpPage from './pages/Doctor/SignUpPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/patient/signup" element={<PatientSignupPage />} />
            <Route path="/doctor/signup" element={<DoctorSignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/coming-soon/:role" element={<ComingSoon />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
