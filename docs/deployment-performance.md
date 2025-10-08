# Deployment & Performance Guide

## Overview

This guide covers deployment strategies, performance optimization, monitoring, and maintenance procedures for the Doon International School website. The site is optimized for fast loading and excellent user experience.

## Deployment Strategy

### Platform Options

#### Vercel (Recommended)

**Advantages:**
- Optimized for Next.js applications
- Automatic deployments from Git
- Global CDN with edge functions
- Built-in performance monitoring
- Preview deployments for staging

**Setup Process:**

1. **Connect Repository**
   ```bash
   # Vercel CLI
   npm i -g vercel
   vercel login
   vercel link
   ```

2. **Configure Build Settings**
   ```json
   // vercel.json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "framework": "nextjs",
     "regions": ["bom1"] // Mumbai region for India
   }
   ```

3. **Environment Variables**
   ```bash
   # Set in Vercel dashboard or CLI
   vercel env add NEXT_PUBLIC_SITE_URL
   ```

#### Alternative Platforms

- **Netlify**: Good for static sites with form handling
- **AWS Amplify**: For complex architectures with multiple services
- **Railway/Fly.io**: Container-based deployment options

### Deployment Process

#### Automated Deployments

```bash
# Deploy to staging (from feature branch)
git push origin feature/your-feature

# Deploy to production (from main branch)
git checkout main
git merge feature/your-feature
git push origin main
```

#### Manual Deployments

```bash
# One-time deployment
vercel --prod

# Deploy specific branch
vercel --prod --branch staging
```

### Environment Strategy

#### Development Environment
```bash
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Staging Environment
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://doon-school-staging.vercel.app
```

#### Production Environment
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://doon-school.vercel.app
```

## Performance Optimization

### Core Web Vitals

#### Largest Contentful Paint (LCP)
- **Target**: < 2.5 seconds
- **Optimization**: Image optimization, critical CSS

#### First Input Delay (FID)
- **Target**: < 100 milliseconds
- **Optimization**: Minimize JavaScript execution

#### Cumulative Layout Shift (CLS)
- **Target**: < 0.1
- **Optimization**: Reserve space for dynamic content

### Image Optimization

#### Next.js Image Component

```typescript
import Image from 'next/image';

// Optimized hero image
<Image
  src="/images/hero-school.jpg"
  alt="Doon International School"
  width={1920}
  height={1080}
  priority // Above the fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j..."
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Gallery image
<Image
  src={image.url}
  alt={image.alt}
  width={400}
  height={300}
  loading="lazy"
  placeholder="blur"
/>
```

#### Image Processing Pipeline

```bash
# Convert to WebP/AVIF
npm install sharp

# Optimize images
next.config.js:
const withImages = require('next-images')
module.exports = withImages()
```

### Bundle Optimization

#### Code Splitting

```typescript
// Dynamic imports for heavy components
const GalleryGrid = dynamic(
  () => import('../components/blocks/gallery-grid'),
  {
    loading: () => <GallerySkeleton />,
  }
);

// Route-based splitting (automatic with Next.js App Router)
```

#### Bundle Analysis

```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer

# package.json scripts:
"build:analyze": "ANALYZE=true npm run build"

# Run analysis
npm run build:analyze
```

#### Bundle Size Limits

- **JavaScript**: < 120KB gzipped
- **CSS**: < 20KB gzipped
- **Images**: Optimize to WebP/AVIF

### Caching Strategy

#### Static Asset Caching

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/_next/static/:static*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

#### API Response Caching

```typescript
// For future dynamic content
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 3600, // Revalidate every hour
  };
}
```

### Runtime Performance

#### Hydration Optimization

```typescript
// Selective hydration for interactive components
'use client';

const InteractiveChart = () => {
  // Only hydrate when needed
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ChartSkeleton />;
  }

  return <ChartComponent />;
};
```

#### Memory Management

```typescript
// Cleanup event listeners
useEffect(() => {
  const handler = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handler);

  // Cleanup
  return () => window.removeEventListener('scroll', handler);
}, []);

// Avoid memory leaks in dynamic content
useEffect(() => {
  return () => {
    // Cleanup subscriptions, timers, etc.
  };
}, []);
```

## SEO & Metadata Optimization

### Page Metadata

```typescript
// app/about/page.tsx
export const metadata: Metadata = {
  title: 'About Us | Doon International School',
  description: 'Learn about our mission, vision, and 30+ years of educational excellence.',
  keywords: 'school, education, CBSE, Jabalpur, admissions',
  openGraph: {
    title: 'About Us | Doon International School',
    description: 'Learn about our mission, vision, and 30+ years of educational excellence.',
    url: '/about',
    siteName: 'Doon International School',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Doon International School campus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Doon International School',
    description: 'Learn about our mission, vision, and 30+ years of educational excellence.',
    images: ['/images/twitter-about.jpg'],
  },
};
```

### Structured Data (JSON-LD)

```typescript
// components/seo/structured-data.tsx
export function SchoolStructuredData() {
  const schoolData = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Doon International School",
    "description": "CBSE affiliated international school in Jabalpur",
    "url": "https://doonschool.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 School Road",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482001",
      "addressCountry": "IN"
    },
    "telephone": "+91-12345-67890",
    "email": "info@doonschool.com",
    "curriculum": ["CBSE"],
    "gradeRange": "Nursery to Grade 12"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolData) }}
    />
  );
}
```

### Sitemap & Robots.txt

```typescript
// app/sitemap.ts
export default function sitemap() {
  const baseUrl = 'https://doonschool.com';

  // Static pages
  const staticPages = [
    '', // home
    '/about',
    '/admissions',
    '/campus-life',
    '/contact',
  ];

  // Dynamic pages
  const newsPages = getNewsArticles().map((article) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...newsPages,
  ];
}

