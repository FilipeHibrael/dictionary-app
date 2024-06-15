import wordGet from '@/actions/word-get';
import WordContentPhonetic from './word-content-phonetic';
import WordContentMeaning from './word-content-meaning';
import styles from './word-content.module.css';
import NewWindowIcon from '@/icons/new-window-icon';

export default async function WordContent({ word }: { word: string }) {
  const { data } = await wordGet(word);

  if (!data) return null;
  return (
    <section className={styles.container}>
      <WordContentPhonetic word={data[0].word} phonetics={data[0].phonetics} />

      {data.map((wordData, i) => (
        <div key={i} className={styles.meaningsContainer}>
          {wordData.meanings.map((meaning, i) => (
            <WordContentMeaning key={i} meaning={meaning} />
          ))}
          <div className={`${styles.source} font-xs`}>
            <span>Source</span>
            <a target="_blank" href={wordData.sourceUrls[0]}>
              {wordData.sourceUrls[0]}
            </a>
            <NewWindowIcon />
          </div>
        </div>
      ))}
    </section>
  );
}
