// App.jsx
import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import GithubCard from './components/GithubCard';
import WeatherCard from './components/WeatherCard';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Developer Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <GithubCard />
          <WeatherCard />
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🚀</span>
              About This Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This developer dashboard displays real-time data from various APIs including GitHub profile information and current weather data based on your location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📊</span>
                Real-time Data
              </div>
              <div className="flex items-center">
                <span className="mr-2">🌙</span>
                Dark/Light Theme
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                Responsive Design
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>Built with React, Tailwind CSS, and Public APIs</p>
        </div>
      </footer>
    </div>
  );
}

export default App;