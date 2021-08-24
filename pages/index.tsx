import Head from 'next/head';
import Image from 'next/image';
import Content from './components/content';
import { client } from '../libs/client';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  publishedAt: string;
  blankLink: string;
  thumb: string;
  pubDate: string;
  link: string;
  contentSnippet: string;
}
interface Contents {
  contents: Article[];
}

export default function Home({
  newsItem,
  noteItem,
}: {
  newsItem: { id: string; title: string; publishedAt: string; blankLink: string }[];
}): JSX.Element {
  return (
    <div>
      <Head>
        <title>Eight Knot Inc.</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Content>
        <main>
          <h1>TOP PAGE</h1>
          <ul>
            {newsItem.map((news) => (
              <li key={news.id}>
                {news.blankLink ? (
                  <Link href={news.blankLink}>
                    <a target='_blank'>{news.title}</a>
                  </Link>
                ) : (
                  <Link href={`/news/${news.id}`}>
                    <a>{news.title}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* <ul>
            {staff.map((staff) => (
              <li key={staff.id}>
                <Image src={staff.image.url} quality={100} width={100} height={100} />
                {staff.name}
              </li>
            ))}
          </ul> */}

          <ul>
            {noteItem.map((note) => (
              <li key={note.title}>
                <img src={note.thumb} alt={note.title} />
                {note.title}
                {note.pubDate}
                {note.link}
                {note.contentSnippet}
              </li>
            ))}
          </ul>
        </main>
      </Content>
    </div>
  );
}

import Parser from 'rss-parser';

export const getStaticProps = async () => {
  const newsData: Contents = await client.get({ endpoint: 'news' });
  const parser = new Parser({
    customFields: {
      item: [['media:thumbnail', 'thumb', { keepArray: true }]],
    },
  });
  const rssNote = await parser.parseURL('https://note.com/8kt/rss');

  return {
    props: {
      noteItem: rssNote.items,
      newsItem: newsData.contents,
    },
  };
};
