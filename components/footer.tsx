import Link from 'next/link';
import Styles from '../styles/footer.module.css';
import { FiHome, FiInfo, FiMail } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { HiOutlinePencil } from 'react-icons/hi';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import LogoVertical from '../public/icon/EightKnot_vertical_B.svg';

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
                <FiHome /> Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/news/page/1'>
              <a>
                <BiMessageDetail /> News
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
                <FiInfo /> About
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href='/'>
              <a>
                <BiUserPin /> Recruit
              </a>
            </Link>
          </li> */}
          <li>
            <Link href='/contact'>
              <a>
                <FiMail /> Contact
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
                <FaFacebook />
              </a>
            </Link>
            <Link href='https://twitter.com/8ktjp'>
              <a target='_blank'>
                <FaTwitter />
              </a>
            </Link>
          </div>
        </div>

        <p className={Styles.copyright}>Copyright © Eight Knot inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
