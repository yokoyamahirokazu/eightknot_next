import NextLink from 'next/link';
import styles from '../styles/components.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type PagerProps = {
  currentPage: number;
  pager: [];
};

export const Pager: React.FC<PagerProps> = (props) => {
  const getPath = (pageNumber: any) => {
    return `/news/page/${pageNumber}`;
  };
  return (
    <>
      <ul className={styles.pager}>
        {props.currentPage > 1 && (
          <li className={styles.page}>
            <NextLink href={getPath(props.currentPage - 1)}>
              <a>
                <IoIosArrowBack />
              </a>
            </NextLink>
          </li>
        )}
        {props.currentPage > 3 && (
          <li className={styles.page}>
            <NextLink href={getPath(1)}>
              <a>1</a>
            </NextLink>
          </li>
        )}
        {props.currentPage > 4 && <li className={styles.omission}>...</li>}
        {props.pager.map((pageData, index) => {
          return (
            <>
              {props.currentPage - 3 <= pageData && pageData <= props.currentPage + 1 && (
                <li
                  key={index}
                  className={`${styles.page} ${
                    props.currentPage === pageData + 1 ? `${styles.active}` : ''
                  }`}
                >
                  <NextLink href={getPath(pageData + 1)}>
                    <a>{pageData + 1}</a>
                  </NextLink>
                </li>
              )}
            </>
          );
        })}
        {props.currentPage + 3 < props.pager.length && <li className={styles.omission}>...</li>}
        {props.currentPage + 2 < props.pager.length && (
          <li className={styles.page}>
            <NextLink href={getPath(props.pager.length)}>
              <a>{props.pager.length}</a>
            </NextLink>
          </li>
        )}
        {props.currentPage < props.pager.length && (
          <li className={`${styles.page} ${styles.arrow}`}>
            <NextLink href={getPath(props.currentPage + 1)}>
              <a>
                <IoIosArrowForward />
              </a>
            </NextLink>
          </li>
        )}
      </ul>
    </>
  );
};
