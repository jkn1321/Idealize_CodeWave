import {
  UserPlus,
  Shield,
  Heart,
  ClipboardList,
  Target,
  ArrowRight,
} from 'lucide-react';
const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Register Account',
      description:
        'Create a free account as a donor or healthcare provider. Verify your identity and get access to our secure platform.',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Secure Verification',
      description:
        'All donations are verified through our secure system. We ensure transparency and accountability.',
      color: 'green',
    },
    {
      icon: Heart,
      title: 'Medical Donations',
      description:
        'Qualified accounts can make direct donations to verified healthcare providers and medical facilities.',
      color: 'red',
    },
    {
      icon: ClipboardList,
      title: 'Request Supplies',
      description:
        'Healthcare providers can request specific medical supplies and equipment through our platform.',
      color: 'purple',
    },
    {
      icon: Target,
      title: 'Direct Impact',
      description:
        'Track your donations and see the direct impact on healthcare outcomes around the world.',
      color: 'orange',
    },
  ];
  const getColorClasses = (color, index) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        border: 'border-blue-200',
      },
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-600',
        border: 'border-green-200',
      },
      red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
      purple: {
        bg: 'bg-purple-50',
        icon: 'text-purple-600',
        border: 'border-purple-200',
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'text-orange-600',
        border: 'border-orange-200',
      },
    };
    return colors[color];
  };
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      {' '}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        {/* Header */}{' '}
        <div className="text-center mb-16">
          {' '}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {' '}
            How It Works{' '}
          </h2>{' '}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making medical donations simple, secure, and transparent in just a
            few steps
          </p>
        </div>
        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const colorClasses = getColorClasses(step.color, index);

              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary-600 text-white text-sm font-bold rounded-full mb-4">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 ${colorClasses.bg} border-4 ${colorClasses.border} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`h-10 w-10 ${colorClasses.icon}`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (hidden on last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community and start making a difference in healthcare
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Start as Donor
              </button>
              <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Join as Healthcare Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
