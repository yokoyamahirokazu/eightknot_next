import Link from 'next/link';
import Content from '../components/lower';
import { client } from '../../libs/client';
import Styles from '../../styles/components.module.css';
import NewsIcon from '../../public/icon/news.svg';
import FacebookIcon from '../../public/icon/facebook.svg';
import TwitterIcon from '../../public/icon/twitter.svg';
import BlankIcon from '../../public/icon/blank.svg';
import ShareIcon from '../../public/icon/share.svg';
import Moment from 'react-moment';
import Breadcrumb from '../components/breadcrumbs';
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
  body: string;
}
interface Contents {
  contents: Article[];
}

export default function NewsIndex({
  news,
  newsItem,
}: {
  news;
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
    <Content>
      <CommonMeta title={news.title} description={news.title + 'のページです。'} />

      <Breadcrumb newsTitle={news.title} />

      <section>
        <div className={Styles.section_inner}>
          <div className={Styles.content_flex}>
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
              <div className={Styles.news_post}>
                <h1>{news.title}</h1>
                <p className={Styles.publishedAt}>
                  <Moment format='YYYY.MM.DD'>{news.publishedAt}</Moment>
                  <span className={Styles.category_name}>
                    {news.category && `${news.category.name}`}
                  </span>
                </p>
                <div className={Styles.news_post_content}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${news.body}`,
                    }}
                  />
                </div>
                <div className={Styles.share_buttons}>
                  <button>
                    <ShareIcon />
                  </button>
                  <button>
                    <FacebookIcon />
                  </button>
                  <button>
                    <TwitterIcon />
                  </button>
                </div>
              </div>
              <h2 className={Styles.headline_2}>Latest Articles</h2>
              <div className={Styles.content_box}>
                <ul className={`${Styles.news_list} ${Styles.news_page}`}>
                  {newsItem.map((newsList) => (
                    <li key={newsList.id}>
                      {newsList.blankLink ? (
                        <ScrollRevealContainer move='bottom'>
                          <Link href={newsList.blankLink}>
                            <a target='_blank'>
                              <h3>
                                <BlankIcon />
                                {newsList.title}
                              </h3>
                              <p className={Styles.post_date}>
                                <Moment format='YYYY.MM.DD'>{newsList.publishedAt}</Moment>
                                <span className={Styles.category_name}>
                                  {newsList.category && `${newsList.category.name}`}
                                </span>
                              </p>
                            </a>
                          </Link>
                        </ScrollRevealContainer>
                      ) : (
                        <ScrollRevealContainer move='bottom'>
                          <Link href={`/news/${newsList.id}`}>
                            <a>
                              <h3>{newsList.title}</h3>
                              <p className={Styles.post_date}>
                                <Moment format='YYYY.MM.DD'>{newsList.publishedAt}</Moment>
                                <span className={Styles.category_name}>
                                  {newsList.category && `${newsList.category.name}`}
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
        </div>
      </section>
    </Content>
  );
}

export const getStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'news' });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data: Contents = await client.get({ endpoint: 'news', contentId: id });
  const newsData: Contents = await client.get({ endpoint: 'news' });

  return {
    props: {
      news: data,
      newsItem: newsData.contents,
    },
  };
};
