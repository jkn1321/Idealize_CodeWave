import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Eye,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import DoctorSidebar from '../../components/Doctor/DoctorSidebar';

const DoctorPatientsPage = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample patients data
  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 45,
      condition: 'Heart Surgery',
      caseId: 'CASE-2025-001',
      status: 'active',
      targetAmount: 450000,
      raisedAmount: 280000,
      progress: 62,
      phone: '+91 9876543210',
      email: 'john.smith@email.com',
      location: 'Mumbai, Maharashtra',
      submissionDate: '2025-07-15',
      lastUpdate: '2025-07-22',
      priority: 'high',
      description:
        'Patient requires urgent cardiac valve replacement surgery due to severe aortic stenosis.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      age: 34,
      condition: 'Kidney Transplant',
      caseId: 'CASE-2025-002',
      status: 'funded',
      targetAmount: 380000,
      raisedAmount: 380000,
      progress: 100,
      phone: '+91 9876543211',
      email: 'sarah.j@email.com',
      location: 'Delhi, NCR',
      submissionDate: '2025-07-10',
      lastUpdate: '2025-07-20',
      priority: 'medium',
      description:
        'End-stage renal disease patient scheduled for kidney transplant surgery.',
    },
    {
      id: 3,
      name: 'Michael Brown',
      age: 28,
      condition: 'Spine Surgery',
      caseId: 'CASE-2025-003',
      status: 'pending',
      targetAmount: 250000,
      raisedAmount: 75000,
      progress: 30,
      phone: '+91 9876543212',
      email: 'michael.b@email.com',
      location: 'Bangalore, Karnataka',
      submissionDate: '2025-07-18',
      lastUpdate: '2025-07-21',
      priority: 'medium',
      description:
        'Spinal cord injury requiring surgical intervention and rehabilitation.',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      age: 52,
      condition: 'Cancer Treatment',
      caseId: 'CASE-2025-004',
      status: 'completed',
      targetAmount: 320000,
      raisedAmount: 320000,
      progress: 100,
      phone: '+91 9876543213',
      email: 'emma.w@email.com',
      location: 'Chennai, Tamil Nadu',
      submissionDate: '2025-06-25',
      lastUpdate: '2025-07-15',
      priority: 'low',
      description:
        'Breast cancer treatment completed successfully with chemotherapy and radiation.',
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'funded':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.caseId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: patients.length,
    active: patients.filter((p) => p.status === 'active').length,
    funded: patients.filter((p) => p.status === 'funded').length,
    completed: patients.filter((p) => p.status === 'completed').length,
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
                <Users className="w-8 h-8 text-green-600" />
                My Patients
              </h1>
              <p className="text-gray-600">
                Manage and track your verified patients' cases and progress
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Patients
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stats.total}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Active Cases
                    </p>
                    <p className="text-3xl font-bold text-blue-600">
                      {stats.active}
                    </p>
                  </div>
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Funded Cases
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      {stats.funded}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Completed
                    </p>
                    <p className="text-3xl font-bold text-purple-600">
                      {stats.completed}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search patients by name, condition, or case ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="funded">Funded</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Patients Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPatients.length === 0 ? (
                <div className="col-span-full bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No patients found
                  </h3>
                  <p className="text-gray-500">
                    {searchTerm || statusFilter !== 'all'
                      ? 'Try adjusting your search criteria or filters.'
                      : 'No patients have been assigned to you yet.'}
                  </p>
                </div>
              ) : (
                filteredPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {patient.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {patient.age} years old
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            patient.status
                          )}`}
                        >
                          {patient.status}
                        </span>
                        <span
                          className={`text-xs font-medium ${getPriorityColor(
                            patient.priority
                          )}`}
                        >
                          {patient.priority} priority
                        </span>
                      </div>
                    </div>

                    {/* Case Details */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {patient.condition}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {patient.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Case ID:</span>
                        <span className="text-sm font-medium text-gray-900">
                          {patient.caseId}
                        </span>
                      </div>

                      {/* Funding Progress */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">
                            Funding Progress
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {patient.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${patient.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">
                            ₹{patient.raisedAmount.toLocaleString()}
                          </span>
                          <span className="text-xs text-gray-500">
                            ₹{patient.targetAmount.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            <span>{patient.phone}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{patient.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-3">
                        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">
                          <FileText className="w-4 h-4" />
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientsPage;
