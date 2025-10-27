Developer Dashboard: A well built responsive and interactive developer dashboard displaying a github profile and current weather condition that is fetching from APIs 

APIs used:
Github: 'https://api.github.com/users/Deborah-teta'
Current-weather-condition: 'https://wttr.in/$%7Blat%7D,$%7Blon%7D?format=j1'

Technologies used
-React
-Tilwindcss
-FetchAPI method

Setup Instructions:
step1; Create a github repository on the github account
step2; cloned the repository using gitdesktop 
step3; opened it in Vs code
step4; created an application using vite : npm create vite@latest developer-app -- --template react
step5; Installed tailwindcss V4 dependencies: npm install -D tailwindcss postcss autoprefixer 
step6; configured tailwindcss in index.css and app.css and viteconfig.js files
step7; created a project structure, started building my app and commited my changes.
step8; run to see the outpu using : npm run dev

project strucuture:
developer-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── GithubCard.jsx
│   │   ├── WeatherCard.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── ThemeProvider.jsx
│   ├── hooks/
│   │   ├── useGithub.js
│   │   └── useWeather.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md





