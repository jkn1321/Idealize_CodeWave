import React from 'react';
import {
  User,
  Stethoscope,
  Heart,
  Eye,
  UserX,
  MessageCircle,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';

const UserManagementPage = () => {
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <header className="flex gap-3 mb-5">
        <button className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2">
          <User className="w-4 h-4" />
          Patients
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2">
          <Stethoscope className="w-4 h-4" />
          Doctors
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2">
          <Heart className="w-4 h-4" />
          Donors
        </button>
      </header>
      <section className="bg-white rounded-md shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-slate-800 text-white p-3 text-left">
                Name / Email
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Registration Date
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Verified Status
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">
                Active / Deactivated
              </th>
              <th className="bg-slate-800 text-white p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3 border border-gray-300">John Doe</td>
              <td className="p-3 border border-gray-300">2025-07-20</td>
              <td className="p-3 border border-gray-300">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Verified
                </span>
              </td>
              <td className="p-3 border border-gray-300">
                <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                  <ToggleRight className="w-4 h-4 text-green-600" />
                  Active
                </button>
              </td>
              <td className="p-3 border border-gray-300">
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    <Eye className="w-4 h-4" />
                    View Profile
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                    <UserX className="w-4 h-4" />
                    Deactivate
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserManagementPage;
