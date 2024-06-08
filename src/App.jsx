import './assets/css/style.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Weather from './assets/weather';
import { Nav } from './nav';

export default function App() {
  const [weatherState, setWeatherState] = useState('sunny');
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {
    setWeatherState('rain');
  }, []);

  const handleClick = useCallback((event, condition) => {
    event.preventDefault();
    setWeatherState(condition);
  }, []);

  const navItems = useMemo(() => [
    { condition: 'rain', icon: 'icon--rainy', text: 'Rain' },
    { condition: 'drizzle', icon: 'icon--drizzle', text: 'Drizzle' },
    { condition: 'sunny', icon: 'icon--sun', text: 'Sunny' },
    { condition: 'storm', icon: 'icon--storm', text: 'Storm' },
    { condition: 'fallout', icon: 'icon--radioactive', text: 'Fallout' },
  ], []);

  return (
    <>
      <Nav navItems={navItems} handleClick={handleClick} showTime={showTime} />
      <Weather type={weatherState} />
    </>
  );
}
