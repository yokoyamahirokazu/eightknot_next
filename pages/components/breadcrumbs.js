import Link from 'next/link';

export default function BreadCrumbs({ lists }) {
  if (!lists) {
    return '';
  }

  return (
    <ul>
      {lists.map(({ string, path }, index) => (
        <li key={index}>
          {lists.length - 1 !== index ? (
            <Link href={path}>
              <a>{string}</a>
            </Link>
          ) : (
            <span>{string}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
