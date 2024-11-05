import React, { useEffect } from 'react';
import { useMovies } from '../../context/MoviesContext';
import { getMovies } from '../../api/movie.service';
import styles from "./Home.module.css"
import Navbar from '../../components/NavBar/NavBar';
import CardContainer from '../../components/CardContainer/CardContainer';

const Home: React.FC = () => {
    const { movies, setMovies, currentPage, setCurrentPage, totalPages, setTotalPages } = useMovies();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const {movies: moviesData, totalMovies: total} = await getMovies(currentPage);
        setMovies(moviesData);
        const totalPages = Math.ceil(total / 10);
        setTotalPages(totalPages)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage, setMovies, setTotalPages]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };


  return (
    <div className={styles.homeContainer}>
      <Navbar/>
      <h1 className={styles.title}>Películas</h1>
      <CardContainer movies={movies} />
      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>Anterior</button>
        <span>Página {currentPage + 1} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>Siguiente</button>
      </div>
    </div>
  );
};

export default Home;
