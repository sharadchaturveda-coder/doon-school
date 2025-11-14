/**
 * @fileoverview Root layout component for Doon International School website
 * @description Defines the global layout structure, metadata, and styling for all pages
 * @author Doon International School Development Team
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/header';
import UnifiedFooter from '../components/layout/UnifiedFooter';
import siteData from '../data/site.json';

// Configure Inter font with multiple weights for consistent typography
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

/**
 * Metadata configuration for the entire application
 * Dynamically uses site data for SEO optimization
 */
export const metadata: Metadata = {
  title: siteData.siteName,
  description: siteData.tagline,
};

/**
 * Root Layout Component
 *
 * Provides the global structure for all pages in the application:
 * - HTML document setup with proper language attribute
 * - Global font configuration (Inter)
 * - Navigation header (sticky/fixed positioning)
 * - Main content area with flex-grow for proper layout
 * - Unified footer with contact and navigation links
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to be rendered
 * @returns {JSX.Element} The root HTML structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <UnifiedFooter />
      </body>
    </html>
  );
}
