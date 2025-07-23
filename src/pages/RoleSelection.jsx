import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Stethoscope,
  HandHeart,
  Check,
  Heart,
  HelpCircle,
} from 'lucide-react';

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'patient',
      title: 'Patient',
      icon: User,
      description:
        'I need medical supplies or want to request healthcare assistance',
      features: [
        'Request medical supplies',
        'Access healthcare providers',
        'Track donation requests',
        'Secure medical records',
      ],
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200 hover:border-blue-300',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      route: '/patient/signup',
    },
    {
      id: 'doctor',
      title: 'Healthcare Provider',
      icon: Stethoscope,
      description: "I'm a medical professional or healthcare facility",
      features: [
        'Receive medical donations',
        'Manage patient requests',
        'Verify medical needs',
        'Professional network access',
      ],
      color: 'green',
      bgGradient: 'from-green-500 to-green-600',
      borderColor: 'border-green-200 hover:border-green-300',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      route: '/doctor/signup',
    },
    {
      id: 'donor',
      title: 'Donor',
      icon: HandHeart,
      description: 'I want to donate medical supplies or funds',
      features: [
        'Make medical donations',
        'Track donation impact',
        'Connect with healthcare providers',
        'Tax-deductible contributions',
      ],
      color: 'orange',
      bgGradient: 'from-amber-500 to-orange-600',
      borderColor: 'border-orange-200 hover:border-orange-300',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      route: '/coming-soon/donor',
    },
  ];

  const handleRoleClick = (role) => {
    navigate(role.route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>

            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary-600" />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-900">MediTrust</h1>
                <span className="text-xs text-gray-500">
                  Making Healthcare Accessible
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our Healthcare Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your role to get started with MediTrust and help us make
            healthcare accessible for everyone.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <div
                key={role.id}
                className={`bg-white rounded-2xl border-2 ${role.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
                onClick={() => handleRoleClick(role)}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${role.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`h-8 w-8 ${role.textColor}`} />
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold ${role.textColor} mb-3`}>
                      {role.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {role.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Check
                          className={`h-4 w-4 ${role.textColor} mr-3 flex-shrink-0`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${role.bgGradient} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity focus:ring-4 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRoleClick(role);
                    }}
                  >
                    Sign Up as {role.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
              Sign in here
            </button>
          </p>

          <div className="flex items-center justify-center text-gray-500">
            <HelpCircle className="h-4 w-4 mr-2" />
            <span>Need help choosing?</span>
            <button className="ml-1 text-primary-600 hover:text-primary-700 font-medium transition-colors">
              Contact our support team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
