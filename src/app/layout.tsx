import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dictionary App',
  description: 'Dictionary App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
