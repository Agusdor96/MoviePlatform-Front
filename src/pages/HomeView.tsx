import React, { useEffect } from 'react';
import { useMovies } from '../context/MoviesContext';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../api/movie.service';

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
    <div className="home">
      <h1>Películas</h1>
      <div className="movies-list">
        {movies?.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>Anterior</button>
        <span>Página {currentPage + 1} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>Siguiente</button>
      </div>
    </div>
  );
};

export default Home;
