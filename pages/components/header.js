import Link from 'next/link';
import Styles from '../../styles/header.module.css';
import HomeIcon from '../../public/icon/home.svg';
import NewsIcon from '../../public/icon/news.svg';
import BlogIcon from '../../public/icon/blog.svg';
import AboutIcon from '../../public/icon/about.svg';
import ContactIcon from '../../public/icon/contact.svg';
import FacebookIcon from '../../public/icon/facebook.svg';
import TwitterIcon from '../../public/icon/twitter.svg';
import Logo from '../../public/icon/EightKnot_logo_horizontal.svg';
import { useState } from 'react';

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
                  <HomeIcon />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/news'>
                <a>
                  <NewsIcon />
                  News
                </a>
              </Link>
            </li>

            <li>
              <Link href='https://note.com/8kt/'>
                <a target='_blank'>
                  <BlogIcon />
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>
                  <AboutIcon />
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>
                  <ContactIcon />
                  Contact
                </a>
              </Link>
            </li>
            <li className={Styles.sns_link}>
              <Link href='/contact'>
                <a>
                  <FacebookIcon />
                </a>
              </Link>
              <Link href='/contact'>
                <a>
                  <TwitterIcon />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
