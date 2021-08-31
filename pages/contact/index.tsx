import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Breadcrumb from '../components/breadcrumbs';
import Content from '../components/lower';
import Styles from '../../styles/components.module.css';
import { ContactGoogleForm } from '../../constants/ContactGoogleForm';
import axios from 'axios';
import CommonMeta from '../components/CommonMeta';
import ContactIcon from '../../public/icon/contact.svg';
import dynamic from 'next/dynamic';
const ScrollRevealContainer = dynamic(import('../../ScrollRevealContainer'), { ssr: false });

export default function Google() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <Content>
      <CommonMeta title='Contact' description='お問い合わせページです。' />

      <Breadcrumb pageTitle='Contact' />

      <section>
        <div className={`${Styles.section_inner} ${Styles.news_flex}`}>
          <div className={Styles.news_flex_left}>
            <div className={Styles.headline_box}>
              <h2 className={Styles.headline}>
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
            <div className={Styles.contact_form}>
              <ScrollRevealContainer move='right'>
                <h2 className={Styles.headline_2}>Contact Form</h2>
              </ScrollRevealContainer>
              <div className={Styles.content_box}>
                <ScrollRevealContainer move='right'>
                  <p>
                    当社へのお問い合わせ、メッセージはこちらからお願いいたします。
                    <br />
                    営業時間、休業日などの都合により、回答までにお時間を頂く場合があります。
                    <br />
                    ※お問い合わせの内容によっては、回答できない場合や回答にお時間がかかる場合がありますのでご了承ください。
                    <br />
                    <span className={Styles.error}>*必須</span>
                  </p>
                </ScrollRevealContainer>
              </div>
              <ScrollRevealContainer move='bottom'>
                <form onSubmit={handleSubmit(submit)}>
                  <div className={Styles.contact_form_block}>
                    <label>
                      メールアドレス<span className={Styles.required}>*</span>
                    </label>
                    <input
                      type='text'
                      name={'email'}
                      placeholder='xxxxxxx@xxxxx.xxx'
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email?.type === 'required' && (
                      <p className={Styles.error}>この質問は必須項目です</p>
                    )}
                    {errors.email?.type === 'pattern' && (
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
                      {...register('name', { required: true, maxLength: 80 })}
                    />
                    {errors.name?.type === 'required' && (
                      <p className={Styles.error}>この質問は必須項目です</p>
                    )}
                    {errors.name?.type === 'maxLength' && (
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
                      {...register('company', {})}
                    />
                  </div>
                  <div className={Styles.contact_form_block}>
                    <label>電話番号</label>
                    <input
                      type='tel'
                      name={'tel'}
                      placeholder='000-0000-0000'
                      {...register('tel', { maxLength: 14 })}
                    />
                    {errors.tel?.type === 'maxLength' && (
                      <p className={Styles.error}>電話番号を記入してください</p>
                    )}
                  </div>
                  <div className={Styles.contact_form_block}>
                    <label>
                      お問い合わせ内容<span className={Styles.required}>*</span>
                    </label>
                    <label className={Styles.radio} htmlFor='typeA'>
                      <input
                        type='radio'
                        {...register('bodytype', { required: true })}
                        value='見積依頼'
                        id='typeA'
                      />
                      見積依頼
                    </label>
                    <label className={Styles.radio} htmlFor='typeB'>
                      <input
                        type='radio'
                        {...register('bodytype', { required: true })}
                        value='取材依頼'
                        id='typeB'
                      />
                      取材依頼
                    </label>
                    <label className={Styles.radio} htmlFor='typeC'>
                      <input
                        type='radio'
                        {...register('bodytype', { required: true })}
                        value='求人へのご応募'
                        id='typeC'
                      />
                      求人へのご応募
                    </label>
                    <div className={Styles.typeother}>
                      <label className={Styles.radio} htmlFor='typeD'>
                        <input
                          type='radio'
                          {...register('bodytype', { required: true })}
                          value='その他'
                          id='typeD'
                        />
                        その他
                      </label>
                      <input
                        type='text'
                        name={'typeother'}
                        placeholder=''
                        {...register('typeother', { maxLength: 80 })}
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

                    <textarea name={'body'} {...register('body', { required: true })} />
                    {errors.body?.type === 'required' && (
                      <p className={Styles.error}>この質問は必須項目です</p>
                    )}
                  </div>

                  <div></div>
                  <button className={`${Styles.btn} ${Styles.submit}`} type={'submit'}>
                    送信する
                  </button>
                </form>
              </ScrollRevealContainer>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
}
const submit = (values) => {
  console.log(values);

  const GOOGLE_FORM_ACTION = ContactGoogleForm.action;

  // PostのParm生成
  const submitParams = new FormData();
  submitParams.append(ContactGoogleForm.email, values.email);
  submitParams.append(ContactGoogleForm.name, values.name);
  submitParams.append(ContactGoogleForm.company, values.company);
  submitParams.append(ContactGoogleForm.tel, values.tel);
  submitParams.append(ContactGoogleForm.bodytype, values.bodytype);
  submitParams.append(ContactGoogleForm.typeother, values.typeother);
  submitParams.append(ContactGoogleForm.body, values.body);

  // 実行
  axios.post(GOOGLE_FORM_ACTION, submitParams);
  window.location.href = '/contact/thanks'; // 成功時
};
