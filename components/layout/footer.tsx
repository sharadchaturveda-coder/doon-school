import React from 'react';
import Link from 'next/link';
import siteData from '../../data/site.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-text-inverse py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-4">
            {siteData.siteName}
          </h3>
          <p className="font-body text-sm">{siteData.tagline}</p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold mb-4">Contact Us</h3>
          <address className="not-italic font-body text-sm">
            <p>{siteData.contact.address}</p>
            <p>Phone: <a href={`tel:${siteData.contact.phone}`} className="hover:underline">{siteData.contact.phone}</a></p>
            <p>Email: <a href={`mailto:${siteData.contact.email}`} className="hover:underline">{siteData.contact.email}</a></p>
          </address>
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {siteData.socialMedia.map((platform) => (
              <Link key={platform.name} href={platform.href} className="text-text-inverse hover:text-secondary transition-colors duration-200" aria-label={`Follow us on ${platform.name}`}>
                {/* Placeholder for social media icons */}
                <span className="sr-only">{platform.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with actual SVG paths for each social media icon */}
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="currentColor">{platform.name.charAt(0)}</text>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-neutral-700 text-center text-sm font-body">
        &copy; {new Date().getFullYear()} {siteData.siteName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;