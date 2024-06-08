import './assets/css/style.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Weather from './assets/weather';
import { Nav } from './nav';

export default function App() {
  const [weatherState, setWeatherState] = useState('sunny');
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {
    setWeatherState('sunny');
  }, []);

  const handleClick = useCallback((event, condition) => {
    event.preventDefault();
    setWeatherState(condition);
  }, []);
  
  const navItems = useMemo(() => [
    { condition: 'sunny', icon: 'icon--sun', text: '맑음' },
    { condition: 'drizzle', icon: 'icon--drizzle', text: '이슬비' },
    { condition: 'rain', icon: 'icon--rainy', text: '비' },
    { condition: 'storm', icon: 'icon--storm', text: '폭우' },
  ], []);

  return (
    <>
      <Nav navItems={navItems} handleClick={handleClick} showTime={showTime} activeCondition={weatherState} />
      <Weather type={weatherState} />
    </>
  );
}
