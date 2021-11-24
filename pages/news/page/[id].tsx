import { GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import { Pager } from '../../../components/Pager';
import { getBlogsByFilter, getContents } from '../../../framework/blog';
import Content from '../../../components/lower';
import Styles from '../../../styles/components.module.css';
import BlankIcon from '../../../public/icon/blank.svg';
import Moment from 'react-moment';
import Breadcrumb from '../../../components/breadcrumbs';
import CommonMeta from '../../../components/CommonMeta';
import dynamic from 'next/dynamic';
const ScrollRevealContainer = dynamic(import('../../../ScrollRevealContainer'), { ssr: false });
import { useRouter } from 'next/dist/client/router';

import { BiMessageDetail } from 'react-icons/bi';

interface IBlog {
  id?: string;
  title?: string;
  category?: {
    name: string;
  };
  publishedAt?: string;
  blankLink?: string;
  thumb?: string;
  pubDate?: string;
}

type PageProps = {
  currentPage: number;
  blogs: IBlog[];
  pager: [];
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <>読み込み中</>;
  }
  return (
    <>
      <Content>
        <Breadcrumb pageTitle='News' />
        <CommonMeta title='News' description='お知らせ一覧ページです。' />

        <section>
          <div className={`${Styles.section_inner} ${Styles.news_flex}`}>
            <div className={Styles.news_flex_left}>
              <div className={Styles.headline_box}>
                <ScrollRevealContainer move='right'>
                  <h2 className={Styles.headline}>
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
              <div className={Styles.content_box_wrapper}>
                <ul className={`${Styles.news_list} ${Styles.news_page}`}>
                  {props.blogs.map((blog) => {
                    return (
                      <li key={blog.id}>
                        {blog.blankLink ? (
                          <ScrollRevealContainer move='bottom'>
                            <Link href={blog.blankLink}>
                              <a target='_blank'>
                                <h3>
                                  <BlankIcon />
                                  {blog.title}
                                </h3>
                                <p className={Styles.post_date}>
                                  <Moment format='YYYY.MM.DD'>{blog.publishedAt}</Moment>
                                  <span className={Styles.category_name}>
                                    {blog.category && `${blog.category.name}`}
                                  </span>
                                </p>
                              </a>
                            </Link>
                          </ScrollRevealContainer>
                        ) : (
                          <ScrollRevealContainer move='bottom'>
                            <Link href='/news/[id]' as={`/news/${blog.id}`}>
                              <a>
                                <h3>{blog.title}</h3>
                                <p className={Styles.post_date}>
                                  <Moment format='YYYY.MM.DD'>{blog.publishedAt}</Moment>
                                  <span className={Styles.category_name}>
                                    {blog.category && `${blog.category.name}`}
                                  </span>
                                </p>
                              </a>
                            </Link>
                          </ScrollRevealContainer>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {props.blogs.length > 0 && (
                  <ul className='pager'>
                    <Pager pager={props.pager} currentPage={props.currentPage} />
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      </Content>
    </>
  );
};

export async function getStaticPaths() {
  const limit: number = 10;
  const { pager } = await getBlogsByFilter(limit, 1);
  const paths = pager.map((page) => {
    return { params: { id: (page + 1).toString() } };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params?.id || '1';
  const { blogs, pager } = await getContents(page);
  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      pager,
    },
  };
}
export default Page;
