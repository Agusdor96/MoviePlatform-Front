import React, { useEffect } from 'react';
import { useMovies } from '../context/MoviesContext';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../api/movie.service';

const Home: React.FC = () => {
  const { movies, setMovies } = useMovies();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [setMovies]);

  return (
    <div className="home">
      <h1>Películas</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
