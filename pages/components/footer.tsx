import Link from 'next/link';
import Styles from '../../styles/footer.module.css';
import HomeIcon from '../../public/icon/home.svg';
import NewsIcon from '../../public/icon/news.svg';
import BlogIcon from '../../public/icon/blog.svg';
import AboutIcon from '../../public/icon/about.svg';
import ContactIcon from '../../public/icon/contact.svg';
import FacebookIcon from '../../public/icon/facebook.svg';
import TwitterIcon from '../../public/icon/twitter.svg';
import LogoVertical from '../../public/icon/EightKnot_vertical_B.svg';

export default function Header() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_inner}>
        <div className={Styles.footer_logo}>
          <LogoVertical />
        </div>
        <ul className={Styles.footer_nav}>
          <li>
            <Link href='/'>
              <a>
                <HomeIcon /> Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/news'>
              <a>
                <NewsIcon /> News
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
                <AboutIcon /> About
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>
                <ContactIcon /> Contact
              </a>
            </Link>
          </li>
        </ul>
        <div className={Styles.footer_info}>
          <p className={Styles.footer_company_name}>株式会社エイトノット</p>
          <div className={Styles.footer_company_address}>
            <p>
              <span>堺マリーナオフィス(本社)</span>
              〒590-0986
              <br />
              大阪府堺市堺区北波止町10
            </p>
            <p>
              <span> 東京オフィス</span>
              〒130-0003
              <br />
              東京都墨田区横川1-16-3 センターオブガレージ
            </p>
          </div>
          <div className={Styles.footer_sns}>
            <Link href='https://www.facebook.com/8ktjp'>
              <a target='_blank'>
                <FacebookIcon />
              </a>
            </Link>
            <Link href='https://twitter.com/8ktjp'>
              <a target='_blank'>
                <TwitterIcon />
              </a>
            </Link>
          </div>
        </div>

        <p className={Styles.copyright}>Copyright © Eight Knot inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
