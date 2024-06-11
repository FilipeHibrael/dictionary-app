import MoonIcon from '@/icons/moon-icon';
import styles from './header-dark-mode.module.css';

export default function HeaderDarkMode() {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleButton}></div>
      <MoonIcon />
    </div>
  );
}
