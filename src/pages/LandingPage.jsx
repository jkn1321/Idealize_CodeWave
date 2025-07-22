import Header from '../components/shared/Header';
import Hero from '../components/landingPage/Hero';
import AboutUs from '../components/landingPage/AboutUs';
import HowItWorks from '../components/landingPage/HowItWorks';
import ContactUs from '../components/landingPage/ContactUs';
import CTA from '../components/landingPage/CTA';
import Footer from '../components/shared/Footer';
import '../styles/LandingPage.css';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-page">
      <Header onNavigate={onNavigate} />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <ContactUs />
      <CTA onNavigate={onNavigate} />
      <Footer />
    </div>
  );
};

export default LandingPage;
