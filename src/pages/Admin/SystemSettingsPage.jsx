import React from 'react';
import {
  Settings,
  Shield,
  Workflow,
  FileImage,
  AlertTriangle,
  RotateCcw,
  Trash2,
} from 'lucide-react';

const SystemSettingsPage = () => {
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6 text-gray-600" />
        <h2 className="text-2xl font-bold text-gray-800">System Settings</h2>
      </div>

      <section className="mb-5 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-700">
            User Access Roles & Permissions
          </h3>
        </div>
        <p className="text-gray-600">Configure roles and permissions here.</p>
      </section>

      <section className="mb-5 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Workflow className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-700">
            Case Review Workflow
          </h3>
        </div>
        <p className="text-gray-600">Toggle workflows here.</p>
      </section>

      <section className="mb-8 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <FileImage className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-700">
            Document Size Limits
          </h3>
        </div>
        <p className="text-gray-600">Set document size limits here.</p>
      </section>

      <section className="mt-8 p-4 bg-red-50 border border-red-300 rounded-md">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-semibold text-red-700">Danger Zone</h3>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white border-none rounded-md cursor-pointer hover:bg-red-600 transition-colors mr-3">
            <RotateCcw className="w-4 h-4" />
            Reset System Flags
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white border-none rounded-md cursor-pointer hover:bg-red-600 transition-colors">
            <Trash2 className="w-4 h-4" />
            Wipe Dummy Data
          </button>
        </div>
      </section>
    </div>
  );
};

export default SystemSettingsPage;
