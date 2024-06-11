'use client';
import MoonIcon from '@/icons/moon-icon';
import styles from './header-dark-mode.module.css';
import React from 'react';

export default function HeaderDarkMode() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark-mode');
  }, [darkMode]);

  return (
    <div
      className={`${styles.toggleContainer} ${darkMode ? styles.active : ''}`}
    >
      <div
        className={styles.toggleButton}
        onClick={() => setDarkMode(!darkMode)}
      ></div>
      <MoonIcon />
    </div>
  );
}
