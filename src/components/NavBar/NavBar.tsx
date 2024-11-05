import React, { useState } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  onSearch: (search: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue); // Llama a onSearch cuando se hace clic en el botón de búsqueda
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter'){
      handleSearch();
    }
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>FilmHub</a>
      <div>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Buscar por título, director, o mas"
          value={searchValue}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} className={styles.searchButton}>Buscar</button>
      </div>
      <div className={styles.buttonGroup}>
        <a href="#acerca-de" className={styles.aboutLink}>Acerca De</a>
        <button>Registrarse</button>
        {/* <button className={styles.loginButton}>Iniciar Sesión</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
