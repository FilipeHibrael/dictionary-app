import LogoIcon from '@/icons/logo-icon';
import HeaderSelectFont from './header-select-font';
import HeaderDarkMode from './header-dark-mode';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <LogoIcon />
      <HeaderSelectFont />
      <HeaderDarkMode />
    </header>
  );
}
