import React from 'react';

const PatientBackgroundLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/image.png)',
        }}
      ></div>

      {/* Blue overlay to match the doctor's theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-blue-600/85 to-blue-700/80 z-0"></div>

      <div className="relative z-10">{children}</div>

      {/* Top left label */}
      <div className="absolute top-4 left-4 text-white text-sm opacity-75 z-20">
        Patient sign up
      </div>
    </div>
  );
};

export default PatientBackgroundLayout;
