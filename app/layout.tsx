import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/header';
import UnifiedFooter from '../components/layout/UnifiedFooter';
import BottomSignature from '../components/BottomSignature';
import siteData from '../data/site.json';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: siteData.siteName,
  description: siteData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <UnifiedFooter />
        <BottomSignature />
      </body>
    </html>
  );
}
