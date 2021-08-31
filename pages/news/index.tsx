import Link from 'next/link';
import Content from '../components/lower';
import { client } from '../../libs/client';
import Styles from '../../styles/components.module.css';
import NewsIcon from '../../public/icon/news.svg';
import BlankIcon from '../../public/icon/blank.svg';
import Moment from 'react-moment';
import Breadcrumb from '../components/breadcrumbs';
import Head from 'next/head';
import CommonMeta from '../components/CommonMeta';
import dynamic from 'next/dynamic';
const ScrollRevealContainer = dynamic(import('../../ScrollRevealContainer'), { ssr: false });

interface Article {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  blankLink: string;
  thumb: string;
  pubDate: string;
}
interface Contents {
  contents: Article[];
}

export default function NewsIndex({
  newsItem,
}: {
  newsItem: {
    id: string;
    title: string;
    category: {
      name: string;
    };
    publishedAt: string;
    blankLink: string;
  }[];
}): JSX.Element {
  return (
    <>
      <Content>
        <Breadcrumb pageTitle='News' />
        <CommonMeta title='News' description='お知らせ一覧ページです。' />

        <section>
          <div className={`${Styles.section_inner} ${Styles.news_flex}`}>
            <div className={Styles.news_flex_left}>
              <div className={Styles.headline_box}>
                <h2 className={Styles.headline}>
                  <ScrollRevealContainer move='right'>
                    <NewsIcon />
                  </ScrollRevealContainer>
                  <ScrollRevealContainer move='right'>
                    <span className={Styles.headline_txt}>News</span>
                  </ScrollRevealContainer>
                </h2>
                <ScrollRevealContainer move='right'>
                  <p className={Styles.sub_headline}>
                    Notice from
                    <br />
                    the Our Company
                  </p>
                </ScrollRevealContainer>
              </div>
            </div>
            <div className={Styles.news_flex_right}>
              <div className={Styles.content_box_wrapper}>
                <ul className={`${Styles.news_list} ${Styles.news_page}`}>
                  {newsItem.map((news) => (
                    <li key={news.id}>
                      {news.blankLink ? (
                        <ScrollRevealContainer move='bottom'>
                          <Link href={news.blankLink}>
                            <a target='_blank'>
                              <h3>
                                <BlankIcon />
                                {news.title}
                              </h3>
                              <p className={Styles.post_date}>
                                <Moment format='YYYY.MM.DD'>{news.publishedAt}</Moment>
                                <span className={Styles.category_name}>
                                  {news.category && `${news.category.name}`}
                                </span>
                              </p>
                            </a>
                          </Link>
                        </ScrollRevealContainer>
                      ) : (
                        <ScrollRevealContainer move='bottom'>
                          <Link href={`/news/${news.id}`}>
                            <a>
                              <h3>{news.title}</h3>
                              <p className={Styles.post_date}>
                                <Moment format='YYYY.MM.DD'>{news.publishedAt}</Moment>
                                <span className={Styles.category_name}>
                                  {news.category && `${news.category.name}`}
                                </span>
                              </p>
                            </a>
                          </Link>
                        </ScrollRevealContainer>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </>
  );
}

import Parser from 'rss-parser';

export const getStaticProps = async () => {
  const newsData: Contents = await client.get({ endpoint: 'news' });

  return {
    props: {
      newsItem: newsData.contents,
    },
  };
};
