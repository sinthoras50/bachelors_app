import styles from './Header.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {

  const { pathname } = useLocation();

  return (
    <header className={styles['header']}>
      <h1>Bakalárska Práca</h1>
      <nav>
        <NavLink
          to='/'
          state={{ prevPath: pathname }}
          className={({ isActive }) => (isActive ? styles['selected'] : '')}
        >
          <h5>Index</h5>
        </NavLink>
        <NavLink
          to='/annotation'
          state={{ prevPath: pathname }}
          className={({ isActive }) => (isActive ? styles['selected'] : '')}
        >
          <h5>Anotácia</h5>
        </NavLink>
        <NavLink
          to='/diary'
          state={{ prevPath: pathname }}
          className={({ isActive }) => (isActive ? styles['selected'] : '')}
        >
          <h5>Denník</h5>
        </NavLink>
      </nav>
    </header>
  );
}
