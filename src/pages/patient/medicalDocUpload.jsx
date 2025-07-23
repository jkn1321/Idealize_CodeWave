import React, { useState, useCallback } from 'react';
import {
  Upload,
  File,
  X,
  CheckCircle,
  AlertCircle,
  Eye,
  Download,
  Trash2,
  FileText,
  Image as ImageIcon,
  FileImage,
  Calendar,
  User,
  ArrowLeft,
  Activity,
} from 'lucide-react';

const MedicalDocUpload = ({ onBack, onViewStatus }) => {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: 'Blood_Test_Report_Jan2025.pdf',
      type: 'application/pdf',
      size: 2.5,
      status: 'verified',
      uploadDate: '2025-01-15',
      category: 'Lab Report',
    },
    {
      id: 2,
      name: 'Prescription_Dr_Smith.jpg',
      type: 'image/jpeg',
      size: 1.2,
      status: 'pending',
      uploadDate: '2025-07-20',
      category: 'Prescription',
    },
  ]);

  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');

  const documentCategories = [
    'Medical Report',
    'Lab Report',
    'Prescription',
    'X-Ray/Scan',
    'Insurance Document',
    'Discharge Summary',
    'Other',
  ];

  const acceptedFileTypes = {
    'application/pdf': '.pdf',
    'image/jpeg': '.jpg,.jpeg',
    'image/png': '.png',
    'image/gif': '.gif',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      '.docx',
  };

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const validateFile = (file) => {
    const errors = [];

    if (!Object.keys(acceptedFileTypes).includes(file.type)) {
      errors.push('File type not supported');
    }

    if (file.size > maxFileSize) {
      errors.push('File size exceeds 10MB limit');
    }

    return errors;
  };

  const simulateUpload = (fileId) => {
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        const currentProgress = prev[fileId] || 0;
        const newProgress = Math.min(currentProgress + Math.random() * 30, 100);

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          // Update file status to uploaded
          setUploadedFiles((prev) =>
            prev.map((f) => (f.id === fileId ? { ...f, status: 'pending' } : f))
          );
          return { ...prev, [fileId]: 100 };
        }

        return { ...prev, [fileId]: newProgress };
      });
    }, 200);
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);

    fileArray.forEach((file) => {
      const errors = validateFile(file);

      if (errors.length === 0) {
        const newFile = {
          id: Date.now() + Math.random(),
          name: file.name,
          type: file.type,
          size: (file.size / (1024 * 1024)).toFixed(2),
          status: 'uploading',
          uploadDate: new Date().toISOString().split('T')[0],
          category: selectedCategory || 'Other',
          file: file,
        };

        setUploadedFiles((prev) => [...prev, newFile]);
        setUploadProgress((prev) => ({ ...prev, [newFile.id]: 0 }));
        simulateUpload(newFile.id);
      } else {
        alert(`Error uploading ${file.name}: ${errors.join(', ')}`);
      }
    });

    setDragActive(false);
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [selectedCategory]
  );

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
    setUploadProgress((prev) => {
      const { [fileId]: removed, ...rest } = prev;
      return rest;
    });
  };

  const getFileIcon = (type) => {
    if (type.startsWith('image/')) {
      return <FileImage className="w-6 h-6 text-blue-500" />;
    } else if (type === 'application/pdf') {
      return <FileText className="w-6 h-6 text-red-500" />;
    }
    return <File className="w-6 h-6 text-gray-500" />;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'uploading':
        return <Upload className="w-5 h-5 text-blue-500 animate-pulse" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'pending':
        return 'Under Review';
      case 'uploading':
        return 'Uploading...';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Medical Document Upload
          </h1>
          <p className="text-gray-600">
            Upload and manage your medical documents securely
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Upload New Document
              </h2>

              {/* Category Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  {documentCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Drag and Drop Area */}
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept={Object.values(acceptedFileTypes).join(',')}
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Drop files here or click to upload
                </h3>
                <p className="text-gray-600 mb-4">
                  Support for PDF, DOC, DOCX, JPG, PNG files up to 10MB
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Choose Files
                </button>
              </div>
            </div>

            {/* Uploaded Files List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Your Documents
                  </h2>
                  {uploadedFiles.some(
                    (file) =>
                      file.status === 'pending' || file.status === 'verified'
                  ) && (
                    <button
                      onClick={() => onViewStatus && onViewStatus()}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Activity className="w-4 h-4 mr-2" />
                      View Case Status
                    </button>
                  )}
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        {getFileIcon(file.type)}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {file.name}
                          </h3>
                          <div className="flex items-center mt-1 space-x-4 text-xs text-gray-500">
                            <span>{file.size} MB</span>
                            <span>•</span>
                            <span>{file.category}</span>
                            <span>•</span>
                            <span>{file.uploadDate}</span>
                          </div>

                          {/* Upload Progress */}
                          {file.status === 'uploading' &&
                            uploadProgress[file.id] !== undefined && (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs text-gray-600 mb-1">
                                  <span>Uploading...</span>
                                  <span>
                                    {Math.round(uploadProgress[file.id])}%
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                    style={{
                                      width: `${uploadProgress[file.id]}%`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            )}

                          {/* Status */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              {getStatusIcon(file.status)}
                              <span className="ml-2 text-sm text-gray-600">
                                {getStatusText(file.status)}
                              </span>
                            </div>
                            {(file.status === 'pending' ||
                              file.status === 'verified') && (
                              <button
                                onClick={() =>
                                  onViewStatus && onViewStatus(file.id)
                                }
                                className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center"
                              >
                                <Activity className="w-3 h-3 mr-1" />
                                Track Status
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="Preview Document"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          title="Download Document"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        {(file.status === 'pending' ||
                          file.status === 'verified') && (
                          <button
                            onClick={() =>
                              onViewStatus && onViewStatus(file.id)
                            }
                            className="p-2 text-blue-500 hover:text-blue-700 transition-colors"
                            title="View Case Status"
                          >
                            <Activity className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => removeFile(file.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete Document"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {uploadedFiles.length === 0 && (
                  <div className="p-8 text-center">
                    <File className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No documents uploaded yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upload Guidelines */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Upload Guidelines
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Clear Images
                    </p>
                    <p className="text-xs text-gray-600">
                      Ensure text is readable and images are well-lit
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Complete Documents
                    </p>
                    <p className="text-xs text-gray-600">
                      Upload all pages of multi-page documents
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Recent Reports
                    </p>
                    <p className="text-xs text-gray-600">
                      Upload the most recent medical reports
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Proper Categories
                    </p>
                    <p className="text-xs text-gray-600">
                      Select appropriate document categories
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Statistics */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Document Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Documents</span>
                  <span className="text-sm font-medium text-gray-900">
                    {uploadedFiles.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Verified</span>
                  <span className="text-sm font-medium text-green-600">
                    {
                      uploadedFiles.filter((f) => f.status === 'verified')
                        .length
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Under Review</span>
                  <span className="text-sm font-medium text-yellow-600">
                    {uploadedFiles.filter((f) => f.status === 'pending').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Uploading</span>
                  <span className="text-sm font-medium text-blue-600">
                    {
                      uploadedFiles.filter((f) => f.status === 'uploading')
                        .length
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900 mb-1">
                    Secure Upload
                  </h4>
                  <p className="text-xs text-blue-700">
                    All documents are encrypted and stored securely. Only
                    verified medical professionals can access your files.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDocUpload;
