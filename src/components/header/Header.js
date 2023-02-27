import styles from './Header.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
          <motion.h5>Index</motion.h5>
        </NavLink>
        <NavLink
          to='/annotation'
          state={{ prevPath: pathname }}
          className={({ isActive }) => (isActive ? styles['selected'] : '')}
        >
          <motion.h5>Anotácia</motion.h5>
        </NavLink>
        <NavLink
          to='/diary'
          state={{ prevPath: pathname }}
          className={({ isActive }) => (isActive ? styles['selected'] : '')}
        >
          <motion.h5>Denník</motion.h5>
        </NavLink>
      </nav>
    </header>
  );
}
