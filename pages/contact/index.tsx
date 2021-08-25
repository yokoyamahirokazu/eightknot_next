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

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Content>
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
            <div className={Styles.content_box_wrapper}>
              <h2 className={Styles.headline_2}>Company Overview</h2>
              <div className={Styles.content_box}>
                <p>
                  当社へのお問い合わせ、メッセージはこちらからお願いいたします。
                  <br />
                  営業時間、休業日などの都合により、回答までにお時間を頂く場合があります。
                  <br />
                  ※お問い合わせの内容によっては、回答できない場合や回答にお時間がかかる場合がありますのでご了承ください。
                  <br />
                  <span className={Styles.error}>*必須</span>
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>メールアドレス</label>
                <input
                  type='text'
                  placeholder='Email'
                  {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.Email?.type === 'required' && 'この質問は必須項目です'}
                {errors.Email?.type === 'pattern' && '形式が違うよー'}
                <label>氏名</label>
                <input
                  type='text'
                  placeholder='Full name'
                  {...register('Fullname', { required: true, maxLength: 80 })}
                />
                {errors.Fullname?.type === 'required' && 'この質問は必須項目です'}
                {errors.Fullname?.type === 'maxLength' && '80文字以内で記入してください'}
                <label>会社・団体名</label>
                <p>ご所属組織のない場合、「個人」とご記入ください。</p>
                <input type='text' placeholder='Company' {...register('Company', {})} />
                <label>電話番号</label>
                <input
                  type='tel'
                  placeholder='Mobile number'
                  {...register('Mobilenumber', { maxLength: 12 })}
                />
                {errors.Mobilenumber?.type === 'maxLength' &&
                  '12文字以内で記入してください（ハイフンは不要です）'}
                <label>お問い合わせ内容</label>
                <label htmlFor='typeA'>
                  <input
                    {...register('Type', { required: true })}
                    type='radio'
                    value='見積依頼'
                    id='typeA'
                  />
                  見積依頼
                </label>
                <label htmlFor='typeB'>
                  <input
                    {...register('Type', { required: true })}
                    type='radio'
                    value='取材依頼'
                    id='typeB'
                  />
                  取材依頼
                </label>
                <label htmlFor='typeC'>
                  <input
                    {...register('Type', { required: true })}
                    type='radio'
                    value='求人へのご応募'
                    id='typeC'
                  />
                  求人へのご応募
                </label>
                <label htmlFor='typeD'>
                  <input
                    {...register('Type', { required: true })}
                    type='radio'
                    value='その他'
                    id='typeD'
                  />
                  その他
                </label>
                {errors.Type?.type === 'required' && 'この質問は必須項目です'}
                <label>お問い合わせ詳細</label>

                <textarea {...register('Contents', { required: true })} />
                {errors.Contents?.type === 'required' && 'この質問は必須項目です'}
                <input type='submit' />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
}
