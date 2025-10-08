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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary/95 to-primary/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-4 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full h-full max-w-md mx-auto shadow-2xl border border-white/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <h2 className="text-xl font-heading font-bold text-primary">Navigate</h2>
                  <p className="text-sm text-muted-foreground">Choose your path</p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
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
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
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
                transition={{ delay: 0.8, duration: 0.3 }}
                className="mt-8 pt-6 border-t border-slate-200/60"
              >
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div>
                    <div className="font-medium">Doon International School</div>
                    <div className="text-xs">Jabalpur, Madhya Pradesh</div>
                  </div>
                  <div className="flex space-x-3">
                    {siteData.socialMedia.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-white"
                      >
                        <span className="text-xs font-bold">{social.name.charAt(0)}</span>
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
