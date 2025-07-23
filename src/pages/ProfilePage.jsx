import { useAuth } from '../contexts/AuthContext';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Stethoscope,
  Building,
  Award,
  Shield,
} from 'lucide-react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const ProfilePage = () => {
  const { user, updateUser } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Access Denied
            </h2>
            <p className="text-gray-600">
              Please sign in to view your profile.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-8">
              <div className="flex items-center space-x-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div className="text-white">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <p className="text-primary-100 capitalize">{user.userType}</p>
                  {user.userType === 'doctor' && user.specialization && (
                    <p className="text-primary-200 mt-1">
                      {user.specialization}
                    </p>
                  )}
                  <div className="flex items-center mt-2">
                    {user.isVerified ? (
                      <div className="flex items-center text-green-300">
                        <Shield className="h-4 w-4 mr-1" />
                        <span className="text-sm">Verified Account</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-yellow-300">
                        <Shield className="h-4 w-4 mr-1" />
                        <span className="text-sm">Pending Verification</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                </div>

                {user.phoneNumber && (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900">{user.phoneNumber}</p>
                    </div>
                  </div>
                )}

                {user.dateOfBirth && (
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="text-gray-900">
                        {new Date(user.dateOfBirth).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}

                {user.address && (
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900">{user.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Professional Information (for doctors) */}
            {user.userType === 'doctor' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Professional Information
                </h2>
                <div className="space-y-4">
                  {user.specialization && (
                    <div className="flex items-center space-x-3">
                      <Stethoscope className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Specialization</p>
                        <p className="text-gray-900">{user.specialization}</p>
                      </div>
                    </div>
                  )}

                  {user.hospital && (
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Hospital/Clinic</p>
                        <p className="text-gray-900">{user.hospital}</p>
                      </div>
                    </div>
                  )}

                  {user.licenseNumber && (
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">License Number</p>
                        <p className="text-gray-900">{user.licenseNumber}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Account Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Account Statistics
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <p className="text-2xl font-bold text-primary-600">0</p>
                  <p className="text-sm text-gray-600">
                    {user.userType === 'doctor'
                      ? 'Donations Received'
                      : 'Requests Made'}
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">0</p>
                  <p className="text-sm text-gray-600">
                    {user.userType === 'doctor'
                      ? 'Patients Helped'
                      : 'Donations Received'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
                  <p className="font-medium text-primary-700">Edit Profile</p>
                  <p className="text-sm text-primary-600">
                    Update your personal information
                  </p>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <p className="font-medium text-gray-700">Security Settings</p>
                  <p className="text-sm text-gray-600">
                    Change password and security preferences
                  </p>
                </button>
                {user.userType === 'doctor' && (
                  <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <p className="font-medium text-green-700">
                      View Donation Requests
                    </p>
                    <p className="text-sm text-green-600">
                      See pending medical supply requests
                    </p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
