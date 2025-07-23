import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Calendar,
  FileText,
  Eye,
  Download,
  Bell,
  Heart,
  Activity,
  RefreshCw,
} from 'lucide-react';
import BackgroundLayout from '../../components/shared/BackgroundLayout';

const StatusTracking = ({ onBack, selectedDocumentId = null }) => {
  // Mock data for the medical case
  const [caseData, setCaseData] = useState({
    id: 'MC-2025-001',
    patientName: 'John Doe',
    condition: 'Cardiac Surgery Required',
    submittedDate: '2025-07-15',
    currentStatus: 'fundraising',
    estimatedCost: 50000,
    raisedAmount: 32500,
    donorCount: 143,
    lastUpdate: '2025-07-23 14:30',
    documents: [
      { name: 'Medical Report.pdf', verified: true },
      { name: 'Lab Results.pdf', verified: true },
      { name: 'Prescription.jpg', verified: false },
    ],
  });

  // Status configuration with colors and descriptions
  const statusSteps = [
    {
      key: 'submitted',
      label: 'Submitted',
      description: 'Documents uploaded and case submitted',
      color: '#9CA3AF',
      bgColor: 'bg-gray-500',
      textColor: 'text-gray-700',
      icon: FileText,
    },
    {
      key: 'ai-screening',
      label: 'AI Pre-Screening',
      description: 'Automated document verification in progress',
      color: '#F59E0B',
      bgColor: 'bg-yellow-500',
      textColor: 'text-yellow-700',
      icon: Activity,
    },
    {
      key: 'doctor-review',
      label: 'Doctor Review',
      description: 'Medical professional reviewing case',
      color: '#F59E0B',
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-700',
      icon: Eye,
    },
    {
      key: 'verified',
      label: 'Verified',
      description: 'Case approved by medical team',
      color: '#10B981',
      bgColor: 'bg-green-500',
      textColor: 'text-green-700',
      icon: CheckCircle,
    },
    {
      key: 'fundraising',
      label: 'Fundraising',
      description: 'Campaign live and accepting donations',
      color: '#3B82F6',
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-700',
      icon: Heart,
    },
    {
      key: 'completed',
      label: 'Completed',
      description: 'Goal reached and treatment funded',
      color: '#4B5563',
      bgColor: 'bg-slate-500',
      textColor: 'text-slate-700',
      icon: CheckCircle,
    },
  ];

  const getCurrentStatusIndex = () => {
    return statusSteps.findIndex((step) => step.key === caseData.currentStatus);
  };

  const getProgressPercentage = () => {
    return (caseData.raisedAmount / caseData.estimatedCost) * 100;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setCaseData((prev) => ({
        ...prev,
        lastUpdate: new Date().toISOString().slice(0, 16).replace('T', ' '),
      }));
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <BackgroundLayout>
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <button
                  onClick={onBack}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to {selectedDocumentId ? 'Documents' : 'Dashboard'}
                </button>
                {selectedDocumentId && (
                  <div className="ml-4 flex items-center text-sm text-gray-600">
                    <span>•</span>
                    <span className="ml-2">Tracking specific document</span>
                  </div>
                )}
              </div>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw
                  className={`w-4 h-4 mr-2 ${
                    isRefreshing ? 'animate-spin' : ''
                  }`}
                />
                Refresh Status
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Case Status Tracking
                  </h1>
                  <p className="text-gray-600">Case ID: {caseData.id}</p>
                  <p className="text-sm text-gray-500">
                    Submitted on {formatDate(caseData.submittedDate)}
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-blue-50 px-4 py-2 rounded-lg">
                    <div className="flex items-center text-blue-600">
                      <Bell className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Last Update</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDate(caseData.lastUpdate)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">
                    {caseData.patientName}
                  </h3>
                  <p className="text-gray-600 text-sm">{caseData.condition}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">
                    Treatment Cost
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {formatCurrency(caseData.estimatedCost)}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Documents</h3>
                  <p className="text-gray-600 text-sm">
                    {caseData.documents.length} files uploaded
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Progress Status
            </h2>

            {/* Horizontal Progress Bar */}
            <div className="relative mb-8">
              <div className="flex justify-between items-center mb-4">
                {statusSteps.map((step, index) => {
                  const isActive = index <= getCurrentStatusIndex();
                  const isCurrent = index === getCurrentStatusIndex();
                  const IconComponent = step.icon;

                  return (
                    <div
                      key={step.key}
                      className="flex flex-col items-center relative z-10"
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                          isActive
                            ? `${step.bgColor} border-white text-white shadow-lg`
                            : 'bg-gray-200 border-gray-300 text-gray-500'
                        } ${isCurrent ? 'ring-4 ring-blue-200 scale-110' : ''}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="mt-3 text-center">
                        <p
                          className={`text-sm font-medium ${
                            isActive ? step.textColor : 'text-gray-500'
                          }`}
                        >
                          {step.label}
                        </p>
                        <p className="text-xs text-gray-400 mt-1 max-w-24 leading-tight">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress Line */}
              <div className="absolute top-6 left-6 right-6 h-1 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-700"
                  style={{
                    width: `${
                      (getCurrentStatusIndex() / (statusSteps.length - 1)) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Current Status Details */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    statusSteps[getCurrentStatusIndex()]?.bgColor
                  } mr-3`}
                ></div>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Current Status:{' '}
                    {statusSteps[getCurrentStatusIndex()]?.label}
                  </h3>
                  <p className="text-blue-700 text-sm">
                    {statusSteps[getCurrentStatusIndex()]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fundraising Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Fundraising Progress
              </h2>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Progress
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round(getProgressPercentage())}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.min(getProgressPercentage(), 100)}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">
                      Raised
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-900">
                    {formatCurrency(caseData.raisedAmount)}
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-800">
                      Donors
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-900">
                    {caseData.donorCount}
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Target:</span>{' '}
                  {formatCurrency(caseData.estimatedCost)}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Remaining:</span>{' '}
                  {formatCurrency(
                    caseData.estimatedCost - caseData.raisedAmount
                  )}
                </p>
              </div>
            </div>

            {/* Document Status */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Document Verification
              </h2>

              {selectedDocumentId && (
                <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Activity className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-900">
                      Tracking Document:{' '}
                      {caseData.documents.find((doc) =>
                        doc.name.includes('Medical Report')
                      )?.name || 'Selected Document'}
                    </h3>
                  </div>
                  <p className="text-sm text-blue-700">
                    This document is currently being tracked for status updates.
                  </p>
                </div>
              )}

              <div className="space-y-4">
                {caseData.documents.map((doc, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 border rounded-lg transition-all duration-300 ${
                      selectedDocumentId && doc.name.includes('Medical Report')
                        ? 'border-blue-300 bg-blue-50 ring-2 ring-blue-200'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <FileText
                        className={`w-5 h-5 mr-3 ${
                          selectedDocumentId &&
                          doc.name.includes('Medical Report')
                            ? 'text-blue-600'
                            : 'text-gray-500'
                        }`}
                      />
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium text-gray-900">
                            {doc.name}
                          </p>
                          {selectedDocumentId &&
                            doc.name.includes('Medical Report') && (
                              <span className="ml-2 px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                                Tracking
                              </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-500">
                          Medical Document
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {doc.verified ? (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span className="text-sm font-medium">Verified</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-yellow-600">
                          <Clock className="w-5 h-5 mr-2" />
                          <span className="text-sm font-medium">Pending</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                  <p className="text-sm text-yellow-800">
                    Document verification may take 2-3 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Activity Timeline
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">
                    Case entered fundraising phase
                  </p>
                  <p className="text-sm text-gray-500">
                    July 23, 2025 at 2:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">
                    Medical documents verified
                  </p>
                  <p className="text-sm text-gray-500">
                    July 22, 2025 at 11:15 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">
                    Doctor review completed
                  </p>
                  <p className="text-sm text-gray-500">
                    July 20, 2025 at 4:45 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">
                    AI pre-screening completed
                  </p>
                  <p className="text-sm text-gray-500">
                    July 16, 2025 at 9:20 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">
                    Case submitted successfully
                  </p>
                  <p className="text-sm text-gray-500">
                    July 15, 2025 at 3:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default StatusTracking;
