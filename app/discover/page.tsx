import { getData } from '../../lib/getData';
import InfrastructureFacilitiesSection from '../../components/sections/discover/InfrastructureFacilitiesSection';
import NewsHighlightsSection from '../../components/sections/discover/NewsHighlightsSection';
import FacilityIconGrid from '../../components/sections/discover/FacilityIconGrid';

export default async function Discover() {
  const discoverData = await getData();

  return (
    <main>
      <FacilityIconGrid items={discoverData.facilityNav} />

      <InfrastructureFacilitiesSection facilities={discoverData.facilities} facilityNav={discoverData.facilityNav} />

      <NewsHighlightsSection updates={discoverData.updates} />
    </main>
  );
}
