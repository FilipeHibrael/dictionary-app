'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './word-content-synonyms.module.css';

type TypeParams = {
  synonyms?: boolean;
  wordList: string[];
};

export default function WordContentSynonyms({
  synonyms,
  wordList,
}: TypeParams) {
  const router = useRouter();

  const handleWordClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const word = target.getAttribute('value');
    if (word) {
      const formatWord = word.trim().replace(' ', '-').toLowerCase();
      if (formatWord) router.push('/' + formatWord);
    }
  };

  return (
    <div className={styles.container}>
      <p className="font-sm" style={{ color: 'var(--color-n-400)' }}>
        {synonyms ? 'Synonyms' : 'Antonyms'}
      </p>
      <ul className={`${styles.wordList} font-xs`} onClick={handleWordClick}>
        {wordList.map((wordItem, i) => (
          <li key={i} value={wordItem}>
            {wordItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
