import Loading from '@/components/helper/loading';
import SearchBar from '@/components/search-bar/search-bar';
import WordContent from '@/components/word-content/word-content';
import { Suspense } from 'react';

type WordParams = {
  params: {
    word: string;
  };
};

export default async function WordPage({ params }: WordParams) {
  return (
    <main>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <WordContent word={params.word} />
      </Suspense>
    </main>
  );
}
