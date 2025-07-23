import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import BackgroundLayout from '../../components/Doctor/BackgroundLayout';
import MainContent from '../../components/Doctor/MainContent';

function DoctorSignUpPage() {
  return (
    <BackgroundLayout>
      <Header />
      <MainContent />
      <Footer />
    </BackgroundLayout>
  );
}

export default DoctorSignUpPage;
