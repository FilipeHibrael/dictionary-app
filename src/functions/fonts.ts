import { Inconsolata, Inter, Lora } from 'next/font/google';

export const TypeInconsolata = Inconsolata({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--type-inconsolata',
});

export const TypeInter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--type-inter',
});

export const TypeLora = Lora({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--type-lora',
});
