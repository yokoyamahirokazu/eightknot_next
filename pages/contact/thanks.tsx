import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import Breadcrumb from '../components/breadcrumbs';
import Content from '../components/lower';
import Styles from '../../styles/components.module.css';
import ContactIcon from '../../public/icon/contact.svg';
import CommonMeta from '../components/CommonMeta';
import dynamic from 'next/dynamic';
const ScrollRevealContainer = dynamic(import('../../ScrollRevealContainer'), { ssr: false });
export default function thanks() {
  return (
    <Content>
      <CommonMeta title='Thanks' description='お問い合わせ完了ページです。' />

      <Breadcrumb pageTitle='Thanks' />

      <section>
        <div className={`${Styles.section_inner} ${Styles.news_flex}`}>
          <div className={Styles.news_flex_left}>
            <div className={Styles.headline_box}>
              <h2 className={Styles.headline}>
                {' '}
                <ScrollRevealContainer move='right'>
                  <ContactIcon />
                </ScrollRevealContainer>
                <ScrollRevealContainer move='right'>
                  <span className={Styles.headline_txt}>Contact</span>
                </ScrollRevealContainer>
              </h2>
              <ScrollRevealContainer move='right'>
                <p className={Styles.sub_headline}>
                  To Contact Us,
                  <br />
                  Please Fill in This Form
                </p>
              </ScrollRevealContainer>
            </div>
          </div>
          <div className={Styles.news_flex_right}>
            <ScrollRevealContainer move='right'>
              <h2 className={Styles.headline_2}>Thank You Very Much for Inquiring</h2>
            </ScrollRevealContainer>
            <div className={Styles.content_box}>
              <ScrollRevealContainer move='right'>
                <p>
                  この度は、お問い合わせありがとうございます。
                  <br />
                  お問い合わせ内容を確認の上、担当者より改めてご連絡いたしますので今しばらくお待ちください。
                </p>
              </ScrollRevealContainer>
              <ScrollRevealContainer move='right'>
                <div className={Styles.content_box}>
                  <Link href='/'>
                    <a className={Styles.btn}>Back to Home</a>
                  </Link>
                </div>
              </ScrollRevealContainer>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
}
