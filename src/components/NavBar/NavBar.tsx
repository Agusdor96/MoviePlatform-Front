import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
       <a href="/" className={styles.logo}>FilmHub</a>
      <input className={styles.searchBar} type="text" placeholder="Buscar..." />
      <div className={styles.buttonGroup}>
        <a href="#acerca-de" className={styles.aboutLink}>Acerca De</a>
        <button>Registrarse</button>
        {/* <button className={styles.loginButton}>Iniciar Sesión</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
