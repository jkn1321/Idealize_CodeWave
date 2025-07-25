import React, { useState } from 'react';
import {
  Search,
  Filter,
  Eye,
  Heart,
  DollarSign,
  MapPin,
  Clock,
  User as UserIcon,
} from 'lucide-react';
import DonorSidebar from '../../components/donor/DonorSidebar';

const VerifiedCaseBrowserPage = () => {
  const [activeTab, setActiveTab] = useState('browse-cases');
  const [filters, setFilters] = useState({
    caseType: '',
    urgency: '',
    location: '',
    search: '',
  });

  // Sample case data
  const cases = [
    {
      id: 1,
      patientName: 'Anonymous Patient',
      caseTitle: 'Kidney Transplant',
      summary:
        'Urgent kidney transplant needed for 45-year-old patient with chronic kidney disease',
      targetAmount: 250000,
      raisedAmount: 125000,
      progress: 50,
      location: 'Mumbai, Maharashtra',
      urgency: 'High',
      verifiedBy: 'Dr. Smith',
      hospital: 'Fortis Hospital',
      daysLeft: 15,
      donorCount: 89,
    },
    {
      id: 2,
      patientName: 'Anonymous Patient',
      caseTitle: 'Heart Surgery',
      summary: 'Critical heart valve replacement surgery for elderly patient',
      targetAmount: 350000,
      raisedAmount: 280000,
      progress: 80,
      location: 'Delhi, NCR',
      urgency: 'Medium',
      verifiedBy: 'Dr. Johnson',
      hospital: 'Apollo Hospital',
      daysLeft: 30,
      donorCount: 156,
    },
    {
      id: 3,
      patientName: 'Anonymous Patient',
      caseTitle: 'Cancer Treatment',
      summary: 'Specialized chemotherapy treatment for rare blood cancer',
      targetAmount: 450000,
      raisedAmount: 180000,
      progress: 40,
      location: 'Bangalore, Karnataka',
      urgency: 'High',
      verifiedBy: 'Dr. Brown',
      hospital: 'Tata Memorial Hospital',
      daysLeft: 45,
      donorCount: 67,
    },
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency.toLowerCase()) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DonorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Browse Verified Cases
              </h1>
              <p className="text-gray-600">
                Help patients in need by supporting verified medical cases
              </p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-wrap gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.caseType}
                  onChange={(e) =>
                    handleFilterChange('caseType', e.target.value)
                  }
                >
                  <option value="">All Case Types</option>
                  <option value="surgery">Surgery</option>
                  <option value="treatment">Treatment</option>
                  <option value="transplant">Transplant</option>
                  <option value="emergency">Emergency</option>
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.urgency}
                  onChange={(e) =>
                    handleFilterChange('urgency', e.target.value)
                  }
                >
                  <option value="">All Urgency Levels</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>

                <input
                  type="text"
                  placeholder="Location"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange('location', e.target.value)
                  }
                />

                <div className="relative flex-1 min-w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search cases..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange('search', e.target.value)
                    }
                  />
                </div>

                <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  <Filter className="w-4 h-4" />
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Case Header */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(
                          caseItem.urgency
                        )}`}
                      >
                        {caseItem.urgency} Priority
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {caseItem.daysLeft} days left
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {caseItem.caseTitle}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {caseItem.summary}
                    </p>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{caseItem.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4" />
                        <span>Verified by {caseItem.verifiedBy}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="px-6 pb-4">
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          ₹{caseItem.raisedAmount.toLocaleString()} raised
                        </span>
                        <span className="text-gray-600">
                          ₹{caseItem.targetAmount.toLocaleString()} goal
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${caseItem.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {caseItem.progress}% funded • {caseItem.donorCount}{' '}
                        donors
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-6 pb-6">
                    <div className="flex gap-2">
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex-1">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        <Heart className="w-4 h-4" />
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Load More Cases
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedCaseBrowserPage;
