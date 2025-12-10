# Implementation Plan

[Overview]
Add a new "Register Now" section containing an attractive QR code registration card with hover animations and popup modal display, positioned between the Welcome section and Discover Doon section on the homepage.

The section will feature modern card design consistent with the site's aesthetic, using the existing color palette and typography. The QR code image (qrcode.png) will be displayed as an interactive card that expands on hover and opens a full-screen popup when clicked, allowing users to scan the QR code without leaving the page.

[Types]
No new TypeScript types are required as the implementation will reuse existing string props for image sources and text content.

[Files]
Modify: app/page.tsx
Import the new RegisterNowSection component.
Add the component between WelcomeSection and DiscoverDoon in the JSX structure.

Create: components/blocks/RegisterNowSection.tsx
New React component for the full section layout with title, description text, and QR code card.
Implement hover animations using Framer Motion.
Include state management for popup modal visibility.
Use consistent styling matching WelcomeSection and DiscoverDoon patterns.

[Functions]
RegisterNowSection: React functional component that renders the section title, description paragraph, and interactive QR code card.
Props: None required, uses internal state for modal control.

handleQROpen: Function to open the QR code popup modal.
handleQRClose: Function to close the popup modal.

[Classes]
No new classes required. Implementation uses functional components with hooks.

[Dependencies]
No additional packages needed. Utilizes existing Framer Motion for hover/click animations and does not use gradients as specified.

[Testing]
Manual browser testing for hover effects, popup opening/closing, and responsive behavior on mobile (<768px) and desktop screens.
Verify QR code image loading and modal backdrop blur functionality.
Cross-browser compatibility testing in Chrome, Firefox, Safari, Edge.

[Implementation Order]
1. Create components/blocks/RegisterNowSection.tsx with section structure, QR card, and popup integration
2. Modify app/page.tsx to add RegisterNowSection component in correct position
3. Style responsive layout and test hover/click interactions across devices
4. Final responsive optimization and accessibility validation
