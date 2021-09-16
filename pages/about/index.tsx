import Link from 'next/link';
import Image from 'next/image';
import Content from '../components/lower';
import { client } from '../../libs/client';
import Styles from '../../styles/components.module.css';
import AboutIcon from '../../public/icon/about.svg';
import Breadcrumb from '../components/breadcrumbs';
import Head from 'next/head';
import CommonMeta from '../components/CommonMeta';
import dynamic from 'next/dynamic';
const ScrollRevealContainer = dynamic(import('../../ScrollRevealContainer'), { ssr: false });
import { FiHome, FiInfo, FiMail, FiEye, FiCpu } from 'react-icons/fi';

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

export default function About({
  partnerItem,
}: {
  partnerItem: {
    id: string;
    url: string;
    logo: {
      url: string;
    };
  }[];
}): JSX.Element {
  return (
    <>
      <Content>
        <CommonMeta title='About' description='当社についてご紹介するページです。' />

        <Breadcrumb pageTitle='About' />
        <section>
          <div className={`${Styles.section_inner} ${Styles.news_flex}`}>
            <div className={Styles.news_flex_left}>
              <div className={Styles.headline_box}>
                <ScrollRevealContainer move='right'>
                  <h2 className={Styles.headline}>
                    <FiInfo />

                    <span className={Styles.headline_txt}>About</span>
                  </h2>
                </ScrollRevealContainer>
                <ScrollRevealContainer move='right'>
                  <p className={Styles.sub_headline}>About Our Company</p>
                </ScrollRevealContainer>
              </div>
            </div>
            <div className={Styles.news_flex_right}>
              <div className={Styles.content_box_wrapper}>
                <ScrollRevealContainer move='right'>
                  <h2 className={Styles.headline_2}>Company Overview</h2>
                </ScrollRevealContainer>
                <div className={Styles.content_box}>
                  <ScrollRevealContainer move='right'>
                    <table className={Styles.overview}>
                      <tbody>
                        <tr>
                          <th>
                            <p></p>
                            <p>会社名</p>
                          </th>
                          <td>
                            <p>株式会社エイトノット</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>所在地</p>
                          </th>
                          <td>
                            <p>
                              堺マリーナオフィス(本社)
                              <br />
                              〒590-0986
                              <br />
                              大阪市堺市堺区北波止町10 <br />
                              <br />
                              東京オフィス
                              <br />
                              〒130-0003
                              <br />
                              東京都墨田区横川1-16-3 センターオブガレージ
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>設立</p>
                          </th>
                          <td>
                            <p>2021年3月8日</p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>役員</p>
                          </th>
                          <td>
                            <p>
                              代表取締役 / 共同創業者　木村 裕人
                              <br />
                              取締役 / 共同創業者　横山 智彰
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>事業概要</p>
                          </th>
                          <td>
                            <p>水上モビリティの自律航行システム開発</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ScrollRevealContainer>
                </div>
              </div>
              <div className={Styles.content_box_wrapper}>
                <ScrollRevealContainer move='right'>
                  <h2 className={Styles.headline_2}>Partners</h2>
                </ScrollRevealContainer>
                <div className={Styles.content_box}>
                  <ScrollRevealContainer move='right'>
                    <ul className={Styles.partners}>
                      {partnerItem.map((partner) => (
                        <li key={partner.id}>
                          <Link href={partner.url}>
                            <a target='_blank'>
                              <Image
                                src={partner.logo.url}
                                alt={partner.url}
                                layout={'fill'}
                                objectFit={'contain'}
                              />
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ScrollRevealContainer>
                </div>
              </div>
              <div className={Styles.content_box_wrapper}>
                <ScrollRevealContainer move='right'>
                  <h2 className={Styles.headline_2}>Access</h2>
                </ScrollRevealContainer>
                <div className={Styles.content_box}>
                  <ScrollRevealContainer move='right'>
                    <h3 className={Styles.headline_3_jp}>東京オフィス アクセス</h3>
                  </ScrollRevealContainer>
                  <ScrollRevealContainer move='right'>
                    <table className={Styles.overview}>
                      <tbody>
                        <tr>
                          <th>
                            <p></p>
                            <p>住所</p>
                          </th>
                          <td>
                            <p>
                              〒130-0003
                              <br />
                              東京都墨田区横川1-16-3 センターオブガレージ
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>最寄り駅</p>
                          </th>
                          <td>
                            <p>
                              本所吾妻橋駅 徒歩10分 (700m) (都営浅草線)
                              <br />
                              押上駅　徒歩12分 (900m) (半蔵門線 / 都営浅草線 / 京成線 /
                              東武スカイツリーライン)
                              <br />
                              とうきょうスカイツリー駅 徒歩7分 (500m) (東武スカイツリーライン){' '}
                              <br />
                              錦糸町駅　徒歩20分 (1.4km) (JR)
                              <br />
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>ご来館にあたってのお願い</p>
                          </th>
                          <td>
                            <p>
                              ＊一般用の駐車場/駐輪場はございません。
                              <br />
                              ＊電車・バス等の公共交通機関をご利用いただくか、近隣の時間貸駐車場をご利用ください。
                              <br />
                              ＊隣接する博物館とは異なる施設ですので、博物館の入口や博物館の駐車場に立ち入らないでください。
                              <br />
                              ＊特に博物館の駐車場を横切って当施設へ入館することはご遠慮ください。
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ScrollRevealContainer>
                  <ScrollRevealContainer move='right'>
                    <div className={Styles.access_img}>
                      <Image
                        src='/cog_access1023.jpg'
                        alt='アクセス'
                        layout={'fill'}
                        objectFit={'contain'}
                      />
                    </div>
                  </ScrollRevealContainer>
                </div>
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
  const partnerData: Contents = await client.get({ endpoint: 'partners' });

  return {
    props: {
      partnerItem: partnerData.contents,
    },
  };
};
