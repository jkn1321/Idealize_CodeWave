'use client';

const CTA = ({ onNavigate }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Join thousands of donors who have already helped save lives through
            trusted medical donations. Your contribution can change someone's
            life today.
          </p>
          <button
            className="btn-cta"
            onClick={() => {
              if (onNavigate) {
                onNavigate('role-selection');
              }
            }}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
