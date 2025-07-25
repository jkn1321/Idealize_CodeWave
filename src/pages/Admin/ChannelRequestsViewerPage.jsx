import React from 'react';
import { MessageSquare, Eye, X } from 'lucide-react';

const ChannelRequestsViewerPage = () => {
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">Channel Requests</h2>
      </div>
      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-slate-800 text-white p-3 text-left">
                Patient Name
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Requested Doctor
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Specialization
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Request Status
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Timestamp
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3 border border-gray-300">John Doe</td>
              <td className="p-3 border border-gray-300">Dr. Smith</td>
              <td className="p-3 border border-gray-300">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Cardiology
                </span>
              </td>
              <td className="p-3 border border-gray-300">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Pending
                </span>
              </td>
              <td className="p-3 border border-gray-300">2025-07-20</td>
              <td className="p-3 border border-gray-300">
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors mr-1">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                    <X className="w-4 h-4" />
                    Cancel
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

export default ChannelRequestsViewerPage;
