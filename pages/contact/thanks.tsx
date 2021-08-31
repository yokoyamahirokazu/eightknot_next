import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

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
import { ST } from 'next/dist/shared/lib/utils';
import { ContactGoogleForm } from '../../constants/ContactGoogleForm';
import axios from 'axios';

export default function thanks() {
  return (
    <Content>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <section>
        <div className={`${Styles.section_inner} ${Styles.news_flex}`}>
          <div className={Styles.news_flex_left}>
            <div className={Styles.headline_box}>
              <h2 className={Styles.headline}>
                <AboutIcon />
                <span className={Styles.headline_txt}>Contact</span>
              </h2>
              <p className={Styles.sub_headline}>
                To Contact Us,
                <br />
                Please Fill in This Form
              </p>
            </div>
          </div>
          <div className={Styles.news_flex_right}>
            <h2 className={Styles.headline_2}>Thank You Very Much for Inquiring</h2>
            <div className={Styles.content_box}>
              <p>
                この度は、お問い合わせありがとうございます。
                <br />
                お問い合わせ内容を確認の上、担当者より改めてご連絡いたしますので今しばらくお待ちください。
              </p>
              <div className={Styles.content_box}>
                <Link href='/'>
                  <a className={Styles.btn}>Back to Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
}
