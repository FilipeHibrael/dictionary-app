import wordGet from '@/actions/word-get';
import WordContentPhonetic from './word-content-phonetic';
import WordContentMeaning from './word-content-meaning';

export default async function WordContent({ word }: { word: string }) {
  const { data } = await wordGet(word);

  if (!data) return null;
  return (
    <section>
      <WordContentPhonetic word={data[0].word} phonetics={data[0].phonetics} />

      {data.map((wordData, i) => (
        <div key={i}>
          {wordData.meanings.map((meaning, i) => (
            <WordContentMeaning key={i} meaning={meaning} />
          ))}
          <p>{wordData.sourceUrls[0]}</p>
        </div>
      ))}
    </section>
  );
}
