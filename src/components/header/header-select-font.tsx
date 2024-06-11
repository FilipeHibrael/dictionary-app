'use client';
import ArrowDownIcon from '@/icons/arrow-down-icon';
import styles from './header-select-font.module.css';
import React from 'react';
import { useOutsideClick } from '@/hooks/use-outside-click';

const FONT_TYPES = ['sans-serif', 'serif', 'mono'];

function formatString(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).replace('-', ' ');
}

export default function HeaderSelectFont() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [currentFont, setCurrentFont] = React.useState('sans-serif');

  React.useEffect(() => {
    FONT_TYPES.forEach((font) => document.body.classList.remove(font));

    document.body.classList.add(currentFont);
  }, [currentFont]);

  const ref = useOutsideClick(() => setOpenMenu(!openMenu));

  return (
    <div className={styles.selectContainer} ref={openMenu ? ref : null}>
      <div
        className={`${styles.select} ${openMenu ? styles.active : ''}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <p>{formatString(currentFont)}</p>
        <ArrowDownIcon />
      </div>

      <ul className={`${styles.selectMenu} ${openMenu ? styles.active : ''}`}>
        {FONT_TYPES.map((font) => (
          <li
            key={font}
            className={`${currentFont === font ? styles.active : ''}`}
            onClick={() => setCurrentFont(font)}
          >
            {formatString(font)}
          </li>
        ))}
      </ul>
    </div>
  );
}
