export type Phonetic = {
  text?: string;
  audio?: string;
};

export type Definition = {
  definition?: string;
  example?: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
};

export type WordData = {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
};
