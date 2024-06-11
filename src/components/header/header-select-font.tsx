import ArrowDownIcon from '@/icons/arrow-down-icon';
import styles from './header-select-font.module.css';
import React from 'react';

export default function HeaderSelectFont() {
  return (
    <div className={styles.select}>
      <p>Sans serif</p>
      <ArrowDownIcon />
    </div>
  );
}
