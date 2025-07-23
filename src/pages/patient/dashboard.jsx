import React, { useState } from 'react';
import {
  Home,
  Upload,
  User,
  LogOut,
  Clock,
  CheckCircle,
  XCircle,
  Mail,
  DollarSign,
  Target,
  Plus,
  Eye,
  MessageSquare,
  Activity,
} from 'lucide-react';
import MedicalDocUpload from './medicalDocUpload';
import StatusTracking from './statusTracking';
import ChannelDoctor from './channel';
import Header from '../../components/shared/Header';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  const handleViewStatus = (documentId = null) => {
    setSelectedDocumentId(documentId);
    setActiveTab('status');
  };

  // Sample data for cases
  const cases = [
    {
      id: 1,
      title: 'Heart Surgery Treatment',
      description: 'Emergency cardiac surgery required',
      goalAmount: 50000,
      raisedAmount: 32500,
      status: 'verified',
      progress: 65,
      timeline: [
        { step: 'Submitted', status: 'completed', date: '2025-07-01' },
        { step: 'Under Review', status: 'completed', date: '2025-07-03' },
        { step: 'Verified', status: 'current', date: '2025-07-05' },
        { step: 'Fundraising', status: 'pending', date: '' },
        { step: 'Treatment', status: 'pending', date: '' },
      ],
    },
    {
      id: 2,
      title: 'Cancer Treatment Support',
      description: 'Chemotherapy and radiation therapy',
      goalAmount: 75000,
      raisedAmount: 18750,
      status: 'submitted',
      progress: 25,
      timeline: [
        { step: 'Submitted', status: 'current', date: '2025-07-20' },
        { step: 'Under Review', status: 'pending', date: '' },
        { step: 'Verified', status: 'pending', date: '' },
        { step: 'Fundraising', status: 'pending', date: '' },
        { step: 'Treatment', status: 'pending', date: '' },
      ],
    },
  ];

  // Sample donor messages
  const donorMessages = [
    {
      id: 1,
      donor: 'Anonymous Donor',
      message: 'Wishing you a speedy recovery! Stay strong.',
      amount: 1000,
      date: '2025-07-22',
      read: false,
    },
    {
      id: 2,
      donor: 'Sarah Johnson',
      message: 'My prayers are with you and your family. Get well soon!',
      amount: 500,
      date: '2025-07-21',
      read: false,
    },
    {
      id: 3,
      donor: 'Medical Angels Foundation',
      message: "We're here to support your journey to recovery.",
      amount: 2500,
      date: '2025-07-20',
      read: true,
    },
  ];

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'upload', name: 'Upload', icon: Upload },
    { id: 'channel', name: 'Channel a Doctor', icon: User },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      case 'verified':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'submitted':
        return <Clock className="w-4 h-4" />;
      case 'verified':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const StatusTimeline = ({ timeline }) => {
    return (
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 mb-3">Progress Timeline</h4>
        <div className="relative">
          {timeline.map((step, index) => (
            <div key={index} className="flex items-center mb-4 last:mb-0">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  step.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : step.status === 'current'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                {step.status === 'completed' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
              </div>
              <div className="ml-4 flex-1">
                <p
                  className={`text-sm font-medium ${
                    step.status === 'completed' || step.status === 'current'
                      ? 'text-gray-900'
                      : 'text-gray-500'
                  }`}
                >
                  {step.step}
                </p>
                {step.date && (
                  <p className="text-xs text-gray-500">{step.date}</p>
                )}
              </div>
              {index < timeline.length - 1 && (
                <div
                  className={`absolute left-4 w-px h-8 mt-8 ${
                    step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  style={{ top: `${index * 64 + 32}px` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

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
                        : 'text-slate-300 hover:bg-blue-700 hover:text-white'
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
          {activeTab === 'upload' ? (
            <MedicalDocUpload
              onBack={() => setActiveTab('dashboard')}
              onViewStatus={handleViewStatus}
            />
          ) : activeTab === 'status' ? (
            <StatusTracking
              onBack={() => setActiveTab('dashboard')}
              selectedDocumentId={selectedDocumentId}
            />
          ) : activeTab === 'channel' ? (
            <ChannelDoctor onBack={() => setActiveTab('dashboard')} />
          ) : (
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Patient Dashboard
                </h1>
                <p className="text-gray-600">
                  Manage your medical cases and track fundraising progress
                </p>
              </div>

              {/* Dashboard Content */}
              {activeTab === 'dashboard' && (
                <>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">
                            Total Goal
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            $125,000
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-center">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">
                            Total Raised
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            $51,250
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-center">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <MessageSquare className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">
                            Messages
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            {donorMessages.filter((m) => !m.read).length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cases Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {cases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-200"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {caseItem.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3">
                                {caseItem.description}
                              </p>
                              <div
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                  caseItem.status
                                )}`}
                              >
                                {getStatusIcon(caseItem.status)}
                                <span className="ml-1 capitalize">
                                  {caseItem.status}
                                </span>
                              </div>
                            </div>
                          </div>

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

                          {/* Goal/Raised Stats */}
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <p className="text-sm text-gray-600">Raised</p>
                              <p className="text-lg font-bold text-green-600">
                                ${caseItem.raisedAmount.toLocaleString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Goal</p>
                              <p className="text-lg font-bold text-gray-900">
                                ${caseItem.goalAmount.toLocaleString()}
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </button>
                            {caseItem.status === 'verified' && (
                              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                                <Plus className="w-4 h-4 mr-2" />
                                Post Update
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Two Column Layout for Timeline and Messages */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Status Timeline */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Case Timeline
                      </h3>
                      {cases.length > 0 && (
                        <StatusTimeline timeline={cases[0].timeline} />
                      )}
                    </div>

                    {/* Donor Messages */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Donor Messages
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail className="w-4 h-4 mr-1" />
                          {donorMessages.filter((m) => !m.read).length} unread
                        </div>
                      </div>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {donorMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`p-4 rounded-lg border transition-colors ${
                              !message.read
                                ? 'bg-blue-50 border-blue-200'
                                : 'bg-gray-50 border-gray-200'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                  {message.donor.charAt(0)}
                                </div>
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 text-sm">
                                    {message.donor}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {message.date}
                                  </p>
                                </div>
                              </div>
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                                +${message.amount}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 ml-11">
                              {message.message}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Post-Treatment Update Button */}
                  <div className="mt-8 text-center">
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center mx-auto">
                      <Plus className="w-5 h-5 mr-2" />
                      Add Post-Treatment Update
                    </button>
                  </div>
                </>
              )}

              {/* Other Tab Contents */}
              {activeTab === 'channel' && (
                <ChannelDoctor onBack={() => setActiveTab('dashboard')} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
