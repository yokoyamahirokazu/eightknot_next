import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Styles from '../../styles/components.module.css';
import RightIcon from '../../public/icon/right.svg';

interface Props {
  newsTitle?: string;
  pageTitle?: string;
}

const Breadcrumb: React.FC<Props> = ({ newsTitle, pageTitle }) => {
  const router = useRouter();
  const path = router.asPath;

  const isnewsPage = /\/news\/.+$/.test(path);

  return (
    <ul className={Styles.breadcrumbs}>
      <li>
        <Link href='/'>
          <a>
            Home
            <RightIcon />
          </a>
        </Link>
      </li>
      {isnewsPage && (
        <>
          <li>
            <Link href='/news'>
              <a>
                News
                <RightIcon />
              </a>
            </Link>
          </li>
          <li>{newsTitle}</li>
        </>
      )}
      <li>{pageTitle}</li>
    </ul>
  );
};

export default Breadcrumb;
