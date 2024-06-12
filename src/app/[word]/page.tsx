import Header from '@/components/header/header';
import SearchBar from '@/components/search-bar/search-bar';

type WordParams = {
  params: {
    word: string;
  };
};

export default function WordPage({ params }: WordParams) {
  return (
    <main className="container">
      <Header />
      <SearchBar />
      <p>{params.word}</p>
    </main>
  );
}
