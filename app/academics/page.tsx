import React from 'react';
import Head from 'next/head';
import siteData from '../../data/site.json';
import Card from '../../components/ui/card';
import academicsData from '../../data/doon/academics.json';

const AcademicsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Academics | {siteData.siteName}</title>
        <meta name="description" content={`Academic programs and curriculum at ${siteData.siteName}.`} />
      </Head>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Academics</h1>

        <div className="max-w-4xl mx-auto text-lg font-body space-y-6 mb-12">
          <p>
            At Doon International School, we believe that learning is not confined to classrooms or textbooks. It is a journey of discovery that nurtures intellectual curiosity, moral integrity, and creative thinking. Our academic framework is designed to balance conceptual understanding with experiential learning, ensuring holistic development of each child.
          </p>
        </div>

        {academicsData.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-text-dark mb-8 text-center">{section.heading}</h2>
            <Card className="p-8">
              <p className="text-lg font-body text-text-dark leading-relaxed">{section.content}</p>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
};

export default AcademicsPage;
