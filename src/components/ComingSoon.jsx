import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  Clock,
  HandHeart,
  Stethoscope,
  CheckCircle,
  ExternalLink,
  Heart,
} from 'lucide-react';

const ComingSoon = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roleInfo = {
    doctor: {
      title: 'Healthcare Provider',
      icon: Stethoscope,
      color: 'green',
      bgGradient: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    donor: {
      title: 'Donor',
      icon: HandHeart,
      color: 'orange',
      bgGradient: 'from-amber-500 to-orange-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  };

  const info = roleInfo[role] || {
    title: 'Role',
    icon: Heart,
    color: 'blue',
    bgGradient: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  };

  const IconComponent = info.icon;

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/role-selection')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Role Selection
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div
            className={`w-24 h-24 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-8 border-4 ${info.borderColor}`}
          >
            <IconComponent className={`h-12 w-12 ${info.textColor}`} />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-gray-400 mr-2" />
              <span className="text-gray-600 font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              {info.title} Registration
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're working hard to bring you the {info.title.toLowerCase()}{' '}
              registration experience. This feature will be available soon!
            </p>
          </div>

          <div
            className={`bg-white rounded-2xl border-2 ${info.borderColor} shadow-lg p-8 mb-12 max-w-md mx-auto`}
          >
            <div className="mb-6">
              <Mail className={`h-8 w-8 ${info.textColor} mx-auto mb-4`} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Notified
              </h3>
              <p className="text-gray-600">
                Enter your email to be notified when {info.title.toLowerCase()}{' '}
                registration is available:
              </p>
            </div>

            {isSubmitted ? (
              <div
                className={`${info.bgColor} border ${info.borderColor} rounded-lg p-4`}
              >
                <div className="flex items-center justify-center">
                  <CheckCircle className={`h-6 w-6 ${info.textColor} mr-2`} />
                  <span className={`${info.textColor} font-medium`}>
                    Thank you! We'll notify you when {info.title.toLowerCase()}{' '}
                    registration is available.
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r ${info.bgGradient} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity`}
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
