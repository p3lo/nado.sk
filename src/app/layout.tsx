import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autoškola Naďo',
  description:
    'Autoškola Naďo - profesionálna autoškola s dlhoročnou tradíciou. Ponúkame výučbu vodičských preukazov všetkých kategórií. Kontaktujte nás ešte dnes a získajte svoj vodičský preukaz s nami!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>{children}</body>
    </html>
  );
}
