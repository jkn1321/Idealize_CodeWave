import React, { useState } from 'react';
import {
  FileText,
  CheckCircle,
  XCircle,
  MessageSquare,
  Download,
  AlertTriangle,
} from 'lucide-react';
import DoctorSidebar from '../../components/Doctor/DoctorSidebar';

const DoctorCaseReviewPage = () => {
  const [activeTab, setActiveTab] = useState('case-review');
  const [reviewNotes, setReviewNotes] = useState('');

  // Sample case data for review
  const caseData = {
    id: 'CASE-2025-001',
    patientName: 'John Doe',
    age: 45,
    caseTitle: 'Emergency Kidney Transplant',
    diagnosis:
      'End-stage renal disease requiring immediate kidney transplant surgery',
    submissionDate: '2025-07-22',
    targetAmount: 450000,
    urgency: 'High',
    hospital: 'Apollo Hospital, Mumbai',
    submittingDoctor: 'Dr. Sarah Wilson',
    documents: [
      {
        name: 'Medical History Report',
        size: '2.3 MB',
        type: 'PDF',
        status: 'verified',
      },
      {
        name: 'Kidney Function Tests',
        size: '1.8 MB',
        type: 'PDF',
        status: 'verified',
      },
      {
        name: 'Doctor Recommendation',
        size: '890 KB',
        type: 'PDF',
        status: 'pending',
      },
      {
        name: 'Hospital Cost Estimate',
        size: '1.2 MB',
        type: 'PDF',
        status: 'verified',
      },
    ],
    aiAnalysis: {
      confidenceScore: 85,
      flags: ['Minor inconsistency in dates', 'Missing recent lab results'],
      riskLevel: 'Low',
      genuineProbability: 'High',
    },
  };

  const handleReviewSubmit = (action) => {
    console.log(`Review submitted: ${action}`, {
      reviewNotes,
      caseId: caseData.id,
    });
    // Handle review submission logic here
  };

  const getDocumentStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'verified':
        return 'text-green-700 bg-green-100';
      case 'pending':
        return 'text-yellow-700 bg-yellow-100';
      case 'rejected':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <FileText className="w-8 h-8 text-green-600" />
                Case Review
              </h1>
              <p className="text-gray-600">
                Review and verify medical cases for funding approval
              </p>
            </div>

            {/* Case Overview Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Case Information */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl font-bold text-gray-800">
                    Case Overview
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Case ID:</span>
                    <span className="text-gray-800">{caseData.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Patient Name:
                    </span>
                    <span className="text-gray-800">
                      {caseData.patientName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Age:</span>
                    <span className="text-gray-800">{caseData.age} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Case Title:
                    </span>
                    <span className="text-gray-800">{caseData.caseTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Target Amount:
                    </span>
                    <span className="text-gray-800 font-semibold">
                      ₹{caseData.targetAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Urgency:</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        caseData.urgency === 'High'
                          ? 'bg-red-100 text-red-800'
                          : caseData.urgency === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {caseData.urgency}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium text-gray-600 mb-2">Diagnosis:</p>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      {caseData.diagnosis}
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">
                    AI Analysis
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">
                      Confidence Score:
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{
                            width: `${caseData.aiAnalysis.confidenceScore}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-green-600 font-semibold">
                        {caseData.aiAnalysis.confidenceScore}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Risk Level:
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        caseData.aiAnalysis.riskLevel === 'High'
                          ? 'bg-red-100 text-red-800'
                          : caseData.aiAnalysis.riskLevel === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {caseData.aiAnalysis.riskLevel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">
                      Genuine Probability:
                    </span>
                    <span className="text-green-600 font-semibold">
                      {caseData.aiAnalysis.genuineProbability}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-600 mb-2">Flags:</p>
                    <div className="space-y-1">
                      {caseData.aiAnalysis.flags.map((flag, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-yellow-700">{flag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Uploaded Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseData.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{doc.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDocumentStatusColor(
                          doc.status
                        )}`}
                      >
                        {doc.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>
                        {doc.type} • {doc.size}
                      </span>
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Doctor Review
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Review Notes & Comments
                  </label>
                  <textarea
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    placeholder="Add your professional review, observations, and recommendations..."
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <button
                    onClick={() => handleReviewSubmit('approve')}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Approve Case
                  </button>
                  <button
                    onClick={() => handleReviewSubmit('reject')}
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
                  >
                    <XCircle className="w-5 h-5" />
                    Reject Case
                  </button>
                  <button
                    onClick={() => handleReviewSubmit('request-more')}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Request More Info
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

export default DoctorCaseReviewPage;
