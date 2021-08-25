import Link from 'next/link';
import Content from '../components/lower';
import { client } from '../../libs/client';
import Styles from '../../styles/components.module.css';
import HomeIcon from '../../public/icon/home.svg';
import NewsIcon from '../../public/icon/news.svg';
import BlogIcon from '../../public/icon/blog.svg';
import AboutIcon from '../../public/icon/about.svg';
import ContactIcon from '../../public/icon/contact.svg';
import FacebookIcon from '../../public/icon/facebook.svg';
import TwitterIcon from '../../public/icon/twitter.svg';
import BlankIcon from '../../public/icon/blank.svg';
import TeamIcon from '../../public/icon/team.svg';
import VisionIcon from '../../public/icon/vision.svg';
import BgLogo from '../../public/icon/EightKnot_mark_bg.svg';
import Logo from '../../public/icon/EightKnot_logo_horizontal.svg';
import Eyecatch from '../../public/icon/EightKnotEyecacthBg.svg';
import Moment from 'react-moment';

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
  link: string;
  contentSnippet: string;
  image: {
    url: string;
  };
  name: string;
  post: string;
  url: string;
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
        <section>
          <div className={`${Styles.section_inner} ${Styles.news_flex}`}>
            <div className={Styles.news_flex_left}>
              <div className={Styles.headline_box}>
                <h2 className={Styles.headline}>
                  <NewsIcon />
                  <span className={Styles.headline_txt}>News</span>
                </h2>
                <p className={Styles.sub_headline}>
                  Notice from
                  <br />
                  the Our Company
                </p>
              </div>
            </div>
            <div className={Styles.news_flex_right}>
              <ul className={`${Styles.news_list} ${Styles.news_page}`}>
                {newsItem.map((news) => (
                  <li key={news.id}>
                    {news.blankLink ? (
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
                    ) : (
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
                    )}
                  </li>
                ))}
              </ul>
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
