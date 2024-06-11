import type { Metadata } from 'next';
import './globals.css';
import { TypeInconsolata, TypeInter, TypeLora } from '@/functions/fonts';

export const metadata: Metadata = {
  title: 'Dictionary App',
  description: 'Dictionary App',
};

const fontsVariables = `${TypeInconsolata.variable} ${TypeInter.variable} ${TypeLora.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontsVariables}>{children}</body>
    </html>
  );
}
