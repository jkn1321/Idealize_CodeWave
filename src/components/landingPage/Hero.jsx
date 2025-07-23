import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  Shield,
  Users,
  DollarSign,
  Activity,
} from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Trustworthy{' '}
              <span className="text-primary-600">Medical Donations</span> Made
              Simple and Secure
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Welcome to MediTrust, where every donation is tracked, verified,
              and makes a real difference in someone's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/role-selection')}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-lg px-8 py-4 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-lg px-8 py-4"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Donations Made</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Lives Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Trust Score</div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl transform -rotate-2 scale-105 opacity-10"></div>
              <div className="relative space-y-6">
                {/* Donation Flow Visualization */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Donor</div>
                      <div className="text-sm text-gray-600">Ready to help</div>
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary-600" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Patient</div>
                      <div className="text-sm text-gray-600">Gets help</div>
                    </div>
                  </div>
                </div>

                {/* Features Icons */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">
                      Transparent
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">
                      Secure
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">
                      Tracked
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                  $
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
