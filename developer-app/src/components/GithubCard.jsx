import React from "react";
import {useTheme} from "../context/ThemeProvider";
import useGithub from "../hooks/useGithub";

export default function GithubCard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { data, loading, error } = useGithub();

  // Loading state
  if (loading) {
    return (
      <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-4"></div>
          <div className="flex items-center space-x-4 mb-4">
            <div className="rounded-full bg-gray-400 h-16 w-16"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-400 rounded"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white text-black'
      }`}>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🐙</span>
          GitHub Profile
        </h2>
        <div className={`p-4 rounded-lg ${
          isDark ? 'bg-red-900/50 text-red-200' : 'bg-red-50 text-red-700'
        }`}>
          <p className="font-medium">Error loading GitHub data</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  // No data state
  if (!data) {
    return (
      <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h2 className="text-xl font-bold mb-4">GitHub Profile</h2>
        <p>No data available</p>
      </div>
    );
  }

  // Success state - Render the actual data
  return (
    <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white text-black'
    }`}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">🐙</span>
        GitHub Profile
      </h2>
      
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={data.avatar_url}
          alt={`${data.login}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div>
          <h3 className="text-lg font-semibold">{data.name || data.login}</h3>
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-900'
          }`}>
            @{data.login}
          </p>
        </div>
      </div>

      {data.bio && (
        <p className={`mb-4 italic ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          "{data.bio}"
        </p>
      )}

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className={`text-center p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-400 text-black'
        }`}>
          <div className="text-lg font-bold">{data.public_repos}</div>
          <div className={`text-xs ${
            isDark ? 'text-gray-400' : 'text-gray-900'
          }`}>
            Repositories
          </div>
        </div>
        
        <div className={`text-center p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-400 text-black'
        }`}>
          <div className="text-lg font-bold">{data.followers}</div>
          <div className={`text-xs ${
            isDark ? 'text-gray-400' : 'text-gray-900'
          }`}>
            Followers
          </div>
        </div>
        
        <div className={`text-center p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-400 text-black'
        }`}>
          <div className="text-lg font-bold">{data.following}</div>
          <div className={`text-xs ${
            isDark ? 'text-gray-400' : 'text-gray-900'
          }`}>
            Following
          </div>
        </div>
      </div>

      <div className="mt-4">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            isDark
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-gray-200 hover:bg-gray-400 text-gray-900'
          }`}
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}