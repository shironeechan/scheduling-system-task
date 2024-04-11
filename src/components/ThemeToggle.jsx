import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle" onClick={toggleTheme}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;