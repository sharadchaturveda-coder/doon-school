import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import siteData from '../data/site.json';
import { GlobalDownloadTab } from '../components/layout/global-download-tab';

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
        <Footer />
        <GlobalDownloadTab />
      </body>
    </html>
  );
}
