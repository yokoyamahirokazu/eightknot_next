import Link from 'next/link';
export default function Header(props) {
  return (
    <div>
      <p>Eight Knot</p>
      <Link href={`/`}>
        <a>トップへ</a>
      </Link>
      <Link href={`/about`}>
        <a>About</a>
      </Link>
    </div>
  );
}
