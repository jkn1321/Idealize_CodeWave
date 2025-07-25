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
import PatientDashboard from './pages/patient/PatientDashboard';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DonorDashboard from './pages/donor/DonorDashboard';
import DoctorLoginRegistrationPage from './pages/Doctor/DoctorLoginRegistrationPage';
import DoctorDashboardPage from './pages/Doctor/DoctorDashboardPage';
import DoctorCaseReviewPage from './pages/Doctor/DoctorCaseReviewPage';
import DoctorRecognitionPage from './pages/Doctor/DoctorRecognitionPage';
import DoctorProfilePage from './pages/Doctor/DoctorProfilePage';
import DoctorNotificationsPage from './pages/Doctor/DoctorNotificationsPage';
import DoctorPatientsPage from './pages/Doctor/DoctorPatientsPage';
import DonorLoginSignupPage from './pages/donor/DonorLoginSignupPage';
// New donor pages with sidebar
import VerifiedCaseBrowserPage from './pages/donor/VerifiedCaseBrowserPage';
import CaseDetailsDonatePage from './pages/donor/CaseDetailsDonatePage';
import DonationHistoryPage from './pages/donor/DonationHistoryPage';
import ImpactReportPage from './pages/donor/ImpactReportPage';
import DonorProfileSettingsPage from './pages/donor/DonorProfileSettingsPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import UserManagementPage from './pages/Admin/UserManagementPage';
import FlaggedCasesPage from './pages/Admin/FlaggedCasesPage';
import DonorMessagesViewerPage from './pages/Admin/DonorMessagesViewerPage';
import ChannelRequestsViewerPage from './pages/Admin/ChannelRequestsViewerPage';
import AnalyticsPage from './pages/Admin/AnalyticsPage';
import SystemSettingsPage from './pages/Admin/SystemSettingsPage';

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
            {/* Patient Routes */}
            <Route path="/patient/upload" element={<PatientDashboard />} />
            <Route path="/patient/channel" element={<PatientDashboard />} />
            <Route path="/patient/status" element={<PatientDashboard />} />
            <Route path="/patient/messages" element={<PatientDashboard />} />
            <Route path="/patient/profile" element={<PatientDashboard />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/donor/dashboard" element={<DonorDashboard />} />
            <Route path="/coming-soon/:role" element={<ComingSoon />} />
            <Route
              path="/doctor/login"
              element={<DoctorLoginRegistrationPage />}
            />
            <Route path="/doctor/dashboard" element={<DoctorDashboardPage />} />
            <Route
              path="/doctor/case-review"
              element={<DoctorCaseReviewPage />}
            />
            <Route
              path="/doctor/recognition"
              element={<DoctorRecognitionPage />}
            />
            <Route path="/doctor/profile" element={<DoctorProfilePage />} />
            <Route
              path="/doctor/notifications"
              element={<DoctorNotificationsPage />}
            />
            <Route path="/doctor/patients" element={<DoctorPatientsPage />} />
            <Route path="/donor/login" element={<DonorLoginSignupPage />} />
            <Route path="/donor/cases" element={<VerifiedCaseBrowserPage />} />
            <Route path="/donor/dashboard" element={<DonorDashboard />} />
            <Route
              path="/donor/browse-cases"
              element={<VerifiedCaseBrowserPage />}
            />
            <Route
              path="/donor/case-details"
              element={<CaseDetailsDonatePage />}
            />
            <Route path="/donor/history" element={<DonationHistoryPage />} />
            <Route path="/donor/impact" element={<ImpactReportPage />} />
            <Route
              path="/donor/profile"
              element={<DonorProfileSettingsPage />}
            />
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/users" element={<UserManagementPage />} />
            <Route path="/admin/flagged-cases" element={<FlaggedCasesPage />} />
            <Route
              path="/admin/donor-messages"
              element={<DonorMessagesViewerPage />}
            />
            <Route
              path="/admin/channel-requests"
              element={<ChannelRequestsViewerPage />}
            />
            <Route path="/admin/analytics" element={<AnalyticsPage />} />
            <Route path="/admin/settings" element={<SystemSettingsPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
