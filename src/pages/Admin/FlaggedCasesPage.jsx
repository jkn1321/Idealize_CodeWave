import React from 'react';
import { AlertTriangle, Eye, FileText, CheckCircle } from 'lucide-react';

const FlaggedCasesPage = () => {
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-bold text-gray-800">Flagged Cases</h2>
      </div>
      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-slate-800 text-white p-3 text-left">
                Case ID / Title
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Flag Reason
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Flagged By
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Date Flagged
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Current Status
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3 border border-gray-300">Case 123</td>
              <td className="p-3 border border-gray-300">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  Document Mismatch
                </span>
              </td>
              <td className="p-3 border border-gray-300">System</td>
              <td className="p-3 border border-gray-300">2025-07-20</td>
              <td className="p-3 border border-gray-300">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Pending Review
                </span>
              </td>
              <td className="p-3 border border-gray-300">
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors mr-1">
                    <Eye className="w-4 h-4" />
                    View Full Case
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors mr-1">
                    <FileText className="w-4 h-4" />
                    Add Notes
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                    <CheckCircle className="w-4 h-4" />
                    Approve
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlaggedCasesPage;
