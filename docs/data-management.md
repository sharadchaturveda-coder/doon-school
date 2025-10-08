# Data Management Documentation

## Overview

The Doon International School website uses a static-first approach to content management. All content is stored in JSON files in the `/data` directory, providing fast performance, version control, and easy maintenance without requiring a traditional CMS.

## Data Architecture

### Content Structure

```
data/
├── site.json           # Site configuration and navigation
├── events.json         # Campus events data
├── news.json           # News articles and announcements
├── gallery.json        # Photo and video gallery
├── disclosures.json    # Mandatory documents
├── doon/               # School-specific content
│   ├── about.json      # About page content
│   ├── academics.json  # Academic information
│   ├── campus-life.json# Campus life content
│   └── contact.json    # Contact information
```

### Static-First Benefits

- **Performance**: No database queries or API calls
- **Version Control**: Content changes tracked in Git
- **Editing**: Simple JSON edits, no complex UI
- **Deployment**: No additional infrastructure
- **Backup**: Easy file-based backups

## Data File Specifications

### site.json - Site Configuration

**Location**: `data/site.json`
**Purpose**: Global site settings and navigation structure
**Update Frequency**: Rarely (design/system changes)

```json
{
  "siteName": "Doon International School, Jabalpur",
  "tagline": "Excellence in Education",
  "navigation": [
    {
      "name": "About",
      "href": "/about",
      "dropdown": [
        { "name": "Overview", "href": "/about" },
        { "name": "Principal's Message", "href": "/about/principal-message" },
        { "name": "Historical Legacy", "href": "/about/historical-legacy" }
      ]
    }
  ],
  "contact": {
    "address": "123 School Road, Jabalpur, India",
    "phone": "+91 12345 67890",
    "email": "info@doonschool.com"
  },
  "socialMedia": [
    { "name": "Facebook", "href": "#" },
    { "name": "Twitter", "href": "#" }
  ]
}
```

### events.json - Campus Events

**Location**: `data/events.json`
**Purpose**: Event listings with scheduling and details
**Update Frequency**: Weekly (new events added)

```json
[
  {
    "id": "1",
    "title": "Annual Sports Day 2025",
    "date": "2025-02-15",
    "time": "8:00 AM - 4:00 PM",
    "location": "School Sports Complex",
    "description": "Our biggest sporting event...",
    "category": "Sports",
    "featured": true
  }
]
```

### news.json - News Articles

**Location**: `data/news.json`
**Purpose**: News articles and announcements
**Update Frequency**: Monthly (new articles added)

```json
[
  {
    "id": "1",
    "title": "New Science Laboratory Inaugurated",
    "excerpt": "State-of-the-art facility opened for students...",
    "content": "Full article content here...",
    "date": "2025-01-15",
    "author": "Principal",
    "featured": true,
    "category": "Facilities"
  }
]
```

### gallery.json - Media Gallery

**Location**: `data/gallery.json`
**Purpose**: Photo and video content for gallery pages
**Update Frequency**: Quarterly (new media added)

```json
{
  "photos": [
    {
      "id": "1",
      "title": "Annual Day 2024",
      "url": "/images/gallery/annual-day-2024.jpg",
      "thumbnail": "/images/gallery/thumbs/annual-day-2024.jpg",
      "alt": "Students performing at annual day",
      "category": "Events",
      "date": "2024-12-15"
    }
  ],
  "videos": [
    {
      "id": "1",
      "title": "School Documentary",
      "url": "/videos/school-documentary.mp4",
      "thumbnail": "/images/thumbnails/school-doc.jpg",
      "duration": "5:30",
      "description": "A look at our school facilities..."
    }
  ]
}
```

### disclosures.json - Mandatory Documents

**Location**: `data/disclosures.json`
**Purpose**: Official documents for transparency requirements
**Update Frequency**: As needed (legal requirements)

```json
[
  {
    "id": "1",
    "title": "CBSE Affiliation Certificate",
    "description": "Certificate of Affiliation with Central Board of Secondary Education",
    "documentUrl": "/documents/cbse-affiliation-certificate.pdf",
    "fileType": "PDF",
    "fileSize": "2.1 MB",
    "category": "Legal Documents"
  }
]
```

### doon/about.json - About Page Content

**Location**: `data/doon/about.json`
**Purpose**: Detailed content for the about section
**Update Frequency**: Annually (content reviews)

```json
{
  "title": "About Us",
  "slug": "about",
  "sections": [
    {
      "heading": "Our Mission",
      "content": "• Strive for excellence in academics...\n• Provide the best infrastructure..."
    },
    {
      "heading": "Our Vision",
      "content": "Modern School aims to build a community..."
    }
  ],
  "lastUpdated": "2025-10-07",
  "mergedFrom": ["ethos.json", "leaders.json", "teacher_empowerment.json"]
}
```

## Content Update Workflow

### Adding New Content

1. **Identify Data Source**: Determine which JSON file needs updating
2. **Data Structure**: Follow existing schema for consistency
3. **Validation**: Ensure required fields are present
4. **Testing**: Verify content renders correctly
5. **Commit**: Add descriptive commit message

### Example: Adding a New Event

```bash
# Edit events.json
{
  "id": "new-event-id",
  "title": "Founder's Day Celebration",
  "date": "2025-03-15",
  "time": "10:00 AM - 12:00 PM",
  "location": "School Auditorium",
  "description": "Annual celebration of our founder...",
  "category": "Cultural",
  "featured": false
}

# Commit changes
git add data/events.json
git commit -m "Add Founder's Day event for March 15, 2025"
```

