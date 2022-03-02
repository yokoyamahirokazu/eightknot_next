import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Content from '../components/content';
import { client } from '../libs/client';
import Link from 'next/link';
import Styles from '../styles/components.module.css';

import BlankIcon from '../public/icon/blank.svg';

import Moment from 'react-moment';
const ScrollRevealContainer = dynamic(import('../ScrollRevealContainer'), { ssr: false });
import CommonMeta from '../components/CommonMeta';

import { FiEye, FiCpu } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';

interface Article {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  body: string;
  titleEnglish: string;
  blankLink: string;
  thumb: string;
  pubDate: string;
  link: string;
  contentSnippet: string;
  image: {
    url: string;
  };
  name: string;
  nameJP: string;
  post: string;
  profile: string;
  url: string;
  youtube: string;
  view?: string;
}
interface Contents {
  contents: Article[];
}

export default function Home({
  newsItem,
  teamItem,
  visionItem,
  techItem,
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
  teamItem: {
    id: string;
    name: string;
    post: string;
    profile: string;
    nameJP: string;
    view?: string;
    image: {
      url: string;
    };
  }[];
  visionItem: {
    id: string;
    title: string;
    titleEnglish: string;
    body: string;
    img: {
      url: string;
    };
  }[];
  techItem: {
    id: string;
    title: string;
    titleEnglish: string;
    body: string;
    img: {
      url: string;
    };
    youtube: string;
  }[];
  noteItem: {
    thumb: string;
    title: string;
    pubDate: string;
    link: string;
    contentSnippet: string;
  }[];
}): JSX.Element {
  const team_1 = teamItem.filter((output) => {
    return output.view == '1段目';
  });
  const team_2 = teamItem.filter((output) => {
    return output.view == '2段目';
  });

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
                      <BiMessageDetail />
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
                    <Link href='/news/page/1'>
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
                  <FiEye />
                  <span className={Styles.headline_txt}>Vision</span>
                </h2>
                <p className={Styles.sub_headline}>Introduce Our Vision</p>
              </div>
              <ul className={Styles.vision_flex}>
                {visionItem.map((vision) => (
                  <li key={vision.id}>
                    <div className={Styles.vision_flex_img}>
                      <ScrollRevealContainer move='bottom' size='small'>
                        <div className={`${Styles.img_circle} ${Styles.vision_img}`}>
                          <div className={Styles.img_circle_inner}>
                            <Image
                              src={vision.img.url}
                              alt={vision.title}
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
                          <span className={Styles.en}>{vision.titleEnglish}</span>
                        </ScrollRevealContainer>
                        <ScrollRevealContainer move='right'>
                          <span>{vision.title}</span>
                        </ScrollRevealContainer>
                      </h3>
                      <ScrollRevealContainer move='right'>
                        <p>{vision.body}</p>
                      </ScrollRevealContainer>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className={Styles.bg_light}>
            <div className={Styles.tech_box_headeline}>
              <div className={Styles.headline_box}>
                <h2 className={Styles.headline}>
                  <FiCpu />
                  <span className={Styles.headline_txt}>Technology</span>
                </h2>
                <p className={Styles.sub_headline}>Introduce Our Technology</p>
              </div>
            </div>

            {techItem.map((tech) => (
              <div key={tech.id}>
                {tech.youtube != null ? (
                  <ScrollRevealContainer move='bottom'>
                    <div className={Styles.tech_box_youtube}>
                      <div className={Styles.tech_box_youtube_inner}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${tech.youtube}`,
                          }}
                        />
                      </div>
                    </div>
                  </ScrollRevealContainer>
                ) : (
                  <ScrollRevealContainer move='right'>
                    <div className={Styles.tech_box}>
                      <div className={Styles.tech_box_img}>
                        <Image
                          src={tech.img.url}
                          alt={tech.title}
                          layout={'fill'}
                          objectFit={'cover'}
                          width={1440}
                          height={960}
                        />
                      </div>

                      <div className={Styles.tech_box_txt_bg}>
                        <div className={Styles.tech_box_txt_bg_circle}>
                          <Image
                            src={tech.img.url}
                            alt={tech.title}
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                        <div className={Styles.tech_box_txt}>
                          <ScrollRevealContainer move='right'>
                            <p className={Styles.tech_box_title_en}>{tech.titleEnglish}</p>
                          </ScrollRevealContainer>
                          <ScrollRevealContainer move='right'>
                            <h3>{tech.title}</h3>
                          </ScrollRevealContainer>
                          <ScrollRevealContainer move='right'>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: `${tech.body}`,
                              }}
                            />
                          </ScrollRevealContainer>
                        </div>
                      </div>
                    </div>
                  </ScrollRevealContainer>
                )}
              </div>
            ))}
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
                    <AiOutlineTeam />
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
                {team_1.map((team) => (
                  <li key={team.id}>
                    <ScrollRevealContainer move='bottom'>
                      <div className={`${Styles.img_circle} ${Styles.team_list_img}`}>
                        <div className={Styles.img_circle_inner}>
                          <Image
                            src={team.image.url}
                            alt={team.name}
                            width={240}
                            height={240}
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      </div>
                      <div className={Styles.team_list_info}>
                        <h3 className={Styles.team_list_name}>
                          {team.nameJP}
                          <span>{team.name}</span>
                        </h3>
                        <p className={Styles.team_list_post}>{team.post}</p>
                      </div>
                    </ScrollRevealContainer>
                  </li>
                ))}
              </ul>
              <ul className={Styles.team_list}>
                {team_2.map((team) => (
                  <li key={team.id}>
                    <ScrollRevealContainer move='bottom'>
                      <div className={`${Styles.img_circle} ${Styles.team_list_img}`}>
                        <div className={Styles.img_circle_inner}>
                          <Image
                            src={team.image.url}
                            alt={team.name}
                            width={240}
                            height={240}
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                      </div>
                      <div className={Styles.team_list_info}>
                        <h3 className={Styles.team_list_name}>
                          {team.nameJP}
                          <span>{team.name}</span>
                        </h3>
                        <p className={Styles.team_list_post}>{team.post}</p>
                      </div>
                    </ScrollRevealContainer>
                  </li>
                ))}
              </ul>
              <div
                className={`${Styles.view_more_box} ${Styles.center}`}
                style={{ margin: '32px 0 0 0' }}
              >
                <ScrollRevealContainer move='bottom'>
                  <Link href='/team' as='/team'>
                    <a className={`${Styles.btn} ${Styles.btn_white}`}>View More</a>
                  </Link>
                </ScrollRevealContainer>
              </div>
            </div>
          </section>
          <section>
            <div className={Styles.section_inner}>
              <div className={Styles.headline_box}>
                <h2 className={Styles.headline}>
                  <ScrollRevealContainer move='right'>
                    <HiOutlinePencil />
                  </ScrollRevealContainer>
                  <ScrollRevealContainer move='right'>
                    <span className={Styles.headline_txt}>Blog</span>
                  </ScrollRevealContainer>
                </h2>
                <ScrollRevealContainer move='right'>
                  <p className={Styles.sub_headline}>List of Blog Post</p>
                </ScrollRevealContainer>
              </div>
              <ul className={`${Styles.blog} ${Styles.blog_features}`}>
                {noteItem.slice(0, 4).map((note) => (
                  <li key={note.title}>
                    <ScrollRevealContainer>
                      <Link href={note.link}>
                        <a target='_blank'>
                          <div className={Styles.img_box}>
                            <img src={note.thumb} alt={note.title} />
                          </div>
                          <div className={Styles.blog_txt}>
                            <h3 className={Styles.blog_title}>{note.title}</h3>
                            <p className={Styles.blog_date}>
                              <Moment format='YYYY.MM.DD'>{note.pubDate}</Moment>
                            </p>
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
  const newsData: Contents = await client.get({ endpoint: 'news', queries: { limit: 4 } });
  const teamData: Contents = await client.get({ endpoint: 'team' });
  const visionData: Contents = await client.get({ endpoint: 'vision' });
  const techData: Contents = await client.get({ endpoint: 'technology' });

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
      teamItem: teamData.contents,
      visionItem: visionData.contents,
      techItem: techData.contents,
    },
  };
};
