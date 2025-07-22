import React from 'react';

const BackgroundLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/image.png)'
        }}
      ></div>
      
      {/* Blue overlay to match the design */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-blue-600/85 to-blue-700/80"></div>

      {children}

      {/* Top left label */}
      <div className="absolute top-4 left-4 text-white text-sm opacity-75 z-20">
        Doctor's sign up
      </div>
    </div>
  );
};

export default BackgroundLayout;