### Updating Content

#### Method 1: Direct JSON Editing
```json
// Before
"title": "Old Event Title"

// After
"title": "Updated Event Title"
```

#### Method 2: Replace Entire Object
```json
// Replace entire event object
{
  "id": "1",
  "title": "Updated Title",
  "date": "2025-02-15", // Updated date
  // ... rest of fields
}
```

## Data Import Process

### From External Sources

The current data was migrated from various sources:

```plaintext
Legacy Data Sources Merged Into:
├── ethos.json → doon/about.json
├── leaders.json → doon/about.json
├── teacher_empowerment.json → doon/about.json
├── parent_collaboration.json → doon/about.json
├── community-services.json → doon/about.json
├── branches.json → doon/about.json
├── other_branches.json → doon/about.json
├── contact.json → data/site.json
└── ...additional school content
```

### Migration Checklist

- [x] Consolidate duplicate content
- [x] Standardize data structures
- [x] Add unique IDs to all records
- [x] Include metadata (dates, categories)
- [x] Validate all content renders
- [x] Update imports in components

## Component Integration

### Importing Data Files

```typescript
// Static import in pages
import siteData from '../data/site.json';
import eventsData from '../data/events.json';
import aboutData from '../data/doon/about.json';

// Usage in component
export default function Home() {
  const featuredEvents = eventsData.filter(event => event.featured);
  const siteTitle = siteData.siteName;

  return (
    <Hero title={siteTitle} />
  );
}
```

### Type Safety

All data structures follow TypeScript interfaces:

```typescript
interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  featured: boolean;
}

interface SiteData {
  siteName: string;
  tagline: string;
  navigation: NavItem[];
  contact: ContactInfo;
  socialMedia: SocialLink[];
}
```

## File Organization Best Practices

### Naming Conventions

- **Files**: kebab-case filenames (`site.json`, `events.json`)
- **Directories**: kebab-case or camelCase (`doon/`, `schoolData/`)
- **IDs**: Template-based (`event-1`, `news-2025-001`)
- **Categories**: Pascal case (`Academic`, `Cultural`, `Sports`)

### Content Organization

```plaintext
data/
├── [feature].json         # Feature-specific data
├── [entity]/              # Grouped related content
│   └── [specific].json    # Detailed content
└── legacy/                # Archived data (if needed)
```

## Future Data Management

### Planned Enhancements

#### Content Management System Integration

```typescript
// Current: Static import
import eventsData from '../data/events.json';

// Future: CMS integration
import { getEvents } from '../lib/sanity';

export async function getStaticProps() {
  const eventsData = await getEvents();
  return { props: { eventsData } };
}
```

#### API Routes for Dynamic Content

```typescript
// pages/api/events.ts
export default async function handler(req, res) {
  const events = await getEventsFromCMS();
  res.status(200).json(events);
}
```

### Content Workflow

1. **Author**: Create content in CMS
2. **Review**: School staff approves content
3. **Publish**: Content goes live automatically
4. **Analytics**: Track content performance
5. **Archive**: Old content archived but accessible

## Content Governance

### Content Owners

- **Events**: Campus Life Coordinator
- **News**: Communications Officer
- **Documents**: Administrative Head
- **Gallery**: Marketing Team
- **About Content**: Principal/Leadership

### Quality Standards

1. **Grammar**: Professional, error-free content
2. **Images**: High-quality, properly formatted
3. **Dates**: Consistent formatting (ISO 8601)
4. **Links**: Functional and updated
5. **Accessibility**: Alt text and descriptions

### Content Calendar

```plaintext
Monthly Tasks:
├── Week 1: Review upcoming events
├── Week 2: Update news and announcements
├── Week 3: Refresh gallery content
└── Week 4: Quality check and publish

Quarterly Tasks:
├── Content audit and cleanup
├── Performance review (popular content)
└── Staff training on content management
```

## Backup and Recovery

### Data Backup Strategy

```bash
# Daily backup (example script)
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "backup_$DATE.tar.gz" data/
# Upload to secure storage
```

### Version Control

All content changes tracked in Git:

```bash
# Reviewing content changes
git log --oneline --grep="content update"
git show HEAD~1:data/events.json

# Reverting problematic content
git revert [commit-hash]
```

### Recovery Process

1. **Identify issue**: What content is affected?
2. **Find backup**: Use git history or backups
3. **Restore**: Replace corrupted files
4. **Verify**: Test site functionality
5. **Notify**: Inform stakeholders if needed

## Performance Considerations

### File Size Limits

- **Individual files**: < 500KB for fast loading
- **Total data size**: < 2MB for all JSON files
- **Image sizes**: Optimize to < 100KB per image

### Loading Optimization

```typescript
// Lazy loading for large datasets
const EventList: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load events progressively
    const loadEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    };
    loadEvents();
  }, []);

  return loading ? <SkeletonLoader /> : <EventGrid events={events} />;
};
```

## Troubleshooting

### Common Issues

#### Content Not Updating
1. Check file paths in import statements
2. Verify JSON syntax with validator
3. Clear Next.js cache and restart dev server

#### Missing Images
1. Confirm image paths in JSON files
2. Check file exists in `/public` directory
3. Verify alt text for accessibility

#### Component Errors
1. Validate TypeScript interfaces match JSON structure
2. Check required fields are present in data
3. Review component prop types

#### Performance Issues
1. Large JSON files - consider splitting
2. Unused data in components - remove unnecessary props
3. Heavy images - optimize file sizes
