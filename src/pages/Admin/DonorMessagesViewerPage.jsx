import React from 'react';
import { MessageCircle, Search, User, Heart } from 'lucide-react';

const DonorMessagesViewerPage = () => {
  return (
    <div className="flex gap-5 p-5 bg-slate-100 min-h-screen">
      <aside className="w-[250px] bg-white border border-gray-300 rounded-md p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-gray-800">Donor Messages</h3>
        </div>
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Donors"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Donor 1</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Donor 2</span>
          </li>
        </ul>
      </aside>
      <main className="flex-1 bg-white border border-gray-300 rounded-md p-4 shadow-sm">
        <div className="space-y-3">
          <div className="mb-3 p-3 bg-slate-100 rounded-md">
            <div className="flex items-center gap-2 mb-1">
              <User className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-700">Patient</span>
            </div>
            <p className="text-gray-800">Hello</p>
          </div>
          <div className="mb-3 p-3 bg-blue-500 text-white rounded-md">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-4 h-4 text-white" />
              <span className="font-medium">Donor</span>
            </div>
            <p>Hi</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonorMessagesViewerPage;
