import PatientSignup from '../components/patient/signup/PatientSignup'
import "../styles/PatientSignup.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const PatientSignupPage = ({ onBack, onNavigate }) => {
  return (
    <div className="patient-signup-page">
      <Header onNavigate={onNavigate} />
      <PatientSignup onBack={onBack} />
      <Footer/>
       
    </div>
  );
};

export default PatientSignupPage;
