import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('meditrust_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('meditrust_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password, userType = 'patient') => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual API call
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - replace with actual API response
      const userData = {
        id: Date.now(),
        email,
        userType,
        name: userType === 'doctor' ? 'Dr. John Smith' : 'John Doe',
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          userType === 'doctor' ? 'Dr. John Smith' : 'John Doe'
        )}&background=3b82f6&color=fff`,
        isVerified: userType === 'doctor',
        ...(userType === 'doctor' && {
          specialization: 'Cardiology',
          hospital: 'General Hospital',
          licenseNumber: 'MD12345',
        }),
      };

      setUser(userData);
      localStorage.setItem('meditrust_user', JSON.stringify(userData));

      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (formData, userType = 'patient') => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual API call
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock user data - replace with actual API response
      const userData = {
        id: Date.now(),
        email: formData.email,
        userType,
        name: formData.fullName || formData.name,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          formData.fullName || formData.name
        )}&background=3b82f6&color=fff`,
        isVerified: false,
        ...(userType === 'doctor' && {
          specialization: formData.specialization,
          hospital: formData.hospital,
          licenseNumber: formData.licenseNumber,
        }),
        ...(userType === 'patient' && {
          dateOfBirth: formData.dateOfBirth,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
        }),
      };

      setUser(userData);
      localStorage.setItem('meditrust_user', JSON.stringify(userData));

      return { success: true, user: userData };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('meditrust_user');
  };

  const updateUser = (userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('meditrust_user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
