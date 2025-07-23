import React from 'react';
import RegistrationForm from './RegistrationForm';

const MainContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-6 py-12">
      <div className="flex justify-center">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default MainContent;
