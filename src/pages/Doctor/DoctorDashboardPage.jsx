import React from 'react';
import {
  LayoutDashboard,
  FileText,
  Award,
  User,
  LogOut,
  Stethoscope,
  AlertTriangle,
  Eye,
} from 'lucide-react';

const DoctorDashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">
              Doctor Portal
            </h2>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md cursor-pointer">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md cursor-pointer">
              <FileText className="w-5 h-5" />
              My Reviews
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md cursor-pointer">
              <Award className="w-5 h-5" />
              Recognition & Points
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md cursor-pointer">
              <User className="w-5 h-5" />
              Profile
            </li>
            <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md cursor-pointer">
              <LogOut className="w-5 h-5" />
              Logout
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Pending Case Reviews
          </h1>
        </header>
        <section className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Patient Name
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Case Title:</span> Kidney
                  Transplant
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Summary:</span> AI Preprocessing
                  Summary
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-600">
                    Flagged Issues:
                  </span>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span className="text-red-600 font-medium">
                      Highlighted Issues
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium">
                    Document Consistency Score:
                  </span>{' '}
                  <span className="text-green-600 font-semibold">85%</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-600">Status:</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Pending
                  </span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Eye className="w-4 h-4" />
              Review Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboardPage;
