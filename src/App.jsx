import { useState, useEffect } from 'react';
import './assets/css/style.css';
import Weather from './assets/weather';
import './App.css';

function App() {
  const [weatherState, setWeatherState] = useState('sunny');

  useEffect(() => {
    setWeatherState('rain');
  }, []);

  const handleClick = (event, condition) => {
    event.preventDefault();
    setWeatherState(condition);
  };

  const renderWeather = (type) => weatherState === type && <Weather type={type} />;

  const navItems = [
    { condition: 'rain', icon: 'icon--rainy', date: '10/24' },
    { condition: 'drizzle', icon: 'icon--drizzle', date: '10/25' },
    { condition: 'sunny', icon: 'icon--sun', date: '10/26' },
    { condition: 'storm', icon: 'icon--storm', date: '10/28' },
    { condition: 'fallout', icon: 'icon--radioactive', date: '10/27' },
  ];

  return (
    <>
      {renderWeather('rain')}
      {renderWeather('drizzle')}
      {renderWeather('sunny')}
      {renderWeather('storm')}
      {renderWeather('fallout')}

      <nav className="slideshow__nav">
        {navItems.map(({ condition, icon, date }) => (
          <button key={condition} className="nav-item" onClick={(e) => handleClick(e, condition)}>
            <i className={`icon ${icon}`}></i>
            <span>{date}</span>
          </button>
        ))}
      </nav>
    </>
  );
}

export default App;
