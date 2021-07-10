import { Link } from 'react-router-dom';
import Styles from './header.module.scss';

const Nav = () => {
  return (
    <ul className={Styles.ul}>
      <li>
        <Link className={Styles.link} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={Styles.link} to="/favorite">
          Favorites
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
