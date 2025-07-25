import React, { useState } from 'react';
import {
  History,
  DollarSign,
  Calendar,
  User,
  CheckCircle,
  Download,
  Eye,
  Filter,
} from 'lucide-react';
import DonorSidebar from '../../components/donor/DonorSidebar';

const DonationHistoryPage = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Sample donation history data
  const donations = [
    {
      id: 1,
      caseTitle: 'Kidney Transplant - Sarah Johnson',
      amount: 5000,
      date: '2025-07-20',
      time: '14:30',
      status: 'confirmed',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN123456789',
      impactUpdate:
        'Surgery completed successfully. Patient is recovering well.',
      hospital: 'Apollo Hospital',
      anonymous: false,
    },
    {
      id: 2,
      caseTitle: 'Heart Surgery - Michael Brown',
      amount: 2500,
      date: '2025-07-18',
      time: '10:15',
      status: 'confirmed',
      paymentMethod: 'UPI',
      transactionId: 'TXN987654321',
      impactUpdate:
        'Pre-surgery preparations completed. Surgery scheduled for next week.',
      hospital: 'Fortis Hospital',
      anonymous: true,
    },
    {
      id: 3,
      caseTitle: 'Cancer Treatment - Emma Wilson',
      amount: 1000,
      date: '2025-07-15',
      time: '16:45',
      status: 'processing',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN555666777',
      impactUpdate: 'Chemotherapy session 3 completed.',
      hospital: 'Tata Memorial Hospital',
      anonymous: false,
    },
    {
      id: 4,
      caseTitle: 'Emergency Surgery - John Davis',
      amount: 3000,
      date: '2025-07-10',
      time: '09:20',
      status: 'confirmed',
      paymentMethod: 'Debit Card',
      transactionId: 'TXN888999000',
      impactUpdate: 'Emergency surgery successful. Patient stable.',
      hospital: 'Max Hospital',
      anonymous: false,
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'text-green-700 bg-green-100';
      case 'processing':
        return 'text-yellow-700 bg-yellow-100';
      case 'failed':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'processing':
        return <History className="w-4 h-4" />;
      default:
        return <History className="w-4 h-4" />;
    }
  };

  const filteredDonations = donations.filter((donation) => {
    if (filterStatus === 'all') return true;
    return donation.status === filterStatus;
  });

  const totalDonated = donations
    .filter((d) => d.status === 'confirmed')
    .reduce((sum, d) => sum + d.amount, 0);

  const totalDonations = donations.filter(
    (d) => d.status === 'confirmed'
  ).length;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DonorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <History className="w-8 h-8 text-blue-600" />
                Donation History
              </h1>
              <p className="text-gray-600">
                Track your contributions and their impact
              </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Donated
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      ₹{totalDonated.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Donations
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {totalDonations}
                    </p>
                  </div>
                  <User className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Lives Impacted
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {totalDonations}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-wrap gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="processing">Processing</option>
                  <option value="failed">Failed</option>
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="date">Sort by Date</option>
                  <option value="amount">Sort by Amount</option>
                  <option value="status">Sort by Status</option>
                </select>
              </div>
            </div>

            {/* Donations Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Case Details
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredDonations.map((donation) => (
                      <tr key={donation.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              {donation.caseTitle}
                            </p>
                            <p className="text-sm text-gray-600">
                              {donation.hospital}
                            </p>
                            <p className="text-xs text-gray-500">
                              ID: {donation.transactionId}
                            </p>
                            {donation.anonymous && (
                              <span className="inline-block mt-1 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                Anonymous
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-gray-800">
                            ₹{donation.amount.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500">
                            {donation.paymentMethod}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-800">
                                {donation.date}
                              </p>
                              <p className="text-xs text-gray-500">
                                {donation.time}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              donation.status
                            )}`}
                          >
                            {getStatusIcon(donation.status)}
                            {donation.status.charAt(0).toUpperCase() +
                              donation.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                              <Download className="w-3 h-3" />
                              Receipt
                            </button>
                            <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                              <Eye className="w-3 h-3" />
                              Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Impact Updates */}
            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Impact Updates
              </h3>
              <div className="space-y-4">
                {donations
                  .filter((d) => d.status === 'confirmed')
                  .slice(0, 3)
                  .map((donation) => (
                    <div
                      key={donation.id}
                      className="border-l-4 border-green-500 pl-4 py-2"
                    >
                      <p className="text-sm font-medium text-gray-800">
                        {donation.caseTitle}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {donation.impactUpdate}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Updated on {donation.date}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistoryPage;
