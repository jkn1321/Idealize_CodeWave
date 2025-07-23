import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import PatientBackgroundLayout from '../../components/shared/BackgroundLayout';
import PatientMainContent from '../../components/patient/PatientMainContent';

const PatientSignupPage = () => {
  return (
    <PatientBackgroundLayout>
      <Header />
      <PatientMainContent />
      <Footer />
    </PatientBackgroundLayout>
  );
};

export default PatientSignupPage;
