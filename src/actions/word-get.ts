'use server';
import { WORD_GET } from '@/functions/api';

export default async function wordGet(word: string) {
  try {
    const { url } = WORD_GET(word);
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error fetching the specified word.');

    const data = await response.json();
    return { data, ok: true, error: '' };
  } catch (error) {
    if (error instanceof Error)
      return { data: null, ok: false, error: error.message };
    else
      return { data: null, ok: false, error: 'An unexpected error occurred.' };
  }
}
