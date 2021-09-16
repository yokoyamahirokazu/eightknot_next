import Link from 'next/link';
import Styles from '../../styles/header.module.css';
import Logo from '../../public/icon/EightKnot_logo_horizontal.svg';
import { useState } from 'react';

import { FiHome, FiInfo, FiMail } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { HiOutlinePencil } from 'react-icons/hi';
import { BiUserPin } from 'react-icons/bi';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Header(props) {
  const [isModal, setIsModal] = useState(false);
  const menuOpen = isModal ? `${Styles.header_nav} ${Styles.active}` : Styles.header_nav;
  return (
    <div>
      <header className={Styles.header}>
        <div className={Styles.header_logo}>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={Styles.hamburger_menu}>
          <button className={Styles.menu_btn} onClick={() => setIsModal(!isModal)}>
            <span></span>
          </button>
        </div>
        <nav className={menuOpen}>
          <div className={Styles.nav_logo}>
            <Logo />
            <button
              className={`${Styles.menu_btn} ${Styles.close}`}
              onClick={() => setIsModal(!isModal)}
            >
              <span></span>
            </button>
          </div>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  <FiHome />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/news'>
                <a>
                  <BiMessageDetail />
                  News
                </a>
              </Link>
            </li>

            <li>
              <Link href='https://note.com/8kt/'>
                <a target='_blank'>
                  <HiOutlinePencil />
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>
                  <FiInfo />
                  About
                </a>
              </Link>
            </li>
            {/* <li>
              <Link href='/'>
                <a>
                  <BiUserPin />
                  Recruit
                </a>
              </Link>
            </li> */}
            <li>
              <Link href='/contact'>
                <a>
                  <FiMail />
                  Contact
                </a>
              </Link>
            </li>
            <li className={Styles.sns_link}>
              <Link href='https://www.facebook.com/8ktjp'>
                <a target='_blank'>
                  <FaFacebook />
                </a>
              </Link>
              <Link href='https://twitter.com/8ktjp'>
                <a target='_blank'>
                  <FaTwitter />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
