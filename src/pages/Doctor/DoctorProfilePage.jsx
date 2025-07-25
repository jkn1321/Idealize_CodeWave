import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Upload,
  Save,
  Lock,
} from 'lucide-react';
import DoctorSidebar from '../../components/Doctor/DoctorSidebar';

const DoctorProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: 'Dr. Sarah Wilson',
    email: 'sarah.wilson@hospital.com',
    phone: '+91 9876543210',
    specialization: 'Cardiology',
    hospital: 'Apollo Hospital, Mumbai',
    licenseNumber: 'MED12345678',
    experience: '12 years',
    education: 'MBBS, MD - Cardiology',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Saving profile:', formData);
    // Handle profile save logic
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log('Changing password');
    // Handle password change logic
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <User className="w-8 h-8 text-green-600" />
                Profile Settings
              </h1>
              <p className="text-gray-600">
                Manage your professional profile and account settings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Picture Section */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {formData.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {formData.specialization}
                    </p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mx-auto">
                      <Upload className="w-4 h-4" />
                      Upload Photo
                    </button>
                  </div>

                  {/* Professional Stats */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Professional Stats
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Cases Reviewed:
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          47
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Success Rate:
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          94%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Recognition Points:
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          1,250
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Profile Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-green-600" />
                    Personal Information
                  </h2>
                  <form onSubmit={handleSaveProfile}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Specialization *
                        </label>
                        <input
                          type="text"
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Hospital/Clinic *
                        </label>
                        <input
                          type="text"
                          name="hospital"
                          value={formData.hospital}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience
                        </label>
                        <input
                          type="text"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Education & Qualifications
                      </label>
                      <textarea
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        placeholder="Enter your educational qualifications..."
                      />
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>

                {/* Medical Credentials */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    Medical Credentials
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Medical License Number *
                      </label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload License Document
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Drag and drop your license document, or click to
                          browse
                        </p>
                        <button className="text-sm text-green-600 hover:text-green-800">
                          Choose File
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    Security Settings
                  </h2>
                  <form onSubmit={handleChangePassword}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex gap-4">
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      >
                        <Lock className="w-4 h-4" />
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>

                {/* Danger Zone */}
                <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
                  <h2 className="text-xl font-bold text-red-700 mb-4">
                    Danger Zone
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
