import SearchIcon from '@/icons/search-icon';
import styles from './search-bar.module.css';

export default function SearchBar() {
  return (
    <form className={styles.form} action="">
      <label htmlFor="word" hidden>
        Word
      </label>
      <input
        className={styles.input}
        name="word"
        id="word"
        type="text"
        placeholder="Search for any word..."
      />

      <button className={styles.searchIcon} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
