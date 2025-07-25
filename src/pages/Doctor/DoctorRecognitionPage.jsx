import React, { useState } from 'react';
import {
  Award,
  Star,
  Trophy,
  Medal,
  Target,
  TrendingUp,
  Calendar,
  Users,
} from 'lucide-react';
import DoctorSidebar from '../../components/Doctor/DoctorSidebar';

const DoctorRecognitionPage = () => {
  const [activeTab, setActiveTab] = useState('recognition');
  const [selectedPeriod, setSelectedPeriod] = useState('all-time'); // all-time, monthly, weekly

  // Sample recognition data
  const stats = {
    totalPoints: 1250,
    weeklyReviews: 10,
    bonusPoints: 200,
    rank: 15,
    totalReviews: 47,
    successRate: 94,
    avgRating: 4.8,
  };

  const badges = [
    {
      id: 1,
      name: 'Bronze Reviewer',
      description: 'Completed 10+ case reviews',
      icon: Medal,
      earned: true,
      earnedDate: '2025-06-15',
      color: 'from-amber-400 to-amber-600',
    },
    {
      id: 2,
      name: 'Trusted Doctor',
      description: 'Maintained 90%+ accuracy rate',
      icon: Star,
      earned: true,
      earnedDate: '2025-07-01',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 3,
      name: 'Top 1%',
      description: 'Ranked in top 1% of reviewers',
      icon: Trophy,
      earned: false,
      earnedDate: null,
      color: 'from-purple-400 to-purple-600',
      progress: 85, // 85% towards earning this badge
    },
    {
      id: 4,
      name: 'Consistency Streak',
      description: '30 days consecutive reviews',
      icon: Target,
      earned: true,
      earnedDate: '2025-07-10',
      color: 'from-green-400 to-green-600',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Dr. Anitha Sharma', points: 2350, reviews: 89 },
    { rank: 2, name: 'Dr. Raj Patel', points: 2120, reviews: 76 },
    { rank: 3, name: 'Dr. Meera Joshi', points: 1980, reviews: 82 },
    { rank: 4, name: 'Dr. Arun Kumar', points: 1890, reviews: 71 },
    { rank: 5, name: 'Dr. Priya Singh', points: 1750, reviews: 68 },
    // ...
    {
      rank: 15,
      name: 'Dr. Sarah Wilson (You)',
      points: 1250,
      reviews: 47,
      isCurrentUser: true,
    },
  ];

  const monthlyProgress = [
    { month: 'Jan', points: 150, reviews: 6 },
    { month: 'Feb', points: 200, reviews: 8 },
    { month: 'Mar', points: 180, reviews: 7 },
    { month: 'Apr', points: 220, reviews: 9 },
    { month: 'May', points: 250, reviews: 10 },
    { month: 'Jun', points: 200, reviews: 8 },
    { month: 'Jul', points: 180, reviews: 7 },
  ];

  const nextBadge = badges.find((badge) => !badge.earned);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600" />
                Recognition & Achievements
              </h1>
              <p className="text-gray-600">
                Track your progress and celebrate your contributions to the
                medical community
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Points
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      {stats.totalPoints}
                    </p>
                  </div>
                  <Star className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Global Rank
                    </p>
                    <p className="text-3xl font-bold text-blue-600">
                      #{stats.rank}
                    </p>
                  </div>
                  <Trophy className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Success Rate
                    </p>
                    <p className="text-3xl font-bold text-purple-600">
                      {stats.successRate}%
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      This Week
                    </p>
                    <p className="text-3xl font-bold text-orange-600">
                      {stats.weeklyReviews}
                    </p>
                    <p className="text-xs text-gray-500">Reviews</p>
                  </div>
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Badges Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-green-600" />
                  Badges & Achievements
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {badges.map((badge) => {
                    const IconComponent = badge.icon;
                    return (
                      <div
                        key={badge.id}
                        className={`relative p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                          badge.earned
                            ? 'border-green-200 bg-green-50'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="text-center">
                          <div
                            className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                              badge.earned
                                ? `bg-gradient-to-r ${badge.color}`
                                : 'bg-gray-300'
                            }`}
                          >
                            <IconComponent
                              className={`w-6 h-6 ${
                                badge.earned ? 'text-white' : 'text-gray-500'
                              }`}
                            />
                          </div>
                          <h3
                            className={`font-semibold text-sm mb-1 ${
                              badge.earned ? 'text-gray-900' : 'text-gray-500'
                            }`}
                          >
                            {badge.name}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            {badge.description}
                          </p>
                          {badge.earned ? (
                            <p className="text-xs text-green-600 font-medium">
                              Earned {badge.earnedDate}
                            </p>
                          ) : badge.progress ? (
                            <div className="mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${badge.progress}%` }}
                                ></div>
                              </div>
                              <p className="text-xs text-blue-600 mt-1">
                                {badge.progress}% complete
                              </p>
                            </div>
                          ) : (
                            <p className="text-xs text-gray-500">Not earned</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Leaderboard */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  Top Reviewers Leaderboard
                </h2>
                <div className="space-y-3">
                  {leaderboard.map((user, index) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        user.isCurrentUser
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            user.rank <= 3
                              ? user.rank === 1
                                ? 'bg-yellow-100 text-yellow-800'
                                : user.rank === 2
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-orange-100 text-orange-800'
                              : user.isCurrentUser
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {user.rank}
                        </div>
                        <div>
                          <p
                            className={`text-sm font-medium ${
                              user.isCurrentUser
                                ? 'text-green-900'
                                : 'text-gray-900'
                            }`}
                          >
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            {user.reviews} reviews
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm font-bold ${
                            user.isCurrentUser
                              ? 'text-green-600'
                              : 'text-blue-600'
                          }`}
                        >
                          {user.points} pts
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Tracker */}
            {nextBadge && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  Next Achievement
                </h2>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <nextBadge.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {nextBadge.name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {nextBadge.description}
                    </p>
                    {nextBadge.progress && (
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${nextBadge.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">
                      {nextBadge.progress || 0}%
                    </p>
                    <p className="text-sm text-gray-600">Complete</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorRecognitionPage;
