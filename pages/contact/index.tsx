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
import { useMail } from '../../hooks/useMail';

export default function App() {

  const { setName, setMessage, send } = useMail();


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
              <input type="text" onChange={(e) => setName(e.target.value)} />
      <textarea onChange={(e) => setMessage(e.target.value)} />
      <button type="button" onClick={send}>Send</button>
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
