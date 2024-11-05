import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FilmHub</div>
      <input className={styles.searchBar} type="text" placeholder="Buscar..." />
      <ul className={styles.buttonGroup}>
      <button>Registrarse</button>
        <li>Acerca De</li>
      </ul>
      <button className={styles.loginButton}>Iniciar Sesión</button>
    </nav>
  );
};

export default Navbar;
