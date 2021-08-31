import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import Router from 'next/router';

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

  const SendContent = {
    fullname:'hoge男',
    email:'',
    company:'',
    subject: 'お問い合わせ',
    honeypot: '',
    message: '',
    replyTo: '@',
    accessKey: '7d219451-de43-4589-a9ba-36d9ac4385bd',
  };

    const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = handleSubmit(async (data) => {

const result = {...SendContent, ...data};

         console.log(result);


    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(result),
        headers: {'Content-Type': 'application/json'},
      });

      const json = await res.json();

      if (json.success) {
        //成功したらsuccessページに飛ぶ
        Router.push('/contact/thanks');
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      });
    }
  })



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
              <form  action="https://api.staticforms.xyz/submit"
          method="post"
           onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.contact_form_block}>
                  <label>
                    メールアドレス<span className={Styles.required}>*</span>
                  </label>
                  <input
                    type='text'
                    name="email"
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
                   name="name"

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
                    name='company'
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
                      type='radio'
                      {...register("bodytype", { required: true })}
                      value='見積依頼'
                      id='typeA'
                    />
                    見積依頼
                  </label>
                  <label className={Styles.radio} htmlFor='typeB'>
                    <input
                      type='radio'
                                            {...register("bodytype", { required: true })}
                      value='取材依頼'
                      id='typeB'
                    />
                    取材依頼
                  </label>
                  <label className={Styles.radio} htmlFor='typeC'>
                    <input
                      type='radio'
                                            {...register("bodytype", { required: true })}

                      value='求人へのご応募'
                      id='typeC'
                    />
                    求人へのご応募
                  </label>
                  <div className={Styles.typeother}>
                    <label className={Styles.radio} htmlFor='typeD'>
                      <input
                        type='radio'
                                              {...register("bodytype", { required: true })}
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
      {errors.bodytype?.type === 'required' && (
                    <p className={Styles.error}>この質問は必須項目です</p>
                  )}

                </div>
                <div className={Styles.contact_form_block}>
                  <label>
                    お問い合わせ詳細<span className={Styles.required}>*</span>
                  </label>

                  <textarea name='body'
 {...register('Body', { required: true })} />
                  {errors.Body?.type === 'required' && (
                    <p className={Styles.error}>この質問は必須項目です</p>
                  )}

                </div>

          <div>

          </div>
                <button className={`${Styles.btn} ${Styles.submit}`} type={'submit'}>
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
}
