const HowItWorks = () => {
  const steps = [
    {
      icon: '👤',
      title: 'Register Account',
      description:
        'Create a free account as a donor or healthcare provider. Verify your identity and get access to our secure platform.',
    },
    {
      icon: '🔒',
      title: 'Secure Verification',
      description:
        'All donations are verified through our secure system. We ensure transparency and accountability.',
    },
    {
      icon: '💰',
      title: 'Medical Donations',
      description:
        'Qualified accounts can make direct donations to verified healthcare providers and medical facilities.',
    },
    {
      icon: '📋',
      title: 'Request Supplies',
      description:
        'Healthcare providers can request specific medical supplies and equipment through our platform.',
    },
    {
      icon: '❤️',
      title: 'Direct Impact',
      description:
        "See the direct impact of your donations and how they're helping save lives in real-time.",
    },
    {
      icon: '🌍',
      title: 'Global Network',
      description:
        'Connect with healthcare providers worldwide and make a global impact on medical accessibility.',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>How MediTrust Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
