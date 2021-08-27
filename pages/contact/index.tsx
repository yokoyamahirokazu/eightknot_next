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
            <div className={Styles.contact_form}>
              <h2 className={Styles.headline_2}>Contact Form</h2>
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
                <div className={Styles.contact_form_block}>
                  <label>
                    メールアドレス<span className={Styles.required}>*</span>
                  </label>
                  <input
                    type='text'
                    name={'email'}
                    placeholder='xxxxxxx@xxxxx.xxx'
                    {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.Email?.type === 'required' && (
                    <p className={Styles.error}>この質問は必須項目です</p>
                  )}
                  {errors.Email?.type === 'pattern' && (
                    <p className={Styles.error}>メールアドレスを入力してください</p>
                  )}
                </div>
                <div className={Styles.contact_form_block}>
                  <label>
                    氏名<span className={Styles.required}>*</span>
                  </label>
                  <input
                    type='text'
                    name={'name'}
                    placeholder='姓 名'
                    {...register('Fullname', { required: true, maxLength: 80 })}
                  />
                  {errors.Fullname?.type === 'required' && (
                    <p className={Styles.error}>この質問は必須項目です</p>
                  )}
                  {errors.Fullname?.type === 'maxLength' && (
                    <p className={Styles.error}>80文字以内で記入してください</p>
                  )}
                </div>
                <div className={Styles.contact_form_block}>
                  <label>
                    会社・団体名 <span>ご所属組織のない場合、「個人」とご記入ください。</span>
                  </label>

                  <input
                    type='text'
                    name={'company'}
                    placeholder='例）株式会社エイトノット'
                    {...register('Company', {})}
                  />
                </div>
                <div className={Styles.contact_form_block}>
                  <label>電話番号</label>
                  <input
                    type='tel'
                    name={'tel'}
                    placeholder='000-0000-0000'
                    {...register('Mobilenumber', { maxLength: 14 })}
                  />
                  {errors.Mobilenumber?.type === 'maxLength' && (
                    <p className={Styles.error}>12文字以内で記入してください</p>
                  )}
                </div>
                <div className={Styles.contact_form_block}>
                  <label>
                    お問い合わせ内容<span className={Styles.required}>*</span>
                  </label>
                  <label className={Styles.radio} htmlFor='typeA'>
                    <input
                      {...register('Type', { required: true })}
                      type='radio'
                      name={'type'}
                      value='見積依頼'
                      id='typeA'
                    />
                    見積依頼
                  </label>
                  <label className={Styles.radio} htmlFor='typeB'>
                    <input
                      {...register('Type', { required: true })}
                      type='radio'
                      name={'type'}
                      value='取材依頼'
                      id='typeB'
                    />
                    取材依頼
                  </label>
                  <label className={Styles.radio} htmlFor='typeC'>
                    <input
                      {...register('Type', { required: true })}
                      type='radio'
                      name={'type'}
                      value='求人へのご応募'
                      id='typeC'
                    />
                    求人へのご応募
                  </label>
                  <div className={Styles.typeother}>
                    <label className={Styles.radio} htmlFor='typeD'>
                      <input
                        {...register('Type', { required: true })}
                        type='radio'
                        name={'type'}
                        value='その他'
                        id='typeD'
                      />
                      その他
                    </label>
                    <input
                      type='text'
                      name={'typeother'}
                      placeholder=''
                      {...register('other', { maxLength: 80 })}
                    />
                  </div>

                  {errors.Type?.type === 'required' && (
                    <p className={Styles.error}>この質問は必須項目です</p>
                  )}
                </div>
                <div className={Styles.contact_form_block}>
                  <label>
                    お問い合わせ詳細<span className={Styles.required}>*</span>
                  </label>

                  <textarea name={'body'} {...register('Contents', { required: true })} />
                  {errors.Contents?.type === 'required' && (
                    <p className={Styles.error}>この質問は必須項目です</p>
                  )}
                </div>
                <button className={`${Styles.btn} ${Styles.submit}`} type={'submit'}>
                  送信する
                </button>{' '}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
}

const onSubmit = (values) => {
  // ReactHookFormは、hundleSubmitに渡した関数に、
  // registerを利用して登録した各Inputの値をObjectとして渡されてくる。
  // values.nameやvalues.genderと呼び出せる。便利ですね！

  const GOOGLE_FORM_ACTION = ContactGoogleForm.action;
  // CORS対策は必須

  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

  // PostのParm生成
  const submitParams = new FormData();
  submitParams.append(ContactGoogleForm.email, values.email);
  submitParams.append(ContactGoogleForm.name, values.name);
  submitParams.append(ContactGoogleForm.company, values.company);
  submitParams.append(ContactGoogleForm.tel, values.tel);
  submitParams.append(ContactGoogleForm.type, values.type);
  submitParams.append(ContactGoogleForm.typeother, values.typeother);
  submitParams.append(ContactGoogleForm.body, values.body);

  axios
    .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
    .then(() => {
      window.location.href = '/contact/thanks'; // 成功時
    })
    .catch((error) => {
      console.log(error); // 失敗時
    });
};
