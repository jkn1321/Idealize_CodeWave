'use client';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Trustworthy Medical Donations Made Simple and Secure</h1>
            <p>
              Welcome to MediTrust, where every donation is tracked, verified
              and makes a real difference in someone's life.
            </p>
            <button
              className="btn-learn-more"
              onClick={() =>
                document
                  .getElementById('how-it-works')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Learn More
            </button>
          </div>
          <div className="hero-illustration">
            <div className="illustration-container">
              <div className="donation-scene">
                <div className="person person-1">
                  <div className="person-body"></div>
                  <div className="person-head"></div>
                </div>
                <div className="person person-2">
                  <div className="person-body"></div>
                  <div className="person-head"></div>
                </div>
                <div className="donation-box">
                  <div className="box-main">DONATION</div>
                  <div className="medical-cross">+</div>
                </div>
                <div className="floating-elements">
                  <div className="coin coin-1">$</div>
                  <div className="coin coin-2">$</div>
                  <div className="heart">♥</div>
                  <div className="medical-bag"></div>
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
