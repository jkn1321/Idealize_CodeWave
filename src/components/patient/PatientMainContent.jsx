import React from 'react';
import PatientRegistrationForm from './PatientRegistrationForm';

const PatientMainContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-6 py-12">
      <div className="flex justify-center">
        <PatientRegistrationForm />
      </div>
    </div>
  );
};

export default PatientMainContent;
