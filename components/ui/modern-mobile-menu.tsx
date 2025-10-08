'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Building, Users, Phone } from 'lucide-react';
import siteData from '../../data/site.json';

interface ModernMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialIcons: Record<string, string> = {
  Facebook: `<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>`,
  Instagram: `<defs><linearGradient id="a" x1="0%" y1="100%"><stop offset="0%" stop-color="#FFC107"/><stop offset="100%" stop-color="#F44336"/><stop offset="100%" stop-color="#9C27B0"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#a)"/>`,
  Twitter: `<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>`,
};

const navigationItems = [
  {
    name: 'About',
    href: '/about',
    icon: Building,
    color: '#1f4f8b',
    description: 'Learn more about our school'
  },
  {
    name: 'Facilities',
    href: '/facilities',
    icon: Building,
    color: '#2563eb',
    description: 'Explore our world-class facilities'
  },
  {
    name: 'Admissions',
    href: '/admissions',
    icon: Users,
    color: '#3b82f6',
    description: 'Join our community'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
    color: '#60a5fa',
    description: 'Get in touch with us'
  }
];

export const ModernMobileMenu: React.FC<ModernMobileMenuProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-black/5 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 inset-y-8 z-50 flex items-start justify-center pt-8"
            style={{ filter: 'blur(0px)' }}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-8 w-full max-w-md mx-auto shadow-2xl border border-white/20"
              style={{ filter: 'blur(0px)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-xl font-heading font-bold text-primary">Navigate</h2>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={onClose}
                  className="group p-3 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                >
                  <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Navigation Cards */}
              <div className="space-y-4 flex-1">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-white to-slate-50 p-6 border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`
                          }}
                        />

                        <div className="relative flex items-center space-x-4">
                          <motion.div
                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${item.color}15` }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <IconComponent
                              className="h-6 w-6"
                              style={{ color: item.color }}
                            />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground group-hover:text-slate-600 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <motion.div
                          className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: item.color }}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="mt-8 pt-6 border-t border-slate-200/60"
              >
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex space-x-3">
                    {siteData.socialMedia.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-white"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: socialIcons[social.name] || '' }}></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModernMobileMenu;
