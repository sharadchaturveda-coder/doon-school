import React from 'react';
import Head from 'next/head';
import siteData from '../../data/site.json';
import disclosuresData from '../../data/disclosures.json';
import DocumentTable from '../../components/blocks/document-table';

const MandatoryDisclosurePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mandatory Disclosure | {siteData.siteName}</title>
        <meta name="description" content={`Mandatory disclosure information for ${siteData.siteName}.`} />
      </Head>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Mandatory Disclosure</h1>

        <div className="max-w-4xl mx-auto text-lg font-body space-y-6">
          <p className="mb-8">
            In compliance with regulatory requirements, Doon International School provides the following mandatory disclosure documents for public access. These documents offer transparency into our operations, affiliations, and academic policies.
          </p>

          <DocumentTable title="Official Documents" documents={disclosuresData} />

          <p className="mt-8">
            For any further information or clarification regarding these disclosures, please feel free to contact our administrative office.
          </p>
        </div>
      </section>
    </>
  );
};

export default MandatoryDisclosurePage;