'use client';
import SearchIcon from '@/icons/search-icon';
import styles from './search-bar.module.css';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [word, setWord] = React.useState('');
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formatWord = word.trim().replace(' ', '-').toLowerCase();
    if (formatWord) router.push('/' + formatWord);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="word" hidden>
        Word
      </label>
      <input
        className={styles.input}
        name="word"
        id="word"
        type="text"
        placeholder="Search for any word..."
        required
        onChange={(event) => setWord(event.target.value)}
      />

      <button className={styles.searchIcon} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
