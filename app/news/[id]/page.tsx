import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import siteData from '../../../data/site.json';
import newsData from '../../../data/news.json';

interface NewsArticlePageProps {
  params: {
    id: string;
  };
}

const NewsArticlePage: React.FC<NewsArticlePageProps> = ({ params }) => {
  const { id } = params;
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-heading font-bold text-primary mb-4">News Article Not Found</h1>
        <p className="text-lg text-text-light">The news article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{newsItem.title} | News | {siteData.siteName}</title>
        <meta name="description" content={newsItem.excerpt} />
      </Head>
      <section className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">{newsItem.title}</h1>
          <p className="text-sm text-text-light mb-6">{newsItem.date}</p>
          <div className="prose lg:prose-xl font-body text-text-DEFAULT">
            <p>{newsItem.content}</p>
            {/* Add more content here as needed */}
          </div>
        </article>
      </section>
    </>
  );
};

export default NewsArticlePage;