import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FilmHub</div>
      <ul className={styles.navLinks}>
        <li>Registro</li>
        <li>Acerca De</li>
      </ul>
      <button className={styles.loginButton}>Iniciar Sesión</button>
    </nav>
  );
};

export default Navbar;
