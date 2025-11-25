# Routing & Navigation Documentation

## Overview

The Doon International School website implements a comprehensive routing architecture using Next.js 14 App Router. The site features structured navigation with both primary and secondary pages, supporting the school's information architecture and user experience needs.

## Current Route Structure

### App Router Implementation

Next.js App Router provides file-system based routing:

```
app/
├── layout.tsx                      # Root layout (global)
├── page.tsx                        # Home page (/)
├── about/
│   └── page.tsx                    # About Us (/about)
├── academics/
│   └── page.tsx                    # Academics (/academics)
├── admissions/
│   └── page.tsx                    # Admissions (/admissions)
├── enquiry/
│   └── page.tsx                    # Contact/Enquiry (/enquiry)
├── infrastructure/
│   └── page.tsx                    # Infrastructure/Facilities (/infrastructure)
├── mandatory-disclosure/
│   └── page.tsx                    # Mandatory Disclosure (/mandatory-disclosure)
├── principal-vision/
│   └── page.tsx                    # Principal's Vision (/principal-vision)
├── sports/
│   └── page.tsx                    # Sports Facilities (/sports)
└── updates/
    └── page.tsx                    # News & Updates (/updates)
```

### Navigation Hierarchy

**Primary Navigation** (Header Menu):
- HOME (/)
- ABOUT (/about) - with dropdown
- MANDATORY DISCLOSURE (/mandatory-disclosure)
- ADMISSION (/admissions) - with dropdown
- DISCOVER DOON (/infrastructure) - points to infrastructure/facilities page
- ENQUIRY (external link)
- PARENT PORTAL (external link)

**Secondary Pages**:
- Academics (/academics)
- Sports (/sports)
- Principal Vision (/principal-vision)
- News & Updates (/updates)

## Navigation Architecture

### Site Navigation Data

**Source**: `data/site.json`

Current navigation configuration:

```json
{
  "navigation": [
    { "name": "HOME", "href": "/" },
    {
      "name": "ABOUT",
      "href": "/about",
      "dropdown": [
        { "name": "About Us", "href": "/about" },
        { "name": "School Facilities", "href": "/about#facilities" },
        { "name": "Principal's Message", "href": "/principal-vision" }
      ]
    },
    { "name": "MANDATORY DISCLOSURE", "href": "/mandatory-disclosure", "shortName": "MANDATORY DISCLOSURES" },
    {
      "name": "ADMISSION",
      "href": "/admissions",
      "dropdown": [
        { "name": "Admission Procedure", "href": "/admissions#procedure" },
        { "name": "Application Form", "href": "/admissions#application" },
        { "name": "Fee Rules & Regulations", "href": "/admissions#fee-rules" },
        { "name": "Boarding Fee Structure", "href": "/admissions#boarding-fee" },
        { "name": "Day School Fee Structure", "href": "/admissions#day-school-fee" },
        { "name": "Day Boarding Fee Structure", "href": "/admissions#day-boarding-fee" },
        { "name": "Withdrawal Form", "href": "/admissions#withdrawal" }
      ]
    },
    { "name": "DISCOVER DOON", "href": "/infrastructure" },
    { "name": "ENQUIRY", "href": "https://disjabalpur.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/8", "external": true },
    { "name": "PARENT PORTAL", "href": "https://disjabalpur.schoolpad.in/", "external": true }
  ]
}
```

### Header Component Features

**Location**: `components/layout/header.tsx`

**Features**:
- Responsive navigation with mobile hamburger menu
- Dropdown menus for complex sections (About, Admissions)
- Smooth scroll behavior and transparency effects
- Accessibility compliant (ARIA labels, keyboard navigation)
- Dynamic styling based on scroll position and page type

### Homepage Navigation Cards

**Component**: `DiscoverDoon` (components/blocks/discover-doon.tsx)
**Data Source**: `data/doon/discover.json`

Homepage features cards linking to major facilities:

```json
{
  "cards": [
    {
      "id": "academics",
      "title": "Academics",
      "link": "/academics"
    },
    {
      "id": "sports",
      "title": "Sports",
      "link": "/sports"
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "link": "/infrastructure"
    }
  ]
}
```

## Component Architecture

### Shared Facility Components

Multiple pages use the same facility display component:

**Location**: `components/sections/infrastructure/FacilitiesSection.tsx`

**Usage**:
- Infrastructure page: Displays school facilities with navigation
- Academics page: Shows academic programs and resources
- Sports page: Presents athletic facilities and programs

