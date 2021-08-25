import Image from 'next/image';
import Date from './date';
import { client } from '../../libs/client';
import Link from 'next/link';
import Styles from '../styles/compornants.module.css';

export default function News({ newsItem }): JSX.Element {
  return (
    <div>
      <ul>
        {newsItem.map((news) => (
          <li key={news.id}>
            {news.blankLink ? (
              <Link href={news.blankLink}>
                <a target='_blank'>
                  {news.title}
                  <Date dateString={news.publishedAt} />
                  <p className='category'>{news.category && `${news.category.name}`}</p>
                </a>
              </Link>
            ) : (
              <Link href={`/news/${news.id}`}>
                <a>
                  {news.title}
                  <Date dateString={news.publishedAt} />
                  <p className='category'>{news.category && `${news.category.name}`}</p>
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
