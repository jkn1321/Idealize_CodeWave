import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import BackgroundLayout from '../../components/shared/BackgroundLayout';
import MainContent from '../../components/donor/MainContent';

function DonerSignUpPage() {
  return (
    <BackgroundLayout>
      <Header />
      <MainContent />
      <Footer />
    </BackgroundLayout>
  );
}

export default DonerSignUpPage;