**Props**:
```typescript
interface InfrastructureFacilitiesSectionProps {
  facilities: FacilityItem[];
  facilityNav: FacilityNavItem[];
  title?: string; // Defaults to "Infrastructure Facilities"
}
```

### Data Management

**Infrastructure Page**: `data/infrastructure.json`
- Contains facility listings, navigation anchors, and descriptive content
- Identified by `facilityNav` for icon grid and `facilities` for detailed content

**Other Pages**: `data/academics.json`, `data/sports.json`
- Similar structure but content-specific to their domains
- Reusable component adapts to different page contexts

## Route Implementation Patterns

### Page Components

Each route follows consistent patterns:

```typescript
// app/infrastructure/page.tsx
import { getData } from '../../lib/getData';
import InfrastructureFacilitiesSection from '../../components/sections/infrastructure/FacilitiesSection';

export default async function Infrastructure() {
  const infrastructureData = await getData();

  return (
    <main>
      <FacilityIconGrid items={infrastructureData.facilityNav} />
      <InfrastructureFacilitiesSection
        facilities={infrastructureData.facilities}
        facilityNav={infrastructureData.facilityNav}
      />
    </main>
  );
}
```

### Data Fetching

**Location**: `lib/getData.ts`

Page-specific data functions:
- `getData()`: Returns infrastructure facilities data
- `getAcademicsData()`: Returns academics content
- `getSportsData()`: Returns sports facilities data

## Route Specific Features

### Infrastructure Page (/infrastructure)

**Original Route**: /discover (renamed November 2025)
**Purpose**: Show detailed school facilities and infrastructure
**Components**:
- `FacilityIconGrid`: Interactive navigation icons
- `InfrastructureFacilitiesSection`: Detailed facility descriptions
- `NewsHighlightsSection`: Recent announcements

### Academics Page (/academics)

**Purpose**: Present academic programs and curriculum
**Components**:
- `InfrastructureFacilitiesSection`: Shows academic facilities (title: "Academic Programs")

### Sports Page (/sports)

**Purpose**: Display athletic facilities and programs
**Components**:
- `InfrastructureFacilitiesSection`: Shows sports facilities (title: "Sports Programs")

## URL Routing Logic

### File-Based Routing

Next.js automatically maps file paths to URLs:
- `app/infrastructure/page.tsx` → `/infrastructure`
- `app/academics/page.tsx` → `/academics`
- `app/sports/page.tsx` → `/sports`

### Navigation Updates

**Recent Changes (November 2025)**:
- `/discover` route renamed to `/infrastructure`
- Page content maintained but URL updated
- Navigation label remains "DISCOVER DOON" pointing to `/infrastructure`
- Homepage infrastructure card updated to `/infrastructure`

## Route Dependencies

### Component Relationships

```
InfrastructureFacilitiesSection
├── Used by: /infrastructure, /academics, /sports pages
├── Data: Respective *.json files in data/
└── Features: Responsive layout, anchor navigation, hero sections
```

### Data Flow

```
JSON Data (data/*.json)
    ↓
Page Components (getData|getAcademicsData|getSportsData)
    ↓
InfrastructureFacilitiesSection (facilities + facilityNav props)
    ↓
Rendered UI with navigation anchors
```

## Performance Considerations

### Static Generation

All pages use static generation with JSON data:
- Fast loading times
- SEO optimized
- CDN cachable

### Component Optimization

- Shared components reduce bundle size
- Lazy loading for images
- Efficient re-renders with React patterns

## Future Route Planning

### Potential Additions

- Gallery page (`/gallery`) - Image galleries and media
- Events page (`/events`) - School events and calendar
- Careers page (`/careers`) - Teaching positions and staff info

### Route Consolidation

Consider grouping related pages:
- `/facilities/` namespace for infrastructure, academics, sports
- `/about/` namespace for vision, history, leadership

## Troubleshooting

### Common Issues

**404 on Facility Links**: Check anchor IDs match menu item anchors
**Component Import Errors**: Verify component directory structure after renames
**Navigation Mismatches**: Ensure site.json href values match actual routes
**Data Loading Issues**: Confirm JSON data exists and matches expected structure

### Debug Steps

1. Check file system matches documented routes
2. Verify component imports after directory renames
3. Test navigation links in browser dev tools
4. Confirm JSON data structure matches component expectations
