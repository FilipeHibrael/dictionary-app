import { Meaning } from '@/types/word-data';
import styles from './word-content-meaning.module.css';

export default function WordContentMeaning({ meaning }: { meaning: Meaning }) {
  return (
    <div>
      <h2 className={`${styles.partOfSpeech} font-lg`}>
        {meaning.partOfSpeech}
      </h2>
      <span className={`${styles.subtitle} font-md`}>Meaning</span>
      <ul className={styles.definitions}>
        {meaning.definitions.map((definition, i) => (
          <li key={i} className="font-sm">
            <p>{definition.definition}</p>
            <p style={{ color: 'var(--color-n-400)', marginTop: '8px' }}>
              {definition.example}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
