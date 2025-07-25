import React from 'react';
import {
  Home,
  Upload,
  User,
  MessageSquare,
  Activity,
  Settings,
  LogOut,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const PatientSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: Home,
      path: '/patient/dashboard',
    },
    {
      id: 'upload',
      name: 'Upload Documents',
      icon: Upload,
      path: '/patient/upload',
    },
    {
      id: 'channel',
      name: 'Channel a Doctor',
      icon: User,
      path: '/patient/channel',
    },
    {
      id: 'status',
      name: 'Status Tracking',
      icon: Activity,
      path: '/patient/status',
    },
    {
      id: 'messages',
      name: 'Donor Messages',
      icon: MessageSquare,
      path: '/patient/messages',
    },
    {
      id: 'profile',
      name: 'Profile Settings',
      icon: Settings,
      path: '/patient/profile',
    },
    {
      id: 'logout',
      name: 'Logout',
      icon: LogOut,
      path: '/logout',
    },
  ];

  const handleNavigation = (item) => {
    if (setActiveTab) {
      setActiveTab(item.id);
    }

    if (item.id === 'logout') {
      // Handle logout logic here
      localStorage.removeItem('userToken');
      navigate('/');
    } else {
      navigate(item.path);
    }
  };

  const getCurrentActiveItem = () => {
    const currentPath = location.pathname;
    return (
      sidebarItems.find((item) => item.path === currentPath)?.id || activeTab
    );
  };

  return (
    <div className="bg-white h-screen w-64 shadow-lg border-r border-gray-200 fixed left-0 top-0 z-40">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">MediTrust</h2>
        <p className="text-sm text-gray-600">Patient Portal</p>
      </div>

      {/* Navigation Items */}
      <nav className="mt-6">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = getCurrentActiveItem() === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <IconComponent
                className={`w-5 h-5 ${
                  isActive ? 'text-blue-700' : 'text-gray-500'
                }`}
              />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <p>© 2025 MediTrust</p>
          <p>Secure Medical Funding</p>
        </div>
      </div>
    </div>
  );
};

export default PatientSidebar;
