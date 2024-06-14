import wordGet from '@/actions/word-get';
import WordContentPhonetic from './word-content-phonetic';

export default async function WordContent({ word }: { word: string }) {
  const { data } = await wordGet(word);

  if (!data) return null;
  return (
    <section>
      <WordContentPhonetic word={data[0].word} phonetics={data[0].phonetics} />
    </section>
  );
}
