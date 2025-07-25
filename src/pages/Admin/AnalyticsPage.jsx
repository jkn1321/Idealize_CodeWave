import React from 'react';
import { BarChart3, Map, Clock, Filter, TrendingUp } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics</h2>
      <div className="flex flex-wrap gap-5">
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold">Donation Heatmap</h3>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-2 mb-3">
            <Map className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Active Users by Region</h3>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold">Doctor Response Time</h3>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Case Approval Pipeline</h3>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold">Growth Trend</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
