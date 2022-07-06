import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Nav() {
  return (
    <nav>
      <h3>Math Magicians</h3>
      <ul className={styles.navLinks}>
        <Link className={styles.navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link className={styles.navStyle} to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link className={styles.navStyle} to="/quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
