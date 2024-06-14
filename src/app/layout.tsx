import type { Metadata } from 'next';
import './globals.css';
import { TypeInconsolata, TypeInter, TypeLora } from '@/functions/fonts';
import Header from '@/components/header/header';

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
      <body className={`${fontsVariables} container`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
