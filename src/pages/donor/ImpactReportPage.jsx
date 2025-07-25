import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  DollarSign,
  Heart,
  TrendingUp,
  Award,
  Calendar,
  Target,
} from 'lucide-react';
import DonorSidebar from '../../components/donor/DonorSidebar';

const ImpactReportPage = () => {
  const [activeTab, setActiveTab] = useState('impact');
  const [timeRange, setTimeRange] = useState('all');

  // Sample impact data
  const impactStats = {
    totalDonated: 15500,
    totalDonations: 8,
    livesImpacted: 6,
    monthlyGiving: 2500,
    avgDonation: 1937,
    successfulCases: 5,
  };

  const achievements = [
    {
      id: 1,
      title: 'Compassionate Giver',
      description: 'Donated to 5+ different cases',
      icon: Heart,
      earned: true,
      earnedDate: '2025-07-15',
    },
    {
      id: 2,
      title: 'Monthly Supporter',
      description: 'Set up monthly donations',
      icon: Calendar,
      earned: false,
      earnedDate: null,
    },
    {
      id: 3,
      title: 'Life Changer',
      description: 'Helped complete 3+ successful cases',
      icon: Users,
      earned: true,
      earnedDate: '2025-07-10',
    },
    {
      id: 4,
      title: 'Top Contributor',
      description: 'Donated ₹10,000+ in total',
      icon: Award,
      earned: true,
      earnedDate: '2025-07-08',
    },
  ];

  const monthlyImpact = [
    { month: 'Jan', amount: 2000, cases: 1 },
    { month: 'Feb', amount: 1500, cases: 1 },
    { month: 'Mar', amount: 3000, cases: 2 },
    { month: 'Apr', amount: 2500, cases: 1 },
    { month: 'May', amount: 4000, cases: 2 },
    { month: 'Jun', amount: 1000, cases: 1 },
    { month: 'Jul', amount: 1500, cases: 0 },
  ];

  const caseImpacts = [
    {
      id: 1,
      title: 'Heart Surgery - Sarah Johnson',
      contribution: 5000,
      totalNeeded: 45000,
      status: 'completed',
      impact: 'Surgery successful, patient fully recovered',
      date: '2025-07-20',
    },
    {
      id: 2,
      title: 'Cancer Treatment - Michael Brown',
      contribution: 2500,
      totalNeeded: 65000,
      status: 'ongoing',
      impact: 'Treatment progressing well, 60% complete',
      date: '2025-07-18',
    },
    {
      id: 3,
      title: 'Kidney Transplant - Emma Wilson',
      contribution: 3000,
      totalNeeded: 85000,
      status: 'completed',
      impact: 'Transplant successful, patient discharged',
      date: '2025-07-15',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DonorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-blue-600" />
                Impact Report
              </h1>
              <p className="text-gray-600">
                See the difference your donations have made
              </p>
            </div>

            {/* Time Range Filter */}
            <div className="mb-8">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="all">All Time</option>
                <option value="year">This Year</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>

            {/* Impact Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Donated
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      ₹{impactStats.totalDonated.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      +12% from last month
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Lives Impacted
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {impactStats.livesImpacted}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Directly helped
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Successful Cases
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {impactStats.successfulCases}
                    </p>
                    <p className="text-xs text-purple-600 mt-1">
                      Cases completed
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Average Donation
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      ₹{impactStats.avgDonation.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Per contribution
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Donations
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {impactStats.totalDonations}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Contributions made
                    </p>
                  </div>
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Monthly Giving
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      ₹{impactStats.monthlyGiving.toLocaleString()}
                    </p>
                    <p className="text-xs text-orange-600 mt-1">
                      Average per month
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Donation Trend Chart Placeholder */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Monthly Donation Trend
                </h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Chart visualization would go here
                    </p>
                    <p className="text-xs text-gray-500">
                      Showing donation trends over time
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Distribution */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Impact by Category
                </h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Pie chart would go here</p>
                    <p className="text-xs text-gray-500">
                      Surgery: 60%, Treatment: 30%, Emergency: 10%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Your Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border-2 ${
                        achievement.earned
                          ? 'border-gold bg-yellow-50 shadow-md'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="text-center">
                        <div
                          className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                            achievement.earned ? 'bg-yellow-200' : 'bg-gray-200'
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              achievement.earned
                                ? 'text-yellow-700'
                                : 'text-gray-500'
                            }`}
                          />
                        </div>
                        <h4
                          className={`font-medium mb-1 ${
                            achievement.earned
                              ? 'text-yellow-800'
                              : 'text-gray-600'
                          }`}
                        >
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">
                          {achievement.description}
                        </p>
                        {achievement.earned && (
                          <p className="text-xs text-yellow-700 font-medium">
                            Earned {achievement.earnedDate}
                          </p>
                        )}
                        {!achievement.earned && (
                          <p className="text-xs text-gray-500">
                            Not yet earned
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Case Impact Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Case Impact Details
              </h3>
              <div className="space-y-4">
                {caseImpacts.map((caseItem) => (
                  <div
                    key={caseItem.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">
                          {caseItem.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {caseItem.impact}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          caseItem.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {caseItem.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>
                        Your contribution: ₹
                        {caseItem.contribution.toLocaleString()}
                      </span>
                      <span>{caseItem.date}</span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${
                              (caseItem.contribution / caseItem.totalNeeded) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {(
                          (caseItem.contribution / caseItem.totalNeeded) *
                          100
                        ).toFixed(1)}
                        % of your contribution to total needed
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Giving CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Maximize Your Impact</h3>
              <p className="text-blue-100 mb-6">
                Set up monthly giving to provide consistent support to patients
                in need
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Set Up Monthly Giving
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactReportPage;
