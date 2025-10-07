import React from 'react';
import Head from 'next/head';
import siteData from '../../data/site.json';
import Card from '../../components/ui/card';
import Grid from '../../components/ui/grid';

const CampusLifePage: React.FC = () => {
  const activities = [
    {
      title: 'Sports',
      description: 'A wide range of sports including football, basketball, cricket, and athletics.',
      icon: '⚽',
    },
    {
      title: 'Arts & Culture',
      description: 'Opportunities in music, dance, drama, and visual arts.',
      icon: '🎭',
    },
    {
      title: 'Clubs & Societies',
      description: 'Various clubs like science, debate, eco, and literary societies.',
      icon: '📚',
    },
    {
      title: 'Community Service',
      description: 'Engaging in initiatives that benefit the local community.',
      icon: '🤝',
    },
  ];

  return (
    <>
      <Head>
        <title>Campus Life | {siteData.siteName}</title>
        <meta name="description" content={`Explore campus life and co-curricular activities at ${siteData.siteName}.`} />
      </Head>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Campus Life</h1>

        <div className="max-w-4xl mx-auto text-lg font-body space-y-6 mb-12">
          <p>
            Life at Doon International School extends far beyond the classroom. We believe in fostering a vibrant and engaging campus environment where students can explore their interests, develop new skills, and build lasting friendships. Our diverse range of co-curricular activities and state-of-the-art facilities ensure that every student finds their passion.
          </p>
          <p>
            From competitive sports to creative arts and intellectual clubs, there's something for everyone. We encourage all students to participate actively, as these experiences are crucial for holistic development and character building.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-text-dark mb-8 text-center">Activities & Facilities</h2>
        <Grid smCols={1} mdCols={2} lgCols={4} gap="gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="text-center">
              <div className="text-5xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-heading font-bold mb-2">{activity.title}</h3>
              <p className="text-text-light font-body">{activity.description}</p>
            </Card>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default CampusLifePage;