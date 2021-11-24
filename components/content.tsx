import Header from './header';
import Footer from './footer';
import Styles from '../styles/components.module.css';

export default function Content({ children }) {
  return (
    <div>
      <Header></Header>
      <div className={Styles.contents}>{children}</div>
      <Footer></Footer>
    </div>
  );
}
