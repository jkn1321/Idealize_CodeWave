import Header from '../components/landingPage/Header';
import Hero from '../components/landingPage/Hero';
import AboutUs from '../components/landingPage/AboutUs';
import HowItWorks from '../components/landingPage/HowItWorks';
import ContactUs from '../components/landingPage/ContactUs';
import CTA from '../components/landingPage/CTA';
import Footer from '../components/landingPage/Footer';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <ContactUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
