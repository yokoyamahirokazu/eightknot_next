import Head from 'next/head';
import Image from 'next/image';
import Content from './components/content';
import { client } from '../libs/client';
import Link from 'next/link';

export default function Home({ news, staff, note, post }) {
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
            {news.map((news) => (
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
          <ul>
            {staff.map((staff) => (
              <li key={staff.id}>
                <Image src={staff.image.url} quality={100} width={100} height={100} />
                {staff.name}
              </li>
            ))}
          </ul>

          <ul>
            {note.map((note) => (
              <li key={note.title}>
                <img src={note.thumb} alt={note.title} />
                {note.title}
                {note.pubDate}
                {note.link}
                {note.contentSnippet}
                {console.log(note)}
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
  const newsData = await client.get({ endpoint: 'news' });
  const staffData = await client.get({ endpoint: 'staff' });
  const parser = new Parser({
    customFields: {
      item: [['media:thumbnail', 'thumb', { keepArray: true }]],
    },
  });
  const rssNote = await parser.parseURL('https://note.com/8kt/rss');

  return {
    props: {
      news: newsData.contents,
      staff: staffData.contents,
      note: rssNote.items,
    },
  };
};
