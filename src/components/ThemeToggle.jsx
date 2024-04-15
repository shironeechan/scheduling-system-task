import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggleButton" onClick={toggleTheme}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;