// app/robots.ts
export default function robots() {
  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    }],
    sitemap: 'https://doonschool.com/sitemap.xml',
  };
}
```

## Monitoring & Analytics

### Performance Monitoring

#### Vercel Analytics

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Web Vitals Monitoring

```typescript
// lib/web-vitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function reportWebVitals(metric) {
  // Send to analytics service
  console.log(metric);

  // Send to Vercel Analytics or Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      custom_map: { metric_value: metric.value }
    });
  }
}

// app/_app.tsx (pages router) or layout.tsx (app router)
import { reportWebVitals } from '../lib/web-vitals';

// In App Router, this is automatic with app/_document.tsx
```

### Error Monitoring

#### Sentry Integration

```bash
npm install @sentry/nextjs
```

```typescript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
```

```typescript
// app/layout.tsx
import './sentry.client.config';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
    </body>
  );
}
```

### User Analytics

#### Google Analytics 4

```typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Global site tag
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Event tracking
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

```typescript
// app/layout.tsx
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
```

## Security Measures

### Content Security Policy

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### Environment Variables Security

```bash
# .env.local (never commit to git)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SENTRY_DSN=your-sentry-dsn
GA_TRACKING_ID=your-ga-id

# Use in code
process.env.SENTRY_DSN // Server-side only
process.env.NEXT_PUBLIC_GA_TRACKING_ID // Client-side available
```

## Backup & Recovery

### Data Backup Strategy

#### Content Backups

```bash
#!/bin/bash
# backup-content.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backups/$DATE"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Backup data files
cp -r data/ "$BACKUP_DIR/"

# Backup public assets
cp -r public/images/ "$BACKUP_DIR/public_images/"

# Compress backup
tar -czf "${BACKUP_DIR}.tar.gz" "$BACKUP_DIR"

# Upload to cloud storage (example)
# aws s3 cp "${BACKUP_DIR}.tar.gz" s3://doon-school-backups/
```

#### Database Backups (Future)

```bash
#!/bin/bash
# When using a database, backup regularly

# PostgreSQL backup example
pg_dump -U username -h hostname database_name > backup.sql

# Upload to secure storage
scp backup.sql user@backup-server:/backups/
```

### Disaster Recovery

#### Recovery Process

1. **Identify Impact**: What systems are affected?
2. **Stop the Bleed**: Disable compromised systems
3. **Assess Damage**: Determine extent of data loss
4. **Restore from Backup**: Use latest clean backup
5. **Verify Integrity**: Test restored systems
6. **Update Systems**: Apply security patches
7. **Monitor**: Watch for additional issues

#### Recovery Time Objectives

- **Critical Systems**: < 1 hour recovery
- **Content Systems**: < 4 hours recovery
- **Full Site**: < 24 hours recovery

## Maintenance Schedule

### Daily Tasks

- Monitor error rates and performance metrics
- Check automated backups completed successfully
- Review security alerts from monitoring tools

### Weekly Tasks

```bash
# Automated maintenance script
#!/bin/bash

# Update dependencies
npm audit fix

# Run security audit
npm audit --audit-level=moderate

# Check bundle size hasn't increased significantly
npm run build:analyze

# Verify all routes are accessible
npm run test:e2e
```

### Monthly Tasks

- Full security assessment
- Dependency updates (major versions reviewed)
- Performance benchmarks
- Database optimization (when applicable)

### Quarterly Tasks

- Infrastructure review and scaling assessment
- Security penetration testing
- Full backup restoration testing
- Architecture optimization

## Troubleshooting Performance Issues

### Common Performance Problems

#### Slow Page Loads

**Symptoms:** Lighthouse scores < 90, slow FCP/LCP
**Solutions:**
1. Check image optimization settings
2. Review bundle size and splitting
3. Optimize critical CSS
4. Enable compression

```bash
# Check compression
curl -I -H "Accept-Encoding: gzip,deflate" https://doonschool.com

# Should return:
# Content-Encoding: gzip
```

#### High Layout Shift

**Symptoms:** Poor CLS score > 0.1
**Solutions:**
1. Reserve space for dynamic content
2. Use proper image aspect ratios
3. Avoid content insertion above fold
4. Use skeleton loaders

```typescript
// Reserve space for images
<div
  style={{ minHeight: 300, minWidth: 400 }}
  className="bg-gray-200 animate-pulse"
/>
```

#### Large Bundle Size

**Symptoms:** JavaScript bundle > 200KB
**Solutions:**
1. Implement code splitting
2. Remove unused dependencies
3. Lazy load non-critical components
4. Use dynamic imports

#### Memory Leaks

**Symptoms:** Increasing memory usage over time
**Solutions:**
1. Properly cleanup event listeners
2. Unsubscribe from subscriptions
3. Use React DevTools to identify leaks
4. Implement memory monitoring

### Performance Monitoring Dashboard

#### Key Metrics to Track

- **Core Web Vitals** (LCP, FID, CLS)
- **Page Load Time** (average and 95th percentile)
- **Error Rate** (4xx and 5xx responses)
- **Bundle Size** (JavaScript, CSS, images)
- **API Response Times** (when applicable)

#### Monitoring Tools

```typescript
// Custom performance monitoring
useEffect(() => {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Send to monitoring service
      console.log('Performance metric:', entry);
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint'] });

  return () => observer.disconnect();
}, []);
```

This deployment and performance guide ensures the Doon International School website maintains high performance, security, and reliability in production environments.
