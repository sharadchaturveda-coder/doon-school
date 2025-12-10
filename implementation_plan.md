# Implementation Plan

[Overview]
Integrate a responsive popup modal component into the homepage that displays the popup.jpg image from public/images/, featuring a close button in the upper right corner, background blur effect, and proper mobile/desktop visibility. The modal will automatically appear on homepage load but only once per user session using sessionStorage to track display state.

The popup will overlay the entire page content, centering the image with proper responsive sizing, and include a blurred backdrop that dims the background content while active.

[Types]
No new TypeScript type definitions are required as the component will use standard boolean props for state management and handle DOM events natively. Component props will include isOpen (boolean) and onClose (function).

[Files]
Modify: app/page.tsx
Add React state management using useState for popup visibility tracking.
Implement useEffect hook for sessionStorage logic to control "show only once per session" behavior.
Pass popup visibility state and handler functions to parent layout.

Create: components/ui/popup-modal.tsx
New React component file for the modal implementation.
Include fixed positioning container with full viewport coverage.
Implement backdrop blur using CSS backdrop-filter.
Add close button with FontAwesome X icon (fa-times) in absolute positioned upper right.
Center popup.jpg image with responsive sizing constraints.
Handle click events for backdrop and close button.

Modify: app/layout.tsx
Import and render PopupModal component before main content area.
Accept props from page for visibility state and close handler.
Ensure modal renders outside header and footer but overlays all content.

[Functions]
PopupModal: React functional component that renders the modal overlay with backdrop, image container, and close button.
Accepts props: isOpen (boolean), onClose (function), children (optional).
Returns JSX with conditional rendering based on isOpen state.

handleClose: Event handler function for close button and backdrop clicks, updating parent state via onClose prop.
useEffect for handleSessionCheck: Check sessionStorage on component mount, update popup state accordingly.

[Classes]
No new class definitions required. All implementation uses functional React components with hooks.

[Dependencies]
No additional npm packages needed. Utilize existing FontAwesome icons (already installed @fortawesome/fontawesome-free), Framer Motion could be used for animations if desired, Tailwind CSS for responsive styling, and Lucide React if alternative icons needed.

[Testing]
Manual browser testing across responsive breakpoints (desktop: 1920px+, tablet: 768-1023px, mobile: <768px).
Verify popup displays on first homepage load but not on subsequent loads in same session.
Confirm close button functionality and backdrop click dismissal.
Test background blur effect rendering correctly in Chrome, Firefox, Safari, Edge.
Mobile touch interaction testing for close button accessibility.

[Implementation Order]
1. Create components/ui/popup-modal.tsx with basic modal structure, styling, and props
2. Modify app/page.tsx to add popup state management and sessionStorage logic
3. Update app/layout.tsx to integrate PopupModal component with proper prop passing
4. Style responsive layout and test cross-device functionality
5. Add animation enhancements with Framer Motion if time permits for smooth open/close transitions
6. Final responsive testing and QA validation across browsers and devices
