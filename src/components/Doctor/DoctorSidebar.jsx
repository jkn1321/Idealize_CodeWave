import React from 'react';
import {
  Home,
  FileText,
  Users,
  Award,
  Bell,
  User,
  Stethoscope,
  ClipboardCheck,
  LogOut,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const DoctorSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: Home,
      path: '/doctor/dashboard',
    },
    {
      id: 'case-review',
      name: 'Case Review',
      icon: ClipboardCheck,
      path: '/doctor/case-review',
    },
    {
      id: 'patients',
      name: 'My Patients',
      icon: Users,
      path: '/doctor/patients',
    },
    {
      id: 'recognition',
      name: 'Recognition',
      icon: Award,
      path: '/doctor/recognition',
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: Bell,
      path: '/doctor/notifications',
    },
    {
      id: 'profile',
      name: 'Profile Settings',
      icon: User,
      path: '/doctor/profile',
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
        <p className="text-sm text-gray-600">Doctor Portal</p>
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
                  ? 'bg-green-50 text-green-700 border-r-4 border-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <IconComponent
                className={`w-5 h-5 ${
                  isActive ? 'text-green-700' : 'text-gray-500'
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
          <p>Medical Review Platform</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorSidebar;
