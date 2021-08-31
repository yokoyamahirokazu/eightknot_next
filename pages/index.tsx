import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Content from './components/content';
import { client } from '../libs/client';
import Link from 'next/link';
import Styles from '../styles/components.module.css';
import NewsIcon from '../public/icon/news.svg';
import BlogIcon from '../public/icon/blog.svg';
import BlankIcon from '../public/icon/blank.svg';
import TeamIcon from '../public/icon/team.svg';
import VisionIcon from '../public/icon/vision.svg';
import Moment from 'react-moment';
const ScrollRevealContainer = dynamic(import('../ScrollRevealContainer'), { ssr: false });
import CommonMeta from './components/CommonMeta';

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

export default function Home({
  newsItem,
  staffItem,
  noteItem,
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
  staffItem: {
    id: string;
    name: string;
    post: string;
    image: {
      url: string;
    };
  }[];
  noteItem: {
    thumb: string;
    title: string;
    pubDate: string;
    link: string;
    contentSnippet: string;
  }[];
}): JSX.Element {
  return (
    <div>
      <CommonMeta />

      <div className={Styles.eyecatch}>
        <Image
          alt='アイキャッチ'
          src='/EightKnotEyecacthBg.svg'
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'50% 100%'}
          quality={50}
        />
        <p className={Styles.catchcopy}>
          あらゆる水上モビリティを
          <br />
          ロボティクスとAIで自律化する
        </p>
      </div>
      <Content>
        <main>
          <section className={`${Styles.bg_dark} ${Styles.news_section}`}>
            <Image
              alt='bgMark'
              src='/icon/EightKnot_mark_bg.svg'
              layout={'fill'}
              objectFit={'cover'}
              objectPosition={'50% 100%'}
              quality={50}
            />
            <div className={`${Styles.news_inner} ${Styles.news_flex}`}>
              <div className={Styles.news_flex_left}>
                <div className={Styles.headline_box}>
                  <ScrollRevealContainer move='right'>
                    <h2 className={`${Styles.headline} ${Styles.white}`}>
                      <NewsIcon />
                      <span className={Styles.headline_txt}>News</span>
                    </h2>
                  </ScrollRevealContainer>
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
                <ul className={Styles.news_list}>
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
                <div className={Styles.view_more_box}>
                  <ScrollRevealContainer move='bottom'>
                    <Link href='/news'>
                      <a className={`${Styles.btn} ${Styles.btn_white}`}>View More</a>
                    </Link>
                  </ScrollRevealContainer>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={Styles.section_inner}>
              <div className={Styles.headline_box}>
                <h2 className={Styles.headline}>
                  <VisionIcon />
                  <span className={Styles.headline_txt}>Vision</span>
                </h2>
                <p className={Styles.sub_headline}>Introduce Our Vision</p>
              </div>
              <ul className={Styles.vision_flex}>
                <li>
                  <div className={Styles.vision_flex_img}>
                    <ScrollRevealContainer move='bottom' size='small'>
                      <div className={`${Styles.img_circle} ${Styles.vision_img}`}>
                        <div className={Styles.img_circle_inner}>
                          <Image
                            src='/vision_1.jpg'
                            alt='ロボティクスの技術を小型船舶に'
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      </div>
                    </ScrollRevealContainer>
                  </div>
                  <div className={Styles.vision_flex_txt}>
                    <h3 className={Styles.vision_title}>
                      <ScrollRevealContainer move='right'>
                        <span className={Styles.en}>
                          Robotics
                          <br />
                          Technology
                          <br />
                          use for
                          <br />
                          Smalls Vessel
                        </span>
                      </ScrollRevealContainer>
                      <ScrollRevealContainer move='right'>
                        <span>
                          ロボティクスの技術を
                          <br />
                          小型船舶に
                        </span>
                      </ScrollRevealContainer>
                    </h3>
                    <ScrollRevealContainer move='right'>
                      <p>
                        ロボティクスの技術を船舶に適用させ、港と港つなぐ自律操船技術を開発し、それを利用したより快適な水上モビリティを開発します。
                      </p>
                    </ScrollRevealContainer>
                  </div>
                </li>
                <li>
                  <div className={Styles.vision_flex_img}>
                    <ScrollRevealContainer move='bottom' size='small'>
                      <div className={`${Styles.img_circle} ${Styles.vision_img}`}>
                        <div className={Styles.img_circle_inner}>
                          <Image
                            src='/vision_2.jpg'
                            alt='エミッションフリー'
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      </div>
                    </ScrollRevealContainer>
                  </div>
                  <div className={Styles.vision_flex_txt}>
                    <h3 className={Styles.vision_title}>
                      <ScrollRevealContainer move='right'>
                        <span className={Styles.en}>
                          Emission
                          <br />
                          free
                        </span>
                      </ScrollRevealContainer>
                      <ScrollRevealContainer move='right'>
                        <span>エミッションフリー</span>
                      </ScrollRevealContainer>
                    </h3>
                    <ScrollRevealContainer move='right'>
                      <p>
                        ソーラーパネルを搭載したEV自律航行船を用いて物流・移動時の環境負荷を低減します。
                      </p>
                    </ScrollRevealContainer>
                  </div>
                </li>
                <li>
                  <div className={Styles.vision_flex_img}>
                    <ScrollRevealContainer move='bottom' size='small'>
                      <div className={`${Styles.img_circle} ${Styles.vision_img}`}>
                        <div className={Styles.img_circle_inner}>
                          <Image
                            src='/vision_3.jpg'
                            alt='好きなときに乗れる'
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      </div>
                    </ScrollRevealContainer>
                  </div>
                  <div className={Styles.vision_flex_txt}>
                    <h3 className={Styles.vision_title}>
                      <ScrollRevealContainer move='right'>
                        <span className={Styles.en}>
                          On demand
                          <br />
                          Vessel
                        </span>
                      </ScrollRevealContainer>
                      <ScrollRevealContainer move='right'>
                        <span>好きなときに乗れる</span>
                      </ScrollRevealContainer>
                    </h3>
                    <ScrollRevealContainer move='right'>
                      <p>
                        小型のEV自律航行船をネットワークを介して管理し、利用者が好きな時間に移動できるなどの水上移動を容易にするサービスの実現を目指します。
                      </p>
                    </ScrollRevealContainer>
                  </div>
                </li>
                <li>
                  <div className={Styles.vision_flex_img}>
                    <ScrollRevealContainer move='bottom' size='small'>
                      <div className={`${Styles.img_circle} ${Styles.vision_img}`}>
                        <div className={Styles.img_circle_inner}>
                          <Image
                            src='/vision_4.jpg'
                            alt='変わる暮らし'
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      </div>
                    </ScrollRevealContainer>
                  </div>
                  <div className={Styles.vision_flex_txt}>
                    <h3 className={Styles.vision_title}>
                      <ScrollRevealContainer move='right'>
                        <span className={Styles.en}>
                          Change in
                          <br />
                          Lifestyle
                        </span>
                      </ScrollRevealContainer>
                      <ScrollRevealContainer move='right'>
                        <span>変わる暮らし</span>
                      </ScrollRevealContainer>
                    </h3>
                    <ScrollRevealContainer move='right'>
                      <p>
                        離島ではより好きな時間に好きな場所に移動できるようになり、都心では人混みを避けて移動することができます。Withコロナ時代の新しいライフスタイルにあった移動を提案します。
                      </p>
                    </ScrollRevealContainer>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className={Styles.bg_logo}>
            <Image
              alt='bgMark'
              src='/icon/EightKnot_mark_bg.svg'
              layout={'fill'}
              objectFit={'cover'}
              objectPosition={'50% 100%'}
              quality={50}
            />
            <div className={Styles.section_inner}>
              <div className={Styles.headline_box}>
                <h2 className={`${Styles.headline} ${Styles.white}`}>
                  <ScrollRevealContainer move='right'>
                    <TeamIcon />
                  </ScrollRevealContainer>
                  <ScrollRevealContainer move='right'>
                    <span className={Styles.headline_txt}>Team</span>
                  </ScrollRevealContainer>
                </h2>
                <ScrollRevealContainer move='right'>
                  <p className={Styles.sub_headline}>
                    Introduce
                    <br />
                    Our Team Staff
                  </p>
                </ScrollRevealContainer>
              </div>

              <ul className={Styles.team_list}>
                {staffItem.map((staff) => (
                  <li key={staff.id}>
                    <ScrollRevealContainer move='bottom'>
                      <div className={`${Styles.img_circle} ${Styles.team_list_img}`}>
                        <div className={Styles.img_circle_inner}>
                          <Image
                            src={staff.image.url}
                            alt={staff.name}
                            width={240}
                            height={240}
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      </div>
                      <div className={Styles.team_list_info}>
                        <h3 className={Styles.team_list_name}>{staff.name}</h3>
                        <p className={Styles.team_list_post}>{staff.post}</p>
                      </div>
                    </ScrollRevealContainer>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            <div className={Styles.section_inner}>
              <div className={Styles.headline_box}>
                <h2 className={Styles.headline}>
                  <ScrollRevealContainer move='right'>
                    <BlogIcon />
                  </ScrollRevealContainer>
                  <ScrollRevealContainer move='right'>
                    <span className={Styles.headline_txt}>Blog</span>
                  </ScrollRevealContainer>
                </h2>
                <ScrollRevealContainer move='right'>
                  <p className={Styles.sub_headline}>List of Blog Post</p>
                </ScrollRevealContainer>
              </div>
              <ul className={Styles.blog}>
                {noteItem.slice(0, 10).map((note) => (
                  <li key={note.title}>
                    <ScrollRevealContainer>
                      <Link href={note.link}>
                        <a target='_blank'>
                          <img src={note.thumb} alt={note.title} />
                          <div className={Styles.blog_txt}>
                            <h3 className={Styles.blog_title}>{note.title}</h3>
                            <p className={Styles.blog_date}>
                              <Moment format='YYYY.MM.DD'>{note.pubDate}</Moment>
                            </p>
                            <p className={Styles.blog_descripiton}> {note.contentSnippet}</p>
                          </div>
                        </a>
                      </Link>
                    </ScrollRevealContainer>
                  </li>
                ))}
              </ul>
              <div className={`${Styles.view_more_box} ${Styles.center}`}>
                <ScrollRevealContainer move='bottom'>
                  <Link href='https://note.com/8kt/'>
                    <a target='_blank' className={Styles.btn}>
                      View More
                    </a>
                  </Link>
                </ScrollRevealContainer>
              </div>
            </div>
          </section>
        </main>
      </Content>
    </div>
  );
}

import Parser from 'rss-parser';
import { ST } from 'next/dist/shared/lib/utils';

export const getStaticProps = async () => {
  const newsData: Contents = await client.get({ endpoint: 'news' });
  const staffData: Contents = await client.get({ endpoint: 'staff' });

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
      staffItem: staffData.contents,
    },
  };
};
