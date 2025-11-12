import { getData } from '../../lib/getData';
import NewsHighlightsSection from '../../components/sections/discover/NewsHighlightsSection';
import FacilityIconGrid from '../../components/sections/discover/FacilityIconGrid';
import FacilitiesSection from '../../components/sections/discover/FacilitiesSection';

export default async function Discover() {
  const discoverData = await getData();

  return (
    <main>
      <FacilityIconGrid items={discoverData.facilityNav} />

      <FacilitiesSection facilities={discoverData.facilities} />

      <NewsHighlightsSection updates={discoverData.updates} />
    </main>
  );
}
