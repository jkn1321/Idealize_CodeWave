import React, { useState } from 'react';
import {
  Home,
  Heart,
  User,
  LogOut,
  Clock,
  CheckCircle,
  DollarSign,
  Target,
  Plus,
  Eye,
  TrendingUp,
  Users,
  Award,
  Calendar,
} from 'lucide-react';
import Header from '../../components/shared/Header';

const DonorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data for donations
  const myDonations = [
    {
      id: 1,
      recipientName: 'John Smith',
      cause: 'Heart Surgery',
      amount: 2500,
      date: '2025-07-20',
      status: 'completed',
      impact: 'Surgery successful, patient recovering well',
      hospitalName: 'General Hospital',
    },
    {
      id: 2,
      recipientName: 'Sarah Johnson',
      cause: 'Cancer Treatment',
      amount: 1000,
      date: '2025-07-18',
      status: 'in-progress',
      impact: 'Chemotherapy treatment ongoing',
      hospitalName: 'Cancer Care Center',
    },
    {
      id: 3,
      recipientName: 'Emma Wilson',
      cause: 'Kidney Transplant',
      amount: 5000,
      date: '2025-07-15',
      status: 'pending',
      impact: 'Matching donor found, surgery scheduled',
      hospitalName: 'University Medical Center',
    },
  ];

  // Sample data for available cases
  const availableCases = [
    {
      id: 1,
      patientName: 'Michael Brown',
      condition: 'Spine Surgery',
      description:
        'Critical spine surgery needed for construction worker injured on job',
      targetAmount: 45000,
      raisedAmount: 12500,
      progress: 28,
      urgency: 'high',
      verifiedBy: 'Dr. Smith',
      hospital: 'Orthopedic Specialists',
      daysLeft: 15,
      donorCount: 23,
    },
    {
      id: 2,
      patientName: 'Lisa Chen',
      condition: 'Pediatric Surgery',
      description: 'Congenital heart defect repair for 3-year-old child',
      targetAmount: 65000,
      raisedAmount: 38000,
      progress: 58,
      urgency: 'medium',
      verifiedBy: 'Dr. Johnson',
      hospital: "Children's Medical Center",
      daysLeft: 30,
      donorCount: 45,
    },
    {
      id: 3,
      patientName: 'Robert Davis',
      condition: 'Cancer Treatment',
      description: 'Specialized cancer treatment for rare blood disorder',
      targetAmount: 85000,
      raisedAmount: 71000,
      progress: 84,
      urgency: 'low',
      verifiedBy: 'Dr. Brown',
      hospital: 'Oncology Institute',
      daysLeft: 45,
      donorCount: 67,
    },
  ];

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'donate', name: 'Donate Now', icon: Heart },
    { id: 'history', name: 'Donation History', icon: Clock },
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'logout', name: 'Logout', icon: LogOut },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const totalDonated = myDonations.reduce(
    (sum, donation) => sum + donation.amount,
    0
  );
  const completedDonations = myDonations.filter(
    (d) => d.status === 'completed'
  ).length;

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-blue-500 text-white fixed h-full">
          <div className="p-6">
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-white text-blue-500'
                        : 'text-blue-500 hover:bg-blue-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Donor Dashboard
              </h1>
              <p className="text-gray-600">
                Make a difference in someone's life through medical donations
              </p>
            </div>

            {/* Dashboard Content */}
            {activeTab === 'dashboard' && (
              <>
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Total Donated
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${totalDonated.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Heart className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Lives Impacted
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {completedDonations}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          This Month
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          $2,500
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Award className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Donor Level
                        </p>
                        <p className="text-2xl font-bold text-gray-900">Gold</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Donations */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Donations
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {myDonations.slice(0, 3).map((donation) => (
                        <div
                          key={donation.id}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {donation.recipientName}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {donation.cause}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {donation.hospitalName}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-green-600">
                                ${donation.amount.toLocaleString()}
                              </p>
                              <div
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                  donation.status
                                )}`}
                              >
                                <span className="capitalize">
                                  {donation.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">
                            {donation.impact}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500">
                              {donation.date}
                            </p>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors">
                              View Impact
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Available Cases to Support */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Cases You Can Support
                      </h3>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        View All Cases
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {availableCases.slice(0, 4).map((caseItem) => (
                        <div
                          key={caseItem.id}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {caseItem.patientName}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {caseItem.condition}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Verified by {caseItem.verifiedBy}
                              </p>
                            </div>
                            <div
                              className={`w-3 h-3 rounded-full ${getUrgencyColor(
                                caseItem.urgency
                              )}`}
                            ></div>
                          </div>

                          <p className="text-sm text-gray-700 mb-4">
                            {caseItem.description}
                          </p>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Progress</span>
                              <span>{caseItem.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${caseItem.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <p className="text-gray-500">Raised</p>
                              <p className="font-semibold text-green-600">
                                ${caseItem.raisedAmount.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Target</p>
                              <p className="font-semibold text-gray-900">
                                ${caseItem.targetAmount.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Donors</p>
                              <p className="font-semibold text-blue-600">
                                {caseItem.donorCount}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Days Left</p>
                              <p className="font-semibold text-orange-600">
                                {caseItem.daysLeft}
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                              <Heart className="w-4 h-4 mr-2 inline" />
                              Donate
                            </button>
                            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Donation Impact Card */}
                <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Your Impact This Year
                      </h3>
                      <p className="text-blue-100 mb-4">
                        Thanks to your generosity, {completedDonations} people
                        received the medical care they needed.
                      </p>
                      <div className="flex items-center space-x-6">
                        <div>
                          <p className="text-2xl font-bold">
                            ${totalDonated.toLocaleString()}
                          </p>
                          <p className="text-blue-100 text-sm">Total Donated</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">
                            {completedDonations}
                          </p>
                          <p className="text-blue-100 text-sm">Lives Saved</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        Share Your Impact
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Other Tab Contents */}
            {activeTab === 'donate' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Make a Donation
                </h3>
                <p className="text-gray-600">
                  Choose from verified medical cases and make a difference
                </p>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Donation History
                </h3>
                <p className="text-gray-600">
                  View all your past donations and their impact
                </p>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Profile Settings
                </h3>
                <p className="text-gray-600">
                  Manage your donor profile and preferences
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
