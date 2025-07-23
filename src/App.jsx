import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/login';
import PatientSignupPage from './pages/patient/PatientSignupPage';
import RoleSelection from './pages/RoleSelection';
import ComingSoon from './components/ComingSoon';
import DoctorSignUpPage from './pages/Doctor/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import DonerSignUpPage from './pages/donor/SignUpPage';
import PatientDashboard from './pages/patient/dashboard';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DonorDashboard from './pages/donor/DonorDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/patient/signup" element={<PatientSignupPage />} />
            <Route path="/doctor/signup" element={<DoctorSignUpPage />} />
            <Route path="/donor/signup" element={<DonerSignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/donor/dashboard" element={<DonorDashboard />} />
            <Route path="/coming-soon/:role" element={<ComingSoon />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
