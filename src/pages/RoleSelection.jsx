"use client"

const RoleSelection = ({ onRoleSelect, onBack }) => {
  const roles = [
    {
      id: "patient",
      title: "Patient",
      icon: "🏥",
      description: "I need medical supplies or want to request healthcare assistance",
      features: [
        "Request medical supplies",
        "Access healthcare providers",
        "Track donation requests",
        "Secure medical records",
      ],
      color: "#3B82F6",
    },
    {
      id: "doctor",
      title: "Healthcare Provider",
      icon: "👨‍⚕️",
      description: "I'm a medical professional or healthcare facility",
      features: [
        "Receive medical donations",
        "Manage patient requests",
        "Verify medical needs",
        "Professional network access",
      ],
      color: "#10B981",
    },
    {
      id: "donor",
      title: "Donor",
      icon: "🤝",
      description: "I want to donate medical supplies or funds",
      features: [
        "Make medical donations",
        "Track donation impact",
        "Connect with healthcare providers",
        "Tax-deductible contributions",
      ],
      color: "#F59E0B",
    },
  ]

  const handleRoleClick = (roleId) => {
    console.log("Role selected:", roleId)
    if (onRoleSelect) {
      onRoleSelect(roleId)
    }
  }

  const handleBackClick = () => {
    console.log("Back button clicked")
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="role-selection-page">
      <div className="role-selection-container">
        <div className="role-header">
          <button className="back-button" onClick={handleBackClick}>
            ← Back to Home
          </button>

          <div className="header-content">
            <div className="brand-section">
              <h1>MediTrust</h1>
              <p>Making Healthcare Accessible</p>
            </div>

            <div className="selection-intro">
              <h2>Join Our Healthcare Community</h2>
              <p>Choose your role to get started with MediTrust and help us make healthcare accessible for everyone.</p>
            </div>
          </div>
        </div>

        <div className="roles-grid">
          {roles.map((role) => (
            <div
              key={role.id}
              className="role-card"
              onClick={() => handleRoleClick(role.id)}
              style={{ "--role-color": role.color }}
            >
              <div className="role-icon" style={{ backgroundColor: `${role.color}20` }}>
                <span style={{ color: role.color }}>{role.icon}</span>
              </div>

              <div className="role-content">
                <h3 style={{ color: role.color }}>{role.title}</h3>
                <p className="role-description">{role.description}</p>

                <ul className="role-features">
                  {role.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check" style={{ color: role.color }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="role-select-btn"
                  style={{
                    backgroundColor: role.color,
                    borderColor: role.color,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRoleClick(role.id)
                  }}
                >
                  Sign Up as {role.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="role-footer">
          <p>
            Already have an account?
            <a href="#login" className="login-link">
              {" "}
              Sign in here
            </a>
          </p>

          <div className="help-section">
            <p>
              Need help choosing?{" "}
              <a href="#contact" className="help-link">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleSelection
