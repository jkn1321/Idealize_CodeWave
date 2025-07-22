import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundLayout from '../../components/BackgroundLayout';
import MainContent from '../../components/MainContent';

function SignUp() {
  return (
    <BackgroundLayout>
      <Header />
      <MainContent />
      <Footer />
    </BackgroundLayout>
  );
}

export default SignUp;