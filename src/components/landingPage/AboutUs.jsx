const AboutUs = () => {
  const stats = [
    { number: '10,000+', label: 'Lives Impacted' },
    { number: '500+', label: 'Healthcare Partners' },
    { number: '50+', label: 'Countries Served' },
    { number: '$2M+', label: 'Donations Facilitated' },
  ];

  const values = [
    {
      icon: '🛡️',
      title: 'Trust & Security',
      description:
        'Every donation is verified and tracked through our secure blockchain-based system.',
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description:
        'Connecting donors worldwide with healthcare providers in need of medical supplies.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description:
        'Using cutting-edge technology to make medical donations more efficient and transparent.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description:
        'Building lasting relationships between donors, healthcare providers, and communities.',
    },
  ];

  return (
    <section id="about" className="about-us">
      <div className="container">
        <div className="about-header">
          <h2>About MediTrust</h2>
          <p className="about-subtitle">
            Bridging the gap between medical needs and generous hearts worldwide
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3>Our Story</h3>
            <p>
              Founded in 2020, MediTrust emerged from a simple yet powerful
              vision: to create a transparent, secure platform that connects
              medical donations with those who need them most. Our founders,
              healthcare professionals and technology experts, witnessed
              firsthand the challenges faced by healthcare systems worldwide.
            </p>
            <p>
              Today, MediTrust has grown into a global network of verified
              healthcare providers, generous donors, and dedicated volunteers
              working together to make healthcare accessible to everyone,
              everywhere.
            </p>
          </div>

          <div className="about-mission">
            <h3>Our Mission</h3>
            <p>
              To democratize healthcare access by creating the world's most
              trusted platform for medical donations, ensuring that life-saving
              supplies reach those who need them most, when they need them most.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <h3>Our Impact</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h3>Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
