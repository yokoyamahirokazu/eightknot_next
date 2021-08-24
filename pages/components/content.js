import Header from './header';

export default function Content({ children }) {
  return (
    <>
      <Header></Header>
      <div className='container'>{children}</div>
      <footer>©︎ Eight Knot Inc.</footer>
    </>
  );
}
