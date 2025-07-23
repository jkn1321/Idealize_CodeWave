import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    allergies: '',
    currentMedications: '',
    insuranceProvider: '',
    policyNumber: '',
    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
      alert('Please agree to the terms and privacy policy to continue.');
      return;
    }

    console.log('Patient signup data:', formData);
    alert(
      'Account created successfully! Please check your email for verification.'
    );
  };

  const handleBackClick = () => {
    console.log('Back to role selection clicked from patient signup');
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Panel - Illustration */}
        <div className="signup-left">
          <div className="illustration-content">
            <div className="brand-section">
              <h2>MediTrust</h2>
              <p>Join Our Healthcare Community</p>
            </div>

            <div className="healthcare-illustration">
              <div className="medical-scene">
                <div className="doctor-figure">
                  <div className="doctor-head"></div>
                  <div className="doctor-body"></div>
                  <div className="stethoscope"></div>
                </div>

                <div className="patient-figure">
                  <div className="patient-head"></div>
                  <div className="patient-body"></div>
                </div>

                <div className="medical-elements">
                  <div className="heart-rate">
                    <div className="heart">♥</div>
                    <div className="pulse-line"></div>
                  </div>

                  <div className="medical-cross">
                    <div className="cross-vertical"></div>
                    <div className="cross-horizontal"></div>
                  </div>

                  <div className="pills">
                    <div className="pill pill-1"></div>
                    <div className="pill pill-2"></div>
                  </div>

                  <div className="clipboard">
                    <div className="clipboard-body"></div>
                    <div className="clipboard-clip"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">🏥</span>
                <span>Access to verified healthcare providers</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💊</span>
                <span>Request essential medical supplies</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🔒</span>
                <span>Secure and confidential platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Signup Form */}
        <div className="signup-right">
          <div className="form-container">
            <div className="form-header">
              <button className="back-button-form" onClick={handleBackClick}>
                ← Back to Role Selection
              </button>
              <h1>Create Patient Account</h1>
              <p>Join thousands of patients accessing quality healthcare</p>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      <span className="input-icon">👤</span>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">
                      <span className="input-icon">👤</span>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <span className="input-icon">📧</span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <span className="input-icon">📱</span>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateOfBirth">
                      <span className="input-icon">📅</span>
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">
                    <span className="input-icon">⚧</span>
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Address Information */}
              <div className="form-section">
                <h3>Address Information</h3>

                <div className="form-group">
                  <label htmlFor="address">
                    <span className="input-icon">🏠</span>
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your street address"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">
                      <span className="input-icon">🏙️</span>
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Enter your city"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">
                      <span className="input-icon">🗺️</span>
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="Enter your state"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="zipCode">
                      <span className="input-icon">📮</span>
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="form-section">
                <h3>Emergency Contact</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="emergencyContact">
                      <span className="input-icon">🚨</span>
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      required
                      placeholder="Enter emergency contact name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="emergencyPhone">
                      <span className="input-icon">📞</span>
                      Emergency Phone
                    </label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="form-section">
                <h3>Medical Information</h3>

                <div className="form-group">
                  <label htmlFor="medicalConditions">
                    <span className="input-icon">🏥</span>
                    Current Medical Conditions
                  </label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows="3"
                    placeholder="List any current medical conditions (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="allergies">
                    <span className="input-icon">⚠️</span>
                    Allergies
                  </label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    rows="2"
                    placeholder="List any known allergies (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="currentMedications">
                    <span className="input-icon">💊</span>
                    Current Medications
                  </label>
                  <textarea
                    id="currentMedications"
                    name="currentMedications"
                    value={formData.currentMedications}
                    onChange={handleChange}
                    rows="3"
                    placeholder="List current medications and dosages (optional)"
                  />
                </div>
              </div>

              {/* Insurance Information */}
              <div className="form-section">
                <h3>Insurance Information</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="insuranceProvider">
                      <span className="input-icon">🛡️</span>
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      id="insuranceProvider"
                      name="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleChange}
                      placeholder="Enter insurance provider (optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="policyNumber">
                      <span className="input-icon">🔢</span>
                      Policy Number
                    </label>
                    <input
                      type="text"
                      id="policyNumber"
                      name="policyNumber"
                      value={formData.policyNumber}
                      onChange={handleChange}
                      placeholder="Enter policy number (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Account Security */}
              <div className="form-section">
                <h3>Account Security</h3>

                <div className="form-group">
                  <label htmlFor="password">
                    <span className="input-icon">🔒</span>
                    Password
                  </label>
                  <div className="password-input">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <span className="input-icon">🔒</span>
                    Confirm Password
                  </label>
                  <div className="password-input">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="form-section">
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                    />
                    <span className="checkmark"></span>I agree to the{' '}
                    <a href="#terms" className="form-link">
                      Terms of Service
                    </a>
                  </label>
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleChange}
                      required
                    />
                    <span className="checkmark"></span>I agree to the{' '}
                    <a href="#privacy" className="form-link">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Create Patient Account
              </button>

              <div className="form-footer">
                <p>
                  Already have an account?{' '}
                  <a href="#login" className="form-link">
                    Sign in here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSignup;
