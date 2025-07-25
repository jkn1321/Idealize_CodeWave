import React from 'react';
import {
  FileText,
  DollarSign,
  UserCheck,
  Users,
  AlertTriangle,
  MessageSquare,
  TrendingUp,
  BarChart3,
  PieChart,
} from 'lucide-react';

const AdminDashboardPage = () => {
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <header className="flex gap-5 mb-6">
        <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-500" />
          <span>Total Verified Cases</span>
        </div>
        <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-3">
          <DollarSign className="w-6 h-6 text-green-500" />
          <span>Total Donations</span>
        </div>
        <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-3">
          <UserCheck className="w-6 h-6 text-purple-500" />
          <span>Active Doctors</span>
        </div>
        <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-3">
          <Users className="w-6 h-6 text-indigo-500" />
          <span>Total Donors</span>
        </div>
        <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <span>Flagged Cases</span>
        </div>
        <div className="flex-1 p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-orange-500" />
          <span>Open Channel Requests</span>
        </div>
      </header>
      <section className="flex flex-wrap gap-5">
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Weekly Donation Activity</h3>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Most Common Case Types</h3>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <PieChart className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold">User Role Distribution</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;
