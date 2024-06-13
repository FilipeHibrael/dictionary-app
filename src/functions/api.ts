export const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export function WORD_GET(word: string) {
  return { url: API_URL + word };
}
