import { useCallback } from 'react';

export const Nav = ({ navItems, handleClick, showTime }) => {
  const getCurrentTime = useCallback(() => {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return now.toLocaleString('kr', options);
  }, []);

  return (
    <nav className="slideshow__nav">
      {showTime && <p className="nav__element nav__element--date">{getCurrentTime()}</p>}
      <ul>
        {navItems.map(({ condition, icon, text }) => (
          <li key={condition}>
            <button className="nav-item" onClick={(e) => handleClick(e, condition)}>
              <i className={`icon ${icon}`}></i>{text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
