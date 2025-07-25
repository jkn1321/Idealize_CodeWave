import React, { useState } from 'react';
import {
  Bell,
  CheckCircle,
  Clock,
  AlertTriangle,
  Trash2,
 } from 'lucide-react';
import DoctorSidebar from '../../components/Doctor/DoctorSidebar';

const DoctorNotificationsPage = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [filter, setFilter] = useState('all'); // all, unread, read

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'case-review',
      title: 'New case review request',
      message: 'Case #2025-001 "Emergency Heart Surgery" requires your review',
      timestamp: '2 hours ago',
      isRead: false,
      priority: 'high',
      actionUrl: '/doctor/case-review',
    },
    {
      id: 2,
      type: 'recognition',
      title: 'Recognition earned: Trusted Doctor',
      message:
        'Congratulations! You have earned the "Trusted Doctor" badge for excellent reviews',
      timestamp: '1 day ago',
      isRead: false,
      priority: 'medium',
    },
    {
      id: 3,
      type: 'admin',
      title: 'Profile update required',
      message: 'Please update your medical license information in your profile',
      timestamp: '3 days ago',
      isRead: true,
      priority: 'medium',
      actionUrl: '/doctor/profile',
    },
    {
      id: 4,
      type: 'case-update',
      title: 'Case status updated',
      message:
        'Case #2025-003 has been successfully funded and treatment has begun',
      timestamp: '5 days ago',
      isRead: true,
      priority: 'low',
    },
    {
      id: 5,
      type: 'system',
      title: 'System maintenance scheduled',
      message:
        'Platform will be under maintenance on July 30th from 2:00 AM to 4:00 AM',
      timestamp: '1 week ago',
      isRead: true,
      priority: 'low',
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'case-review':
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'recognition':
        return <Bell className="w-5 h-5 text-green-600" />;
      case 'admin':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'case-update':
        return <Clock className="w-5 h-5 text-purple-600" />;
      case 'system':
        return <Bell className="w-5 h-5 text-gray-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-gray-500 bg-gray-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === 'unread') return !notification.isRead;
    if (filter === 'read') return notification.isRead;
    return true;
  });

  const markAsRead = (id) => {
    // Handle mark as read logic
    console.log('Mark as read:', id);
  };

  const deleteNotification = (id) => {
    // Handle delete notification logic
    console.log('Delete notification:', id);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <Bell className="w-8 h-8 text-green-600" />
                Notifications
              </h1>
              <p className="text-gray-600">
                Stay updated with case reviews, recognitions, and system updates
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    filter === 'all'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  All Notifications ({notifications.length})
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    filter === 'unread'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Unread ({notifications.filter((n) => !n.isRead).length})
                </button>
                <button
                  onClick={() => setFilter('read')}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    filter === 'read'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Read ({notifications.filter((n) => n.isRead).length})
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No notifications found
                  </h3>
                  <p className="text-gray-500">
                    {filter === 'unread'
                      ? 'All caught up! No unread notifications.'
                      : 'No notifications match your current filter.'}
                  </p>
                </div>
              ) : (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`bg-white rounded-lg shadow-sm border-l-4 border border-gray-200 transition-all hover:shadow-md ${
                      !notification.isRead ? 'ring-2 ring-blue-100' : ''
                    } ${getPriorityColor(notification.priority)}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="flex-shrink-0 mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3
                                className={`text-lg font-semibold ${
                                  !notification.isRead
                                    ? 'text-gray-900'
                                    : 'text-gray-700'
                                }`}
                              >
                                {notification.title}
                              </h3>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                            <p
                              className={`mb-2 ${
                                !notification.isRead
                                  ? 'text-gray-800'
                                  : 'text-gray-600'
                              }`}
                            >
                              {notification.message}
                            </p>
                            <p className="text-sm text-gray-500">
                              {notification.timestamp}
                            </p>
                            {notification.actionUrl && (
                              <button className="mt-3 text-sm text-green-600 hover:text-green-800 font-medium">
                                Take Action →
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.isRead && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                              title="Mark as read"
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete notification"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Actions */}
            {filteredNotifications.length > 0 && (
              <div className="mt-8 flex justify-center gap-4">
                <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Mark All as Read
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorNotificationsPage;
