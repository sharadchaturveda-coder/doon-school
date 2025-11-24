# Testing Setup Guide

## Framework
This project uses:
- **Jest** as the test runner
- **React Testing Library** for component testing
- **@testing-library/jest-dom** for additional DOM assertions
- **jsdom** as the test environment

## Setup Instructions

1. Install testing dependencies:
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest
   ```

2. Run tests:
   ```bash
   npm test          # Run all tests once
   npm run test:watch  # Run tests in watch mode
   ```

## Test Structure
- Tests are located next to components in `__tests__` directories
- Test files follow the pattern: `ComponentName.test.tsx`
- Integration tests focus on user interactions rather than implementation details

## Testing Patterns
- Use `screen` queries to find elements (getByRole, getByText, etc.)
- Prefer user-centric queries over implementation details
- Test component behavior, not internal implementation
- Use `describe` blocks to group related tests
- Use `it` for individual test cases

## Example Test Structure
```typescript
describe('ComponentName', () => {
  it('renders correctly', () => {
    // Test basic rendering
  });

  it('handles user interactions', () => {
    // Test click events, form submissions, etc.
  });

  it('displays correct content', () => {
    // Test dynamic content rendering
  });
});
