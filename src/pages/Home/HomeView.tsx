import React, { useEffect, useState } from 'react';
import { useMovies } from '../../context/MoviesContext';
import { getFilteredMovies, getMovies } from '../../api/movie.service';
import styles from "./Home.module.css"
import Navbar from '../../components/NavBar/NavBar';
import CardContainer from '../../components/CardContainer/CardContainer';
import FilterBox from '../../components/FilterComponent/FilterComponent';
import { Filters } from '../../types/FilterTypes';

const Home: React.FC = () => {
    const { movies, setMovies, currentPage, setCurrentPage, totalPages, setTotalPages } = useMovies();
    const [filters, setFilters] =  useState<Filters>({ search: "" }); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const {movies: moviesData, totalMovies: total} = Object.keys(filters).length
        ? await getFilteredMovies(currentPage, 20, filters)
        : await getMovies(currentPage);
        setMovies(moviesData);
        const totalPages = Math.ceil(total / 20);
        setTotalPages(totalPages)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage, filters, setMovies, setTotalPages]);

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


  const handleApplyFilters = (newFilters: Filters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleSearchChange = (search: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, search }));
    setCurrentPage(0); // Reinicia a la primera página al realizar una nueva búsqueda
  };

  return (
    <div className={styles.homeContainer}>
      <Navbar onSearch={handleSearchChange}/>
      <FilterBox onApplyFilters={handleApplyFilters} />
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
