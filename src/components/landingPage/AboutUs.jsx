import {
  Shield,
  Globe,
  Lightbulb,
  Users,
  Heart,
  Award,
  Target,
  CheckCircle,
} from 'lucide-react';
const AboutUs = () => {
  const stats = [
    {
      number: '10,000+',
      label: 'Lives Impacted',
      icon: Heart,
      color: 'text-red-600',
    },
    {
      number: '500+',
      label: 'Healthcare Partners',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      number: '50+',
      label: 'Countries Served',
      icon: Globe,
      color: 'text-green-600',
    },
    {
      number: '$2M+',
      label: 'Donations Facilitated',
      icon: Award,
      color: 'text-purple-600',
    },
  ];
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description:
        'Every donation is verified and tracked through our secure blockchain-based system.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description:
        'Connecting donors worldwide with healthcare providers in need of medical supplies.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Using cutting-edge technology to make medical donations more efficient and transparent.',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
    },
    {
      icon: Users,
      title: 'Partnership',
      description:
        'Building lasting relationships between donors, healthcare providers, and communities.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
    },
  ];
  return (
    <section id="about" className="py-20 bg-white">
      {' '}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        {/* Header */}{' '}
        <div className="text-center mb-16">
          {' '}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {' '}
            About MediTrust{' '}
          </h2>{' '}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {' '}
            Bridging the gap between medical needs and generous hearts worldwide{' '}
          </p>{' '}
        </div>{' '}
        {/* Content */}{' '}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {' '}
          <div className="space-y-8">
            {' '}
            <div>
              {' '}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>{' '}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {' '}
                <p>
                  {' '}
                  Founded in 2020, MediTrust emerged from a simple yet powerful
                  vision: to create a transparent, secure platform that connects
                  medical donations with those who need them most. Our founders,
                  healthcare professionals and technology experts, witnessed
                  firsthand the challenges faced by healthcare systems
                  worldwide.{' '}
                </p>{' '}
                <p>
                  {' '}
                  Today, MediTrust has grown into a global network of verified
                  healthcare providers, generous donors, and dedicated
                  volunteers working together to make healthcare accessible to
                  everyone, everywhere.{' '}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="space-y-8">
            {' '}
            <div>
              {' '}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>{' '}
              <p className="text-gray-600 leading-relaxed">
                {' '}
                To democratize healthcare access by creating the world's most
                trusted platform for medical donations, ensuring that
                life-saving supplies reach those who need them most, when they
                need them most.{' '}
              </p>{' '}
            </div>{' '}
            {/* Mission Goals */}{' '}
            <div className="space-y-4">
              {' '}
              <div className="flex items-start">
                {' '}
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />{' '}
                <div>
                  {' '}
                  <h4 className="font-semibold text-gray-900">
                    Transparency First
                  </h4>{' '}
                  <p className="text-gray-600">
                    Every donation tracked from donor to recipient
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className="flex items-start">
                {' '}
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />{' '}
                <div>
                  {' '}
                  <h4 className="font-semibold text-gray-900">
                    Global Reach
                  </h4>{' '}
                  <p className="text-gray-600">
                    Connecting healthcare needs across continents
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className="flex items-start">
                {' '}
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />{' '}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Maximum Impact
                  </h4>
                  <p className="text-gray-600">
                    Ensuring donations reach those who need them most
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`${value.bgColor} border-2 ${value.borderColor} rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className={`h-8 w-8 ${value.iconColor}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
