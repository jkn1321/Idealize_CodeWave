import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Heart,
  User,
  LogOut,
  Settings,
  ChevronDown,
  Home,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import SignInModal from './SignInModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const profileDropdownRef = useRef(null);

  // Handle click outside to close profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll to section when coming from another page
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the state
        window.history.replaceState({}, document.title);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    navigate('/');
  };

  const NavLink = ({ children, onClick, to, className = '' }) => {
    if (to) {
      return (
        <Link
          to={to}
          className={`text-gray-700 hover:text-primary-600 transition-colors ${className}`}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        onClick={onClick}
        className={`text-gray-700 hover:text-primary-600 transition-colors ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary-600" />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-900">MediTrust</h2>
              <span className="text-xs text-gray-500">
                Making Healthcare Accessible
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About Us</NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>
              Contact Us
            </NavLink>
          </nav>

          {/* Auth Section */}
          {isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-4">
              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border-2 border-primary-200"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-gray-900">
                        {user.name}
                      </span>
                      <span className="text-xs text-gray-500 capitalize">
                        {user.userType}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform ${
                      isProfileMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                      {user.userType === 'doctor' && user.specialization && (
                        <p className="text-xs text-primary-600">
                          {user.specialization}
                        </p>
                      )}
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => {
                          // Navigate to appropriate dashboard based on user type
                          const dashboardRoute =
                            user.userType === 'patient'
                              ? '/patient/dashboard'
                              : user.userType === 'doctor'
                              ? '/doctor/dashboard'
                              : user.userType === 'donor'
                              ? '/donor/dashboard'
                              : '/profile';
                          navigate(dashboardRoute);
                          setIsProfileMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Home className="h-4 w-4 mr-3" />
                        Dashboard
                      </button>
                      <button
                        onClick={() => {
                          navigate('/profile');
                          setIsProfileMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <User className="h-4 w-4 mr-3" />
                        My Profile
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Settings className="h-4 w-4 mr-3" />
                        Settings
                      </button>
                    </div>

                    <div className="border-t border-gray-100 py-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/role-selection')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => {
                  scrollToSection('home');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection('about');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  scrollToSection('how-it-works');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contact Us
              </button>

              {/* Mobile Auth Section */}
              {isAuthenticated ? (
                <div className="px-3 py-2 space-y-2 border-t border-gray-200 mt-2 pt-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-primary-200"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {user.userType}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <User className="h-4 w-4 mr-3" />
                    My Profile
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:text-primary-600 transition-colors">
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="px-3 py-2 space-y-2 border-t border-gray-200 mt-2 pt-4">
                  <button
                    onClick={() => {
                      setIsSignInModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium transition-colors px-3 py-2"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      navigate('/role-selection');
                      setIsMenuOpen(false);
                    }}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-full"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </header>
  );
};

export default Header;
