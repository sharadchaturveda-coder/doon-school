import type { Metadata } from 'next';
import '../styles/tailwind.css'; // Ensure this path is correct
import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import siteData from '../data/site.json';

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
      <body>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}