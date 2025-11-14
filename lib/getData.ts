/**
 * @fileoverview Data fetching utilities for Doon International School
 * @description Provides centralized data access functions for static JSON data
 * @author Doon International School Development Team
 */

import discoverData from '../data/discover.json';

/**
 * Fetches discover page data from static JSON file
 *
 * This function provides a centralized way to access discover page content,
 * including facility navigation, facility details, updates, and other
 * discover-related information used throughout the application.
 *
 * Data includes:
 * - facilityNav: Navigation items for facilities
 * - facilities: Detailed facility information
 * - updates: Latest news and announcements
 *
 * @returns {Promise<any>} Promise resolving to discover page data object
 *
 * @example
 * ```typescript
 * const data = await getData();
 * console.log(data.facilityNav); // Array of facility navigation items
 * console.log(data.facilities); // Array of facility details
 * ```
 */
export async function getData(): Promise<any> {
  return discoverData;
}
