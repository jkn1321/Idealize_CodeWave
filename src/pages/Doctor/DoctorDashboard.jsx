import React, { useState } from 'react';
import {
  Home,
  FileText,
  User,
  LogOut,
  Clock,
  CheckCircle,
  XCircle,
  Stethoscope,
  Users,
  Heart,
  Plus,
  Eye,
  MessageSquare,
  Activity,
} from 'lucide-react';
import Header from '../../components/shared/Header';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data for medical requests
  const medicalRequests = [
    {
      id: 1,
      patientName: 'John Smith',
      condition: 'Heart Surgery',
      requestDate: '2025-07-20',
      status: 'pending',
      urgency: 'high',
      description: 'Emergency cardiac surgery required for 45-year-old patient',
      requestedSupplies: [
        'Cardiac catheter',
        'Surgical instruments',
        'Blood units',
      ],
      estimatedCost: 15000,
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      condition: 'Cancer Treatment',
      requestDate: '2025-07-18',
      status: 'approved',
      urgency: 'medium',
      description: 'Chemotherapy medications needed for ongoing treatment',
      requestedSupplies: [
        'Chemotherapy drugs',
        'IV equipment',
        'Monitoring devices',
      ],
      estimatedCost: 8500,
    },
    {
      id: 3,
      patientName: 'Michael Brown',
      condition: 'Diabetes Management',
      requestDate: '2025-07-15',
      status: 'completed',
      urgency: 'low',
      description: 'Insulin and monitoring supplies for diabetic patient',
      requestedSupplies: ['Insulin', 'Glucose monitor', 'Test strips'],
      estimatedCost: 750,
    },
  ];

  // Sample data for verified cases
  const verifiedCases = [
    {
      id: 1,
      patientName: 'Emma Wilson',
      condition: 'Kidney Transplant',
      verificationDate: '2025-07-22',
      status: 'fundraising',
      progress: 45,
      targetAmount: 85000,
      raisedAmount: 38250,
    },
    {
      id: 2,
      patientName: 'David Lee',
      condition: 'Spine Surgery',
      verificationDate: '2025-07-21',
      status: 'funded',
      progress: 100,
      targetAmount: 45000,
      raisedAmount: 45000,
    },
  ];

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'requests', name: 'Medical Requests', icon: FileText },
    { id: 'patients', name: 'My Patients', icon: Users },
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'logout', name: 'Logout', icon: LogOut },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'approved':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'completed':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-300';
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-500 text-white fixed h-full">
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
                Doctor Dashboard
              </h1>
              <p className="text-gray-600">
                Manage medical requests and patient care
              </p>
            </div>

            {/* Dashboard Content */}
            {activeTab === 'dashboard' && (
              <>
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Pending Requests
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {
                            medicalRequests.filter(
                              (r) => r.status === 'pending'
                            ).length
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Approved Requests
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {
                            medicalRequests.filter(
                              (r) => r.status === 'approved'
                            ).length
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Active Patients
                        </p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Activity className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">
                          Cases Verified
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {verifiedCases.length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Medical Requests */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Recent Medical Requests
                      </h3>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                        <Plus className="w-4 h-4 mr-2" />
                        New Request
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {medicalRequests.slice(0, 3).map((request) => (
                        <div
                          key={request.id}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {request.patientName}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {request.condition}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {request.requestDate}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-3 h-3 rounded-full ${getUrgencyColor(
                                  request.urgency
                                )}`}
                              ></div>
                              <div
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                  request.status
                                )}`}
                              >
                                {getStatusIcon(request.status)}
                                <span className="ml-1 capitalize">
                                  {request.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">
                            {request.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              Estimated Cost: $
                              {request.estimatedCost.toLocaleString()}
                            </p>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors">
                              Review
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verified Cases */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recently Verified Cases
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {verifiedCases.map((caseItem) => (
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
                                Verified on {caseItem.verificationDate}
                              </p>
                            </div>
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                                caseItem.status === 'funded'
                                  ? 'bg-green-100 text-green-700 border-green-300'
                                  : 'bg-blue-100 text-blue-700 border-blue-300'
                              }`}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              <span className="capitalize">
                                {caseItem.status}
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Fundraising Progress</span>
                              <span>{caseItem.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${caseItem.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="text-xs text-gray-500">Raised</p>
                                <p className="text-sm font-semibold text-green-600">
                                  ${caseItem.raisedAmount.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Target</p>
                                <p className="text-sm font-semibold text-gray-900">
                                  ${caseItem.targetAmount.toLocaleString()}
                                </p>
                              </div>
                            </div>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Other Tab Contents */}
            {activeTab === 'requests' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Medical Requests
                </h3>
                <p className="text-gray-600">
                  Manage and review medical supply requests from patients
                </p>
              </div>
            )}

            {activeTab === 'patients' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  My Patients
                </h3>
                <p className="text-gray-600">
                  View and manage your patient records and treatment plans
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
                  Manage your professional profile and account settings
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
