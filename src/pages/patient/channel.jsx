import React, { useState } from 'react';
import {
  Search,
  Filter,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  Calendar,
  MessageSquare,
  ArrowLeft,
  User,
  Stethoscope,
  Building2,
  Shield,
} from 'lucide-react';

const ChannelDoctor = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [channelRequests, setChannelRequests] = useState([]);
  const [requestMessage, setRequestMessage] = useState('');

  // Clear all filters
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('');
    setSelectedAvailability('');
    setSelectedLocation('');
  };

  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      hospital: 'City Medical Center',
      location: 'Lanka Hospital pvt.',
      rating: 4.8,
      experience: '15 years',
      availability: 'Today',
      verified: true,
      image: '/api/placeholder/64/64',
      consultationFee: 150,
      nextAvailable: '2:00 PM Today',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Oncologist',
      hospital: 'Memorial Cancer Institute',
      location: 'Lanka Hospital pvt.',
      rating: 4.9,
      experience: '20 years',
      availability: 'This Week',
      verified: true,
      image: '/api/placeholder/64/64',
      consultationFee: 200,
      nextAvailable: 'Tomorrow 10:00 AM',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialization: 'Neurologist',
      hospital: 'Brain & Spine Center',
      location: 'Asiri Hospital pvt.',
      rating: 4.7,
      experience: '12 years',
      availability: 'Today',
      verified: true,
      image: '/api/placeholder/64/64',
      consultationFee: 175,
      nextAvailable: '4:30 PM Today',
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialization: 'Orthopedic Surgeon',
      hospital: 'Sports Medicine Clinic',
      location: 'Asiri Hospital pvt.',
      rating: 4.6,
      experience: '18 years',
      availability: 'This Week',
      verified: true,
      image: '/api/placeholder/64/64',
      consultationFee: 180,
      nextAvailable: 'Friday 9:00 AM',
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      specialization: 'Pediatrician',
      hospital: "Children's Hospital",
      location: 'Seattle, WA',
      rating: 4.9,
      experience: '14 years',
      availability: 'Today',
      verified: true,
      image: '/api/placeholder/64/64',
      consultationFee: 120,
      nextAvailable: '11:00 AM Today',
    },
  ];

  const specialties = [
    'All Specialties',
    'Cardiologist',
    'Oncologist',
    'Neurologist',
    'Orthopedic Surgeon',
    'Pediatrician',
    'Dermatologist',
    'Psychiatrist',
    'General Medicine',
  ];

  const availabilityOptions = ['Any Time', 'Today', 'This Week', 'Next Week'];

  const locations = [
    'All Locations',
    'Asiri Hospital pvt.',
    'Lanka Hospital pvt.',
    'Co-oparative Hospital',
    'Hemas Hospital',
  ];

  // Filter doctors based on search and filters
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      searchTerm === '' ||
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === '' ||
      selectedSpecialty === 'All Specialties' ||
      doctor.specialization === selectedSpecialty;

    const matchesAvailability =
      selectedAvailability === '' ||
      selectedAvailability === 'Any Time' ||
      doctor.availability === selectedAvailability;

    const matchesLocation =
      selectedLocation === '' ||
      selectedLocation === 'All Locations' ||
      doctor.location === selectedLocation;

    return (
      matchesSearch &&
      matchesSpecialty &&
      matchesAvailability &&
      matchesLocation
    );
  });

  const handleRequestChannel = (doctor) => {
    setSelectedDoctor(doctor);
    setShowRequestForm(true);
  };

  const handleSubmitRequest = () => {
    const newRequest = {
      id: Date.now(),
      doctor: selectedDoctor,
      message: requestMessage,
      status: 'pending',
      requestDate: new Date().toLocaleDateString(),
      patientName: 'John Doe', // This would come from user context
      caseTitle: 'Heart Surgery Treatment', // This would come from user's active case
    };

    setChannelRequests([...channelRequests, newRequest]);
    setShowRequestForm(false);
    setSelectedDoctor(null);
    setRequestMessage('');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'accepted':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'accepted':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <button
            onClick={onBack}
            className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Channel a Doctor
            </h1>
            <p className="text-gray-600">
              Find and connect with verified doctors for consultations
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by doctor name, specialization, or hospital"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Specialty Filter */}
          <div>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Filter */}
          <div>
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              {availabilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location Filter and Clear Button - Second Row */}
        <div className="mt-4 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="w-full md:w-1/4">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm ||
            selectedSpecialty ||
            selectedAvailability ||
            selectedLocation) && (
            <button
              onClick={handleClearFilters}
              className="flex items-center px-4 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <XCircle className="w-4 h-4 mr-2" />
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Current Requests Section */}
      {channelRequests.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your Channel Requests
          </h3>
          <div className="space-y-4">
            {channelRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">
                      {request.doctor.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {request.doctor.specialization} •{' '}
                      {request.doctor.hospital}
                    </p>
                    <p className="text-xs text-gray-500">
                      Requested on {request.requestDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      request.status
                    )}`}
                  >
                    {getStatusIcon(request.status)}
                    <span className="ml-1 capitalize">{request.status}</span>
                  </span>
                  {request.status === 'pending' && (
                    <button className="text-red-600 hover:text-red-700 text-sm">
                      Cancel
                    </button>
                  )}
                  {request.status === 'accepted' && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                      Schedule
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Available Doctors ({filteredDoctors.length})
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {doctor.name}
                      </h4>
                      {doctor.verified && (
                        <div className="ml-2 flex items-center">
                          <Shield className="w-4 h-4 text-green-500" />
                          <span className="ml-1 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                            Verified
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Stethoscope className="w-4 h-4 mr-2" />
                        <span className="text-sm">{doctor.specialization}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{doctor.experience}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="text-sm">{doctor.hospital}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{doctor.location}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          Next available: {doctor.nextAvailable}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-700 ml-1">
                            {doctor.rating}
                          </span>
                        </div>
                        <span className="mx-3 text-gray-300">|</span>
                        <span className="text-sm text-gray-700">
                          ${doctor.consultationFee} consultation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <button
                    onClick={() => handleRequestChannel(doctor)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                  >
                    Request Channel
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="p-12 text-center">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>

      {/* Request Form Modal */}
      {showRequestForm && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Request Channel with {selectedDoctor.name}
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {/* Patient Info (Pre-filled) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    value="John Doe"
                    disabled
                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Case Title
                  </label>
                  <input
                    type="text"
                    value="Heart Surgery Treatment"
                    disabled
                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message to Doctor (Optional)
                  </label>
                  <textarea
                    value={requestMessage}
                    onChange={(e) => setRequestMessage(e.target.value)}
                    placeholder="Please describe your medical condition and why you'd like to consult with this doctor..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Doctor Info Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900">
                        {selectedDoctor.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {selectedDoctor.specialization}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${selectedDoctor.consultationFee} consultation fee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowRequestForm(false);
                  setSelectedDoctor(null);
                  setRequestMessage('');
                }}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitRequest}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelDoctor;
