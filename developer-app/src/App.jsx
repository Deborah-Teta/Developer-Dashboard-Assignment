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