// components/Navbar.js
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`py-4 px-6 shadow-md transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white' 
        : 'bg-white text-gray-800'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DevDashboard</h1>
        
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;