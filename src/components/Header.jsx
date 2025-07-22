import React from 'react';
import { Stethoscope } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 bg-blue-600 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <Stethoscope className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">MediTrust</h1>
              <p className="text-blue-100 text-sm">Make a donation, Save a life!</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">Home</a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">About Us</a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors font-medium">Contact Us</a>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;