import React, { useState } from 'react';
import {
  Heart,
  DollarSign,
  User,
  Calendar,
  FileText,
  MapPin,
  Shield,
  CreditCard,
  Smartphone,
  Building,
} from 'lucide-react';
import DonorSidebar from '../../components/donor/DonorSidebar';

const CaseDetailsDonatePage = () => {
  const [activeTab, setActiveTab] = useState('donate');
  const [donationAmount, setDonationAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [customAmount, setCustomAmount] = useState('');

  // Sample case data
  const caseData = {
    id: 1,
    patientName: 'Sarah Johnson',
    age: 34,
    caseTitle: 'Urgent Kidney Transplant',
    diagnosis: 'End-stage renal disease requiring immediate kidney transplant',
    story:
      'Sarah is a devoted mother of two young children who has been battling kidney disease for the past three years. Despite undergoing dialysis three times a week, her condition has deteriorated, and doctors have advised that a kidney transplant is her only chance for survival.',
    targetAmount: 450000,
    raisedAmount: 285000,
    progress: 63,
    urgency: 'High',
    location: 'Mumbai, Maharashtra',
    hospital: 'Fortis Hospital Mulund',
    doctorName: 'Dr. Rajesh Sharma',
    doctorSpecialty: 'Nephrologist',
    verificationDate: '2025-07-15',
    daysLeft: 25,
    donorCount: 127,
    documents: [
      { name: 'Medical Reports', size: '2.3 MB', type: 'PDF' },
      { name: 'Doctor Prescription', size: '1.1 MB', type: 'PDF' },
      { name: 'Hospital Estimate', size: '890 KB', type: 'PDF' },
    ],
    updates: [
      {
        date: '2025-07-20',
        update:
          'Pre-transplant tests completed. Patient is ready for surgery once funding is complete.',
      },
      {
        date: '2025-07-18',
        update:
          'Matching donor found. Surgery scheduled for next month pending fund arrangement.',
      },
    ],
  };

  const quickAmounts = [1000, 2500, 5000, 10000];

  const handleDonate = (e) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    console.log('Donation details:', {
      amount,
      isAnonymous,
      paymentMethod,
      caseId: caseData.id,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DonorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-600">
              <span>Browse Cases</span> /{' '}
              <span className="text-gray-800 font-medium">
                {caseData.caseTitle}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Case Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Case Header */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        {caseData.caseTitle}
                      </h1>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {caseData.patientName}, {caseData.age} years
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {caseData.location}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {caseData.urgency} Priority
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">
                        ₹{caseData.raisedAmount.toLocaleString()} raised
                      </span>
                      <span className="text-gray-600">
                        ₹{caseData.targetAmount.toLocaleString()} goal
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${caseData.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{caseData.progress}% funded</span>
                      <span>
                        {caseData.donorCount} donors • {caseData.daysLeft} days
                        left
                      </span>
                    </div>
                  </div>
                </div>

                {/* Patient Story */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Patient Story
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {caseData.story}
                  </p>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Medical Diagnosis
                    </h3>
                    <p className="text-gray-600">{caseData.diagnosis}</p>
                  </div>
                </div>

                {/* Medical Documents */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Medical Documents
                  </h2>
                  <div className="space-y-3">
                    {caseData.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-red-600" />
                          <div>
                            <p className="font-medium text-gray-800">
                              {doc.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {doc.size} • {doc.type}
                            </p>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Verification */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Doctor Verification
                  </h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {caseData.doctorName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {caseData.doctorSpecialty}
                        </p>
                        <p className="text-sm text-gray-600">
                          {caseData.hospital}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-green-700">
                      ✓ This case has been verified and approved on{' '}
                      {caseData.verificationDate}
                    </p>
                  </div>
                </div>

                {/* Recent Updates */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Recent Updates
                  </h2>
                  <div className="space-y-4">
                    {caseData.updates.map((update, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4"
                      >
                        <p className="text-gray-700">{update.update}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {update.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Donation Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-600" />
                    Make a Donation
                  </h2>

                  <form onSubmit={handleDonate} className="space-y-6">
                    {/* Quick Amount Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {quickAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => {
                              setDonationAmount(amount);
                              setCustomAmount('');
                            }}
                            className={`p-3 border rounded-md text-sm font-medium transition-colors ${
                              donationAmount === amount && !customAmount
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            ₹{amount.toLocaleString()}
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <DollarSign className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setDonationAmount('');
                          }}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Anonymous Donation */}
                    <div>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Donate anonymously
                        </span>
                      </label>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Payment Method
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-blue-600"
                          />
                          <CreditCard className="w-4 h-4 text-gray-600" />
                          <span className="text-sm">Credit/Debit Card</span>
                        </label>

                        <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-blue-600"
                          />
                          <Smartphone className="w-4 h-4 text-gray-600" />
                          <span className="text-sm">UPI</span>
                        </label>

                        <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={paymentMethod === 'bank'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-blue-600"
                          />
                          <Building className="w-4 h-4 text-gray-600" />
                          <span className="text-sm">Bank Transfer</span>
                        </label>
                      </div>
                    </div>

                    {/* Donate Button */}
                    <button
                      type="submit"
                      disabled={!donationAmount && !customAmount}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
                    >
                      <Heart className="w-4 h-4" />
                      Donate Securely
                    </button>

                    {/* Security Note */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3" />
                        100% secure payment processing
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailsDonatePage;
