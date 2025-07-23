import React from 'react';

const BackgroundLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/image.png)',
        }}
      ></div>
      {/* Blue overlay to match the design */}
      <div className="absolute bg-gradient-to-br from-primary-50 via-white to-primary-100 z-0"></div>
     
      <div className="relative z-10">{children}</div>
      {/* Top left label */}
      <div className="absolute top-4 left-4 text-white text-sm opacity-75 z-20">
        Doctor's sign up
      </div>
    </div>
  );
};

export default BackgroundLayout;
